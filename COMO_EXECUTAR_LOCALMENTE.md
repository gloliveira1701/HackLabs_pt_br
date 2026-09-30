# 🚀 Como Executar o HackLabs Localmente

Este guia explica as formas mais simples e práticas de executar o **HackLabs** no seu computador local.

---

## ⚡ Método Rápido (Recomendado): Script de Automação

Criamos o script [`iniciar_local.sh`](file:///home/gloliveira/Documentos/Projetos/HackLabs_pt_br/iniciar_local.sh) para automatizar todo o processo em Português do Brasil.

### 1. Iniciar com Menu Interativo
Abra o terminal na pasta do projeto e execute:
```bash
./iniciar_local.sh
```

Será exibido um menu com opções amigáveis:
- **[1] Iniciar HackLabs (Recomendado)**: Sobe o ambiente principal (Web + Host Labs nas portas 5000, 21, 22, 445).
- **[2] Iniciar HackLabs Completo**: Sobe o Principal + Active Directory + Metasploit/ActiveMQ + Docker Escape.
- **[3] Ver Status**: Lista os containers ativos e portas abertas.
- **[4] Acompanhar Logs**: Visualiza os logs da aplicação em tempo real.
- **[5] Parar todos os laboratórios**: Desliga todos os containers com segurança.
- **[6] Reiniciar do zero**: Remove volumes antigos e reconstrói as imagens.
- **[7] Executar via Python Nativo**: Cria ambiente virtual `venv` e executa localmente.

### 2. Atalhos Rápidos por Linha de Comando
Você também pode rodar diretamente sem abrir o menu:

```bash
# Iniciar o laboratório padrão em segundo plano
./iniciar_local.sh start

# Iniciar todos os laboratórios (ActiveMQ, Docker Escape, etc.)
./iniciar_local.sh all

# Ver o status dos containers
./iniciar_local.sh status

# Ver os logs do laboratório
./iniciar_local.sh logs

# Parar todos os laboratórios
./iniciar_local.sh stop
```

Após iniciar, basta acessar no seu navegador:
👉 **[http://localhost:5000](http://localhost:5000)**

---

## 🐳 Método Manual via Docker Compose

Caso prefira usar os comandos padrão do Docker Compose diretamente:

### 1. Subir o HackLabs
```bash
docker compose up -d --build
```

### 2. Acessar os Serviços
- **Aplicação Web:** `http://localhost:5000`
- **FTP (vsftpd):** `localhost:21`
- **SSH:** `localhost:22`
- **SMB (Samba):** `localhost:445`

### 3. Parar o Ambiente
```bash
docker compose down
```

---

## 🐍 Método Nativo via Python (Sem Docker)

Se preferir rodar apenas a aplicação web diretamente no Python da sua máquina:

1. **Crie e ative um ambiente virtual:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

2. **Instale as dependências:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Inicialize o banco de dados SQLite:**
   ```bash
   python init_db.py
   ```

4. **Inicie o servidor Flask:**
   ```bash
   python app.py
   ```

5. **Acesse no navegador:**
   👉 `http://localhost:5000`

> [!NOTE]
> No modo Python nativo, os laboratórios web (W01 a W23) e IA funcionam integralmente. Para os laboratórios de escalação de privilégios e exploração de rede do sistema (H01 a H13), o modo Docker é recomendado pois simula os serviços do sistema operacional isolados.
