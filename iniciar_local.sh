#!/usr/bin/env bash
# ==============================================================================
# HackLabs - Script de Instalação e Execução Local
# ==============================================================================
# Uso interativo: ./iniciar_local.sh
# Uso direto:    ./iniciar_local.sh [start|stop|restart|status|logs|all|venv]
# ==============================================================================

set -e

# Cores para terminal
VERMELHO='\033[0;31m'
VERDE='\033[0;32m'
AMARELO='\033[1;33m'
AZUL='\033[0;34m'
CIANO='\033[0;36m'
NEGRITO='\033[1m'
NC='\033[0m' # No Color

DIRETORIO_PROJETO="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIRETORIO_PROJETO"

# Garantir diretório de configuração do Docker gravável
if [ ! -w "$HOME" ] || [ ! -w "$HOME/.docker" 2>/dev/null ]; then
    export DOCKER_CONFIG="$DIRETORIO_PROJETO/.docker"
    mkdir -p "$DOCKER_CONFIG"
fi

log_info()    { echo -e "${AZUL}[INFO]${NC} $1"; }
log_sucesso() { echo -e "${VERDE}[SUCESSO]${NC} $1"; }
log_alerta()  { echo -e "${AMARELO}[AVISO]${NC} $1"; }
log_erro()    { echo -e "${VERMELHO}[ERRO]${NC} $1"; }

mostrar_banner() {
    clear
    echo -e "${CIANO}"
    echo '  ██╗  ██╗ █████╗  ██████╗██╗  ██╗██╗      █████╗ ██████╗ ███████╗'
    echo '  ██║  ██║██╔══██╗██╔════╝██║ ██╔╝██║     ██╔══██╗██╔══██╗██╔════╝'
    echo '  ███████║███████║██║     █████╔╝ ██║     ███████║██████╔╝███████╗'
    echo '  ██╔══██║██╔══██║██║     ██╔═██╗ ██║     ██╔══██║██╔══██╗╚════██║'
    echo '  ██║  ██║██║  ██║╚██████╗██║  ██╗███████╗██║  ██║██████╔╝███████║'
    echo '  ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝'
    echo -e "${NC}"
    echo -e "       ${NEGRITO}Ambiente de Treinamento em Segurança Ofensiva (pt-BR)${NC}"
    echo -e "  ══════════════════════════════════════════════════════════════════"
    echo ""
}

verificar_requisitos() {
    if ! command -v docker &>/dev/null; then
        log_erro "Docker não está instalado no sistema."
        echo -e "Instale o Docker utilizando: ${NEGRITO}sudo apt install docker.io${NC}"
        exit 1
    fi

    if ! docker compose version &>/dev/null; then
        log_erro "Docker Compose não está disponível."
        echo -e "Instale o plugin compose: ${NEGRITO}sudo apt install docker-compose-plugin${NC}"
        exit 1
    fi

    if ! docker info &>/dev/null; then
        log_alerta "Seu usuário não possui permissão para executar o Docker sem sudo, ou o serviço está inativo."
        echo -e "Tentando verificar serviço Docker..."
        if command -v systemctl &>/dev/null; then
            sudo systemctl start docker || true
        fi
        if ! docker info &>/dev/null; then
            log_erro "Não foi possível conectar ao daemon do Docker. Verifique se o serviço está ativo ou use sudo."
            exit 1
        fi
    fi
}

checar_portas() {
    local portas=(5000 21 22 445)
    for p in "${portas[@]}"; do
        if ss -tulpn 2>/dev/null | grep -q ":$p "; then
            log_alerta "A porta $p parece estar em uso no host. Se houver erro de bind, verifique serviços locais."
        fi
    done
}

iniciar_padrao() {
    verificar_requisitos
    checar_portas
    echo ""
    log_info "Iniciando HackLabs Principal (Web + Host Attacks)..."
    docker compose up -d --build

    echo ""
    log_sucesso "HackLabs iniciado com sucesso!"
    echo -e "  ══════════════════════════════════════════════════════════════"
    echo -e "  ${NEGRITO}Interface Web:${NC}  ${VERDE}http://localhost:5000${NC} (ou http://127.0.0.1:5000)"
    echo -e "  ${NEGRITO}FTP Server:${NC}     localhost:21"
    echo -e "  ${NEGRITO}SSH Server:${NC}     localhost:22"
    echo -e "  ${NEGRITO}SMB Server:${NC}     localhost:445"
    echo -e "  ══════════════════════════════════════════════════════════════"
    echo ""

    abrir_navegador "http://localhost:5000"
}

iniciar_completo() {
    verificar_requisitos
    checar_portas
    echo ""
    log_info "Iniciando TODOS os laboratórios (Principal + AD + Metasploit + Docker Escape)..."

    log_info "1/4. Subindo container principal..."
    docker compose up -d --build

    log_info "2/4. Subindo laboratório ActiveMQ / Metasploit (H04)..."
    docker compose -f docker-compose.metasploit.yml up -d --build

    log_info "3/4. Subindo laboratório Docker Escape (H11)..."
    docker compose -f docker-compose.docker-escape.yml up -d --build

    echo ""
    read -rp "Deseja também iniciar o Domain Controller Active Directory? (s/N): " resp_ad
    if [[ "$resp_ad" =~ ^[sSyY]$ ]]; then
        log_info "4/4. Subindo Domain Controller Active Directory..."
        docker compose -f docker-compose.active-directory.yml up -d --build
        log_info "Adicione ao seu /etc/hosts caso necessário:"
        echo -e "  ${NEGRITO}echo \"127.0.0.1 dc01.hacklabs.local hacklabs.local dc01\" | sudo tee -a /etc/hosts${NC}"
    else
        log_info "4/4. Laboratório Active Directory ignorado conforme solicitado."
    fi

    echo ""
    log_sucesso "Ambiente completo iniciado!"
    echo -e "  ══════════════════════════════════════════════════════════════"
    echo -e "  ${NEGRITO}HackLabs Principal:${NC} ${VERDE}http://localhost:5000${NC}"
    echo -e "  ${NEGRITO}ActiveMQ Console:${NC}   ${VERDE}http://localhost:8161${NC}"
    echo -e "  ══════════════════════════════════════════════════════════════"
    echo ""

    abrir_navegador "http://localhost:5000"
}

parar_tudo() {
    verificar_requisitos
    echo ""
    log_info "Parando todos os containers e serviços do HackLabs..."
    docker compose down 2>/dev/null || true
    docker compose -f docker-compose.metasploit.yml down 2>/dev/null || true
    docker compose -f docker-compose.docker-escape.yml down 2>/dev/null || true
    docker compose -f docker-compose.active-directory.yml down 2>/dev/null || true
    log_sucesso "Todos os laboratórios foram parados."
}

ver_status() {
    verificar_requisitos
    echo ""
    log_info "Status dos containers HackLabs:"
    docker ps -a --filter "name=hacklabs" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
    echo ""
}

ver_logs() {
    verificar_requisitos
    echo ""
    log_info "Exibindo logs do container principal (Ctrl+C para sair):"
    docker compose logs -f --tail=100
}

reiniciar_limpo() {
    verificar_requisitos
    echo ""
    log_alerta "Isso irá parar os containers, apagar volumes de dados locais e reconstruir as imagens."
    read -rp "Tem certeza que deseja reiniciar do zero? (s/N): " confirm
    if [[ "$confirm" =~ ^[sSyY]$ ]]; then
        parar_tudo
        log_info "Removendo volumes antigos..."
        docker volume rm hacklabs_db hacklabs_uploads hacklabs_logs 2>/dev/null || true
        log_info "Reconstruindo imagens..."
        docker compose build --no-cache
        iniciar_padrao
    else
        log_info "Operação cancelada."
    fi
}

iniciar_modo_venv() {
    echo ""
    log_info "Iniciando modo desenvolvimento com Python venv..."
    if ! command -v python3 &>/dev/null; then
        log_erro "Python 3 não está instalado."
        exit 1
    fi

    if [ ! -d "venv" ]; then
        log_info "Criando ambiente virtual 'venv'..."
        python3 -m venv venv
    fi

    log_info "Ativando ambiente virtual e instalando dependências compatíveis..."
    # shellcheck disable=SC1091
    source venv/bin/activate
    pip install --upgrade pip -q
    pip install Flask==3.0.3 Werkzeug==3.0.3 lxml==5.2.2 -q

    log_info "Inicializando banco de dados SQLite..."
    python init_db.py

    log_sucesso "Iniciando aplicação Flask na porta 5000..."
    echo -e "Acesse: ${VERDE}http://localhost:5000${NC} (Pressione Ctrl+C para encerrar)"
    echo ""
    python app.py
}

abrir_navegador() {
    local url="$1"
    if [ -n "$DISPLAY" ]; then
        if command -v xdg-open &>/dev/null; then
            xdg-open "$url" &>/dev/null &
        elif command -v firefox &>/dev/null; then
            firefox "$url" &>/dev/null &
        elif command -v google-chrome &>/dev/null; then
            google-chrome "$url" &>/dev/null &
        fi
    fi
}

menu_interativo() {
    while true; do
        mostrar_banner
        echo -e "  Escolha uma opção para gerenciar seu ambiente:"
        echo ""
        echo -e "  ${NEGRITO}[1]${NC} ${VERDE}Iniciar HackLabs (Recomendado)${NC} - Web + Host Labs na porta 5000"
        echo -e "  ${NEGRITO}[2]${NC} ${CIANO}Iniciar HackLabs Completo${NC} - Principal + Active Directory + Metasploit + Escape"
        echo -e "  ${NEGRITO}[3]${NC} Ver Status dos containers"
        echo -e "  ${NEGRITO}[4]${NC} Acompanhar Logs em tempo real"
        echo -e "  ${NEGRITO}[5]${NC} ${AMARELO}Parar todos os laboratórios${NC}"
        echo -e "  ${NEGRITO}[6]${NC} Reiniciar do zero (limpar banco/volumes e reconstruir)"
        echo -e "  ${NEGRITO}[7]${NC} Executar via Python Nativo (venv local sem Docker)"
        echo -e "  ${NEGRITO}[0]${NC} Sair"
        echo ""
        read -rp "  Digite a opção desejada [0-7]: " opcao

        case "$opcao" in
            1) iniciar_padrao; break ;;
            2) iniciar_completo; break ;;
            3) ver_status; read -rp "Pressione Enter para continuar...";;
            4) ver_logs; break ;;
            5) parar_tudo; read -rp "Pressione Enter para continuar...";;
            6) reiniciar_limpo; break ;;
            7) iniciar_modo_venv; break ;;
            0) echo "Encerrando. Bons estudos!"; exit 0 ;;
            *) log_erro "Opção inválida!"; sleep 1 ;;
        esac
    done
}

# Tratamento de argumentos por linha de comando
case "$1" in
    start)
        iniciar_padrao
        ;;
    all)
        iniciar_completo
        ;;
    stop)
        parar_tudo
        ;;
    restart)
        parar_tudo
        iniciar_padrao
        ;;
    status)
        ver_status
        ;;
    logs)
        ver_logs
        ;;
    clean)
        reiniciar_limpo
        ;;
    venv)
        iniciar_modo_venv
        ;;
    help|--help|-h)
        echo "Uso: ./iniciar_local.sh [start|all|stop|restart|status|logs|clean|venv]"
        ;;
    *)
        menu_interativo
        ;;
esac
