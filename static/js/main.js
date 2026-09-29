// ── HackLabs main.js ──────────────────────────────────────────────

// ── Translations ─────────────────────────────────────────────────
const T = {
  es: {
    home:            'Inicio',
    logout:          'Salir',
    footer_warning:  'Solo para uso educativo en entornos aislados',
    modal_title:     'Resolución del laboratorio',
    btn_resolution:  'Ver resolución',
    close:           'Cerrar',
    cat_owasp_top_10:       'OWASP Top 10',
    cat_extras:            'Extras',
    cat_vulnerabilidades:  'Vulnerabilidades',
    cat_web_attacks:       'Web Attacks',
    cat_host_attacks:      'Host Attacks',
    cat_ia_attacks:        'AI Attacks',
    cat_ai_attacks:        'AI Attacks',
    cat_active_directory:  'Active Directory',
    cat_forense_digital:   'Forense Digital',
    labs:            'Labs',
    resolution_steps:'Pasos de explotación',
    tools_label:     'Herramientas',
    // Home
    badge_text:      'Intencionalmente Vulnerable · Solo uso educativo',
    filter_label:    'Filtrar:',
    filter_all:      'Todos',
    open_lab:        'Abrir lab',
    test_credentials:'Usuarios y Contraseñas',
    col_username:    'Usuario',
    col_password:    'Contraseña',
    col_hash:        'Hash MD5',
    col_role:        'Rol',
    stat_total:      'Total Labs',
    stat_critical:   'Críticos',
    stat_high:       'Altos',
    stat_medium:     'Medios',
    hero_by:         'Plataforma de hacking ético por',
    hero_rest:       'Practica el OWASP Top 10 (2021) y más con Burp Suite, sqlmap, hydra y otras herramientas de Kali Linux.',
    lab_cat_count:   'labs',
    // A05 Misconfig
    misconfig_title: 'Configuraciones inseguras',
    misconfig_item1: 'Panel de administración accesible sin autenticación',
    misconfig_item2: 'Repositorio Git expuesto',
    misconfig_item3: 'Stack trace completo del servidor expuesto en errores',
    misconfig_item4: 'API interna de usuarios accesible sin autenticación',
    misconfig_hint:  'Usa herramientas de fuzzing de directorios para descubrir los endpoints expuestos.',
    misconfig_admin_panel: 'Panel de administración — Sin autenticación',
    // Shared form labels
    lbl_username:    'Usuario',
    ph_username:     'tu_usuario',
    ph_email:        'tu@email.com',
    ph_password_min: 'Mínimo 6 caracteres',
    translated_by:   'Traducido por',
    lbl_password:    'Contraseña',
    lbl_search:      'Buscar',
    lbl_search_products: 'Buscar productos',
    lbl_host_ip:     'Host / IP',
    lbl_output:      'Salida',
    lbl_result:      'Resultado',
    lbl_target_url:  'URL de destino',
    lbl_file_path:   'Ruta del archivo',
    lbl_xml_payload: 'Payload XML',
    lbl_jwt_token:   'Token JWT',
    // Shared buttons
    btn_login:       'Iniciar sesión',
    btn_search:      'Buscar',
    btn_render:      'Renderizar',
    btn_fetch:       'Obtener',
    gh_star_tooltip: 'Poner estrella en GitHub',
    btn_read:        'Leer',
    btn_ping:        'Ping',
    btn_upload:      'Subir archivo',
    btn_parse_xml:   'Parsear XML',
    btn_go:          'Ir a destino',
    btn_change_pw:   'Cambiar contraseña',
    btn_post_comment:'Publicar comentario',
    btn_continue:    'Continuar',
    btn_verify:      'Verificar',
    btn_send_put:    'Enviar PUT',
    btn_launch_csrf: 'Lanzar CSRF',
    // Shared placeholders
    ph_search:       'Buscar...',
    ph_search_products: 'Buscar productos...',
    ph_redirect_url: 'https://ejemplo.com/dashboard',
    ph_comment_name: 'Nombre',
    ph_new_email:    'nuevo@email.com',
    // SSTI
    ssti_label:      'Entrada de plantilla',
    ssti_rendered:   'Salida renderizada',
    // Open Redirect
    or_desc:         'Este portal redirige a los usuarios tras completar acciones. El parámetro de destino no está validado.',
    or_examples:     'Ejemplos',
    or_comment1:     '# Redirección a sitio externo (phishing)',
    or_comment2:     '# Bypass de filtros básicos',
    // JWT
    jwt_generate:    'Generar Token',
    jwt_btn_gen:     'Generar JWT',
    jwt_secret_used: 'Secreto usado:',
    jwt_verify:      'Verificar / Manipular Token',
    jwt_btn_verify:  'Verificar',
    jwt_decoded:     'Payload decodificado',
    // Deserialization
    deser_title:     'Deserializar objeto Python (pickle)',
    deser_label:     'Payload (base64 pickle)',
    deser_ph:        'Introduce un objeto pickle serializado en base64...',
    deser_btn:       'Deserializar',
    deser_example:   'Ejemplo seguro (dict):',
    deser_result:    'Resultado',
    // CORS
    cors_api_title:  'API de datos internos',
    cors_api_desc:   'La API devuelve datos sensibles y refleja cualquier cabecera Origin con Access-Control-Allow-Credentials: true.',
    cors_comment1:   '# Endpoint vulnerable',
    cors_comment2:   '# Probar con curl (observa las cabeceras CORS)',
    cors_btn:        'Hacer petición cross-origin',
    cors_response:   'Respuesta:',
    cors_poc_title:  'PoC – Página maliciosa',
    // XSS
    xss_tab_reflected: 'Reflejado',
    xss_tab_stored:  'Almacenado',
    xss_tab_dom:     'DOM-based',
    xss_results_for: 'Resultados para:',
    xss_name_ph:     'Nombre',
    xss_btn_post:    'Publicar comentario',
    xss_dom_label:   'Salida dinámica (desde fragmento URL):',
    xss_dom_hint:    'Añade un fragmento a la URL: #<img src=x onerror=alert(1)>',
    // CSRF
    csrf_user_label: 'Usuario:',
    csrf_id_label:   'ID:',
    csrf_role_label: 'Rol:',
    csrf_new_pw:     'Nueva contraseña',
    csrf_ph_new_pw:  'Introduce una contraseña',
    csrf_btn_change: 'Cambiar contraseña',
    csrf_attack_title: 'Ataque CSRF — Auto-envío',
    csrf_victim_id:  'ID de usuario víctima',
    csrf_btn_launch: 'Lanzar CSRF',
    // File Upload
    // Lab titles (only labs whose default title is not already in Spanish/neutral)
    lab_title_file_upload:    'W05 – File Upload sin restricciones',
    lab_title_api_attacks:    'W01 – API Attacks – Laboratorio de APIs Inseguras',
    lab_title_business_logic: 'W02 – Business Logic Flaws',
    lab_title_account_takeover: 'W22 – Account Takeover mediante IDOR de recuperación',
    lab_title_price_manipulation: 'W23 – Lógica de Negocio: Manipulación de Precio',
    lab_title_metasploit_exploitation: 'H04 – Metasploit: RCE en ActiveMQ a Meterpreter',
    // ── W22 Account Takeover ──
    ato_portal_title: 'Portal de identidad de HackLabs',
    ato_signed_in: 'Sesión iniciada:',
    ato_account_id: 'ID de cuenta:',
    ato_recovery_email: 'Correo de recuperación:',
    ato_update_profile: 'Actualizar perfil',
    ato_sign_out: 'Cerrar sesión',
    ato_ph_username: 'Usuario',
    ato_ph_password: 'Contraseña',
    ato_sign_in: 'Iniciar sesión',
    ato_auditor_access: 'Acceso de auditor externo',
    ato_password_recovery: 'Recuperación de contraseña',
    ato_reset_delivery: 'Los enlaces de reset se envían al correo de recuperación almacenado en la cuenta objetivo.',
    ato_ph_target_username: 'Usuario (p. ej. administrator)',
    ato_send_reset: 'Enviar enlace de reset',
    ato_directory_api: 'API del directorio de empleados',
    ato_mailbox: 'Buzón de recuperación',
    ato_mailbox_visibility: 'Visible únicamente para la identidad autenticada',
    ato_mailbox_login_hint: 'Inicia sesión para ver tu buzón de recuperación.',
    ato_to: 'Para:',
    ato_subject: 'Asunto:',
    ato_reset_subject: 'Restablecimiento de contraseña',
    ato_open_reset: 'Abrir enlace de reset',
    ato_no_messages: 'No hay mensajes para',
    ato_reset_lab: 'Reiniciar estado del lab',
    ato_set_new_password: 'Establecer una contraseña nueva',
    ato_ph_new_password: 'Contraseña nueva',
    ato_update_password: 'Actualizar contraseña',
    ato_invalid_token: 'Este token de reset no es válido, ha expirado o ya fue utilizado.',
    ato_return_portal: 'Volver al portal de identidad',
    ato_msg_bad_credentials: 'Credenciales incorrectas.',
    ato_msg_login_success: 'Sesión iniciada correctamente.',
    ato_msg_email_updated: 'Correo de recuperación actualizado.',
    ato_msg_reset_sent: 'Si la cuenta existe, se ha enviado un enlace a su correo de recuperación.',
    ato_msg_password_length: 'La nueva contraseña debe tener al menos 8 caracteres.',
    ato_msg_password_updated: 'Contraseña actualizada. Inicia sesión con la cuenta recuperada.',
    ato_msg_lab_reset: 'Estado del laboratorio reiniciado.',
    // ── W23 Price Manipulation ──
    price_add_cart: 'Añadir al carrito',
    price_server_cart: 'Carrito del servidor',
    price_balance: 'Saldo:',
    price_checkout: 'Finalizar compra',
    price_purchase_success: '¡Compra realizada correctamente!',
    price_insufficient_balance: 'Saldo insuficiente.',
    price_empty_cart: 'El carrito está vacío.',
    price_clear_cart: 'Vaciar carrito',
    price_remove_item: 'Eliminar',
    // ── H04 Metasploit ──
    msf_isolated_target: 'Objetivo aislado · CVE-2023-46604',
    msf_web_console: 'Consola web',
    msf_recon_checkpoint: 'Punto de control de reconocimiento',
    lab_title_container_escape: 'H11 – Container Escape',
    lab_title_bruteforce: 'H02 – Login Bruteforce',
    lab_title_forgot_recovery: 'W06 – Forgot Password Recovery (Authentication Flaws)',
    lab_title_html_injection: 'W07 – HTML Injection (GET/POST/Stored)',
    lab_title_oauth:          'W11 – OAuth 2.0 Attacks',
    lab_title_race_condition: 'W17 – Race Condition / TOCTOU',
    lab_title_session_hijacking: 'W18 – Session Hijacking',
    // ── Active Directory ──
    lab_title_ad_smb_enum:        'AD01 – Enumeración SMB y sesión nula',
    lab_title_ad_ldap_enum:       'AD02 – Enumeración LDAP',
    lab_title_ad_password_spray:  'AD03 – Password Spraying',
    lab_title_ad_asrep_roast:     'AD04 – AS-REP Roasting',
    lab_title_ad_kerberoast:      'AD05 – Kerberoasting',
    lab_title_ad_gpp_passwords:   'AD06 – Contraseñas GPP en SYSVOL',
    lab_title_ad_bloodhound:      'AD07 – BloodHound y rutas de ataque',
    lab_title_ad_acl_genericall:  'AD08 – Abuso de ACL: GenericAll',
    lab_title_ad_acl_writemember: 'AD09 – Abuso de ACL: AddSelf a grupo',
    lab_title_ad_dcsync:          'AD10 – DCSync',
    lab_title_ad_pth:             'AD11 – Pass-the-Hash',
    lab_title_ad_silver_ticket:   'AD12 – Silver Ticket',
    lab_title_ad_golden_ticket:   'AD13 – Golden Ticket',
    lab_title_ad_delegation:      'AD14 – Delegación restringida',
    lab_title_ad_machine_quota:   'AD15 – MachineAccountQuota y RBCD',
    // ── Forense Digital ──
    lab_title_df_file_signatures:    'DF01 – Análisis de Firmas de Fichero',
    lab_title_df_metadata_exif:      'DF02 – Análisis de Metadatos EXIF',
    lab_title_df_steganography:      'DF03 – Esteganografía en Imagen',
    lab_title_df_archive_cracking:   'DF04 – Cracking de Archivo Protegido',
    lab_title_df_email_analysis:     'DF05 – Análisis Forense de Email',
    lab_title_df_browser_artifacts:  'DF06 – Artefactos de Navegador',
    lab_title_df_log_analysis:       'DF07 – Reconstrucción de Ataque por Logs',
    lab_title_df_pcap_credentials:   'DF08 – Credenciales en Claro (PCAP)',
    lab_title_df_pcap_exfiltration:  'DF09 – Exfiltración de Datos vía DNS',
    lab_title_df_file_carving:       'DF10 – File Carving en Imagen de Disco',
    lab_title_df_disk_timeline:      'DF11 – Timeline y Recuperación de Borrados',
    lab_title_df_malware_strings:    'DF12 – Triage de Malware: Strings y YARA',
    lab_title_df_pe_analysis:        'DF13 – Análisis de Cabeceras PE',
    lab_title_df_memory_process:     'DF14 – Memoria: Proceso Malicioso',
    lab_title_df_memory_credentials: 'DF15 – Memoria: Credenciales en RAM',
    df_evidence_title:        'Evidencia a analizar',
    df_evidence_download_btn: 'Descargar evidencia',
    df_evidence_filename_lbl: 'Fichero',
    df_evidence_hash_lbl:     'SHA-256',
    df_evidence_hash_hint:    'Verifica la integridad del fichero antes de analizarlo.',
    df_quickstart:            'Inicio rápido',
    df_obj_flag_where:        '— la flag está oculta en el propio fichero de evidencia; analízalo y valídala en la caja «Validar Flag» al final de esta página.',
    df_quiz_title:            'Preguntas guiadas',
    df_quiz_check:            'Comprobar',
    df_quiz_hint_btn:         '💡 Pista',
    df_quiz_footer:           'Responde todas las preguntas para completar el análisis; la flag final se valida en la caja «Validar Flag» al final de esta página.',
    df_quiz_correct:          '✓ Correcto',
    df_quiz_incorrect:        '✗ Incorrecto, inténtalo de nuevo',
    host_answer_title:        'Validar respuesta',
    host_answer_btn:          'Validar respuesta',
    host_answer_done:         'Completado',
    host_answer_login:        'para validar y guardar la respuesta.',
    host_answer_login_link:   'Inicia sesión',
    host_answer_correct:      'Respuesta correcta. Laboratorio completado.',
    host_answer_incorrect:    'Respuesta incorrecta. Revisa la evidencia.',
    df_file_signatures_obj_desc: 'Un empleado te ha pasado un documento con extensión .docx que "no se abre bien" en Word. Antes de intentar repararlo, comprueba qué tipo de fichero es en realidad — la extensión no siempre dice la verdad.',
    df_metadata_exif_obj_desc: 'Una foto subida a la intranet corporativa revela más de lo que parece. Extrae sus metadatos EXIF para descubrir dónde y con qué dispositivo se tomó.',
    df_steganography_obj_desc: 'Esta imagen de una puesta de sol esconde algo más que píxeles. Analiza sus bits menos significativos para recuperar el mensaje oculto.',
    df_archive_cracking_obj_desc: 'RRHH protegió un informe financiero con una contraseña débil antes de subirlo por error a una carpeta pública. Craquéala offline para acceder al contenido.',
    df_email_analysis_obj_desc: 'Un compañero recibió un correo sospechoso de "RRHH" pidiendo verificar sus datos de nómina. Analiza las cabeceras del email para detectar los indicios de phishing y recupera el adjunto.',
    df_browser_artifacts_obj_desc: 'El historial de navegación de un equipo comprometido puede revelar credenciales filtradas. Examina el fichero SQLite del navegador en busca de URLs sospechosas.',
    df_log_analysis_obj_desc: 'Un servidor bastión sufrió un intento de acceso sospechoso. Analiza su log de autenticación para identificar el ataque, el usuario comprometido y lo que hizo el atacante tras entrar.',
    df_pcap_credentials_obj_desc: 'Se capturó tráfico de red de un segmento sin cifrar. Analiza la captura para extraer credenciales y datos transmitidos en texto claro.',
    df_pcap_exfiltration_obj_desc: 'Un endpoint muestra un volumen inusual de consultas DNS hacia un dominio externo. Reconstruye los datos exfiltrados a partir de las peticiones DNS capturadas.',
    df_file_carving_obj_desc: 'Un volcado de sectores sin asignar contiene un fichero que fue borrado pero nunca sobrescrito. Localiza su firma y recupéralo por carving.',
    df_disk_timeline_obj_desc: 'Un equipo de trabajo tiene un fichero borrado intencionadamente. Usa herramientas forenses de disco para listar las entradas borradas y recuperar su contenido.',
    df_malware_strings_obj_desc: 'Un binario sospechoso apareció en un servidor. Analízalo estáticamente con strings/YARA para identificar indicadores de compromiso sin llegar a ejecutarlo.',
    df_pe_analysis_obj_desc: 'Un ejecutable disfrazado de factura llegó por correo. Analiza sus cabeceras PE de forma estática para identificar indicios de comportamiento malicioso.',
    df_memory_process_obj_desc: 'Se ha volcado la memoria de un servidor Linux comprometido. Localiza el proceso que se hace pasar por un hilo del kernel y no lo es.',
    df_memory_credentials_obj_desc: 'Se ha volcado la memoria de otro servidor Linux — este aloja una base de datos. Recupera el historial de comandos de un administrador desde RAM antes de que lo haga otro.',
    ad_env_title:        'Máquina objetivo',
    ad_env_realm_lbl:    'Dominio',
    ad_env_dc_lbl:       'Domain Controller',
    ad_env_foothold_lbl: 'Credencial inicial',
    ad_env_foothold_val: 'svc.readonly / ReadOnly123!  (se obtiene en el lab AD01)',
    ad_env_hosts_hint:   'Kerberos exige resolver el FQDN del DC. Añade la entrada a tu /etc/hosts antes de empezar:',
    ad_env_not_deployed: 'El Domain Controller no está desplegado en esta instancia. Lánzalo con «sudo bash deploy.sh» (o «docker compose -f docker-compose.active-directory.yml up -d --build») y sustituye <DC_IP> por la IP que se muestra al desplegar.',
    ad_env_tools_lbl:    'Herramientas',
    ad_env_foothold_hint: 'se obtiene en el lab AD01',
    ad_obj_flag_where:   '— captúrala en el Domain Controller y valídala en la caja «Validar Flag» al final de esta página.',
    ad_quickstart:       'Inicio rápido',
    ad_smb_enum_obj_desc: 'El Domain Controller acepta sesiones nulas: puedes listar los recursos compartidos sin credenciales. El recurso //DC01/public es legible de forma anónima y contiene la flag, además de las credenciales de servicio que necesitarás en el resto de laboratorios.',
    ad_ldap_enum_obj_desc: 'Con la cuenta de servicio svc.readonly obtenida en AD01, enumera los usuarios del dominio (la enumeración anónima no funciona contra este DC) y vuelca los objetos del directorio por LDAP. El servidor permite binds simples sin cifrado y un administrador dejó escrita una contraseña —y la flag— en el atributo description de un usuario.',
    ad_password_spray_obj_desc: 'La política del dominio no exige complejidad ni bloquea cuentas tras fallos. Rocía una contraseña común contra todos los usuarios del dominio: la cuenta que caiga da acceso a su recurso personal //DC01/jsmith, donde está la flag.',
    ad_asrep_roast_obj_desc: 'Una cuenta de servicio tiene deshabilitada la pre-autenticación de Kerberos (DONT_REQ_PREAUTH). Solicita su AS-REP, crackea offline el hash krb5asrep y usa la contraseña recuperada para leer //DC01/backup.',
    ad_kerberoast_obj_desc: 'Hay cuentas de usuario con SPN registrado, así que cualquier usuario autenticado puede pedir su ticket de servicio. Solicita el TGS-REP, crackea el hash krb5tgs y accede con esas credenciales a //DC01/sqldata.',
    ad_gpp_passwords_obj_desc: 'El recurso SYSVOL guarda una GPO de despliegue con el atributo cpassword. Descífralo con la clave AES que Microsoft publicó (MS14-025) y usa la contraseña obtenida para leer //DC01/deploy.',
    ad_bloodhound_obj_desc: 'Recolecta el dominio con BloodHound y localiza el camino más corto hasta Domain Admins. Un grupo heredado anidado rompe la jerarquía de privilegios: la flag está en su atributo info.',
    ad_acl_genericall_obj_desc: 'svc.readonly tiene GenericAll sobre otro usuario del dominio. Cámbiale la contraseña sin conocer la anterior, autentícate con su identidad y lee //DC01/hr_private.',
    ad_acl_writemember_obj_desc: 'svc.readonly puede escribir el atributo member del grupo «IT Support». Añádete tú mismo al grupo para heredar sus permisos y accede a //DC01/it_share.',
    ad_dcsync_obj_desc: 'El grupo «IT Support» tiene delegados los derechos de replicación del directorio (DS-Replication-Get-Changes). Desde esa pertenencia replica el NTDS y vuelca los hashes del dominio: el hash de Administrator abre //DC01/secrets.',
    ad_pth_obj_desc: 'Con el hash NT de a.miller obtenido en el volcado del NTDS, autentícate en el dominio sin conocer su contraseña en claro y lee //DC01/finance.',
    ad_silver_ticket_obj_desc: 'Con el hash de la cuenta de máquina DC01$ puedes forjar un ticket de servicio CIFS válido sin hablar nunca con el KDC. Fabrica el Silver Ticket como Administrator y accede a //DC01/silver.',
    ad_golden_ticket_obj_desc: 'El hash de krbtgt firma todos los TGT del dominio. Fórjate un TGT arbitrario con la identidad que quieras y úsalo para leer //DC01/vault.',
    ad_delegation_obj_desc: 'La cuenta svc.delegate tiene delegación restringida con transición de protocolo hacia cifs/dc01. Consigue su contraseña por Kerberoasting, suplanta a Administrator con S4U2Self + S4U2Proxy y lee //DC01/deleg.',
    ad_machine_quota_obj_desc: 'ms-DS-MachineAccountQuota vale 10, así que cualquier usuario del dominio puede dar de alta cuentas de equipo. Crea la tuya, autentícate como esa máquina y lee //DC01/computers.',
    htmlinj_tab_get:          'GET Reflejado',
    htmlinj_tab_post:         'Render POST',
    htmlinj_tab_stored:       'Blog almacenado',
    // OAuth
    oauth_flow:          'Flujo de Autorización',
    oauth_flow_desc:     'Haz clic en el botón para iniciar el flujo OAuth 2.0. El servidor te redirigirá al callback con un código de autorización.',
    oauth_start_btn:     'Iniciar flujo OAuth',
    oauth_token:         'Token de Acceso',
    oauth_userinfo_hint: 'Usa este token para acceder a recursos protegidos:',
    oauth_how:           'Cómo funciona el ataque al parámetro redirect_uri',
    oauth_how_desc:      'En OAuth 2.0, al autorizar una aplicación el servidor redirige al usuario de vuelta al parámetro redirect_uri incluyendo un código de autorización. Si el servidor no valida que esa URI pertenece a la aplicación legítima, un atacante puede sustituir redirect_uri por una URL propia y robar el código para obtener un token de acceso.',
    oauth_step1:         'El usuario hace clic en "Autorizar" en la aplicación legítima',
    oauth_step2:         'El atacante intercepta la petición y sustituye el parámetro redirect_uri por una URL bajo su control',
    oauth_step3:         'El código de autorización se envía al servidor del atacante',
    oauth_step4:         'El atacante intercambia el código por un token de acceso',
    oauth_step5:         'El atacante accede a los recursos de la víctima',
    // Business Logic
    shop_catalog:        'Catálogo de Productos',
    shop_balance:        'Saldo:',
    shop_prod1_name:     'HackLabs Pro License',
    shop_prod1_desc:     'Acceso completo a todos los labs',
    shop_qty:            'Cant:',
    shop_add_btn:        'Añadir al carrito',
    shop_prod2_name:     'Zero-Day Exploit Kit',
    shop_prod2_desc:     'Framework de exploits simulado',
    shop_prod3_name:     'Servicio VPN',
    shop_prod3_desc:     'VPN anónima por 1 año',
    shop_cart:           'Carrito',
    shop_total:          'Total',
    shop_cart_empty:     'El carrito está vacío.',
    shop_apply_coupon:   'Aplicar',
    shop_checkout:       'Comprar',
    shop_clear_cart:     'Limpiar',
    // Race Condition
    race_balances:       'Balances',
    race_alice:          'Alice',
    race_bob:            'Bob',
    race_transfer_btn:   'Transferir Alice → Bob',
    race_reset_btn:      'Reiniciar',
    race_attack_panel:   'Panel de Ataque Race',
    race_attack_desc:    'Lanza 10 peticiones concurrentes de $5 cada una. Si Alice tiene $10.00 y el servidor tiene race condition, Bob puede acabar con más de $10.00.',
    race_run_btn:        'Ejecutar Race Attack',
    race_log:            'Log de Resultados',
    // Container Escape
    container_recon:         'Reconocimiento del Contenedor',
    container_check_in:      'Ejecutando en contenedor',
    container_check_socket:  '/var/run/docker.sock',
    container_check_root:    'Ejecutando como root',
    container_check_priv:    'Modo privilegiado',
    container_check_hostpath:'Ruta del host montada con escritura',
    container_check_id:      'salida de id',
    container_check_cap:     'CapEff (capacidades efectivas)',
    obj_title: 'Objetivo',
    obj_flag_lbl: 'Flag:',
    obj_flag_hint: '— valídala en la caja «Validar Flag» al final de esta página.',
    crypto_obj_desc: 'Inicia sesión y revisa la cookie auth_token: es un MD5 sin sal de la contraseña. Crackea el hash, recupera la contraseña y vuelve a entrar para obtener la flag.',
    sqli_obj_desc: 'El buscador concatena tu entrada en la consulta SQL. Inyecta para listar el producto oculto de categoría secret, cuya descripción contiene la flag.',
    outdated_obj_desc: 'La página usa una versión vulnerable de jQuery. Consigue ejecutar XSS y roba la cookie legacy_debug, que contiene la flag.',
    auth_failures_obj_desc: 'Toma el control de la cuenta admin: fuerza el acceso con la cookie is_admin=true o haz fuerza bruta de las credenciales débiles. La flag aparece en el mensaje de bienvenida.',
    logging_obj_desc: 'El sistema no registra los intentos de acceso. Autentícate con credenciales válidas sin dejar rastro; la flag aparece tras el login correcto.',
    open_redirect_obj_desc: 'El parámetro url redirige sin validar el destino. Fuerza una redirección a un dominio externo: cuando lo logras, el servidor añade la flag en la cabecera de respuesta X-HackLabs-Flag.',
    path_traversal_obj_desc: 'El parámetro file lee archivos del servidor sin sanear la ruta. Usa path traversal para salir del directorio y leer el archivo secreto con la flag; su contenido se muestra en la página.',
    ssti_obj_desc: 'Tu entrada se renderiza como plantilla Jinja2 en el servidor. Consigue ejecución de comandos (RCE) vía SSTI y lee el archivo de la flag en el servidor.',
    xss_obj_desc: 'Inyecta JavaScript que se ejecute en el navegador de la víctima y roba su cookie xss_flag, que contiene la flag.',
    xxe_obj_desc: 'La API de tickets procesa XML con entidades externas habilitadas. Explota XXE para leer un archivo local del servidor; su contenido (la flag) vuelve en la respuesta JSON.',
    upload_obj_title: 'Objetivo',
    upload_obj_desc: 'El formulario guarda los archivos en /uploads/ y el servidor ejecuta como PHP cualquier archivo con extensión .php. Sube una webshell, consigue ejecución remota de comandos (RCE) y recupera la flag.',
    upload_obj_1: 'Sube una webshell PHP (según la dificultad, evade el filtro de extensión / MIME).',
    upload_obj_2: 'Accede a ella en /uploads/<archivo>?cmd=id para confirmar el RCE.',
    upload_obj_3: 'Vuelca el entorno del proceso para leer la flag: ?cmd=env o ?cmd=printenv+HL_FLAG.',
    upload_obj_flag_lbl: 'Flag:',
    upload_obj_flag_hint: '— valídala en la caja «Validar Flag» al final de esta página.',
    upload_dropzone: 'Haz clic o arrastra un archivo aquí',
    upload_no_restrict: 'Sin restricciones de tipo de archivo',
    upload_btn:      'Subir archivo',
    upload_open:     'Abrir archivo',
    upload_list:     'Archivos subidos (/uploads/)',
    upload_access:   'Acceder →',
    upload_del_title: 'Eliminar archivo',
    upload_del_irrev: 'Esta acción no se puede deshacer',
    upload_del_confirm: '¿Eliminar',
    upload_del_cancel: 'Cancelar',
    upload_del_ok:   'Eliminar',
    // XXE
    xxe_btn_normal:  'XML Normal',
    xxe_btn_xxe:     'Payload XXE',
    xxe_form_title:  'Crear Ticket de Soporte',
    xxe_lbl_full_name:'Nombre completo',
    xxe_lbl_email:   'Email',
    xxe_lbl_department:'Departamento',
    xxe_lbl_priority:'Prioridad',
    xxe_lbl_description:'Descripción del problema',
    xxe_ph_name:     'Juan Pérez',
    xxe_ph_email:    'juan@empresa.com',
    xxe_ph_message:  'Describe el problema con detalle...',
    xxe_btn_send:    'Enviar Ticket',
    xxe_ticket_created:'Ticket creado con éxito',
    xxe_subject:     'Asunto:',
    xxe_message:     'Mensaje:',
    xxe_recent_tickets:'Tickets recientes',
    xxe_col_user:    'Usuario',
    xxe_col_subject: 'Asunto',
    xxe_col_status:  'Estado',
    xxe_opt_support: 'Soporte Técnico',
    xxe_opt_sales:   'Ventas',
    xxe_opt_hr:      'Recursos Humanos',
    xxe_opt_admin:   'Administración',
    xxe_opt_security:'Seguridad IT',
    xxe_opt_low:     '🟢 Baja',
    xxe_opt_medium:  '🟡 Media',
    xxe_opt_high:    '🟠 Alta',
    xxe_opt_critical:'🔴 Crítica',
    xxe_status_resolved:'✓ Resuelto',
    xxe_status_pending:'⏳ Pendiente',
    xxe_parsed:      'Resultado parseado',
    xxe_name:        'nombre:',
    xxe_email:       'email:',
    // Path Traversal
    pt_btn_read:     'Leer',
    // Bruteforce
    bf_tab_http:     'Login HTTP',
    bf_login_title:  'Login sin rate-limiting',
    bf_ssh_desc:     'Ataque de fuerza bruta contra el servicio SSH de la máquina objetivo. No hay rate-limiting activo; la autenticación se gestiona por el servidor SSH del host.',
    bf_smb_desc:     'Ataque de fuerza bruta contra el servicio SMB/CIFS de la máquina objetivo (puerto 445).',
    bf_ftp_desc:     'Ataque de fuerza bruta contra el servicio FTP de la máquina objetivo (puerto 21). No hay rate-limiting activo.',
    // SQLi
    sqli_label:      'Buscar productos',
    sqli_query:      'Consulta:',
    sqli_no_results: 'Sin resultados para',
    // CMDi
    cmdi_output:     'Salida',
    // IDOR
    idor_label_id:   'ID de usuario',
    idor_btn_view:   'Ver perfil',
    idor_profile:    'Perfil — ID:',
    idor_no_user:    'Usuario no encontrado con ID=',
    // Insecure Design
    insec_btn_continue: 'Continuar',
    insec_user_label:   'Usuario:',
    insec_lbl_answer:   'Respuesta',
    insec_btn_verify:   'Verificar',
    insec_compromised:  '¡Cuenta comprometida!',
    insec_user_inline:  'Usuario:',
    insec_pw_label:     'Contraseña en texto plano:',
    // Outdated
    out_label:       'Buscar',
    out_ph:          'Buscar productos...',
    out_searching:   'Buscando:',
    out_enter:       'Introduce un término de búsqueda...',
    // Integrity
    int_target_id:   'ID de usuario objetivo',
    int_new_role:    'Nuevo rol',
    int_new_email:   'Nuevo email (opcional)',
    int_btn_send:    'Enviar PUT',
    // Logging
    log_empty:       '(vacío — ningún evento de seguridad es registrado)',
    // SSRF
    ssrf_label:      'URL destino',
    ssrf_response:   'Respuesta de:',
    // Auth Failures
    auth_lbl_user:   'Usuario',
    auth_lbl_pass:   'Contraseña',
    auth_btn_login:  'Iniciar sesión',
    difficulty_label: 'Dificultad',
    sidebar_search:  'Buscar lab...',
    // User menu
    nav_profile:     'Mi perfil',
    nav_progress:    'Mi progreso',
    nav_logout:      'Cerrar sesión',
    // Progress / complete button
    complete_lab:    'Completar',
    completed_lab:   'Completado',
    progress_hint_title: 'Progreso de labs',
    progress_hint_body:  'Para guardar el progreso usa una cuenta propia. Los usuarios de laboratorio (admin, alice…) son para prácticas.',
    progress_hint_cta:   'Crear cuenta',
    // Certificate page
    nav_certificate:       'Certificado',
    cert_page_title:       'Certificado de finalización',
    cert_page_sub:         'Completa el 100% de los laboratorios para desbloquear tu certificado gratuito.',
    cert_unlocked:         'Certificado desbloqueado',
    cert_holder:           'Titular',
    cert_rank:             'Rango',
    cert_issuer:           'Emisor',
    cert_issued:           'Emitido',
    cert_code_label:       'Código del certificado',
    cert_code_label2:      'Código',
    cert_view:             'Ver certificado',
    cert_download:         'Descargar HTML',
    cert_download_pdf:     'Descargar PDF',
    cert_share_linkedin:   'Compartir en LinkedIn',
    cert_verify_title:     'Validar certificado',
    cert_verify_sub:       'Verifica códigos de certificado emitidos por HackLabs.',
    cert_verify_btn:       'Validar código',
    cert_verify_hint:      'Los certificados firmados por HackLabs se validan offline por firma.',
    cert_valid:            'Certificado válido',
    cert_invalid:          'Certificado no válido',
    cert_user:             'Usuario',
    cert_err_format:       'Formato inválido. Copia el código completo del certificado HackLabs.',
    cert_err_sig:          'Código no válido: la firma criptográfica no corresponde a un certificado emitido por HackLabs.',
    cert_err_notfound:     'Código no encontrado en esta instancia de HackLabs.',
    cert_err_empty:        'Introduce un código para validar.',
    cert_locked_title:     'Certificado bloqueado',
    cert_locked_pre:       'Completa el ',
    cert_locked_highlight:  '100% de los laboratorios',
    cert_locked_post:       ' para desbloquear tu certificado de finalización gratuito.',
    cert_progress_label:   'Progreso actual:',
    cert_go_progress:      'Ver mi progreso',
    lab_title_idor: 'A01 – Control de acceso roto (IDOR)',
    lab_title_crypto: 'A02 – Fallos criptográficos',
    lab_title_sqli: 'A03 – Inyección SQL',
    lab_title_cmdi: 'A03 – Inyección de comandos',
    lab_title_insecure_design: 'A04 – Diseño inseguro',
    lab_title_misconfig: 'A05 – Mala configuración de seguridad',
    lab_title_outdated: 'A06 – Componentes vulnerables y obsoletos',
    lab_title_auth_failures: 'A07 – Fallos de identificación y autenticación',
    lab_title_integrity: 'A08 – Fallos en la integridad del software y datos',
    lab_title_logging: 'A09 – Fallos de registro y monitorización',
    lab_title_ssrf: 'A10 – Falsificación de peticiones en servidor (SSRF)',
    lab_title_host_enum: 'H01 – Enumeración de redes y servicios',
    lab_title_bruteforce: 'H02 – Fuerza bruta en login',
    lab_title_reverse_shell: 'H03 – Shell inversa',
    lab_title_metasploit_exploitation: 'H04 – Metasploit: RCE en ActiveMQ a Meterpreter',
    lab_title_credential_hunting: 'H05 – Búsqueda de credenciales en Linux',
    lab_title_privesc: 'H06 – Escalada de privilegios (SSH)',
    lab_title_sudo_suid: 'H07 – Abuso de mala configuración de Sudo',
    lab_title_cron_persistence: 'H08 – Persistencia mediante Cron',
    lab_title_ssh_lateral: 'H09 – Claves SSH y movimiento lateral',
    lab_title_network_pivoting: 'H10 – Pivoting de red y túneles',
    lab_title_container_escape: 'H11 – Escape de contenedor',
    lab_title_c2_sliver: 'H12 – Comando y Control: Sliver',
    lab_title_database_access: 'H13 – Acceso a base de datos',
    lab_title_api_attacks: 'W01 – API Attacks – Laboratorio de APIs Inseguras',
    lab_title_business_logic: 'W02 – Fallos de lógica de negocio',
    lab_title_cors: 'W03 – Mala configuración de CORS',
    lab_title_csrf: 'W04 – CSRF – Falsificación de peticiones en sitios cruzados',
    lab_title_file_upload: 'W05 – File Upload sin restricciones',
    lab_title_forgot_recovery: 'W06 – Recuperación de contraseña (fallos de autenticación)',
    lab_title_html_injection: 'W07 – Inyección HTML (GET/POST/Stored)',
    lab_title_deserialization: 'W08 – Deserialización insegura',
    lab_title_jwt: 'W09 – Manipulación de JWT',
    lab_title_captcha_math: 'W10 – Evasión de CAPTCHA',
    lab_title_oauth: 'W11 – Ataques a OAuth 2.0',
    lab_title_open_redirect: 'W12 – Redirección abierta',
    lab_title_path_traversal: 'W13 – Path Traversal / LFI',
    lab_title_2fa_bypass: 'W14 – Evasión de 2FA / MFA',
    lab_title_clickjacking: 'W15 – Clickjacking',
    lab_title_reset_poisoning: 'W16 – Envenenamiento de reset de contraseña',
    lab_title_race_condition: 'W17 – Condición de carrera / TOCTOU',
    lab_title_session_hijacking: 'W18 – Secuestro de sesión',
    lab_title_ssti: 'W19 – SSTI – Inyección de plantillas en servidor',
    lab_title_xss: 'W20 – XSS – Secuencias de comandos en sitios cruzados',
    lab_title_xxe: 'W21 – XXE – Entidad externa XML',
    lab_title_account_takeover: 'W22 – Account Takeover mediante IDOR de recuperación',
    lab_title_price_manipulation: 'W23 – Lógica de Negocio: Manipulación de Precio',
    lab_title_ai_jailbreak: 'AI01 – AI Jailbreak',
    lab_title_ai_supply_chain: 'AI02 – Envenenamiento de cadena de suministro de IA',
    lab_title_indirect_injection: 'AI03 – Inyección de prompt indirecta',
    lab_title_llm_exfil: 'AI04 – Exfiltración de datos mediante LLM',
    lab_title_prompt_injection: 'AI05 – Inyección de prompt',
    lab_title_prompt_leaking: 'AI06 – Fuga de prompt del sistema',
    lab_title_ad_smb_enum: 'AD01 – Enumeración SMB y sesión nula',
    lab_title_ad_ldap_enum: 'AD02 – Enumeración LDAP',
    lab_title_ad_password_spray: 'AD03 – Password Spraying',
    lab_title_ad_asrep_roast: 'AD04 – AS-REP Roasting',
    lab_title_ad_kerberoast: 'AD05 – Kerberoasting',
    lab_title_ad_gpp_passwords: 'AD06 – Contraseñas GPP en SYSVOL',
    lab_title_ad_bloodhound: 'AD07 – BloodHound y rutas de ataque',
    lab_title_ad_acl_genericall: 'AD08 – Abuso de ACL: GenericAll',
    lab_title_ad_acl_writemember: 'AD09 – Abuso de ACL: AddSelf a grupo',
    lab_title_ad_dcsync: 'AD10 – DCSync',
    lab_title_ad_pth: 'AD11 – Pass-the-Hash',
    lab_title_ad_silver_ticket: 'AD12 – Silver Ticket',
    lab_title_ad_golden_ticket: 'AD13 – Golden Ticket',
    lab_title_ad_delegation: 'AD14 – Delegación restringida',
    lab_title_ad_machine_quota: 'AD15 – MachineAccountQuota y RBCD',
    lab_title_df_file_signatures: 'DF01 – Análisis de Firmas de Fichero',
    lab_title_df_metadata_exif: 'DF02 – Análisis de Metadatos EXIF',
    lab_title_df_steganography: 'DF03 – Esteganografía en Imagen',
    lab_title_df_archive_cracking: 'DF04 – Cracking de Archivo Protegido',
    lab_title_df_email_analysis: 'DF05 – Análisis Forense de Email',
    lab_title_df_browser_artifacts: 'DF06 – Artefactos de Navegador',
    lab_title_df_log_analysis: 'DF07 – Reconstrucción de Ataque por Logs',
    lab_title_df_pcap_credentials: 'DF08 – Credenciales en Claro (PCAP)',
    lab_title_df_pcap_exfiltration: 'DF09 – Exfiltración de Datos vía DNS',
    lab_title_df_file_carving: 'DF10 – File Carving en Imagen de Disco',
    lab_title_df_disk_timeline: 'DF11 – Timeline y Recuperación de Borrados',
    lab_title_df_malware_strings: 'DF12 – Triage de Malware: Strings y YARA',
    lab_title_df_pe_analysis: 'DF13 – Análisis de Cabeceras PE',
    lab_title_df_memory_process: 'DF14 – Memoria: Proceso Malicioso',
    lab_title_df_memory_credentials: 'DF15 – Memoria: Credenciales en RAM',
    validate_flag_title: 'Validar Flag',
    validate_flag_label: 'Introduce la flag de este lab',
    validate_flag_login_msg: 'Inicia sesión para validar y guardar progreso',
    validate_flag_btn: 'Validar flag',
    validate_flag_unmark: 'Desmarcar',
    validate_flag_submit: 'Enviar flag',
  },
  en: {
    home:            'Home',
    logout:          'Log out',
    footer_warning:  'For educational use in isolated environments only',
    modal_title:     'Lab Resolution',
    btn_resolution:  'View Resolution',
    close:           'Close',
    cat_owasp_top_10:       'OWASP Top 10',
    cat_extras:            'Extras',
    cat_vulnerabilidades:  'Vulnerabilidades',
    cat_web_attacks:       'Web Attacks',
    cat_host_attacks:      'Host Attacks',
    cat_ia_attacks:        'AI Attacks',
    cat_ai_attacks:        'AI Attacks',
    cat_active_directory:  'Active Directory',
    cat_forense_digital:   'Digital Forensics',
    labs:            'Labs',
    resolution_steps:'Exploitation Steps',
    tools_label:     'Tools',
    // Home
    badge_text:      'Intentionally Vulnerable · Educational Use Only',
    filter_label:    'Filter:',
    filter_all:      'All',
    open_lab:        'Open lab',
    test_credentials:'Users & Passwords',
    col_username:    'Username',
    col_password:    'Password',
    col_hash:        'MD5 Hash',
    col_role:        'Role',
    stat_total:      'Total Labs',
    stat_critical:   'Critical',
    stat_high:       'High',
    stat_medium:     'Medium',
    hero_by:         'Ethical hacking training platform by',
    hero_rest:       'Practice OWASP Top 10 (2021) and more with Burp Suite, sqlmap, hydra and other Kali Linux tools.',
    lab_cat_count:   'labs',
    // A05 Misconfig
    misconfig_title: 'Misconfigurations',
    misconfig_item1: 'Admin panel accessible without authentication',
    misconfig_item2: 'Git repository configuration exposed',
    misconfig_item3: 'Full server stack trace disclosed on error',
    misconfig_item4: 'Internal user API accessible without auth',
    misconfig_hint:  'Use directory fuzzing tools to discover exposed endpoints.',
    misconfig_admin_panel: 'Admin Panel — No Authentication Required',
    // Shared form labels
    lbl_username:    'Username',
    ph_username:     'your_username',
    ph_email:        'your@email.com',
    ph_password_min: 'Minimum 6 characters',
    translated_by:   'Translated by',
    lbl_password:    'Password',
    lbl_search:      'Search',
    lbl_search_products: 'Search products',
    lbl_host_ip:     'Host / IP',
    lbl_output:      'Output',
    lbl_result:      'Result',
    lbl_target_url:  'Target URL',
    lbl_file_path:   'File path',
    lbl_xml_payload: 'XML Payload',
    lbl_jwt_token:   'JWT Token',
    // Shared buttons
    btn_login:       'Login',
    btn_search:      'Search',
    btn_render:      'Render',
    btn_fetch:       'Fetch',
    gh_star_tooltip: 'Star on GitHub',
    btn_read:        'Read',
    btn_ping:        'Ping',
    btn_upload:      'Upload',
    btn_parse_xml:   'Parse XML',
    btn_go:          'Go to destination',
    btn_change_pw:   'Change Password',
    btn_post_comment:'Post Comment',
    btn_continue:    'Continue',
    btn_verify:      'Verify',
    btn_send_put:    'Send PUT',
    btn_launch_csrf: 'Launch CSRF',
    // Shared placeholders
    ph_search:       'Search...',
    ph_search_products: 'Search products...',
    ph_redirect_url: 'https://example.com/dashboard',
    ph_comment_name: 'Name',
    ph_new_email:    'new@email.com',
    // SSTI
    ssti_label:      'Template Input',
    ssti_rendered:   'Rendered output',
    // Open Redirect
    or_desc:         'This portal redirects users after completing actions. The destination parameter is not validated.',
    or_examples:     'Examples',
    or_comment1:     '# Redirect to external site (phishing)',
    or_comment2:     '# Bypass basic filters',
    // JWT
    jwt_generate:    'Generate Token',
    jwt_btn_gen:     'Generate JWT',
    jwt_secret_used: 'Secret used:',
    jwt_verify:      'Verify / Manipulate Token',
    jwt_btn_verify:  'Verify',
    jwt_decoded:     'Decoded payload',
    // Deserialization
    deser_title:     'Deserialize Python object (pickle)',
    deser_label:     'Payload (base64 pickle)',
    deser_ph:        'Enter a base64-serialized pickle object...',
    deser_btn:       'Deserialize',
    deser_example:   'Safe example (dict):',
    deser_result:    'Result',
    // CORS
    cors_api_title:  'Internal data API',
    cors_api_desc:   'The API returns sensitive data and reflects any Origin header with Access-Control-Allow-Credentials: true.',
    cors_comment1:   '# Vulnerable endpoint',
    cors_comment2:   '# Test with curl (observe CORS headers)',
    cors_btn:        'Make cross-origin request',
    cors_response:   'Response:',
    cors_poc_title:  'PoC – Malicious page',
    // XSS
    xss_tab_reflected: 'Reflected',
    xss_tab_stored:  'Stored',
    xss_tab_dom:     'DOM-based',
    xss_results_for: 'Results for:',
    xss_name_ph:     'Name',
    xss_btn_post:    'Post Comment',
    xss_dom_label:   'Dynamic output (from URL fragment):',
    xss_dom_hint:    'Add a fragment to the URL: #<img src=x onerror=alert(1)>',
    // CSRF
    csrf_user_label: 'User:',
    csrf_id_label:   'ID:',
    csrf_role_label: 'Role:',
    csrf_new_pw:     'New Password',
    csrf_ph_new_pw:  'Enter a password',
    csrf_btn_change: 'Change Password',
    csrf_attack_title: 'CSRF Attack — Auto-submit',
    csrf_victim_id:  'Victim User ID',
    csrf_btn_launch: 'Launch CSRF',
    // File Upload
    // Lab titles
    lab_title_file_upload:    'W05 – File Upload – No Restrictions',
    lab_title_api_attacks:    'W01 – API Attacks – Insecure APIs Lab',
    lab_title_business_logic: 'W02 – Business Logic Flaws',
    lab_title_account_takeover: 'W22 – Account Takeover via Recovery IDOR',
    lab_title_price_manipulation: 'W23 – Business Logic: Price Manipulation',
    lab_title_metasploit_exploitation: 'H04 – Metasploit: ActiveMQ RCE to Meterpreter',
    // ── W22 Account Takeover ──
    ato_portal_title: 'HackLabs Identity Portal',
    ato_signed_in: 'Signed in:',
    ato_account_id: 'Account ID:',
    ato_recovery_email: 'Recovery email:',
    ato_update_profile: 'Update profile',
    ato_sign_out: 'Sign out',
    ato_ph_username: 'Username',
    ato_ph_password: 'Password',
    ato_sign_in: 'Sign in',
    ato_auditor_access: 'External auditor access',
    ato_password_recovery: 'Password recovery',
    ato_reset_delivery: 'Reset links are delivered to the recovery address stored on the target account.',
    ato_ph_target_username: 'Username (e.g. administrator)',
    ato_send_reset: 'Send reset link',
    ato_directory_api: 'Employee directory API',
    ato_mailbox: 'Recovery mailbox',
    ato_mailbox_visibility: 'Visible only to the signed-in identity',
    ato_mailbox_login_hint: 'Sign in to view your recovery mailbox.',
    ato_to: 'To:',
    ato_subject: 'Subject:',
    ato_reset_subject: 'Password reset',
    ato_open_reset: 'Open reset link',
    ato_no_messages: 'No messages for',
    ato_reset_lab: 'Reset lab state',
    ato_set_new_password: 'Set a new password',
    ato_ph_new_password: 'New password',
    ato_update_password: 'Update password',
    ato_invalid_token: 'This reset token is invalid, expired, or already used.',
    ato_return_portal: 'Return to identity portal',
    ato_msg_bad_credentials: 'Invalid credentials.',
    ato_msg_login_success: 'Signed in successfully.',
    ato_msg_email_updated: 'Recovery email updated.',
    ato_msg_reset_sent: 'If the account exists, a link has been sent to its recovery address.',
    ato_msg_password_length: 'The new password must be at least 8 characters long.',
    ato_msg_password_updated: 'Password updated. Sign in with the recovered account.',
    ato_msg_lab_reset: 'Lab state reset.',
    // ── W23 Price Manipulation ──
    price_add_cart: 'Add to cart',
    price_server_cart: 'Server-side cart',
    price_balance: 'Balance:',
    price_checkout: 'Checkout',
    price_purchase_success: 'Purchase completed successfully!',
    price_insufficient_balance: 'Insufficient balance.',
    price_empty_cart: 'Cart is empty.',
    price_clear_cart: 'Clear cart',
    price_remove_item: 'Remove',
    // ── H04 Metasploit ──
    msf_isolated_target: 'Isolated target · CVE-2023-46604',
    msf_web_console: 'Web console',
    msf_recon_checkpoint: 'Recon checkpoint',
    lab_title_container_escape: 'H11 – Container Escape',
    lab_title_bruteforce: 'H02 – Login Bruteforce',
    lab_title_forgot_recovery: 'W06 – Forgot Password Recovery (Authentication Flaws)',
    lab_title_html_injection: 'W07 – HTML Injection (GET/POST/Stored)',
    lab_title_oauth:          'W11 – OAuth 2.0 Attacks',
    lab_title_race_condition: 'W17 – Race Condition / TOCTOU',
    lab_title_session_hijacking: 'W18 – Session Hijacking',
    // ── Active Directory ──
    lab_title_ad_smb_enum:        'AD01 – SMB Enumeration & Null Session',
    lab_title_ad_ldap_enum:       'AD02 – LDAP Enumeration',
    lab_title_ad_password_spray:  'AD03 – Password Spraying',
    lab_title_ad_asrep_roast:     'AD04 – AS-REP Roasting',
    lab_title_ad_kerberoast:      'AD05 – Kerberoasting',
    lab_title_ad_gpp_passwords:   'AD06 – GPP Passwords in SYSVOL',
    lab_title_ad_bloodhound:      'AD07 – BloodHound & Attack Paths',
    lab_title_ad_acl_genericall:  'AD08 – ACL Abuse: GenericAll',
    lab_title_ad_acl_writemember: 'AD09 – ACL Abuse: AddSelf to group',
    lab_title_ad_dcsync:          'AD10 – DCSync',
    lab_title_ad_pth:             'AD11 – Pass-the-Hash',
    lab_title_ad_silver_ticket:   'AD12 – Silver Ticket',
    lab_title_ad_golden_ticket:   'AD13 – Golden Ticket',
    lab_title_ad_delegation:      'AD14 – Constrained Delegation',
    lab_title_ad_machine_quota:   'AD15 – MachineAccountQuota & RBCD',
    // ── Digital Forensics ──
    lab_title_df_file_signatures:    'DF01 – File Signature Analysis',
    lab_title_df_metadata_exif:      'DF02 – EXIF Metadata Analysis',
    lab_title_df_steganography:      'DF03 – Image Steganography',
    lab_title_df_archive_cracking:   'DF04 – Protected Archive Cracking',
    lab_title_df_email_analysis:     'DF05 – Email Forensics',
    lab_title_df_browser_artifacts:  'DF06 – Browser Artifacts',
    lab_title_df_log_analysis:       'DF07 – Log-based Attack Reconstruction',
    lab_title_df_pcap_credentials:   'DF08 – Plaintext Credentials (PCAP)',
    lab_title_df_pcap_exfiltration:  'DF09 – DNS Data Exfiltration',
    lab_title_df_file_carving:       'DF10 – File Carving from a Disk Image',
    lab_title_df_disk_timeline:      'DF11 – Timeline & Deleted File Recovery',
    lab_title_df_malware_strings:    'DF12 – Malware Triage: Strings & YARA',
    lab_title_df_pe_analysis:        'DF13 – PE Header Analysis',
    lab_title_df_memory_process:     'DF14 – Memory: Malicious Process',
    lab_title_df_memory_credentials: 'DF15 – Memory: Credentials in RAM',
    df_evidence_title:        'Evidence to analyze',
    df_evidence_download_btn: 'Download evidence',
    df_evidence_filename_lbl: 'File',
    df_evidence_hash_lbl:     'SHA-256',
    df_evidence_hash_hint:    'Verify the file’s integrity before analyzing it.',
    df_quickstart:            'Quick start',
    df_obj_flag_where:        '— the flag is hidden inside the evidence file itself; analyze it and validate it in the "Validate Flag" box at the bottom of this page.',
    df_quiz_title:            'Guided questions',
    df_quiz_check:            'Check',
    df_quiz_hint_btn:         '💡 Hint',
    df_quiz_footer:           'Answer every question to complete the analysis; validate the final flag in the "Validate Flag" box at the bottom of this page.',
    df_quiz_correct:          '✓ Correct',
    df_quiz_incorrect:        '✗ Incorrect, try again',
    host_answer_title:        'Validate answer',
    host_answer_btn:          'Validate answer',
    host_answer_done:         'Completed',
    host_answer_login:        'to validate and save the answer.',
    host_answer_login_link:   'Log in',
    host_answer_correct:      'Correct answer. Lab completed.',
    host_answer_incorrect:    'Incorrect answer. Check your evidence.',
    df_file_signatures_obj_desc: 'An employee handed you a .docx file that "won’t open properly" in Word. Before trying to repair it, check what the file actually is — the extension doesn’t always tell the truth.',
    df_metadata_exif_obj_desc: 'A photo uploaded to the corporate intranet reveals more than it seems. Extract its EXIF metadata to find out where and with what device it was taken.',
    df_steganography_obj_desc: 'This sunset image hides more than just pixels. Analyze its least significant bits to recover the hidden message.',
    df_archive_cracking_obj_desc: 'HR protected a financial report with a weak password before accidentally uploading it to a public folder. Crack it offline to access the content.',
    df_email_analysis_obj_desc: 'A colleague received a suspicious email from "HR" asking to verify their payroll details. Analyze the email headers to spot the phishing indicators and recover the attachment.',
    df_browser_artifacts_obj_desc: 'A compromised workstation’s browsing history can reveal leaked credentials. Examine the browser’s SQLite file for suspicious URLs.',
    df_log_analysis_obj_desc: 'A bastion host suffered a suspicious access attempt. Analyze its authentication log to identify the attack, the compromised user, and what the attacker did after logging in.',
    df_pcap_credentials_obj_desc: 'Network traffic was captured from an unencrypted segment. Analyze the capture to extract credentials and data transmitted in plaintext.',
    df_pcap_exfiltration_obj_desc: 'An endpoint shows an unusual volume of DNS queries toward an external domain. Reconstruct the exfiltrated data from the captured DNS requests.',
    df_file_carving_obj_desc: 'A dump of unallocated sectors contains a file that was deleted but never overwritten. Locate its signature and recover it via carving.',
    df_disk_timeline_obj_desc: 'A workstation has a file that was intentionally deleted. Use disk forensics tools to list deleted entries and recover their content.',
    df_malware_strings_obj_desc: 'A suspicious binary appeared on a server. Statically analyze it with strings/YARA to identify indicators of compromise without ever running it.',
    df_pe_analysis_obj_desc: 'An executable disguised as an invoice arrived by email. Statically analyze its PE headers to identify signs of malicious behavior.',
    df_memory_process_obj_desc: 'The memory of a compromised Linux server was dumped. Locate the process masquerading as a kernel thread.',
    df_memory_credentials_obj_desc: 'The memory of another Linux server was dumped — this one hosts a database. Recover an admin\'s command history from RAM before someone else does.',
    ad_env_title:        'Target machine',
    ad_env_realm_lbl:    'Domain',
    ad_env_dc_lbl:       'Domain Controller',
    ad_env_foothold_lbl: 'Initial foothold',
    ad_env_foothold_val: 'svc.readonly / ReadOnly123!  (obtained in lab AD01)',
    ad_env_hosts_hint:   'Kerberos requires resolving the DC FQDN. Add this entry to your /etc/hosts before you start:',
    ad_env_not_deployed: 'The Domain Controller is not deployed on this instance. Start it with "sudo bash deploy.sh" (or "docker compose -f docker-compose.active-directory.yml up -d --build") and replace <DC_IP> with the IP shown on deploy.',
    ad_env_tools_lbl:    'Tools',
    ad_env_foothold_hint: 'obtained in lab AD01',
    ad_obj_flag_where:   '— capture it on the Domain Controller and validate it in the "Validate Flag" box at the bottom of this page.',
    ad_quickstart:       'Quick start',
    ad_smb_enum_obj_desc: 'The Domain Controller accepts null sessions: you can list the shares with no credentials. The //DC01/public share is anonymously readable and holds the flag, plus the service credentials you will need for the rest of the labs.',
    ad_ldap_enum_obj_desc: 'With the svc.readonly credential from AD01, enumerate the domain users (anonymous enumeration does not work against this DC) and dump the directory objects over LDAP. The server allows simple binds without encryption and an administrator left a password — and the flag — written in a user description attribute.',
    ad_password_spray_obj_desc: 'The domain policy enforces no complexity and never locks accounts out. Spray a common password against every domain user: the account that falls grants access to its personal share //DC01/jsmith, where the flag lives.',
    ad_asrep_roast_obj_desc: 'One service account has Kerberos pre-authentication disabled (DONT_REQ_PREAUTH). Request its AS-REP, crack the krb5asrep hash offline and use the recovered password to read //DC01/backup.',
    ad_kerberoast_obj_desc: 'Some user accounts have an SPN registered, so any authenticated user can request their service ticket. Request the TGS-REP, crack the krb5tgs hash and use those credentials against //DC01/sqldata.',
    ad_gpp_passwords_obj_desc: 'The SYSVOL share stores a deployment GPO carrying a cpassword attribute. Decrypt it with the AES key Microsoft published (MS14-025) and use the recovered password to read //DC01/deploy.',
    ad_bloodhound_obj_desc: 'Collect the domain with BloodHound and find the shortest path to Domain Admins. A nested legacy group breaks the privilege hierarchy: the flag is in its info attribute.',
    ad_acl_genericall_obj_desc: 'svc.readonly holds GenericAll over another domain user. Reset their password without knowing the old one, authenticate as them and read //DC01/hr_private.',
    ad_acl_writemember_obj_desc: 'svc.readonly can write the member attribute of the "IT Support" group. Add yourself to the group to inherit its permissions and access //DC01/it_share.',
    ad_dcsync_obj_desc: 'The "IT Support" group has directory replication rights delegated (DS-Replication-Get-Changes). From that membership, replicate the NTDS and dump the domain hashes: the Administrator hash opens //DC01/secrets.',
    ad_pth_obj_desc: 'With the a.miller NT hash obtained from the NTDS dump, authenticate to the domain without ever knowing the cleartext password and read //DC01/finance.',
    ad_silver_ticket_obj_desc: 'With the DC01$ machine account hash you can forge a valid CIFS service ticket without ever talking to the KDC. Build the Silver Ticket as Administrator and access //DC01/silver.',
    ad_golden_ticket_obj_desc: 'The krbtgt hash signs every TGT in the domain. Forge an arbitrary TGT with any identity you like and use it to read //DC01/vault.',
    ad_delegation_obj_desc: 'The svc.delegate account has constrained delegation with protocol transition towards cifs/dc01. Recover its password via Kerberoasting, impersonate Administrator with S4U2Self + S4U2Proxy and read //DC01/deleg.',
    ad_machine_quota_obj_desc: 'ms-DS-MachineAccountQuota is 10, so any domain user can create computer accounts. Create your own, authenticate as that machine and read //DC01/computers.',
    htmlinj_tab_get:          'GET Reflected',
    htmlinj_tab_post:         'POST Render',
    htmlinj_tab_stored:       'Stored Blog',
    // OAuth
    oauth_flow:          'Authorization Flow',
    oauth_flow_desc:     'Click the button below to start the OAuth 2.0 authorization flow. The server will redirect you to the callback with an authorization code.',
    oauth_start_btn:     'Start OAuth Flow',
    oauth_token:         'Access Token',
    oauth_userinfo_hint: 'Use this token to access protected resources:',
    oauth_how:           'How the redirect_uri Attack Works',
    oauth_how_desc:      'In OAuth 2.0, after authorizing an application the server redirects the user back to the redirect_uri parameter with an authorization code. If the server does not validate that this URI belongs to the legitimate application, an attacker can replace redirect_uri with a URL they control to steal the code and exchange it for an access token.',
    oauth_step1:         'User clicks "Authorize" in the legitimate application',
    oauth_step2:         'Attacker intercepts the request and replaces redirect_uri with a URL under their control',
    oauth_step3:         'Authorization code is sent to the attacker\'s server',
    oauth_step4:         'Attacker exchanges the code for an access token',
    oauth_step5:         'Attacker accesses the victim\'s resources',
    // Business Logic
    shop_catalog:        'Product Catalog',
    shop_balance:        'Balance:',
    shop_prod1_name:     'HackLabs Pro License',
    shop_prod1_desc:     'Full access to all labs',
    shop_qty:            'Qty:',
    shop_add_btn:        'Add to Cart',
    shop_prod2_name:     'Zero-Day Exploit Kit',
    shop_prod2_desc:     'Simulated exploit framework',
    shop_prod3_name:     'VPN Service',
    shop_prod3_desc:     '1-year anonymous VPN',
    shop_cart:           'Cart',
    shop_total:          'Total',
    shop_cart_empty:     'Cart is empty.',
    shop_apply_coupon:   'Apply',
    shop_checkout:       'Checkout',
    shop_clear_cart:     'Clear',
    // Race Condition
    race_balances:       'Balances',
    race_alice:          'Alice',
    race_bob:            'Bob',
    race_transfer_btn:   'Transfer Alice → Bob',
    race_reset_btn:      'Reset',
    race_attack_panel:   'Race Attack',
    race_attack_desc:    'Fires 10 concurrent requests of $5 each. If Alice has $10.00 and the server has a race condition, Bob may end up with more than $10.00.',
    race_run_btn:        'Run Race Attack',
    race_log:            'Result Log',
    // Container Escape
    container_recon:         'Container Recon',
    container_check_in:      'Running in container',
    container_check_socket:  '/var/run/docker.sock',
    container_check_root:    'Running as root',
    container_check_priv:    'Privileged mode',
    container_check_hostpath:'Writable host path mounted',
    container_check_id:      'id output',
    container_check_cap:     'CapEff (effective capabilities)',
    obj_title: 'Objective',
    obj_flag_lbl: 'Flag:',
    obj_flag_hint: '— validate it in the "Validate Flag" box at the bottom of this page.',
    crypto_obj_desc: 'Log in and inspect the auth_token cookie: it is an unsalted MD5 of the password. Crack the hash, recover the password and log back in to obtain the flag.',
    sqli_obj_desc: 'The search box concatenates your input into the SQL query. Inject to reveal the hidden product in the secret category, whose description holds the flag.',
    outdated_obj_desc: 'The page uses a vulnerable jQuery version. Achieve XSS and steal the legacy_debug cookie, which contains the flag.',
    auth_failures_obj_desc: 'Take over the admin account: force access with the is_admin=true cookie or brute-force the weak credentials. The flag appears in the welcome message.',
    logging_obj_desc: 'The system does not log access attempts. Authenticate with valid credentials without leaving a trace; the flag appears after a successful login.',
    open_redirect_obj_desc: 'The url parameter redirects without validating the destination. Force a redirect to an external domain: when you succeed, the server adds the flag in the X-HackLabs-Flag response header.',
    path_traversal_obj_desc: 'The file parameter reads server files without sanitizing the path. Use path traversal to escape the directory and read the secret file containing the flag; its contents render on the page.',
    ssti_obj_desc: 'Your input is rendered as a server-side Jinja2 template. Achieve command execution (RCE) via SSTI and read the flag file on the server.',
    xss_obj_desc: 'Inject JavaScript that runs in the victim browser and steal their xss_flag cookie, which contains the flag.',
    xxe_obj_desc: 'The ticket API parses XML with external entities enabled. Exploit XXE to read a local server file; its contents (the flag) come back in the JSON response.',
    upload_obj_title: 'Objective',
    upload_obj_desc: 'The form stores files in /uploads/ and the server runs any file with a .php extension as PHP. Upload a webshell, achieve remote code execution (RCE) and retrieve the flag.',
    upload_obj_1: 'Upload a PHP webshell (depending on difficulty, bypass the extension / MIME filter).',
    upload_obj_2: 'Access it at /uploads/<file>?cmd=id to confirm RCE.',
    upload_obj_3: 'Dump the process environment to read the flag: ?cmd=env or ?cmd=printenv+HL_FLAG.',
    upload_obj_flag_lbl: 'Flag:',
    upload_obj_flag_hint: '— validate it in the "Validate Flag" box at the bottom of this page.',
    upload_dropzone: 'Click or drag file here',
    upload_no_restrict: 'No file type restrictions',
    upload_btn:      'Upload',
    upload_open:     'Open file',
    upload_list:     'Uploaded files (/uploads/)',
    upload_access:   'Access →',
    upload_del_title: 'Delete file',
    upload_del_irrev: 'This action cannot be undone',
    upload_del_confirm: 'Delete',
    upload_del_cancel: 'Cancel',
    upload_del_ok:   'Delete',
    // XXE
    xxe_btn_normal:  'Normal XML',
    xxe_btn_xxe:     'XXE Payload',
    xxe_form_title:  'Create Support Ticket',
    xxe_lbl_full_name:'Full name',
    xxe_lbl_email:   'Email',
    xxe_lbl_department:'Department',
    xxe_lbl_priority:'Priority',
    xxe_lbl_description:'Issue description',
    xxe_ph_name:     'John Doe',
    xxe_ph_email:    'john@company.com',
    xxe_ph_message:  'Describe the issue in detail...',
    xxe_btn_send:    'Submit Ticket',
    xxe_ticket_created:'Ticket created successfully',
    xxe_subject:     'Subject:',
    xxe_message:     'Message:',
    xxe_recent_tickets:'Recent tickets',
    xxe_col_user:    'User',
    xxe_col_subject: 'Subject',
    xxe_col_status:  'Status',
    xxe_opt_support: 'Technical Support',
    xxe_opt_sales:   'Sales',
    xxe_opt_hr:      'Human Resources',
    xxe_opt_admin:   'Administration',
    xxe_opt_security:'IT Security',
    xxe_opt_low:     '🟢 Low',
    xxe_opt_medium:  '🟡 Medium',
    xxe_opt_high:    '🟠 High',
    xxe_opt_critical:'🔴 Critical',
    xxe_status_resolved:'✓ Resolved',
    xxe_status_pending:'⏳ Pending',
    xxe_parsed:      'Parsed result',
    xxe_name:        'name:',
    xxe_email:       'email:',
    // Path Traversal
    pt_btn_read:     'Read',
    // Bruteforce
    bf_tab_http:     'HTTP Login',
    bf_login_title:  'Login without rate-limiting',
    bf_ssh_desc:     'Brute force attack against the SSH service of the target machine. No rate-limiting is active; authentication is handled by the host SSH server.',
    bf_smb_desc:     'Brute force attack against the SMB/CIFS service of the target machine (port 445).',
    // SQLi
    sqli_label:      'Search products',
    sqli_query:      'Query:',
    sqli_no_results: 'No results for',
    // CMDi
    cmdi_output:     'Output',
    // IDOR
    idor_label_id:   'User ID',
    idor_btn_view:   'View Profile',
    idor_profile:    'Profile — ID:',
    idor_no_user:    'No user found with ID=',
    // Insecure Design
    insec_btn_continue: 'Continue',
    insec_user_label:   'User:',
    insec_lbl_answer:   'Answer',
    insec_btn_verify:   'Verify',
    insec_compromised:  'Account compromised!',
    insec_user_inline:  'User:',
    insec_pw_label:     'Plaintext password:',
    // Outdated
    out_label:       'Search',
    out_ph:          'Search products...',
    out_searching:   'Searching for:',
    out_enter:       'Enter a search term...',
    // Integrity
    int_target_id:   'Target User ID',
    int_new_role:    'New Role',
    int_new_email:   'New Email (optional)',
    int_btn_send:    'Send PUT',
    // Logging
    log_empty:       '(empty — no security events are ever logged)',
    // SSRF
    ssrf_label:      'Target URL',
    ssrf_response:   'Response from:',
    // Auth Failures
    auth_lbl_user:   'Username',
    auth_lbl_pass:   'Password',
    auth_btn_login:  'Login',
    difficulty_label: 'Difficulty',
    sidebar_search:  'Search lab...',
    // User menu
    nav_profile:     'My profile',
    nav_progress:    'My progress',
    nav_logout:      'Log out',
    // Progress / complete button
    complete_lab:    'Complete',
    completed_lab:   'Completed',
    progress_hint_title: 'Lab Progress',
    progress_hint_body:  'To save your progress you need a custom account. Lab users (admin, alice…) are for practice only.',
    progress_hint_cta:   'Create account',
    // Certificate page
    nav_certificate:       'Certificate',
    cert_page_title:       'Certificate of Completion',
    cert_page_sub:         'Complete 100% of the labs to unlock your free certificate.',
    cert_unlocked:         'Certificate unlocked',
    cert_holder:           'Holder',
    cert_rank:             'Rank',
    cert_issuer:           'Issuer',
    cert_issued:           'Issued',
    cert_code_label:       'Certificate code',
    cert_code_label2:      'Code',
    cert_view:             'View certificate',
    cert_download:         'Download HTML',
    cert_download_pdf:     'Download PDF',
    cert_share_linkedin:   'Share on LinkedIn',
    cert_verify_title:     'Validate certificate',
    cert_verify_sub:       'Verify certificate codes issued by HackLabs.',
    cert_verify_btn:       'Validate code',
    cert_verify_hint:      'HackLabs-signed certificates are validated offline by cryptographic signature.',
    cert_valid:            'Valid certificate',
    cert_invalid:          'Invalid certificate',
    cert_user:             'User',
    cert_err_format:       'Invalid format. Copy the full HackLabs certificate code.',
    cert_err_sig:          'Invalid code: the cryptographic signature does not match a certificate issued by HackLabs.',
    cert_err_notfound:     'Code not found in this HackLabs instance.',
    cert_err_empty:        'Enter a code to validate.',
    cert_locked_title:     'Certificate locked',
    cert_locked_pre:       'Complete ',
    cert_locked_highlight:  '100% of the labs',
    cert_locked_post:       ' to unlock your free certificate of completion.',
    cert_progress_label:   'Current progress:',
    cert_go_progress:      'View my progress',
    lab_title_idor: 'A01 – Broken Access Control (IDOR)',
    lab_title_crypto: 'A02 – Cryptographic Failures',
    lab_title_sqli: 'A03 – SQL Injection',
    lab_title_cmdi: 'A03 – Command Injection',
    lab_title_insecure_design: 'A04 – Insecure Design',
    lab_title_misconfig: 'A05 – Security Misconfiguration',
    lab_title_outdated: 'A06 – Vulnerable & Outdated Components',
    lab_title_auth_failures: 'A07 – Auth & Identification Failures',
    lab_title_integrity: 'A08 – Software & Data Integrity Failures',
    lab_title_logging: 'A09 – Security Logging & Monitoring Failures',
    lab_title_ssrf: 'A10 – Server-Side Request Forgery (SSRF)',
    lab_title_host_enum: 'H01 – Network & Service Enumeration',
    lab_title_bruteforce: 'H02 – Login Bruteforce',
    lab_title_reverse_shell: 'H03 – Reverse Shell',
    lab_title_metasploit_exploitation: 'H04 – Metasploit: ActiveMQ RCE to Meterpreter',
    lab_title_credential_hunting: 'H05 – Linux Credential Hunting',
    lab_title_privesc: 'H06 – Privilege Escalation (SSH)',
    lab_title_sudo_suid: 'H07 – Sudo Misconfiguration Abuse',
    lab_title_cron_persistence: 'H08 – Cron Persistence',
    lab_title_ssh_lateral: 'H09 – SSH Keys & Lateral Movement',
    lab_title_network_pivoting: 'H10 – Network Pivoting & Tunneling',
    lab_title_container_escape: 'H11 – Container Escape',
    lab_title_c2_sliver: 'H12 – Command & Control: Sliver',
    lab_title_database_access: 'H13 – Database Access',
    lab_title_api_attacks: 'W01 – API Attacks – Insecure APIs Lab',
    lab_title_business_logic: 'W02 – Business Logic Flaws',
    lab_title_cors: 'W03 – CORS Misconfiguration',
    lab_title_csrf: 'W04 – CSRF – Cross-Site Request Forgery',
    lab_title_file_upload: 'W05 – File Upload – No Restrictions',
    lab_title_forgot_recovery: 'W06 – Forgot Password Recovery (Authentication Flaws)',
    lab_title_html_injection: 'W07 – HTML Injection (GET/POST/Stored)',
    lab_title_deserialization: 'W08 – Insecure Deserialization',
    lab_title_jwt: 'W09 – JWT Manipulation',
    lab_title_captcha_math: 'W10 – CAPTCHA Bypass',
    lab_title_oauth: 'W11 – OAuth 2.0 Attacks',
    lab_title_open_redirect: 'W12 – Open Redirect',
    lab_title_path_traversal: 'W13 – Path Traversal / LFI',
    lab_title_2fa_bypass: 'W14 – 2FA / MFA Bypass',
    lab_title_clickjacking: 'W15 – Clickjacking',
    lab_title_reset_poisoning: 'W16 – Password Reset Poisoning',
    lab_title_race_condition: 'W17 – Race Condition / TOCTOU',
    lab_title_session_hijacking: 'W18 – Session Hijacking',
    lab_title_ssti: 'W19 – SSTI – Server-Side Template Injection',
    lab_title_xss: 'W20 – XSS – Cross-Site Scripting',
    lab_title_xxe: 'W21 – XXE – XML External Entity',
    lab_title_account_takeover: 'W22 – Account Takeover via Recovery IDOR',
    lab_title_price_manipulation: 'W23 – Business Logic: Price Manipulation',
    lab_title_ai_jailbreak: 'AI01 – AI Jailbreak',
    lab_title_ai_supply_chain: 'AI02 – AI Supply Chain Poisoning',
    lab_title_indirect_injection: 'AI03 – Indirect Prompt Injection',
    lab_title_llm_exfil: 'AI04 – LLM Data Exfiltration',
    lab_title_prompt_injection: 'AI05 – Prompt Injection',
    lab_title_prompt_leaking: 'AI06 – Prompt Leaking',
    lab_title_ad_smb_enum: 'AD01 – SMB Enumeration & Null Session',
    lab_title_ad_ldap_enum: 'AD02 – LDAP Enumeration',
    lab_title_ad_password_spray: 'AD03 – Password Spraying',
    lab_title_ad_asrep_roast: 'AD04 – AS-REP Roasting',
    lab_title_ad_kerberoast: 'AD05 – Kerberoasting',
    lab_title_ad_gpp_passwords: 'AD06 – GPP Passwords in SYSVOL',
    lab_title_ad_bloodhound: 'AD07 – BloodHound & Attack Paths',
    lab_title_ad_acl_genericall: 'AD08 – ACL Abuse: GenericAll',
    lab_title_ad_acl_writemember: 'AD09 – ACL Abuse: AddSelf to group',
    lab_title_ad_dcsync: 'AD10 – DCSync',
    lab_title_ad_pth: 'AD11 – Pass-the-Hash',
    lab_title_ad_silver_ticket: 'AD12 – Silver Ticket',
    lab_title_ad_golden_ticket: 'AD13 – Golden Ticket',
    lab_title_ad_delegation: 'AD14 – Constrained Delegation',
    lab_title_ad_machine_quota: 'AD15 – MachineAccountQuota & RBCD',
    lab_title_df_file_signatures: 'DF01 – File Signature Analysis',
    lab_title_df_metadata_exif: 'DF02 – EXIF Metadata Analysis',
    lab_title_df_steganography: 'DF03 – Image Steganography',
    lab_title_df_archive_cracking: 'DF04 – Protected Archive Cracking',
    lab_title_df_email_analysis: 'DF05 – Email Forensics',
    lab_title_df_browser_artifacts: 'DF06 – Browser Artifacts',
    lab_title_df_log_analysis: 'DF07 – Log-based Attack Reconstruction',
    lab_title_df_pcap_credentials: 'DF08 – Plaintext Credentials (PCAP)',
    lab_title_df_pcap_exfiltration: 'DF09 – DNS Data Exfiltration',
    lab_title_df_file_carving: 'DF10 – File Carving from a Disk Image',
    lab_title_df_disk_timeline: 'DF11 – Timeline & Deleted File Recovery',
    lab_title_df_malware_strings: 'DF12 – Malware Triage: Strings & YARA',
    lab_title_df_pe_analysis: 'DF13 – PE Header Analysis',
    lab_title_df_memory_process: 'DF14 – Memory: Malicious Process',
    lab_title_df_memory_credentials: 'DF15 – Memory: Credentials in RAM',
    validate_flag_title: 'Validate Flag',
    validate_flag_label: 'Enter the flag for this lab',
    validate_flag_login_msg: 'Log in to validate and save progress',
    validate_flag_btn: 'Validate flag',
    validate_flag_unmark: 'Unmark',
    validate_flag_submit: 'Submit flag',
  },
  pt: {
    home: 'Início',
    logout: 'Sair',
    footer_warning: 'Apenas para uso educacional em ambientes isolados',
    modal_title: 'Resolução do laboratório',
    btn_resolution: 'Ver resolução',
    close: 'Fechar',
    cat_owasp_top_10: 'OWASP Top 10',
    cat_extras: 'Extras',
    cat_vulnerabilidades: 'Vulnerabilidades',
    cat_web_attacks: 'Web Attacks',
    cat_host_attacks: 'Host Attacks',
    cat_ia_attacks: 'AI Attacks',
    cat_ai_attacks: 'AI Attacks',
    cat_active_directory: 'Active Directory',
    cat_forense_digital: 'Forense Digital',
    labs: 'Labs',
    resolution_steps: 'Passos de exploração',
    tools_label: 'Ferramentas',
    badge_text: 'Intencionalmente Vulnerável · Apenas uso educacional',
    filter_label: 'Filtrar:',
    filter_all: 'Todos',
    open_lab: 'Abrir lab',
    test_credentials: 'Usuários e Senhas',
    col_username: 'Usuário',
    col_password: 'Senha',
    col_hash: 'Hash MD5',
    col_role: 'Função',
    stat_total: 'Total de Labs',
    stat_critical: 'Críticos',
    stat_high: 'Altos',
    stat_medium: 'Médios',
    hero_by: 'Plataforma de hacking ético por',
    hero_rest: 'Pratique o OWASP Top 10 (2021) e mais com Burp Suite, sqlmap, hydra e outras ferramentas do Kali Linux.',
    lab_cat_count: 'labs',
    misconfig_title: 'Configurações inseguras',
    misconfig_item1: 'Painel de administração acessível sem autenticação',
    misconfig_item2: 'Repositório Git exposto',
    misconfig_item3: 'Stack trace completo do servidor exposto em erros',
    misconfig_item4: 'API interna de usuários acessível sem autenticação',
    misconfig_hint: 'Use ferramentas de fuzzing de diretórios para descobrir os endpoints expostos.',
    misconfig_admin_panel: 'Painel de administração — Sem autenticação',
    lbl_username: 'Usuário',
    ph_username: 'seu_usuario',
    ph_email: 'seu@email.com',
    ph_password_min: 'Mínimo 6 caracteres',
    translated_by: 'Traduzido por',
    lbl_password: 'Senha',
    lbl_search: 'Buscar',
    lbl_search_products: 'Buscar produtos',
    lbl_host_ip: 'Host / IP',
    lbl_output: 'Saída',
    lbl_result: 'Resultado',
    lbl_target_url: 'URL de destino',
    lbl_file_path: 'Caminho do arquivo',
    lbl_xml_payload: 'Payload XML',
    lbl_jwt_token: 'Token JWT',
    btn_login: 'Iniciar sessão',
    btn_search: 'Buscar',
    btn_render: 'Renderizar',
    btn_fetch: 'Obter',
    gh_star_tooltip: 'Dar estrela no GitHub',
    btn_read: 'Ler',
    btn_ping: 'Ping',
    btn_upload: 'Enviar arquivo',
    btn_parse_xml: 'Processar XML',
    btn_go: 'Ir para destino',
    btn_change_pw: 'Alterar senha',
    btn_post_comment: 'Publicar comentário',
    btn_continue: 'Continuar',
    btn_verify: 'Verificar',
    btn_send_put: 'Enviar PUT',
    btn_launch_csrf: 'Disparar CSRF',
    ph_search: 'Buscar...',
    ph_search_products: 'Buscar produtos...',
    ph_redirect_url: 'https://exemplo.com/dashboard',
    ph_comment_name: 'Nome',
    ph_new_email: 'novo@email.com',
    ssti_label: 'Entrada de template',
    ssti_rendered: 'Saída renderizada',
    or_desc: 'Este portal redireciona os usuários após a conclusão de ações. O parâmetro de destino não é validado.',
    or_examples: 'Exemplos',
    or_comment1: '# Redirecionamento para site externo (phishing)',
    or_comment2: '# Bypass de filtros básicos',
    jwt_generate: 'Gerar Token',
    jwt_btn_gen: 'Gerar JWT',
    jwt_secret_used: 'Segredo utilizado:',
    jwt_verify: 'Verificar / Manipular Token',
    jwt_btn_verify: 'Verificar',
    jwt_decoded: 'Payload decodificado',
    deser_title: 'Desserializar objeto Python (pickle)',
    deser_label: 'Payload (base64 pickle)',
    deser_ph: 'Insira um objeto pickle serializado em base64...',
    deser_btn: 'Desserializar',
    deser_example: 'Exemplo seguro (dict):',
    deser_result: 'Resultado',
    cors_api_title: 'API de dados internos',
    cors_api_desc: 'A API retorna dados sensíveis e reflete qualquer cabeçalho Origin com Access-Control-Allow-Credentials: true.',
    cors_comment1: '# Endpoint vulnerável',
    cors_comment2: '# Testar com curl (observe os cabeçalhos CORS)',
    cors_btn: 'Fazer requisição cross-origin',
    cors_response: 'Resposta:',
    cors_poc_title: 'PoC – Página maliciosa',
    xss_tab_reflected: 'Refletido',
    xss_tab_stored: 'Armazenado',
    xss_tab_dom: 'Baseado em DOM',
    xss_results_for: 'Resultados para:',
    xss_name_ph: 'Nome',
    xss_btn_post: 'Publicar comentário',
    xss_dom_label: 'Saída dinâmica (a partir do fragmento da URL):',
    xss_dom_hint: 'Adicione um fragmento à URL: #<img src=x onerror=alert(1)>',
    csrf_user_label: 'Usuário:',
    csrf_id_label: 'ID:',
    csrf_role_label: 'Função:',
    csrf_new_pw: 'Nova senha',
    csrf_ph_new_pw: 'Digite uma senha',
    csrf_btn_change: 'Alterar senha',
    csrf_attack_title: 'Ataque CSRF — Auto-envio',
    csrf_victim_id: 'ID do usuário vítima',
    csrf_btn_launch: 'Disparar CSRF',
    lab_title_file_upload: 'W05 – Upload de Arquivo Sem Restrições',
    lab_title_api_attacks: 'W01 – Ataques a API – Laboratório de APIs Inseguras',
    lab_title_business_logic: 'W02 – Falhas de Lógica de Negócios',
    lab_title_account_takeover: 'W22 – Tomada de Conta via IDOR de Recuperação',
    lab_title_price_manipulation: 'W23 – Lógica de Negócios: Manipulação de Preço',
    lab_title_metasploit_exploitation: 'H04 – Metasploit: RCE no ActiveMQ para Meterpreter',
    ato_portal_title: 'Portal de identidade do HackLabs',
    ato_signed_in: 'Sessão iniciada:',
    ato_account_id: 'ID da conta:',
    ato_recovery_email: 'E-mail de recuperação:',
    ato_update_profile: 'Atualizar perfil',
    ato_sign_out: 'Encerrar sessão',
    ato_ph_username: 'Usuário',
    ato_ph_password: 'Senha',
    ato_sign_in: 'Iniciar sessão',
    ato_auditor_access: 'Acesso de auditor externo',
    ato_password_recovery: 'Recuperação de senha',
    ato_reset_delivery: 'Os links de redefinição são enviados para o e-mail de recuperação armazenado na conta de destino.',
    ato_ph_target_username: 'Usuário (ex: administrator)',
    ato_send_reset: 'Enviar link de redefinição',
    ato_directory_api: 'API do diretório de funcionários',
    ato_mailbox: 'Caixa de entrada de recuperação',
    ato_mailbox_visibility: 'Visível apenas para a identidade autenticada',
    ato_mailbox_login_hint: 'Inicie sessão para visualizar sua caixa de recuperação.',
    ato_to: 'Para:',
    ato_subject: 'Assunto:',
    ato_reset_subject: 'Redefinição de senha',
    ato_open_reset: 'Abrir link de redefinição',
    ato_no_messages: 'Não há mensagens para',
    ato_reset_lab: 'Reiniciar estado do lab',
    ato_set_new_password: 'Definir uma nova senha',
    ato_ph_new_password: 'Nova senha',
    ato_update_password: 'Atualizar senha',
    ato_invalid_token: 'Este token de redefinição não é válido, expirou ou já foi utilizado.',
    ato_return_portal: 'Voltar ao portal de identidade',
    ato_msg_bad_credentials: 'Credenciais incorretas.',
    ato_msg_login_success: 'Sessão iniciada com sucesso.',
    ato_msg_email_updated: 'E-mail de recuperação atualizado.',
    ato_msg_reset_sent: 'Se a conta existir, um link foi enviado para seu e-mail de recuperação.',
    ato_msg_password_length: 'A nova senha deve ter pelo menos 8 caracteres.',
    ato_msg_password_updated: 'Senha atualizada. Inicie sessão com a conta recuperada.',
    ato_msg_lab_reset: 'Estado do laboratório reiniciado.',
    price_add_cart: 'Adicionar ao carrinho',
    price_server_cart: 'Carrinho no servidor',
    price_balance: 'Saldo:',
    price_checkout: 'Finalizar compra',
    price_purchase_success: 'Compra realizada com sucesso!',
    price_insufficient_balance: 'Saldo insuficiente.',
    price_empty_cart: 'O carrinho está vazio.',
    price_clear_cart: 'Esvaziar carrinho',
    price_remove_item: 'Remover',
    msf_isolated_target: 'Alvo isolado · CVE-2023-46604',
    msf_web_console: 'Console web',
    msf_recon_checkpoint: 'Ponto de controle de reconhecimento',
    lab_title_container_escape: 'H11 – Escape de Contêiner',
    lab_title_bruteforce: 'H02 – Força Bruta em Login',
    lab_title_forgot_recovery: 'W06 – Recuperação de Senha (Falhas de Autenticação)',
    lab_title_html_injection: 'W07 – Injeção de HTML (GET/POST/Armazenado)',
    lab_title_oauth: 'W11 – Ataques a OAuth 2.0',
    lab_title_race_condition: 'W17 – Race Condition / TOCTOU',
    lab_title_session_hijacking: 'W18 – Sequestro de Sessão',
    lab_title_ad_smb_enum: 'AD01 – Enumeração SMB e Sessão Nula',
    lab_title_ad_ldap_enum: 'AD02 – Enumeração LDAP',
    lab_title_ad_password_spray: 'AD03 – Password Spraying',
    lab_title_ad_asrep_roast: 'AD04 – AS-REP Roasting',
    lab_title_ad_kerberoast: 'AD05 – Kerberoasting',
    lab_title_ad_gpp_passwords: 'AD06 – Senhas GPP no SYSVOL',
    lab_title_ad_bloodhound: 'AD07 – BloodHound e Rotas de Ataque',
    lab_title_ad_acl_genericall: 'AD08 – Abuso de ACL: GenericAll',
    lab_title_ad_acl_writemember: 'AD09 – Abuso de ACL: AddSelf ao Grupo',
    lab_title_ad_dcsync: 'AD10 – DCSync',
    lab_title_ad_pth: 'AD11 – Pass-the-Hash',
    lab_title_ad_silver_ticket: 'AD12 – Silver Ticket',
    lab_title_ad_golden_ticket: 'AD13 – Golden Ticket',
    lab_title_ad_delegation: 'AD14 – Delegação Restrita',
    lab_title_ad_machine_quota: 'AD15 – MachineAccountQuota e RBCD',
    lab_title_df_file_signatures: 'DF01 – Análise de Assinaturas de Arquivo',
    lab_title_df_metadata_exif: 'DF02 – Análise de Metadados EXIF',
    lab_title_df_steganography: 'DF03 – Esteganografia em Imagem',
    lab_title_df_archive_cracking: 'DF04 – Quebra de Arquivo Compactado Protegido',
    lab_title_df_email_analysis: 'DF05 – Análise Forense de E-mail',
    lab_title_df_browser_artifacts: 'DF06 – Artefatos de Navegador',
    lab_title_df_log_analysis: 'DF07 – Reconstrução de Ataque por Logs',
    lab_title_df_pcap_credentials: 'DF08 – Credenciais em Texto Claro (PCAP)',
    lab_title_df_pcap_exfiltration: 'DF09 – Exfiltração de Dados via DNS',
    lab_title_df_file_carving: 'DF10 – File Carving em Imagem de Disco',
    lab_title_df_disk_timeline: 'DF11 – Linha do Tempo e Recuperação de Arquivos Excluídos',
    lab_title_df_malware_strings: 'DF12 – Triagem de Malware: Strings e YARA',
    lab_title_df_pe_analysis: 'DF13 – Análise de Cabeçalhos PE',
    lab_title_df_memory_process: 'DF14 – Memória: Processo Malicioso',
    lab_title_df_memory_credentials: 'DF15 – Memória: Credenciais na RAM',
    df_evidence_title: 'Evidência a analisar',
    df_evidence_download_btn: 'Baixar evidência',
    df_evidence_filename_lbl: 'Arquivo',
    df_evidence_hash_lbl: 'SHA-256',
    df_evidence_hash_hint: 'Verifique a integridade do arquivo antes de analisá-lo.',
    df_quickstart: 'Início rápido',
    df_obj_flag_where: '— a flag está oculta no próprio arquivo de evidência; analise-o e valide-a na caixa «Validar Flag» ao final desta página.',
    df_quiz_title: 'Perguntas guiadas',
    df_quiz_check: 'Verificar',
    df_quiz_hint_btn: '💡 Dica',
    df_quiz_footer: 'Responda a todas as perguntas para concluir a análise; a flag final é validada na caixa «Validar Flag» ao final desta página.',
    df_quiz_correct: '✓ Correto',
    df_quiz_incorrect: '✗ Incorreto, tente novamente',
    host_answer_title: 'Validar resposta',
    host_answer_btn: 'Validar resposta',
    host_answer_done: 'Concluído',
    host_answer_login: 'para validar e salvar a resposta.',
    host_answer_login_link: 'Inicie sessão',
    host_answer_correct: 'Resposta correta. Laboratório concluído.',
    host_answer_incorrect: 'Resposta incorreta. Revise a evidência.',
    df_file_signatures_obj_desc: 'Um funcionário enviou um documento com extensão .docx que "não abre direito" no Word. Antes de tentar repará-lo, verifique que tipo de arquivo ele realmente é — a extensão nem sempre diz a verdade.',
    df_metadata_exif_obj_desc: 'Uma foto enviada para a intranet corporativa revela mais do que aparenta. Extraia seus metadados EXIF para descobrir onde e com qual dispositivo foi tirada.',
    df_steganography_obj_desc: 'Esta foto de um pôr do sol esconde mais do que pixels. Analise seus bits menos significativos (LSB) para recuperar a mensagem oculta.',
    df_archive_cracking_obj_desc: 'O RH protegeu um relatório financeiro com uma senha fraca antes de publicá-lo por engano em uma pasta compartilhada. Quebre a senha offline para acessar o conteúdo.',
    df_email_analysis_obj_desc: 'Um colega recebeu um e-mail suspeito do "RH" solicitando a confirmação de dados de folha de pagamento. Analise os cabeçalhos do e-mail para detectar indícios de phishing e extraia o anexo.',
    df_browser_artifacts_obj_desc: 'O histórico de navegação de uma máquina comprometida pode conter credenciais vazadas. Examine o arquivo SQLite do navegador em busca de URLs suspeitas.',
    df_log_analysis_obj_desc: 'Um servidor bastion sofreu uma tentativa de acesso suspeita. Analise seu log de autenticação para identificar o ataque, o usuário comprometido e as ações do invasor após entrar.',
    df_pcap_credentials_obj_desc: 'Foi capturado tráfego de rede de um segmento não criptografado. Analise a captura para extrair credenciais e dados transmitidos em texto claro.',
    df_pcap_exfiltration_obj_desc: 'Um endpoint apresenta um volume anormal de consultas DNS para um domínio externo. Reconstrua os dados exfiltrados a partir das requisições DNS capturadas.',
    df_file_carving_obj_desc: 'Um despejo de setores não alocados contém um arquivo que foi excluído, mas nunca sobrescrito. Localize sua assinatura e recupere-o via file carving.',
    df_disk_timeline_obj_desc: 'Uma estação de trabalho teve um arquivo excluído intencionalmente. Use ferramentas forenses de disco para listar entradas excluídas e recuperar seu conteúdo.',
    df_malware_strings_obj_desc: 'Um binário suspeito surgiu em um servidor. Analise-o estaticamente com strings e regras YARA para identificar indicadores de comprometimento (IoCs) sem precisar executá-lo.',
    df_pe_analysis_obj_desc: 'Um executável disfarçado de fatura chegou por e-mail. Analise seus cabeçalhos PE de forma estática para identificar indícios de comportamento malicioso.',
    df_memory_process_obj_desc: 'A memória de um servidor Linux comprometido foi despejada. Localize o processo que finge ser uma thread de kernel mas na verdade é malicioso.',
    df_memory_credentials_obj_desc: 'A memória de outro servidor Linux — este hospedando um banco de dados — foi despejada. Recupere o histórico de comandos de um administrador a partir da RAM.',
    ad_env_title: 'Máquina alvo',
    ad_env_realm_lbl: 'Domínio',
    ad_env_dc_lbl: 'Domain Controller',
    ad_env_foothold_lbl: 'Credencial inicial',
    ad_env_foothold_val: 'svc.readonly / ReadOnly123!  (obtida no lab AD01)',
    ad_env_hosts_hint: 'O Kerberos exige resolver o FQDN do DC. Adicione a entrada ao seu /etc/hosts antes de começar:',
    ad_env_not_deployed: 'O Domain Controller não está implantado nesta instância. Inicie-o com «sudo bash deploy.sh» (ou «docker compose -f docker-compose.active-directory.yml up -d --build») e substitua <DC_IP> pelo IP exibido na implantação.',
    ad_env_tools_lbl: 'Ferramentas',
    ad_env_foothold_hint: 'obtida no lab AD01',
    ad_obj_flag_where: '— capture-a no Domain Controller e valide-a na caixa «Validar Flag» ao final desta página.',
    ad_quickstart: 'Início rápido',
    ad_smb_enum_obj_desc: 'O Domain Controller aceita sessões nulas: você pode listar compartilhamentos sem credenciais. O compartilhamento //DC01/public pode ser lido anonimamente e contém a flag, além das credenciais de serviço necessárias para os demais labs.',
    ad_ldap_enum_obj_desc: 'Com a conta de serviço svc.readonly obtida no AD01, enumere os usuários do domínio e extraia os objetos do diretório via LDAP. O servidor permite autenticações simples sem criptografia e um administrador deixou uma senha — e a flag — anotada no atributo description de um usuário.',
    ad_password_spray_obj_desc: 'A política de domínio não exige complexidade nem bloqueia contas após falhas sucessivas. Realize um ataque de password spraying contra todos os usuários do domínio: a conta vulnerável concede acesso ao seu compartilhamento pessoal //DC01/jsmith, onde está a flag.',
    ad_asrep_roast_obj_desc: 'Uma conta de serviço está configurada com a pré-autenticação Kerberos desabilitada (DONT_REQ_PREAUTH). Solicite seu AS-REP, quebre offline o hash krb5asrep e utilize a senha recuperada para acessar //DC01/backup.',
    ad_kerberoast_obj_desc: 'Existem contas de usuário com SPN registrado, permitindo que qualquer usuário autenticado solicite seu ticket de serviço. Solicite o TGS-REP, quebre o hash krb5tgs e acesse //DC01/sqldata com essas credenciais.',
    ad_gpp_passwords_obj_desc: 'O compartilhamento SYSVOL armazena uma GPO com o atributo cpassword. Decodifique-o usando a chave AES publicada pela Microsoft (MS14-025) e use a senha obtida para acessar //DC01/deploy.',
    ad_bloodhound_obj_desc: 'Colete dados do domínio com o BloodHound e localize o caminho mais curto até os Domain Admins. Um grupo legado aninhado quebra a hierarquia de privilégios: a flag está no seu atributo info.',
    ad_acl_genericall_obj_desc: 'A conta svc.readonly possui permissão GenericAll sobre outro usuário do domínio. Altere a senha dele sem precisar saber a senha anterior, autentique-se e acesse //DC01/hr_private.',
    ad_acl_writemember_obj_desc: 'A conta svc.readonly pode alterar o atributo member do grupo «IT Support». Adicione a si mesmo ao grupo para herdar seus privilégios e acesse //DC01/it_share.',
    ad_dcsync_obj_desc: 'O grupo «IT Support» possui direitos de replicação de diretório delegados (DS-Replication-Get-Changes). A partir dessa associação, replique o NTDS e extraia os hashes do domínio: o hash de Administrator permite acessar //DC01/secrets.',
    ad_pth_obj_desc: 'Com o hash NT de a.miller obtido na extração do NTDS, autentique-se no domínio sem conhecer a senha em texto claro e acesse //DC01/finance.',
    ad_silver_ticket_obj_desc: 'Com o hash da conta de máquina DC01$ você pode forjar um ticket de serviço CIFS válido sem contatar o KDC. Crie o Silver Ticket como Administrator e acesse //DC01/silver.',
    ad_golden_ticket_obj_desc: 'O hash da conta krbtgt assina todos os TGTs do domínio. Forje um TGT arbitrário com a identidade desejada e utilize-o para ler //DC01/vault.',
    ad_delegation_obj_desc: 'A conta svc.delegate possui delegação restrita com transição de protocolo configurada para cifs/dc01. Obtenha sua senha por Kerberoasting, personifique Administrator via S4U2Self + S4U2Proxy e acesse //DC01/deleg.',
    ad_machine_quota_obj_desc: 'O valor de ms-DS-MachineAccountQuota é 10, permitindo que qualquer usuário do domínio cadastre novas contas de computador. Crie sua máquina, autentique-se como ela e acesse //DC01/computers.',
    htmlinj_tab_get: 'GET Refletido',
    htmlinj_tab_post: 'Render POST',
    htmlinj_tab_stored: 'Blog Armazenado',
    oauth_flow: 'Fluxo de Autorização',
    oauth_flow_desc: 'Clique no botão para iniciar o fluxo OAuth 2.0. O servidor redirecionará para o callback com um código de autorização.',
    oauth_start_btn: 'Iniciar fluxo OAuth',
    oauth_token: 'Token de Acesso',
    oauth_userinfo_hint: 'Use este token para acessar recursos protegidos:',
    oauth_how: 'Como funciona o ataque ao parâmetro redirect_uri',
    oauth_how_desc: 'No OAuth 2.0, ao autorizar uma aplicação o servidor redireciona o usuário para o redirect_uri incluindo o código de autorização. Se o servidor não validar que essa URI pertence à aplicação legítima, o atacante pode substituir o redirect_uri por uma URL sob seu controle e capturar o código.',
    oauth_step1: 'O usuário clica em "Autorizar" na aplicação legítima',
    oauth_step2: 'O atacante intercepta a requisição e altera o redirect_uri para uma URL sob seu controle',
    oauth_step3: 'O código de autorização é enviado para o servidor do atacante',
    oauth_step4: 'O atacante troca o código por um token de acesso',
    oauth_step5: 'O atacante acessa os dados e recursos da vítima',
    shop_catalog: 'Catálogo de Produtos',
    shop_balance: 'Saldo:',
    shop_prod1_name: 'HackLabs Pro License',
    shop_prod1_desc: 'Acesso completo a todos os labs',
    shop_qty: 'Qtd:',
    shop_add_btn: 'Adicionar ao carrinho',
    shop_prod2_name: 'Zero-Day Exploit Kit',
    shop_prod2_desc: 'Framework de exploração simulado',
    shop_prod3_name: 'Serviço VPN',
    shop_prod3_desc: 'VPN anônima por 1 ano',
    shop_cart: 'Carrinho',
    shop_total: 'Total',
    shop_cart_empty: 'O carrinho está vazio.',
    shop_apply_coupon: 'Aplicar',
    shop_checkout: 'Comprar',
    shop_clear_cart: 'Limpar',
    race_balances: 'Saldos',
    race_alice: 'Alice',
    race_bob: 'Bob',
    race_transfer_btn: 'Transferir Alice → Bob',
    race_reset_btn: 'Reiniciar',
    race_attack_panel: 'Painel de Ataque Race Condition',
    race_attack_desc: 'Dispara 10 requisições concorrentes de $5 cada. Se Alice tem $10.00 e o servidor possui race condition, Bob pode terminar com mais de $10.00.',
    race_run_btn: 'Executar Race Attack',
    race_log: 'Log de Resultados',
    container_recon: 'Reconhecimento do Contêiner',
    container_check_in: 'Executando em contêiner',
    container_check_socket: '/var/run/docker.sock',
    container_check_root: 'Executando como root',
    container_check_priv: 'Modo privilegiado',
    container_check_hostpath: 'Caminho do host montado com escrita',
    container_check_id: 'saída do comando id',
    container_check_cap: 'CapEff (capacidades efetivas)',
    obj_title: 'Objetivo',
    obj_flag_lbl: 'Flag:',
    obj_flag_hint: '— valide-a na caixa «Validar Flag» ao final desta página.',
    crypto_obj_desc: 'Inicie sessão e examine o cookie auth_token: é um hash MD5 sem salt da senha. Quebre o hash, recupere a senha e entre novamente para obter a flag.',
    sqli_obj_desc: 'O campo de busca concatena sua entrada na consulta SQL. Injete código SQL para listar o produto oculto da categoria secret, cuja descrição contém a flag.',
    outdated_obj_desc: 'A página utiliza uma versão vulnerável do jQuery. Consiga executar XSS e capture o cookie legacy_debug, que contém a flag.',
    auth_failures_obj_desc: 'Assuma o controle da conta admin: force o acesso manipulando o cookie is_admin=true ou realize força bruta nas credenciais fracas. A flag é exibida na mensagem de boas-vindas.',
    logging_obj_desc: 'O sistema não registra tentativas de login. Autentique-se com credenciais válidas sem deixar rastros; a flag é exibida após o login bem-sucedido.',
    open_redirect_obj_desc: 'O parâmetro url redireciona sem validar o destino. Force um redirecionamento para um domínio externo: com o sucesso, o servidor insere a flag no cabeçalho X-HackLabs-Flag.',
    path_traversal_obj_desc: 'O parâmetro file lê arquivos do servidor sem sanitização de caminho. Use path traversal para escapar do diretório e ler o arquivo secreto com a flag.',
    ssti_obj_desc: 'Sua entrada é processada diretamente como template Jinja2 no servidor. Alcance execução remota de comandos (RCE) via SSTI e leia o arquivo da flag.',
    xss_obj_desc: 'Injete JavaScript que seja executado no navegador da vítima e capture o cookie xss_flag contendo a flag.',
    xxe_obj_desc: 'A API de tickets processa XML com entidades externas habilitadas. Explore XXE para ler um arquivo local do servidor; o conteúdo da flag retorna na resposta JSON.',
    upload_obj_title: 'Objetivo',
    upload_obj_desc: 'O formulário grava arquivos em /uploads/ e o servidor executa como PHP qualquer arquivo com extensão .php. Envie uma webshell, obtenha RCE e recupere a flag.',
    upload_obj_1: 'Envie uma webshell PHP (de acordo com a dificuldade, contorne o filtro de extensão / MIME).',
    upload_obj_2: 'Acesse-a em /uploads/<arquivo>?cmd=id para confirmar o RCE.',
    upload_obj_3: 'Exiba as variáveis de ambiente do processo para ler a flag: ?cmd=env ou ?cmd=printenv+HL_FLAG.',
    upload_obj_flag_lbl: 'Flag:',
    upload_obj_flag_hint: '— valide-a na caixa «Validar Flag» ao final desta página.',
    upload_dropzone: 'Clique ou arraste um arquivo aqui',
    upload_no_restrict: 'Sem restrições de tipo de arquivo',
    upload_btn: 'Enviar arquivo',
    upload_open: 'Abrir arquivo',
    upload_list: 'Arquivos enviados (/uploads/)',
    upload_access: 'Acessar →',
    upload_del_title: 'Excluir arquivo',
    upload_del_irrev: 'Esta ação não pode ser desfeita',
    upload_del_confirm: 'Deseja excluir',
    upload_del_cancel: 'Cancelar',
    upload_del_ok: 'Excluir',
    xxe_btn_normal: 'XML Normal',
    xxe_btn_xxe: 'Payload XXE',
    xxe_form_title: 'Criar Ticket de Suporte',
    xxe_lbl_full_name: 'Nome completo',
    xxe_lbl_email: 'E-mail',
    xxe_lbl_department: 'Departamento',
    xxe_lbl_priority: 'Prioridade',
    xxe_lbl_description: 'Descrição do problema',
    xxe_ph_name: 'João Silva',
    xxe_ph_email: 'joao@empresa.com',
    xxe_ph_message: 'Descreva o problema detalhadamente...',
    xxe_btn_send: 'Enviar Ticket',
    xxe_ticket_created: 'Ticket criado com sucesso',
    xxe_subject: 'Assunto:',
    xxe_message: 'Mensagem:',
    xxe_recent_tickets: 'Tickets recentes',
    xxe_col_user: 'Usuário',
    xxe_col_subject: 'Assunto',
    xxe_col_status: 'Status',
    xxe_opt_support: 'Suporte Técnico',
    xxe_opt_sales: 'Vendas',
    xxe_opt_hr: 'Recursos Humanos',
    xxe_opt_admin: 'Administração',
    xxe_opt_security: 'Segurança da Informação',
    xxe_opt_low: '🟢 Baixa',
    xxe_opt_medium: '🟡 Média',
    xxe_opt_high: '🟠 Alta',
    xxe_opt_critical: '🔴 Crítica',
    xxe_status_resolved: '✓ Resolvido',
    xxe_status_pending: '⏳ Pendente',
    xxe_parsed: 'Resultado processado',
    xxe_name: 'nome:',
    xxe_email: 'email:',
    pt_btn_read: 'Ler',
    bf_tab_http: 'Login HTTP',
    bf_login_title: 'Login sem rate-limiting',
    bf_ssh_desc: 'Ataque de força bruta contra o serviço SSH da máquina alvo. Não há rate-limiting ativo; a autenticação é gerenciada pelo servidor SSH do host.',
    bf_smb_desc: 'Ataque de força bruta contra o serviço SMB/CIFS da máquina alvo (porta 445).',
    bf_ftp_desc: 'Ataque de força bruta contra o serviço FTP da máquina alvo (porta 21). Não há rate-limiting ativo.',
    sqli_label: 'Buscar produtos',
    sqli_query: 'Consulta:',
    sqli_no_results: 'Nenhum resultado para',
    cmdi_output: 'Saída',
    idor_label_id: 'ID de usuário',
    idor_btn_view: 'Ver perfil',
    idor_profile: 'Perfil — ID:',
    idor_no_user: 'Usuário não encontrado com ID=',
    insec_btn_continue: 'Continuar',
    insec_user_label: 'Usuário:',
    insec_lbl_answer: 'Resposta',
    insec_btn_verify: 'Verificar',
    insec_compromised: 'Conta comprometida!',
    insec_user_inline: 'Usuário:',
    insec_pw_label: 'Senha em texto claro:',
    out_label: 'Buscar',
    out_ph: 'Buscar produtos...',
    out_searching: 'Buscando:',
    out_enter: 'Digite um termo para busca...',
    int_target_id: 'ID do usuário alvo',
    int_new_role: 'Nova função',
    int_new_email: 'Novo e-mail (opcional)',
    int_btn_send: 'Enviar PUT',
    log_empty: '(vazio — nenhum evento de segurança registrado)',
    ssrf_label: 'URL de destino',
    ssrf_response: 'Resposta de:',
    auth_lbl_user: 'Usuário',
    auth_lbl_pass: 'Senha',
    auth_btn_login: 'Iniciar sessão',
    difficulty_label: 'Dificuldade',
    sidebar_search: 'Buscar lab...',
    nav_profile: 'Meu perfil',
    nav_progress: 'Meu progresso',
    nav_logout: 'Encerrar sessão',
    complete_lab: 'Concluir',
    completed_lab: 'Concluído',
    progress_hint_title: 'Progresso dos labs',
    progress_hint_body: 'Para salvar seu progresso use uma conta própria. Os usuários de teste (admin, alice…) são para práticas.',
    progress_hint_cta: 'Criar conta',
    progress_labs_completed: 'labs concluídos',
    progress_completed: 'concluído',
    progress_completed_cap: 'Concluído',
    progress_xp_earned: 'XP Ganho',
    progress_xp_remaining: 'XP restante',
    progress_pending_critical: 'Críticos Pendentes',
    progress_achievements: 'Conquistas',
    progress_done: 'Concluídos',
    progress_pending: 'Pendentes',
    nav_certificate: 'Certificado',
    cert_page_title: 'Certificado de Conclusão',
    cert_page_sub: 'Conclua 100% dos laboratórios para desbloquear seu certificado gratuito.',
    cert_unlocked: 'Certificado desbloqueado',
    cert_holder: 'Titular',
    cert_rank: 'Classificação',
    cert_issuer: 'Emissor',
    cert_issued: 'Emitido',
    cert_code_label: 'Código do certificado',
    cert_code_label2: 'Código',
    cert_view: 'Ver certificado',
    cert_download: 'Baixar HTML',
    cert_download_pdf: 'Baixar PDF',
    cert_share_linkedin: 'Compartilhar no LinkedIn',
    cert_verify_title: 'Validar certificado',
    cert_verify_sub: 'Valide códigos de certificados emitidos pelo HackLabs.',
    cert_verify_btn: 'Validar código',
    cert_verify_hint: 'Os certificados assinados pelo HackLabs são validados offline por assinatura criptográfica.',
    cert_valid: 'Certificado válido',
    cert_invalid: 'Certificado inválido',
    cert_user: 'Usuário',
    cert_err_format: 'Formato inválido. Copie o código completo do certificado HackLabs.',
    cert_err_sig: 'Código inválido: a assinatura criptográfica não corresponde a um certificado emitido pelo HackLabs.',
    cert_err_notfound: 'Código não encontrado nesta instância do HackLabs.',
    cert_err_empty: 'Insira um código para validar.',
    cert_locked_title: 'Certificado bloqueado',
    cert_locked_pre: 'Conclua ',
    cert_locked_highlight: '100% dos laboratórios',
    cert_locked_post: ' para desbloquear seu certificado de conclusão gratuito.',
    cert_progress_label: 'Progresso atual:',
    cert_go_progress: 'Ver meu progresso',
    validate_flag_title: 'Validar Flag',
    validate_flag_label: 'Insira a flag deste lab',
    validate_flag_login_msg: 'Inicie sessão para validar e salvar o progresso',
    validate_flag_btn: 'Validar flag',
    validate_flag_unmark: 'Desmarcar',
    validate_flag_submit: 'Enviar flag',
    lab_title_idor: 'A01 – Controle de Acesso Quebrado (IDOR)',
    lab_title_crypto: 'A02 – Falhas Criptográficas',
    lab_title_sqli: 'A03 – Injeção de SQL',
    lab_title_cmdi: 'A03 – Injeção de Comandos',
    lab_title_insecure_design: 'A04 – Design Inseguro',
    lab_title_misconfig: 'A05 – Configuração Insegura de Segurança',
    lab_title_outdated: 'A06 – Componentes Vulneráveis e Desatualizados',
    lab_title_auth_failures: 'A07 – Falhas de Identificação e Autenticação',
    lab_title_integrity: 'A08 – Falhas de Integridade de Software e Dados',
    lab_title_logging: 'A09 – Falhas de Registro e Monitoramento',
    lab_title_ssrf: 'A10 – Falsificação de Requisição no Servidor (SSRF)',
    lab_title_host_enum: 'H01 – Enumeração de Rede e Serviços',
    lab_title_reverse_shell: 'H03 – Shell Reversa',
    lab_title_credential_hunting: 'H05 – Caça de Credenciais no Linux',
    lab_title_privesc: 'H06 – Escalação de Privilégios (SSH)',
    lab_title_sudo_suid: 'H07 – Abuso de Má Configuração do Sudo',
    lab_title_cron_persistence: 'H08 – Persistência via Cron',
    lab_title_ssh_lateral: 'H09 – Chaves SSH e Movimentação Lateral',
    lab_title_network_pivoting: 'H10 – Pivoting de Rede e Tunelamento',
    lab_title_c2_sliver: 'H12 – Comando e Controle: Sliver',
    lab_title_database_access: 'H13 – Acesso a Banco de Dados',
    lab_title_cors: 'W03 – Má Configuração de CORS',
    lab_title_csrf: 'W04 – CSRF – Falsificação de Requisição Entre Sites',
    lab_title_deserialization: 'W08 – Desserialização Insegura',
    lab_title_jwt: 'W09 – Manipulação de JWT',
    lab_title_captcha_math: 'W10 – Bypass de CAPTCHA',
    lab_title_open_redirect: 'W12 – Redirecionamento Aberto',
    lab_title_path_traversal: 'W13 – Path Traversal / LFI',
    lab_title_2fa_bypass: 'W14 – Bypass de 2FA / MFA',
    lab_title_clickjacking: 'W15 – Clickjacking',
    lab_title_reset_poisoning: 'W16 – Envenenamento de Redefinição de Senha',
    lab_title_ssti: 'W19 – SSTI – Injeção de Template no Servidor',
    lab_title_xss: 'W20 – XSS – Cross-Site Scripting',
    lab_title_xxe: 'W21 – XXE – Entidade Externa XML',
    lab_title_ai_jailbreak: 'AI01 – Jailbreak de IA',
    lab_title_ai_supply_chain: 'AI02 – Envenenamento da Cadeia de Suprimentos de IA',
    lab_title_indirect_injection: 'AI03 – Injeção Indireta de Prompt',
    lab_title_llm_exfil: 'AI04 – Exfiltração de Dados via LLM',
    lab_title_prompt_injection: 'AI05 – Injeção de Prompt',
    lab_title_prompt_leaking: 'AI06 – Vazamento de Prompt',
  }
};

// ── State ─────────────────────────────────────────────────────────
const HL = {
  lang:    localStorage.getItem('hl_lang')    || 'es',
  theme:   localStorage.getItem('hl_theme')   || 'dark',
  sidebar: localStorage.getItem('hl_sidebar') !== 'closed',
};

// ── i18n ──────────────────────────────────────────────────────────
function t(key) {
  return (T[HL.lang] || T.es)[key] || key;
}

function applyTranslations() {
  const dict = T[HL.lang] || T.es;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = dict[key];
    if (val === undefined) return;

    if (el.tagName === 'INPUT' && el.type !== 'submit') {
      el.placeholder = val;
    } else if (el.children.length === 0) {
      el.textContent = val;
    } else {
      [...el.childNodes].forEach(node => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
          node.textContent = ' ' + val;
        }
      });
    }
  });

  // Placeholder-only elements (inputs/textareas with data-i18n-placeholder)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const val = dict[key];
    if (val !== undefined) el.placeholder = val;
  });

  // Sync lang button active states
  ['es', 'en', 'pt'].forEach(l => {
    const btn = document.getElementById('lang-' + l);
    if (btn) btn.classList.toggle('active-lang', l === HL.lang);
  });

  // Apply lang-content visibility across the whole page (not just modal)
  applyResolutionLang('body');
}

// ── GitHub stars helper ──────────────────────────────────────────
async function fetchGitHubStars() {
  const repo = 'afsh4ck/HackLabs';
  const elWrap = document.getElementById('gh-stars');
  const elCount = document.getElementById('gh-star-count');
  const elBtn = document.getElementById('gh-star-btn');
  if (!elWrap || !elCount || !elBtn) return;
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`);
    if (!res.ok) throw new Error('GitHub API error');
    const data = await res.json();
    elCount.textContent = (data.stargazers_count || 0).toLocaleString();
    elWrap.classList.remove('hidden');
  } catch (err) {
    elCount.textContent = 'N/A';
    elWrap.classList.remove('hidden');
  }
  // Set localized custom tooltip
  try {
    const title = t('gh_star_tooltip');
    const tooltip = document.getElementById('gh-star-tooltip');
    if (tooltip) tooltip.textContent = title;
    elBtn.setAttribute('aria-label', title);
  } catch (e) {}

  // Click behavior: open repo page so user can star easily (requires GitHub login)
  elBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://github.com/afsh4ck/HackLabs', '_blank');
  });
}

// Init on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  try { fetchGitHubStars(); } catch (e) {}
});

function setLang(lang) {
  HL.lang = lang;
  localStorage.setItem('hl_lang', lang);
  try {
    document.documentElement.lang = (lang === 'pt' ? 'pt-BR' : lang);
  } catch(e) {}
  // Cambia el texto del botón principal
  const langSelected = document.getElementById('lang-selected');
  if (langSelected) {
    langSelected.textContent = lang === 'en' ? 'English' : (lang === 'pt' ? 'Português' : 'Español');
  }
  // Actualiza el check visual
  ['es', 'en', 'pt'].forEach(l => {
    const check = document.getElementById('lang-check-' + l);
    if (check) {
      check.innerHTML = (l === lang)
        ? '<i class="ph-fill ph-check-circle" style="color:#CEFF00;font-size:1.1em"></i>'
        : '';
    }
  });
  // Actualiza el estado activo en el botón
  ['es', 'en', 'pt'].forEach(l => {
    const btn = document.getElementById('lang-' + l);
    if (btn) {
      btn.classList.toggle('active', l === lang);
      const span = btn.querySelector('span.font-semibold');
      if (span) {
        span.style.color = (l === lang) ? '#CEFF00' : '';
      }
    }
  });
  applyTranslations();
  // sync custom dropdown / select UI
  const langSelect = document.getElementById('lang-select');
  if (langSelect) langSelect.value = HL.lang || 'es';
  if (window._initLangDropdown) window._initLangDropdown();
  // Re-apply resolution lang if modal is open
  if (!document.getElementById('resolution-modal').classList.contains('hidden')) {
    applyResolutionLang('#modal-body');
  }
}

// Inicializa el check visual y el texto al cargar
document.addEventListener('DOMContentLoaded', function() {
  setLang(HL.lang);
});
// Custom language dropdown behaviour
function initLangDropdown() {
  const wrap = document.getElementById('lang-wrap');
  if (!wrap) return;
  const btn = document.getElementById('lang-btn');
  const list = document.getElementById('lang-list');
  const selected = document.getElementById('lang-selected');

  // set initial state from HL.lang
  selected.textContent = HL.lang === 'en' ? 'English' : (HL.lang === 'pt' ? 'Português' : 'Español');
  // mark active option
  list.querySelectorAll('.lang-option').forEach(li => li.classList.toggle('active', li.dataset.lang === HL.lang));

  function open() {
    list.classList.remove('hidden');
    btn.setAttribute('aria-expanded', 'true');
  }
  function close() {
    list.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (list.classList.contains('hidden')) open(); else close();
  });

  list.addEventListener('click', (e) => {
    const li = e.target.closest('.lang-option');
    if (!li) return;
    const lang = li.dataset.lang;
    setLang(lang);
    selected.textContent = li.textContent;
    list.querySelectorAll('.lang-option').forEach(x => x.classList.remove('active'));
    li.classList.add('active');
    close();
  });

  // close when clicking outside
  document.addEventListener('click', (e) => { if (!wrap.contains(e.target)) close(); });

  // helper to sync UI after translations applied
  window._initLangDropdown = () => {
    const sel = document.getElementById('lang-selected');
    const hl = HL.lang || 'es';
    sel && (sel.textContent = hl === 'en' ? 'English' : (hl === 'pt' ? 'Português' : 'Español'));
    list.querySelectorAll('.lang-option').forEach(li => li.classList.toggle('active', li.dataset.lang === hl));
  };
}

function applyResolutionLang(scope) {
  const container = (typeof scope === 'string') ? document.querySelector(scope) : scope;
  if (!container) return;
  const elements = container.querySelectorAll('.lang-content');
  if (!elements.length) return;

  const parentMap = new Map();
  elements.forEach(el => {
    const parent = el.parentElement;
    if (!parentMap.has(parent)) {
      parentMap.set(parent, []);
    }
    parentMap.get(parent).push(el);
  });

  parentMap.forEach(group => {
    const hasCurrentLang = group.some(el => el.dataset.lang === HL.lang);
    const chosenLang = hasCurrentLang ? HL.lang : (group.some(el => el.dataset.lang === 'pt') ? 'pt' : (group.some(el => el.dataset.lang === 'es') ? 'es' : 'en'));
    group.forEach(el => {
      el.style.display = (el.dataset.lang === chosenLang) ? '' : 'none';
    });
  });
}

// ── Theme ─────────────────────────────────────────────────────────
function applyTheme() {
  const isDark = HL.theme === 'dark';
  document.documentElement.classList.toggle('dark', isDark);
  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
}

function toggleTheme() {
  HL.theme = HL.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('hl_theme', HL.theme);
  applyTheme();
}

// ── Sidebar category collapse ─────────────────────────────────────
function toggleCategory(catId) {
  const items  = document.getElementById('cat-' + catId);
  const caret  = document.querySelector(`[data-cat="${catId}"] .sidebar-caret`);
  if (!items) return;
  const isCollapsed = items.classList.contains('collapsed');
  items.classList.toggle('collapsed', !isCollapsed);
  caret && caret.classList.toggle('rotated', !isCollapsed);
  const state = JSON.parse(localStorage.getItem('hl_cats') || '{}');
  state[catId] = !isCollapsed; // true = collapsed
  localStorage.setItem('hl_cats', JSON.stringify(state));
}

function initCategories() {
  const state = JSON.parse(localStorage.getItem('hl_cats') || '{}');
  Object.entries(state).forEach(([catId, collapsed]) => {
    if (!collapsed) return;
    const items = document.getElementById('cat-' + catId);
    const caret = document.querySelector(`[data-cat="${catId}"] .sidebar-caret`);
    if (items) items.classList.add('collapsed');
    if (caret) caret.classList.add('rotated');
  });
}

// ── Sidebar ───────────────────────────────────────────────────────
function applySidebar() {
  const sb  = document.getElementById('sidebar');
  const iOp = document.getElementById('sidebar-icon-open');
  const iCl = document.getElementById('sidebar-icon-close');
  const ft  = document.getElementById('app-footer');
  if (!sb) return;
  if (!sb.classList.contains('transition-all')) sb.classList.add('transition-all', 'duration-300');
  sb.classList.toggle('sidebar-open',   HL.sidebar);
  sb.classList.toggle('sidebar-closed', !HL.sidebar);
  iOp && iOp.classList.toggle('hidden',  HL.sidebar);
  iCl && iCl.classList.toggle('hidden', !HL.sidebar);
  if (ft) ft.style.marginLeft = HL.sidebar ? 'var(--sidebar-width)' : '0';
}

function toggleSidebar() {
  HL.sidebar = !HL.sidebar;
  localStorage.setItem('hl_sidebar', HL.sidebar ? 'open' : 'closed');
  applySidebar();
}

// ── Resolution modal ──────────────────────────────────────────────
function openResolution() {
  const data = document.getElementById('resolution-data');
  if (!data) return;
  const body = document.getElementById('modal-body');
  body.innerHTML = data.innerHTML;
  applyResolutionLang('#modal-body');
  document.querySelectorAll('#modal-body [data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  // Highlight code inside modal and add copy buttons
  body.querySelectorAll('pre').forEach(pre => {
    pre.style.position = 'relative';
    let code = pre.querySelector('code');
    if (!code) {
      const rawText = (pre.textContent || '').trim();
      code = document.createElement('code');
      code.className = 'language-' + detectLang(rawText);
      code.textContent = rawText;
      pre.textContent = '';
      pre.appendChild(code);
    }
    pre.classList.add('hljs-block');
    if (code && typeof hljs !== 'undefined' && !code.classList.contains('hljs')) {
      hljs.highlightElement(code);
    }
    const btn = document.createElement('button');
    btn.title = HL.lang === 'en' ? 'Copy' : (HL.lang === 'pt' ? 'Copiar' : 'Copiar');
    btn.innerHTML = '<i class="ph ph-copy"></i>';
    btn.style.cssText = [
      'position:absolute', 'top:8px', 'right:8px',
      'background:rgba(255,255,255,0.08)', 'border:1px solid rgba(255,255,255,0.15)',
      'color:#9ca3af', 'border-radius:6px', 'padding:3px 7px',
      'cursor:pointer', 'font-size:13px', 'line-height:1', 'transition:all .15s'
    ].join(';');
    btn.addEventListener('mouseenter', () => { btn.style.color='#fff'; btn.style.background='rgba(255,255,255,0.16)'; });
    btn.addEventListener('mouseleave', () => { btn.style.color='#9ca3af'; btn.style.background='rgba(255,255,255,0.08)'; });
    btn.addEventListener('click', () => {
      const text = (code || pre).innerText.trim();
      copyToClipboard(text, () => {
        btn.innerHTML = '<i class="ph ph-check"></i>';
        btn.style.color = '#4ade80';
        setTimeout(() => { btn.innerHTML = '<i class="ph ph-copy"></i>'; btn.style.color = '#9ca3af'; }, 1500);
        showToast(HL.lang === 'en' ? 'Copied!' : (HL.lang === 'pt' ? 'Copiado!' : '¡Copiado!'));
      });
    });
    pre.appendChild(btn);
  });
  document.getElementById('resolution-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeResolution() {
  document.getElementById('resolution-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeResolution();
});

// Double-click code blocks to copy
document.addEventListener('dblclick', e => {
  const target = e.target.closest('pre, code');
  if (!target) return;
  copyToClipboard(target.textContent.trim(), () => {
    showToast(HL.lang === 'en' ? 'Copied!' : (HL.lang === 'pt' ? 'Copiado!' : '¡Copiado!'));
  });
});

// ── Clipboard helper (works on HTTP + HTTPS) ─────────────────────
function copyToClipboard(text, onSuccess) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(onSuccess).catch(() => _fallbackCopy(text, onSuccess));
  } else {
    _fallbackCopy(text, onSuccess);
  }
}
function _fallbackCopy(text, onSuccess) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;left:-9999px;top:-9999px;opacity:0';
  document.body.appendChild(ta);
  ta.focus(); ta.select();
  try { if (document.execCommand('copy') && onSuccess) onSuccess(); } catch(e) {}
  document.body.removeChild(ta);
}

// ── Syntax highlighting ───────────────────────────────────────────
function detectLang(text) {
  if (/SELECT\s+|INSERT\s+|UPDATE\s+|DROP\s+/i.test(text)) return 'sql';
  if (/<\?xml|<!DOCTYPE|<\/\w+>/i.test(text))              return 'xml';
  if (/<html|<script|<div/i.test(text))                    return 'html';
  if (/^\s*\{[\s\S]*\}/m.test(text) && /":/.test(text))   return 'json';
  return 'bash';
}

function initCodeHighlight() {
  if (typeof hljs === 'undefined') return;

  // Configure hljs
  hljs.configure({ ignoreUnescapedHTML: true });

  // Transform .hl-code divs that contain <div> child lines
  document.querySelectorAll('.hl-code').forEach(el => {
    const divChildren = el.querySelectorAll(':scope > div');
    if (divChildren.length === 0) return; // Skip dynamic content

    const lines = [...divChildren].map(d => d.textContent);
    const rawText = lines.join('\n').trim();
    if (!rawText) return;

    const lang = el.dataset.lang || detectLang(rawText);

    const pre  = document.createElement('pre');
    const code = document.createElement('code');
    code.className = 'language-' + lang;
    code.textContent = rawText;
    pre.appendChild(code);
    pre.className = 'hljs-block';
    el.replaceWith(pre);
    hljs.highlightElement(code);
  });

  // Convert plain <pre> blocks into <pre><code> so all labs get syntax highlighting
  document.querySelectorAll('pre').forEach(pre => {
    if (pre.closest('script, style')) return;
    if (pre.querySelector('code')) return;

    const rawText = (pre.textContent || '').trim();
    if (!rawText) return;

    const code = document.createElement('code');
    code.className = 'language-' + detectLang(rawText);
    code.textContent = rawText;
    pre.textContent = '';
    pre.appendChild(code);
    pre.classList.add('hljs-block');
  });

  // Also highlight any <pre><code> blocks already in the DOM
  document.querySelectorAll('pre code:not(.hljs)').forEach(b => {
    if (!b.className) b.className = 'language-bash';
    const pre = b.closest('pre');
    if (pre) pre.classList.add('hljs-block');
    hljs.highlightElement(b);
  });
}

// ── Custom Select Dropdown ────────────────────────────────────────
function initCustomSelects() {
  document.querySelectorAll('select.hl-input').forEach(native => {
    // Build wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'hl-select';

    // Trigger button
    const trigger = document.createElement('div');
    trigger.className = 'hl-select-trigger';
    trigger.setAttribute('tabindex', '0');

    const label = document.createElement('span');
    label.className = 'hl-select-label';
    const selectedOpt = native.options[native.selectedIndex];
    label.textContent = selectedOpt ? selectedOpt.text : '';

    // Caret SVG
    const caret = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    caret.setAttribute('viewBox', '0 0 24 24');
    caret.setAttribute('fill', 'none');
    caret.setAttribute('stroke', 'currentColor');
    caret.setAttribute('stroke-width', '2');
    caret.setAttribute('stroke-linecap', 'round');
    caret.setAttribute('stroke-linejoin', 'round');
    caret.classList.add('hl-select-caret');
    const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    poly.setAttribute('points', '6 9 12 15 18 9');
    caret.appendChild(poly);

    trigger.appendChild(label);
    trigger.appendChild(caret);

    // Menu
    const menu = document.createElement('div');
    menu.className = 'hl-select-menu';
    menu.style.display = 'none';

    Array.from(native.options).forEach((opt, i) => {
      const item = document.createElement('div');
      item.className = 'hl-select-option' + (i === native.selectedIndex ? ' selected' : '');
      item.textContent = opt.text;
      item.dataset.value = opt.value;
      item.addEventListener('click', () => {
        native.value = opt.value;
        label.textContent = opt.text;
        menu.querySelectorAll('.hl-select-option').forEach(o => o.classList.remove('selected'));
        item.classList.add('selected');
        closeMenu();
        // Dispatch change event so any listeners on native select fire
        native.dispatchEvent(new Event('change', { bubbles: true }));
      });
      menu.appendChild(item);
    });

    function openMenu() {
      menu.style.display = '';
      trigger.classList.add('open');
    }
    function closeMenu() {
      menu.style.display = 'none';
      trigger.classList.remove('open');
    }
    function toggleMenu(e) {
      e.stopPropagation();
      menu.style.display === 'none' ? openMenu() : closeMenu();
    }

    trigger.addEventListener('click', toggleMenu);
    trigger.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleMenu(e); }
      if (e.key === 'Escape') closeMenu();
    });

    wrapper.appendChild(trigger);
    wrapper.appendChild(menu);

    // Insert wrapper before native select, native stays hidden via CSS
    native.parentNode.insertBefore(wrapper, native);
  });

  // Close all menus when clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.hl-select-menu').forEach(m => {
      m.style.display = 'none';
      const trigger = m.previousElementSibling;
      if (trigger) trigger.classList.remove('open');
    });
  });
}

// ── Sidebar search/filter ─────────────────────────────────────────
function initSidebarSearch() {
  const input = document.getElementById('sidebar-search');
  if (!input) return;

  input.addEventListener('input', (e) => {
    const q = (e.target.value || '').trim().toLowerCase();

    const items = document.querySelectorAll('.sidebar-item');
    // If query empty, restore default visibility and category collapsed state
    if (!q) {
      items.forEach(i => i.style.display = '');
      document.querySelectorAll('.sidebar-category').forEach(cat => cat.style.display = '');
      initCategories();
      return;
    }

    // Filter items and show/hide categories accordingly
    document.querySelectorAll('.sidebar-category').forEach(cat => {
      const catItems = cat.querySelectorAll('.sidebar-item');
      let anyVisible = false;
      catItems.forEach(it => {
        const txt = (it.textContent || it.innerText || '').toLowerCase();
        if (txt.indexOf(q) !== -1) {
          it.style.display = '';
          anyVisible = true;
        } else {
          it.style.display = 'none';
        }
      });
      // show category header only if it has matches
      cat.style.display = anyVisible ? '' : 'none';
      // expand category if it has matches
      const itemsEl = cat.querySelector('.sidebar-cat-items');
      if (itemsEl && anyVisible) itemsEl.classList.remove('collapsed');
    });
  });

}

// ── Toast ─────────────────────────────────────────────────────────
function showToast(msg) {
  const el = document.createElement('div');
  el.innerHTML = '<i class="ph ph-check-circle" style="font-size:1rem"></i><span>' + msg + '</span>';
  el.style.cssText = 'position:fixed;bottom:5rem;right:1.75rem;background:var(--hl-primary);color:var(--hl-on-primary);font-size:.75rem;font-weight:700;padding:.5rem 1rem;border-radius:.75rem;z-index:9999;font-family:Inter,sans-serif;box-shadow:0 4px 20px rgba(0,0,0,.3);transition:opacity .3s;display:flex;align-items:center;gap:.5rem';
  document.body.appendChild(el);
  setTimeout(() => el.style.opacity = '0', 1800);
  setTimeout(() => el.remove(), 2200);
}

function showErrorToast(msg) {
  const el = document.createElement('div');
  el.innerHTML = '<i class="ph ph-warning" style="font-size:1rem"></i><span>' + msg + '</span>';
  el.style.cssText = 'position:fixed;bottom:5rem;right:1.75rem;background:#ef4444;color:#fff;font-size:.75rem;font-weight:700;padding:.5rem 1rem;border-radius:.75rem;z-index:9999;font-family:Inter,sans-serif;box-shadow:0 4px 20px rgba(0,0,0,.3);transition:opacity .3s;display:flex;align-items:center;gap:.5rem';
  document.body.appendChild(el);
  setTimeout(() => el.style.opacity = '0', 1800);
  setTimeout(() => el.remove(), 2200);
}

// ── Reward overlays ─────────────────────────────────────────────
function showLevelUpOverlay(level, levelName, levelIcon, opts = {}) {
  if (document.getElementById('levelup-overlay')) return;
  const isEn = (typeof HL !== 'undefined' && HL.lang === 'en');
  let done = false;

  const overlay = document.createElement('div');
  overlay.id = 'levelup-overlay';

  let particlesHTML = '';
  const angles = [0,18,36,54,72,90,108,126,144,162,180,198,216,234,252,270,288,306,324,342];
  angles.forEach((deg, i) => {
    const rad  = deg * Math.PI / 180;
    const dist = 120 + Math.random() * 140;
    const dx   = Math.round(Math.cos(rad) * dist);
    const dy   = Math.round(Math.sin(rad) * dist);
    const size = 3 + Math.random() * 5;
    const delay = (i * 0.018).toFixed(3);
    const dur   = (0.55 + Math.random() * 0.45).toFixed(2);
    particlesHTML += `<div class="lu-particle" style="
      width:${size.toFixed(1)}px;height:${size.toFixed(1)}px;
      top:50%;left:50%;
      --dx:${dx}px;--dy:${dy}px;
      animation:lu-particle-burst ${dur}s ease ${delay}s both;
      opacity:${(0.5 + Math.random() * 0.5).toFixed(2)};
    "></div>`;
  });

  const lvlLabel  = `LVL ${level + 1}`;
  const titleText = 'LEVEL UP';
  const isPt = (typeof HL !== 'undefined' && HL.lang === 'pt');
  const accessTxt = isEn ? '// ACCESS GRANTED //' : (isPt ? '// ACESSO CONCEDIDO //' : '// ACCESO CONCEDIDO //');
  const btnLabel  = isEn ? 'Continue' : 'Continuar';
  const hintTxt   = isEn ? 'Click to continue' : (isPt ? 'Clique para continuar' : 'Haz clic para continuar');
  const iconClass = levelIcon || 'ph-graduation-cap';
  const shareLabel = isEn ? 'Share on LinkedIn' : (isPt ? 'Compartilhar no LinkedIn' : 'Compartir en LinkedIn');
  const shareBtn = opts.linkedinShareUrl
    ? `<a class="overlay-share-btn" href="${opts.linkedinShareUrl}" target="_blank" rel="noopener" onclick="event.stopPropagation();"><i class="ph ph-linkedin-logo"></i>${shareLabel}</a>`
    : '';

  function finish() {
    if (done) return;
    done = true;
    overlay.remove();
    if (typeof opts.onDone === 'function') opts.onDone();
  }

  overlay.innerHTML = `
    <div class="levelup-card">
      ${particlesHTML}
      <div class="levelup-access">${accessTxt}</div>
      <div class="levelup-title">${titleText}</div>
      <div class="levelup-icon-circle"><i class="ph ${iconClass}"></i></div>
      <div class="levelup-lvl-badge">${lvlLabel}</div>
      <div class="levelup-name">${levelName}</div>
      <div>
        <button class="levelup-btn" onclick="event.stopPropagation();">
          <i class="ph ph-arrow-square-right" style="font-size:1rem"></i>${btnLabel}
        </button>
      </div>
      ${shareBtn}
      <div class="levelup-hint">${hintTxt}</div>
    </div>`;

  overlay.addEventListener('click', finish);
  const btn = overlay.querySelector('.levelup-btn');
  if (btn) btn.addEventListener('click', finish);
  document.body.appendChild(overlay);
  setTimeout(finish, opts.timeout || 4200);
}

function showBadgeOverlay(badge, opts = {}) {
  if (document.getElementById('badgeup-overlay')) return;
  const isEn = (typeof HL !== 'undefined' && HL.lang === 'en');
  let done = false;
  const overlay = document.createElement('div');
  overlay.id = 'badgeup-overlay';

  const isPt = (typeof HL !== 'undefined' && HL.lang === 'pt');
  const title = isEn ? 'NEW BADGE' : (isPt ? 'NOVO EMBLEMA' : 'NUEVO BADGE');
  const subtitle = isEn ? 'Achievement unlocked' : (isPt ? 'Conquista desbloqueada' : 'Logro desbloqueado');
  const btnLabel = isEn ? 'Continue' : 'Continuar';
  const hintTxt = isEn ? 'Click to continue' : 'Haz clic para continuar';
  const shareLabel = isEn ? 'Share on LinkedIn' : (isPt ? 'Compartilhar no LinkedIn' : 'Compartir en LinkedIn');
  const shareBtn = badge.linkedin_share_url
    ? `<a class="overlay-share-btn" href="${badge.linkedin_share_url}" target="_blank" rel="noopener" onclick="event.stopPropagation();"><i class="ph ph-linkedin-logo"></i>${shareLabel}</a>`
    : '';

  function finish() {
    if (done) return;
    done = true;
    overlay.remove();
    if (typeof opts.onDone === 'function') opts.onDone();
  }

  overlay.innerHTML = `
    <div class="badgeup-card">
      <div class="badgeup-access">// ${subtitle.toUpperCase()} //</div>
      <div class="badgeup-title">${title}</div>
      <div class="badgeup-icon-circle">${badge.icon || '🏆'}</div>
      <div class="badgeup-name">${badge.name || 'Badge'}</div>
      <div>
        <button class="levelup-btn" onclick="event.stopPropagation();">
          <i class="ph ph-arrow-square-right" style="font-size:1rem"></i>${btnLabel}
        </button>
      </div>
      ${shareBtn}
      <div class="levelup-hint">${hintTxt}</div>
    </div>`;

  overlay.addEventListener('click', finish);
  const btn = overlay.querySelector('.levelup-btn');
  if (btn) btn.addEventListener('click', finish);
  document.body.appendChild(overlay);
  setTimeout(finish, opts.timeout || 3200);
}

function playProgressUnlockSequence(data, fallbackToast) {
  const queue = [];

  if (data.level_up) {
    queue.push((next) => showLevelUpOverlay(
      data.new_level,
      data.new_level_name,
      data.new_level_icon,
      { onDone: next, timeout: 4200, linkedinShareUrl: data.level_linkedin_share_url }
    ));
  }

  if (Array.isArray(data.new_badges) && data.new_badges.length > 0) {
    data.new_badges.forEach((badge) => {
      queue.push((next) => showBadgeOverlay(badge, { onDone: next, timeout: 3200 }));
    });
  }

  if (!queue.length) {
    if (fallbackToast) showToast(fallbackToast);
    return;
  }

  let idx = 0;
  const runNext = () => {
    if (idx >= queue.length) {
      window.location.href = '/progress';
      return;
    }
    const step = queue[idx++];
    step(runNext);
  };
  runNext();
}

function _injectAiTypingIndicator() {
  const containers = [
    document.getElementById('chat-messages'),
    document.getElementById('leak-messages'),
    document.getElementById('exfil-messages'),
    document.getElementById('jailbreak-messages')
  ].filter(Boolean);
  const target = containers[0];
  if (!target) return;

  const row = document.createElement('div');
  row.className = 'ai-typing-row';
  row.innerHTML = '' +
    '<div class="ai-typing-avatar"><i class="ph ph-robot"></i></div>' +
    '<div class="ai-typing-bubble">' +
      '<span class="ai-typing-dot"></span>' +
      '<span class="ai-typing-dot"></span>' +
      '<span class="ai-typing-dot"></span>' +
    '</div>';
  target.appendChild(row);
  target.scrollTop = target.scrollHeight;
}

function _escapeHtml(text) {
  return (text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function _resolveAiChatContainer(actionPath) {
  if (actionPath === '/ai/leak') return document.getElementById('leak-messages');
  if (actionPath === '/ai/exfil') return document.getElementById('exfil-messages');
  if (actionPath === '/ai/prompt' || actionPath === '/ai/jailbreak') return document.getElementById('chat-messages');
  return null;
}

function _injectAiUserBubble(target, message) {
  if (!target || !message) return;
  const row = document.createElement('div');
  row.className = 'flex items-start gap-2 justify-end';
  row.innerHTML = '' +
    '<div class="rounded-xl px-3 py-2 text-sm max-w-prose" style="background:rgba(34,197,94,.12);color:#4ade80;border:1px solid rgba(34,197,94,.2);white-space:pre-wrap">' +
      _escapeHtml(message) +
    '</div>' +
    '<div class="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs bg-gray-200 dark:bg-dark-600 text-gray-500">' +
      '<i class="ph ph-user"></i>' +
    '</div>';
  target.appendChild(row);
  target.scrollTop = target.scrollHeight;
}

function initAiChatLoading() {
  const forms = document.querySelectorAll('form[action^="/ai/"]');
  if (!forms.length) return;

  forms.forEach((form) => {
    form.addEventListener('submit', async (ev) => {
      if (form.dataset.aiSubmitting === '1') return;

      const actionRaw = form.getAttribute('action') || '';
      const actionPath = actionRaw.split('?')[0];
      const chatTarget = _resolveAiChatContainer(actionPath);
      const messageInput = form.querySelector('input[name="message"], textarea[name="message"]');
      if (!chatTarget || !messageInput) return;

      ev.preventDefault();
      form.dataset.aiSubmitting = '1';
      const userMessage = (messageInput.value || '').trim();
      _injectAiUserBubble(chatTarget, userMessage);
      _injectAiTypingIndicator();

      const isEn = (typeof HL !== 'undefined' && HL.lang === 'en');
      const isPt = (typeof HL !== 'undefined' && HL.lang === 'pt');
      const btn = form.querySelector('button[type="submit"]');
      const label = form.dataset.aiSubmitLabel || (isEn ? 'Thinking' : (isPt ? 'Pensando' : 'Pensando'));
      if (btn) {
        btn.disabled = true;
        btn.classList.add('ai-submit-loading');
        btn.innerHTML = '<i class="ph ph-spinner-gap ai-spin"></i><span>' + label + '...</span>';
      }

      try {
        const payload = new FormData(form);
        const response = await fetch(actionRaw, {
          method: (form.method || 'POST').toUpperCase(),
          body: payload,
          credentials: 'same-origin',
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
        });
        const html = await response.text();
        document.open();
        document.write(html);
        document.close();
      } catch (err) {
        form.dataset.aiSubmitting = '0';
        form.submit();
      }
    });
  });
}

// ── Init ─────────────────────────────────────────────────────────
(function init() {
  applyTheme();
  applySidebar();
  initCategories();
  applyTranslations();
  initCodeHighlight();
  initCustomSelects();
  // initialize custom language dropdown (styles+handlers)
  try { initLangDropdown(); } catch(e) {}
  initSidebarSearch();
  initAiChatLoading();

  // Dynamic footer year
  const fy = document.getElementById('footer-year');
  if (fy) fy.textContent = new Date().getFullYear();

  // Show global FAB only on pages that have resolution data
  const fab = document.getElementById('global-fab');
  if (fab && document.getElementById('resolution-data')) {
    fab.style.display = '';
  }

  // Mark active sidebar item and scroll it into view
  const path = window.location.pathname;
  document.querySelectorAll('.sidebar-item').forEach(el => {
    if (el.getAttribute('href') === path) {
      el.classList.add('active');
      el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  });
})();

// Re-apply after full page load (ensures Phosphor Icons and other libs are done)
window.addEventListener('load', applyTranslations);

// ── Progress system ───────────────────────────────────────────

function _updateProgressUI(data) {
  // Update progress ring values
  const label = document.querySelector('.progress-ring-label');
  const fill  = document.querySelector('.progress-ring-fill');
  const ring  = document.getElementById('nav-progress-ring');
  if (label && fill && data.total > 0) {
    const circ   = 87.96;
    const offset = circ * (1 - data.count / data.total);
    fill.setAttribute('stroke-dashoffset', offset.toFixed(2));
    // Update label text (keep /total span)
    label.innerHTML = data.count + '<span class="progress-ring-total">/' + data.total + '</span>';
    if (ring) {
    const isEn = HL.lang === 'en';
    const isPt = HL.lang === 'pt';
    ring.title = isEn ? `My progress: ${data.count}/${data.total} labs completed`
                      : (isPt ? `Meu progresso: ${data.count}/${data.total} labs concluídos`
                              : `Mi progreso: ${data.count}/${data.total} labs completados`);
  }
  }
}

function submitLabFlag(labId) {
  const isEn = HL.lang === 'en';
  const isPt = HL.lang === 'pt';
  const btn = document.getElementById('lab-complete-btn');
  const input = document.getElementById('lab-flag-input');
  if (!btn || !input) return;

  // If already completed, allow user to unmark and re-exploit the lab.
  if (btn.classList.contains('lab-complete-btn--done')) {
    btn.classList.add('animating');
    setTimeout(() => btn.classList.remove('animating'), 200);

    fetch('/progress/uncomplete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lab_id: labId })
    })
    .then(r => r.json())
    .then(data => {
      if (data.error) {
        showToast(isEn ? 'Could not unmark the lab' : (isPt ? 'Não foi possível desmarcar o lab' : 'No se pudo desmarcar el lab'));
        return;
      }
      btn.classList.remove('lab-complete-btn--done');
      const icon = btn.querySelector('i');
      const span = btn.querySelector('span');
      if (icon) icon.className = 'ph ph-flag-checkered text-sm';
      if (span) span.textContent = isEn ? 'Validate flag' : (isPt ? 'Validar flag' : 'Validar flag');
      btn.title = isEn ? 'Validate lab flag' : (isPt ? 'Validar flag do laboratório' : 'Validar flag del laboratorio');
      input.disabled = false;
      input.value = '';
      _updateProgressUI(data);
      showToast(isEn ? 'Lab unmarked. You can exploit it again' : (isPt ? 'Lab desmarcado. Você pode explorá-lo novamente' : 'Lab desmarcado. Puedes volver a explotarlo'));
    })
    .catch(() => {});
    return;
  }

  if (input.disabled) return;
  const flag = (input.value || '').trim();
  if (!flag) {
    showErrorToast(isEn ? 'Enter a valid flag (e.g. HL{...})' : (isPt ? 'Insira uma flag válida (ex: HL{...})' : 'Introduce una flag valida (ej: HL{...})'));
    return;
  }

  btn.classList.add('animating');
  setTimeout(() => btn.classList.remove('animating'), 200);

  fetch('/progress/submit-flag', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lab_id: labId, flag: flag })
  })
  .then(r => r.json())
  .then(data => {
    if (data.error) {
      if (data.error === 'invalid_flag') showErrorToast(isEn ? 'Incorrect flag' : (isPt ? 'Flag incorreta' : 'Flag incorrecta'));
      else if (data.error === 'empty_flag') showErrorToast(isEn ? 'Enter a flag' : (isPt ? 'Insira uma flag' : 'Introduce una flag'));
      else if (data.error === 'flag_required') showErrorToast(isEn ? 'This lab requires a valid flag' : (isPt ? 'Este lab só é concluído com flag válida' : 'Este lab solo se completa con flag valida'));
      else showErrorToast(isEn ? 'Could not validate flag' : (isPt ? 'Não foi possível validar a flag' : 'No se pudo validar la flag'));
      return;
    }

    const done = !!data.completed;
    btn.classList.add('lab-complete-btn--done');
    const icon = btn.querySelector('i');
    const span = btn.querySelector('span');
    if (icon) icon.className = 'ph ph-arrow-counter-clockwise text-sm';
    if (span) span.textContent = isEn ? 'Unmark' : (isPt ? 'Desmarcar' : 'Desmarcar');
    btn.title = isEn ? 'Unmark lab as completed' : (isPt ? 'Desmarcar lab como concluído' : 'Desmarcar lab como completado');
    input.disabled = true;
    input.value = flag;
    _updateProgressUI(data);
    if (done) {
      playProgressUnlockSequence(data, isEn ? 'Correct flag. Lab completed' : (isPt ? 'Flag correta. Lab concluído' : 'Flag correcta. Lab completado'));
    } else {
      showToast(isEn ? 'Flag validated' : (isPt ? 'Flag validada' : 'Flag validada'));
    }
  })
  .catch(() => {});
}

// ── Forense Digital: preguntas guiadas ───────────────────────────
function initForensicQuiz() {
  document.addEventListener('click', (e) => {
    const hintBtn = e.target.closest('.forensic-hint-btn');
    if (hintBtn) {
      const box = hintBtn.closest('.forensic-question').querySelector('.forensic-hint-box');
      if (box) box.classList.toggle('hidden');
      return;
    }

    const checkBtn = e.target.closest('.forensic-check-btn');
    if (checkBtn) {
      const wrap = checkBtn.closest('[data-forensic-quiz]');
      const qBlock = checkBtn.closest('.forensic-question');
      const input = qBlock.querySelector('.forensic-answer-input');
      const result = qBlock.querySelector('.forensic-answer-result');
      const answer = (input.value || '').trim();
      if (!answer) return;

      checkBtn.disabled = true;
      fetch('/forensics/check-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lab_id: wrap.dataset.labId,
          question_id: qBlock.dataset.questionId,
          answer: answer
        })
      })
      .then(r => r.json())
      .then(data => {
        checkBtn.disabled = false;
        if (data.error) { result.textContent = ''; return; }
        if (data.correct) {
          result.textContent = t('df_quiz_correct');
          result.style.color = '#22c55e';
          input.disabled = true;
          qBlock.classList.add('forensic-question--solved');
        } else {
          result.textContent = t('df_quiz_incorrect');
          result.style.color = '#ef4444';
        }
      })
      .catch(() => { checkBtn.disabled = false; });
    }
  });
}
document.addEventListener('DOMContentLoaded', initForensicQuiz);

// ── Host Attacks: preguntas de respuesta (H01/H13) ───────────────
function initHostAnswer() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.host-answer-btn');
    if (!btn) return;
    const wrap = btn.closest('[data-host-answer]');
    const input = wrap.querySelector('.host-answer-input');
    const result = wrap.querySelector('.host-answer-result');
    const answer = (input.value || '').trim();
    if (!answer) return;

    btn.disabled = true;
    fetch('/host-labs/check-answer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lab_id: wrap.dataset.labId, answer: answer })
    })
    .then(r => r.json())
    .then(data => {
      result.classList.remove('hidden');
      if (data.correct) {
        result.style.color = '#22c55e';
        result.textContent = t('host_answer_correct');
        setTimeout(() => window.location.reload(), 650);
      } else {
        btn.disabled = false;
        result.style.color = '#ef4444';
        result.textContent = t('host_answer_incorrect');
      }
    })
    .catch(() => { btn.disabled = false; });
  });
}
document.addEventListener('DOMContentLoaded', initHostAnswer);
