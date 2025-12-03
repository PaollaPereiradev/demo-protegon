<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Protegon - Sistema de Segurança</title>
    <script src="https://cdn.tailwindcss.com"></script>
    
        <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
        /* --- CORES E ESTILOS ORIGINAIS (style.css & perfil.css) --- */
        :root {
            --azul-marinho-escuro: #001c39;
            --azul-marinho: #00356c;
            --azul-claro: #d3e3ff;
            --azul-claro-houver: #93ADD9;
            --branco: #ffffff;
            --texto-cinza: #5f5f5f;
        }

        body {
            font-family: 'Montserrat', sans-serif;
        }

        /* Botões Originais */
        .btn-primario {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            font-weight: 600;
            color: var(--branco);
            background-color: var(--azul-marinho);
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        .btn-primario:hover {
            background-color: var(--azul-marinho-escuro);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 53, 108, 0.3);
        }

        /* Navegação Lateral (perfil.css) */
        .item-nav-sidebar {
            color: var(--branco); /* Texto branco padrão */
            background-color: transparent;
            transition: color 0.3s, background-color 0.3s;
        }

        .item-nav-sidebar:hover {
            background-color: rgba(211, 227, 255, 0.2); /* 20% opacidade */
            color: var(--branco);
        }

        .item-nav-sidebar.active {
            background-color: var(--azul-claro);
            color: var(--azul-marinho-escuro);
            font-weight: 700;
        }

        /* Garante herança de cor para ícones */
        .item-nav-sidebar i, 
        .item-nav-sidebar span {
            color: inherit;
        }

        /* --- ANIMAÇÕES DA DEMO --- */
        .pulse-btn { animation: pulse-animation 2s infinite; }
        @keyframes pulse-animation {
            0% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(220, 38, 38, 0); }
            100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); }
        }

        .slide-up { animation: slideUp 0.3s ease-out forwards; }
        @keyframes slideUp {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        .animate-fade-in { animation: fadeIn 0.5s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        /* Shake (iPhone) */
        .shake-screen {
            animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both infinite;
            border: 4px solid red;
        }
        @keyframes shake {
            10%, 90% { transform: translate3d(-1px, 0, 0); }
            20%, 80% { transform: translate3d(2px, 0, 0); }
            30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
            40%, 60% { transform: translate3d(4px, 0, 0); }
        }

        /* Inputs desabilitados */
        input:disabled { background-color: transparent; color: #374151; }
    </style>
</head>

<body id="mainBody" class="bg-gray-50 text-gray-800">

        <div id="mobileOverlay" class="fixed inset-0 bg-black/50 z-40 hidden lg:hidden transition-opacity duration-300 opacity-0" onclick="toggleSidebar(false)"></div>

        <button id="floatingEmergencyBtn" onclick="showEmergencyModal()" class="fixed bottom-6 right-6 w-16 h-16 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg z-50 flex flex-col items-center justify-center gap-1 pulse-btn transition-transform hover:scale-110">
        <i class="fas fa-exclamation-triangle text-xl"></i>
        <span class="text-xs font-bold">SOS</span>
    </button>

        <div class="flex min-h-screen relative">
        
                <aside id="mainSidebar" class="fixed inset-y-0 left-0 z-50 w-64 bg-[var(--azul-marinho-escuro)] text-white min-h-screen p-6 flex flex-col transform -translate-x-full lg:translate-x-0 lg:static transition-transform duration-300 ease-in-out shadow-2xl lg:shadow-none">
            
                        <div class="mb-8">
                <img src="./assets/img/protegon-azul.png" alt="protegon" class="h-10 object-contain  p-1 rounded mb-2" onerror="this.style.display='none'; document.getElementById('logo-text').classList.remove('hidden');">
                <div id="logo-text" class="hidden text-2xl font-bold tracking-wider items-center gap-2"><i class="fas fa-shield-alt text-blue-400"></i> PROTEGON</div>
            </div>

                        <div class="mb-6">
                <button id="sidebarEmergencyBtn" onclick="showEmergencyModal()" class="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg py-5 flex items-center justify-center gap-2 shadow-lg transition-colors">
                    <i class="fas fa-exclamation-triangle"></i>
                    <span class="font-semibold">SOS Emergência</span>
                </button>
            </div>

                        <nav class="flex-1 space-y-2">
                <button class="item-nav-sidebar w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors active" data-page="security">
                    <i class="fas fa-shield-alt w-5"></i> <span class="text-sm">Central de Segurança</span>
                </button>
                <button class="item-nav-sidebar w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors" data-page="profile">
                    <i class="fas fa-user w-5"></i> <span class="text-sm">Perfil</span>
                </button>
                <button class="item-nav-sidebar w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors" data-page="notes">
                    <i class="fas fa-file-alt w-5"></i> <span class="text-sm">Anotações</span>
                </button>
                <button class="item-nav-sidebar w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors" data-page="chat">
                    <i class="fas fa-comment-dots w-5"></i> <span class="text-sm">Chat com o Psicólogo</span>
                </button>
                <button class="item-nav-sidebar w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors" data-page="emergency">
                    <i class="fas fa-users w-5"></i> <span class="text-sm">Contatos de Emergência</span>
                </button>
                <button class="item-nav-sidebar w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors" data-page="settings">
                    <i class="fas fa-cog w-5"></i> <span class="text-sm">Configurações</span>
                </button>
            </nav>

                        <div class="mt-auto pt-6 border-t border-[var(--branco)] flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-[var(--azul-claro)] text-[var(--azul-marinho)] flex items-center justify-center text-sm font-bold shadow-sm user-avatar-initials">MM</div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-semibold text-[var(--branco)] truncate user-name-display">Mariana Moenchiali</p>
                    <p class="text-xs text-[var(--branco)] truncate user-email-display">mariomoenchiali@ema...</p>
                </div>
            </div>
        </aside>

                <main class="flex-1 flex flex-col w-full min-w-0 bg-gray-50">
                        <header class="bg-[var(--branco)] border-b border-gray-200 px-4 sm:px-8 py-4 sticky top-0 z-30 shadow-sm">
                <div class="flex items-center justify-between gap-4">
                    
                    <button onclick="toggleSidebar(true)" class="lg:hidden p-2 text-[var(--azul-marinho-escuro)] hover:bg-gray-100 rounded-lg">
                        <i class="fas fa-bars text-xl"></i>
                    </button>

                    <div class="flex items-center gap-3 flex-1 max-w-md hidden sm:flex">
                        <div class="relative flex-1">
                            <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--azul-marinho-escuro)]"></i>
                            <input type="text" placeholder="Search here..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[var(--azul-claro)]">
                        </div>
                    </div>
                    
                                        <button class="sm:hidden p-2 text-[var(--azul-marinho-escuro)]">
                        <i class="fas fa-search text-xl"></i>
                    </button>

                    <div class="flex items-center gap-4">
                        <button class="relative p-2 text-[var(--azul-marinho)] hover:bg-gray-100 rounded-lg transition-colors">
                            <i class="fas fa-bell text-xl"></i>
                            <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div class="flex items-center gap-3">
                            <img src="./assets/img/foto perfil.png" onerror="this.src='https://ui-avatars.com/api/?name=Mariana+Moenchiali&background=00356C&color=fff'" alt="Mariana" class="w-9 h-9 rounded-full border-2 border-[var(--azul-marinho)]">
                            <div class="hidden md:block text-right">
                                <p class="text-sm text-[var(--azul-marinho-escuro)] user-name-display">Mariana Moenchiali</p>
                                <p class="text-xs text-[var(--azul-marinho-escuro)] user-email-display">mariomoenchiali@ema...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

                        <div class="flex-1 p-4 sm:p-8 overflow-y-auto h-[calc(100vh-73px)]">
                <div class="max-w-6xl mx-auto pb-20">
                    
                                        <div id="demoBanner" class="hidden mb-6 bg-indigo-600 text-white px-6 py-4 rounded-xl shadow-lg flex justify-between items-center animate-bounce border border-indigo-400">
                        <div class="flex items-center gap-4">
                            <div class="bg-white/20 p-2 rounded-full"><i class="fas fa-magic text-xl"></i></div>
                            <div>
                                <p class="font-bold text-lg">Modo Apresentação Ativo</p>
                                <p class="text-sm opacity-90">Simulação de Sensores e Vibração habilitada.</p>
                            </div>
                        </div>
                    </div>

                    <h2 id="pageTitle" class="text-3xl font-bold text-[var(--azul-marinho-escuro)] mb-6 transition-all">Central de Segurança</h2>
                    <div id="pageContent" class="animate-fade-in"></div>
                </div>
            </div>
        </main>
    </div>

            <div id="emergencyModal" class="fixed inset-0 bg-blue-700/50 z-[60] hidden items-center justify-center p-4 backdrop-blur-sm">
        <div class="bg-[var(--branco)] rounded-xl max-w-md w-full mx-4 shadow-2xl animate-fade-in">
            <div class="border-b-2 border-red-200 p-6 text-center">
                 <div class="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-2 text-3xl font-bold">
                    <span id="sosCountdownDisplay">3</span>
                </div>
                <h3 id="emergencyTitle" class="text-xl font-bold text-red-700">Ativar SOS?</h3>
                <p class="text-sm text-red-600 mt-1">Disparo automático em instantes</p>
            </div>
            <div class="p-6 text-[var(--azul-marinho-escuro)]">
                <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div id="sosProgressBar" class="bg-red-600 h-2 rounded-full transition-all duration-1000 ease-linear" style="width: 100%"></div>
                </div>
                <p class="mb-4 font-semibold">Esta ação irá:</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700 text-sm">
                    <li>Notificar contatos de confiança</li>
                    <li>Compartilhar localização em tempo real</li>
                    <li>Iniciar gravação de áudio</li>
                </ul>
            </div>
            <div class="border-t border-gray-200 p-4 flex gap-3 justify-end">
                <button onclick="closeEmergencyModal()" class="px-4 py-2 border border-[var(--azul-claro)] text-[var(--azul-marinho-escuro)] rounded-lg">Cancelar</button>
                <button onclick="confirmEmergency()" class="px-4 py-2 bg-[var(--azul-marinho)] text-white hover:bg-[var(--azul-marinho-escuro)] rounded-lg transition-colors">Sim, Ativar SOS</button>
            </div>
        </div>
    </div>

        <div id="sensorModal" class="fixed inset-0 bg-black/50 z-[60] hidden items-center justify-center p-4 backdrop-blur-sm">
        <div class="bg-white rounded-xl max-w-md w-full mx-4 shadow-2xl animate-fade-in border-t-8 border-orange-500">
            <div class="p-6 text-center border-b border-gray-100">
                <i class="fas fa-exclamation-triangle text-5xl text-orange-500 mb-4 animate-bounce"></i>
                <h3 class="text-2xl font-bold text-gray-800">Atividade Suspeita</h3>
                <p class="text-gray-500 mt-2">Sensor: <span id="sensorName" class="font-bold text-orange-600">--</span></p>
            </div>
            
            <div class="p-6 space-y-6">
                <div class="text-center">
                    <div class="text-6xl font-bold text-orange-600 mb-1 font-mono" id="countdown">10</div>
                    <p class="text-sm text-gray-500 uppercase tracking-wide mt-1">Segundos para confirmar segurança</p>
                </div>

                <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div id="progressFill" class="h-full bg-orange-500 transition-all duration-1000 ease-linear" style="width: 100%"></div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <button onclick="confirmSafe()" class="bg-green-100 hover:bg-green-200 text-green-700 py-4 rounded-xl flex flex-col items-center gap-1 transition-colors border border-green-200">
                        <i class="fas fa-check-circle text-2xl"></i>
                        <span class="font-bold text-sm">ESTOU BEM</span>
                    </button>
                    <button onclick="sendAlertNow()" class="bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl flex flex-col items-center gap-1 transition-colors shadow-lg">
                        <i class="fas fa-bell text-2xl"></i>
                        <span class="font-bold text-sm">AJUDA</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

        <div id="toastContainer" class="fixed top-6 left-1/2 transform -translate-x-1/2 z-[70] space-y-3 pointer-events-none w-full max-w-sm px-4"></div>

    <script>
        // =========================================================
        // 1. ESTADO E CONFIGURAÇÃO
        // =========================================================
        const urlParams = new URLSearchParams(window.location.search);
        const isDemoMode = urlParams.get('mode') === 'demo';

        let sosInterval = null;
        let sensorInterval = null;
        let countdownInterval = null;
        let checkInTimeLeft = 71 * 60 * 60;
        const CHECKIN_INTERVAL_SECONDS = 72 * 60 * 60;
        let userSettings = { location: true, audioRecord: false };
        let currentPage = 'security';

        let userProfile = { 
            name: "Mariana Moenchiali", 
            email: "marimoenchiali@email.com",
            phone: "+55 11 98765-4321",
            initials: "MM" 
        };

        const emergencyContacts = [
            { id: 'c1', name: 'Maria Silva', phone: '+5511987654321', relationship: 'Mãe' },
            { id: 'c2', name: 'Ana Santos', phone: '+5511987651234', relationship: 'Amiga' },
            { id: 'c3', name: 'Dr. João Souza', phone: '+5511987655678', relationship: 'Psicólogo' }
        ];

        const sensorsData = [
            { id: 'sensor_motion', name: 'Detector de Movimento Brusco', description: 'Detecta movimentos súbitos ou quedas do dispositivo', icon: 'fa-bolt', sensitivity: 77, isActive: true },
            { id: 'sensor_sound', name: 'Detector de Sons Altos', description: 'Identifica gritos, sons altos ou vozes agressivas', icon: 'fa-volume-up', sensitivity: 80, isActive: true },
            { id: 'sensor_fall', name: 'Detector de Queda', description: 'Detecta quedas bruscas que podem indicar perigo', icon: 'fa-arrow-down', sensitivity: 70, isActive: true },
        ];

        // =========================================================
        // 2. INICIALIZAÇÃO
        // =========================================================
        document.addEventListener('DOMContentLoaded', function() {
            if (isDemoMode) {
                setupDemoMode();
            }
            initNavigation();
            initEmergencyButtons();
            renderPage('security');
        });

        function setupDemoMode() {
            document.getElementById('demoBanner').classList.remove('hidden');
            userProfile.name = "Convidado da Banca";
            userProfile.email = "convidado@protegon.demo";
            userProfile.initials = "CB";
            updateUserDisplay();
        }

        function updateUserDisplay() {
            document.querySelectorAll('.user-name-display').forEach(el => el.textContent = userProfile.name);
            document.querySelectorAll('.user-email-display').forEach(el => el.textContent = userProfile.email);
            document.querySelectorAll('.user-avatar-initials').forEach(el => el.textContent = userProfile.initials);
        }

        // =========================================================
        // 3. LÓGICA SOS
        // =========================================================

        // Função para fazer o dispositivo vibrar
        function vibrateDevice(pattern = [200, 100, 200]) {
            if (navigator.vibrate) {
                navigator.vibrate(pattern);
            }
        }

        function showEmergencyModal() {
            // Vibra o dispositivo ao abrir o modal para feedback tátil
            vibrateDevice([100, 50, 100]); 

            const modal = document.getElementById('emergencyModal');
            const countdownEl = document.getElementById('sosCountdownDisplay');
            const progressBar = document.getElementById('sosProgressBar');
            
            modal.classList.remove('hidden'); 
            modal.classList.add('flex');

            let timeLeft = 3;
            countdownEl.textContent = timeLeft;
            if(progressBar) progressBar.style.width = '100%';

            if (sosInterval) clearInterval(sosInterval);

            sosInterval = setInterval(() => {
                timeLeft--;
                countdownEl.textContent = timeLeft;
                if(progressBar) progressBar.style.width = (timeLeft / 3 * 100) + '%';

                if (timeLeft <= 0) {
                    clearInterval(sosInterval);
                    confirmEmergency(); 
                }
            }, 1000);
        }

        function closeEmergencyModal() {
            const modal = document.getElementById('emergencyModal');
            modal.classList.add('hidden'); 
            modal.classList.remove('flex');
            if (sosInterval) clearInterval(sosInterval);
        }

        function confirmEmergency() {
            closeEmergencyModal(); 
            
            if (isDemoMode) {
                document.body.classList.add('shake-screen');
                setTimeout(() => document.body.classList.remove('shake-screen'), 1500);
                // Vibração forte e prolongada para alerta
                vibrateDevice([500, 200, 500, 200, 1000]); 
                showToast('🚨 SOS ENVIADO!', 'error', 'Localização compartilhada.');
                setTimeout(() => {
                    showToast('DISCANDO 190...', 'info');
                    window.location.href = "tel:190";
                }, 2000);
            } else {
                showToast('🚨 SOS ENVIADO!', 'error', 'Alerta registrado.');
            }
        }

        function initEmergencyButtons() {
            const floatBtn = document.getElementById('floatingEmergencyBtn');
            const sideBtn = document.getElementById('sidebarEmergencyBtn');
            if(floatBtn) floatBtn.onclick = showEmergencyModal;
            if(sideBtn) sideBtn.onclick = showEmergencyModal;
        }

        // =========================================================
        // 4. LÓGICA SENSOR (10s Teste)
        // =========================================================
        function testSensor(name) {
            document.getElementById('sensorName').textContent = name;
            const modal = document.getElementById('sensorModal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            
            let testTime = 10;
            const countdownEl = document.getElementById('countdown');
            const progressFill = document.getElementById('progressFill');
            
            countdownEl.textContent = testTime;
            progressFill.style.width = '100%';

            if (sensorInterval) clearInterval(sensorInterval);

            sensorInterval = setInterval(() => {
                testTime--;
                countdownEl.textContent = testTime;
                progressFill.style.width = (testTime / 10) * 100 + '%';
                if (testTime <= 0) { clearInterval(sensorInterval); sendAlertNow(); }
            }, 1000);
        }

        function confirmSafe() {
            document.getElementById('sensorModal').classList.add('hidden');
            document.getElementById('sensorModal').classList.remove('flex');
            if (sensorInterval) clearInterval(sensorInterval);
            showToast('Confirmado: Você está segura.', 'success');
        }

        function sendAlertNow() {
             document.getElementById('sensorModal').classList.add('hidden');
             document.getElementById('sensorModal').classList.remove('flex');
             if (sensorInterval) clearInterval(sensorInterval);
             confirmEmergency(); 
        }

        function toggleSensor(sensorId, isChecked) {
            const s = sensorsData.find(x => x.id === sensorId);
            if(s) s.isActive = isChecked;
            renderPage('security'); 
        }

        // =========================================================
        // 5. RENDERIZAÇÃO E NAVEGAÇÃO
        // =========================================================
        function initNavigation() {
            const navItems = document.querySelectorAll('.item-nav-sidebar');
            navItems.forEach(item => {
                item.addEventListener('click', function() { 
                    renderPage(this.dataset.page); 
                    if (window.innerWidth < 1024) toggleSidebar(false);
                });
            });
        }

        function toggleSidebar(show) {
            const sidebar = document.getElementById('mainSidebar');
            const overlay = document.getElementById('mobileOverlay');
            if (show) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
                setTimeout(() => overlay.classList.remove('opacity-0'), 10);
            } else {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('opacity-0');
                setTimeout(() => overlay.classList.add('hidden'), 300);
            }
        }

        function renderPage(page) {
            currentPage = page;
            const pageContent = document.getElementById('pageContent');
            const pageTitle = document.getElementById('pageTitle');
            
            document.querySelectorAll('.item-nav-sidebar').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.page === page) btn.classList.add('active');
            });

            const pages = { 
                'security': { title: 'Central de Segurança', render: renderSecurityPageHTML, init: initSecurityPage },
                'profile': { title: 'Perfil do Usuário', render: renderProfilePageHTML },
                'settings': { title: 'Configurações', render: renderSettingsPageHTML },
                'emergency': { title: 'Contatos de Emergência', render: renderEmergencyContactsPageHTML },
                'notes': { title: 'Anotações', render: () => '<div class="p-6 bg-white rounded-xl border text-center text-gray-500">Módulo de Anotações (Demo)</div>' },
                'chat': { title: 'Chat com Psicólogo', render: () => '<div class="p-6 bg-white rounded-xl border text-center text-gray-500">Módulo de Chat (Demo)</div>' }
            };

            pageContent.style.opacity = '0';
            setTimeout(() => {
                if(pages[page]) {
                    pageTitle.textContent = pages[page].title;
                    pageContent.innerHTML = pages[page].render();
                    if(pages[page].init) pages[page].init();
                } else {
                    pageTitle.textContent = page.charAt(0).toUpperCase() + page.slice(1);
                    pageContent.innerHTML = '<div class="bg-white p-8 rounded-xl border border-gray-200 text-center text-gray-500"><i class="fas fa-tools text-4xl mb-4 text-gray-300"></i><p>Módulo em desenvolvimento</p></div>';
                }
                pageContent.style.opacity = '1';
                window.scrollTo(0, 0);
            }, 150);
        }

        // --- HTML: CENTRAL DE SEGURANÇA (LAYOUT INVERTIDO + DESIGN ORIGINAL) ---
        function renderSecurityPageHTML() {
            const activeCount = sensorsData.filter(s => s.isActive).length;
            const totalCount = sensorsData.length;

            const sensorsHtml = sensorsData.map(sensor => `
                <div class="sensor-item flex justify-between items-start p-4 bg-[var(--azul-claro)] rounded-lg border border-[var(--azul-marinho)] transition-opacity duration-300 ${!sensor.isActive ? 'opacity-60' : ''} mb-4">
                    <div class="flex items-start gap-3 flex-1 min-w-0">
                        <i class="fas ${sensor.icon} text-[var(--branco)] text-lg bg-[var(--azul-marinho)] p-3 rounded-full w-12 h-12 text-center flex items-center justify-center flex-shrink-0"></i>
                        <div class="flex-1">
                            <p class="font-semibold text-[var(--azul-marinho-escuro)]">${sensor.name}</p>
                            <p class="text-xs text-gray-700/80 mb-2 break-words">${sensor.description}</p>
                            <div class="h-1 bg-[var(--azul-claro-houver)] rounded-full overflow-hidden mt-1 max-w-[200px]">
                                <div class="h-full bg-[var(--azul-marinho-escuro)]" style="width: ${sensor.sensitivity}%;"></div>
                            </div>
                            <button onclick="testSensor('${sensor.name}')" class="mt-3 px-4 py-1 bg-[var(--branco)] border border-[var(--azul-marinho-escuro)] text-[var(--azul-marinho-escuro)] rounded-lg hover:bg-[var(--azul-claro)] transition-colors text-sm font-semibold">Testar (10s)</button>
                        </div>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" ${sensor.isActive ? 'checked' : ''} class="sr-only peer" onchange="toggleSensor('${sensor.id}', this.checked)">
                            <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                    </div>
                </div>
            `).join('');

            return `
                                <div class="bg-gradient-to-r from-[var(--azul-marinho-escuro)] to-[var(--azul-marinho)] text-[var(--branco)] rounded-xl p-6 sm:p-8 border-2 border-[var(--azul-marinho-escuro)] mb-6">
                    <div class="flex flex-col sm:flex-row justify-between items-start mb-6">
                        <div class="flex items-center gap-3 mb-4 sm:mb-0"> <i class="fas fa-bolt text-2xl text-[var(--branco)]"></i> <h3 class="text-xl font-bold text-[var(--branco)]">Ações Rápidas</h3> </div>
                        <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold self-start sm:self-center"><i class="fas fa-location-arrow mr-1"></i> Localização Ativa</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button onclick="showEmergencyModal()" class="bg-red-600 hover:bg-red-700 text-[var(--branco)] rounded-lg p-6 flex flex-col items-center gap-2 transition-colors shadow-lg transform hover:scale-[1.02]"> 
                            <i class="fas fa-exclamation-triangle text-3xl"></i> <span class="font-semibold text-lg">Alerta de Emergência</span> <small class="text-sm opacity-90">Disparo em 3s</small> 
                        </button>
                        <button onclick="showToast('Alerta silencioso ativado', 'info', 'Monitoramento discreto iniciado.')" class="bg-orange-600 hover:bg-orange-700 text-[var(--branco)] rounded-lg p-6 flex flex-col items-center gap-2 transition-colors"> 
                            <i class="fas fa-bell-slash text-3xl"></i> <span class="font-semibold text-lg">Alerta Silencioso</span> <small class="text-sm opacity-90">Monitora sem notificar</small> 
                        </button>
                        <button onclick="window.location.href='tel:190'" class="bg-[var(--azul-claro)] hover:bg-[var(--azul-claro-houver)] text-[var(--azul-marinho)] rounded-lg p-6 flex flex-col items-center gap-2 transition-colors"> 
                            <i class="fas fa-phone text-3xl"></i> <span class="font-semibold text-lg">Ligar 190</span> <small class="text-sm opacity-70">Polícia Militar</small> 
                        </button>
                    </div>
                </div>

                                <div class="bg-gradient-to-r from-[var(--azul-marinho-escuro)] to-[var(--azul-marinho)] text-[var(--branco)] rounded-xl p-6 sm:p-8 border-2 border-[var(--azul-marinho-escuro)] mb-6">
                    <div class="flex flex-col sm:flex-row justify-between items-start mb-6">
                        <div class="flex gap-4 items-center mb-4 sm:mb-0"> <div class="bg-[var(--branco)] p-4 rounded-full"> <i class="fas fa-shield-alt text-3xl text-[var(--azul-marinho)]"></i> </div> <div> <h2 class="text-2xl font-bold mb-2">Central de Segurança</h2> <p class="text-[var(--azul-claro)]">Sistema de proteção integrado e monitoramento 24/7</p> </div> </div>
                        <span class="px-4 py-2 ${activeCount === totalCount ? 'bg-green-500' : 'bg-orange-500'} text-[var(--branco)] rounded-full text-sm font-semibold border-0 self-start sm:self-center"> ${activeCount === totalCount ? 'Sistemas Ativos' : 'Atenção Necessária'} </span>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"> <div class="flex items-center gap-3 mb-2"><i class="fas fa-microchip text-[var(--azul-claro)]"></i><span class="text-sm text-[var(--azul-claro)]">Sensores</span></div> <p class="text-3xl font-bold mb-1">${activeCount}/${totalCount}</p><p class="text-xs text-[var(--azul-claro)]">Ativos</p> </div>
                        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"> <div class="flex items-center gap-3 mb-2"><i class="fas fa-clock text-[var(--azul-claro)]"></i><span class="text-sm text-[var(--azul-claro)]">Check-in</span></div> <p class="text-3xl font-bold mb-1">71h</p><p class="text-xs text-[var(--azul-claro)]">Próximo</p> </div>
                        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"> <div class="flex items-center gap-3 mb-2"><i class="fas fa-user-friends text-[var(--azul-claro)]"></i><span class="text-sm text-[var(--azul-claro)]">Contatos</span></div> <p class="text-3xl font-bold mb-1">${emergencyContacts.length}</p><p class="text-xs text-[var(--azul-claro)]">Emergência</p> </div>
                        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"> <div class="flex items-center gap-3 mb-2"><i class="fas fa-map-marker-alt text-[var(--azul-claro)]"></i><span class="text-sm text-[var(--azul-claro)]">Localização</span></div> <p class="text-3xl font-bold mb-1">ON</p><p class="text-xs text-[var(--azul-claro)]">GPS</p> </div>
                    </div>
                </div>

                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                                        <div class="bg-[var(--branco)] rounded-xl border-2 border-[var(--azul-claro)] p-6">
                        <div class="flex items-start justify-between mb-6">
                            <div class="flex items-center gap-3"> <i class="fas fa-clock text-2xl text-[var(--azul-marinho)]"></i> <div> <h3 class="text-[var(--azul-marinho-escuro)] mb-1 font-semibold">Check-in de Segurança</h3> <p class="text-sm text-[var(--azul-marinho-escuro)] opacity-60">Confirme sua segurança a cada 72 horas</p> </div> </div>
                            <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Ativo</span>
                        </div>
                        <div class="mb-6">
                            <div class="flex items-center justify-between mb-2"> <span class="text-sm text-[var(--azul-marinho-escuro)] opacity-70">Tempo até próximo check-in</span> <span id="checkin-timer-display" class="text-lg font-bold text-[var(--azul-marinho-escuro)]">71h 59m</span> </div>
                            <div class="h-2 bg-gray-200 rounded-full overflow-hidden"> <div class="h-full bg-[var(--azul-marinho)] transition-all duration-1000" style="width: 100%;"></div> </div>
                        </div>
                        <button onclick="performCheckIn()" class="w-full bg-[var(--azul-marinho)] hover:bg-[var(--azul-marinho-escuro)] text-[var(--branco)] py-3 rounded-lg font-semibold transition-colors"> <i class="fas fa-check mr-2"></i> Confirmar que Estou Segura </button>
                        <div class="pt-4 border-t border-[var(--azul-claro)] mt-4"> <p class="text-xs text-[var(--azul-marinho-escuro)] opacity-60 mb-3">Histórico de Check-ins Recentes</p> <div class="space-y-2"><div class="flex items-center justify-between text-sm"><div class="flex items-center gap-2"><i class="fas fa-check-circle text-green-600"></i><span class="text-[var(--azul-marinho-escuro)] opacity-70">26/10/2025 14:30</span></div><span class="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Confirmado</span></div></div> </div>
                    </div>

                                        <div class="bg-white rounded-xl border-2 border-[var(--azul-claro)] p-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="bg-[var(--azul-marinho-escuro)] p-3 rounded-full"> <i class="fas fa-robot text-[var(--branco)] text-xl"></i> </div>
                            <h3 class="text-xl font-bold text-[var(--azul-marinho-escuro)]">Detecção Automática</h3>
                            <span class="ml-auto px-3 py-1 bg-[var(--azul-marinho-escuro)] text-[var(--branco)] rounded-full text-xs font-semibold">${activeCount}/${totalCount} Ativos</span>
                        </div>
                        <div class="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg"> <p class="text-sm text-blue-900 mb-2"><strong>Como funciona:</strong> Os sensores monitoram automaticamente padrões que podem indicar situações de perigo.</p> <p class="text-sm text-blue-900">Quando acionados, você terá <strong>60 segundos</strong> para confirmar que está segura.</p> </div>
                        <div class="space-y-3"> ${sensorsHtml} </div>
                    </div>
                </div>
            `;
        }

        // --- HTML: PERFIL (Editável) ---
        function renderProfilePageHTML() {
            return `
                <div class="bg-white rounded-xl border-2 border-[var(--azul-claro)] overflow-hidden shadow-lg mb-8">
                    <div class="h-32 bg-gradient-to-r from-[var(--azul-marinho-escuro)] to-[var(--azul-marinho)]"></div>
                    <div class="px-4 sm:px-8 pb-8">
                        <div class="flex flex-col sm:flex-row justify-between items-center sm:items-end -mt-16 mb-6"> 
                             <div class="flex flex-col sm:flex-row items-center sm:items-end gap-4 text-center sm:text-left">
                                <div class="relative"><img src="./assets/img/foto perfil.png" onerror="this.src='https://ui-avatars.com/api/?name=Mariana+Moenchiali&background=00356C&color=fff'" alt="${userProfile.name}" class="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"></div>
                                <div class="mb-2"> <h2 class="text-2xl font-bold text-[var(--azul-marinho-escuro)] mb-1 user-name-display">${userProfile.name}</h2> <p class="text-gray-600/60 user-email-display">${userProfile.email}</p> </div>
                             </div>
                             <button onclick="enableProfileEdit()" class="px-4 py-2 bg-[var(--azul-marinho)] text-[var(--branco)] rounded-lg font-semibold mb-2 sm:mb-0 transition-colors hover:bg-[var(--azul-marinho-escuro)]">Editar Dados</button>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-xl border-2 border-[var(--azul-claro)] p-4 sm:p-6 mb-8">
                    <div class="flex items-center gap-3 mb-6 border-b border-gray-600/30 pb-4"> <div class="w-10 h-10 rounded-full bg-[var(--azul-claro)] text-[var(--azul-marinho)] flex items-center justify-center text-xl"> <i class="fas fa-user"></i> </div> <h3 class="text-xl font-bold text-[var(--azul-marinho-escuro)]">Informações Pessoais</h3> </div>
                    <form id="profileForm" onsubmit="return false;">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div><label class="block text-sm font-medium text-[var(--azul-marinho-escuro)] mb-2">Nome Completo</label><input type="text" id="profName" value="${userProfile.name}" disabled class="w-full px-4 py-3 border border-[var(--azul-claro)] rounded-lg focus:outline-none focus:border-[var(--azul-marinho)]"></div>
                            <div><label class="block text-sm font-medium text-[var(--azul-marinho-escuro)] mb-2">Email</label><input type="email" id="profEmail" value="${userProfile.email}" disabled class="w-full px-4 py-3 border border-[var(--azul-claro)] rounded-lg focus:outline-none focus:border-[var(--azul-marinho)]"></div>
                            <div><label class="block text-sm font-medium text-[var(--azul-marinho-escuro)] mb-2">Telefone</label><input type="tel" id="profPhone" value="${userProfile.phone}" disabled class="w-full px-4 py-3 border border-[var(--azul-claro)] rounded-lg focus:outline-none focus:border-[var(--azul-marinho)]"></div>
                        </div>
                        <button id="saveProfileBtn" onclick="saveProfile()" class="hidden mt-4 px-6 py-2 bg-green-600 text-white rounded-lg float-right hover:bg-green-700">Salvar</button>
                    </form>
                </div>
            `;
        }

        function enableProfileEdit() {
            document.querySelectorAll('#profileForm input').forEach(i => { i.disabled = false; i.classList.add('bg-blue-50'); });
            document.getElementById('saveProfileBtn').classList.remove('hidden');
        }

        function saveProfile() {
            userProfile.name = document.getElementById('profName').value;
            userProfile.email = document.getElementById('profEmail').value;
            document.querySelectorAll('#profileForm input').forEach(i => { i.disabled = true; i.classList.remove('bg-blue-50'); });
            document.getElementById('saveProfileBtn').classList.add('hidden');
            updateUserDisplay();
            showToast('Perfil Salvo!', 'success');
        }

        // --- HTML: CONFIGURAÇÕES ---
        function renderSettingsPageHTML() {
            return `
                <div class="bg-white rounded-xl border-2 border-[var(--azul-claro)] p-4 sm:p-6">
                    <div class="flex items-center gap-3 mb-6"> <div class="bg-[var(--azul-claro)] p-3 rounded-full"> <i class="fas fa-cog text-[var(--azul-marinho)] text-xl"></i> </div> <h3 class="text-xl font-bold text-[var(--azul-marinho-escuro)]">Preferências do Sistema</h3> </div>
                    <div class="space-y-4">
                        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-gray-50 rounded-lg gap-3"> 
                            <div> <p class="text-sm font-semibold text-[var(--azul-marinho-escuro)] mb-1">Modo Escuro</p> <p class="text-xs text-[var(--azul-marinho)]/60">Em desenvolvimento</p> </div> 
                            <label class="relative inline-flex items-center cursor-pointer opacity-50 cursor-not-allowed"><input type="checkbox" disabled class="sr-only peer"><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div></label> 
                        </div>
                        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-gray-50 rounded-lg gap-3"> 
                            <div> <p class="text-sm font-semibold text-[var(--azul-marinho-escuro)] mb-1">Localização</p> <p class="text-xs text-[var(--azul-marinho)]/60">Compartilhar em SOS</p> </div> 
                            <label class="relative inline-flex items-center cursor-pointer"><input type="checkbox" checked class="sr-only peer" onchange="showToast('Salvo!', 'success')"><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div></label> 
                        </div>
                    </div>
                </div>
            `;
        }

        // --- HTML: CONTATOS ---
        function renderEmergencyContactsPageHTML() {
            const list = emergencyContacts.map(c => `
                <div class="p-4 bg-gray-50 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-gray-100 transition-colors gap-4 mb-3">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-[var(--azul-marinho)] text-white flex items-center justify-center text-xl font-bold">${c.name.charAt(0)}</div>
                        <div><h4 class="font-semibold text-[var(--azul-marinho-escuro)] mb-1">${c.name}</h4><p class="text-xs text-[var(--azul-marinho)]/60">${c.relationship}</p></div>
                    </div>
                    <div class="flex gap-2 w-full sm:w-auto"><button class="flex-1 sm:flex-none px-3 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors"><i class="fas fa-trash-alt"></i></button></div>
                </div>
            `).join('');
            return `
                <div class="bg-white rounded-xl border-2 border-[var(--azul-claro)] p-4 sm:p-6">
                    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                        <div class="flex items-center gap-3"><div class="bg-[var(--azul-claro)] p-3 rounded-full"><i class="fas fa-users text-[var(--azul-marinho)] text-xl"></i></div><h3 class="text-xl font-bold text-[var(--azul-marinho-escuro)]">Contatos</h3></div>
                        <button class="w-full sm:w-auto px-4 py-2 bg-[var(--azul-marinho)] hover:bg-[var(--azul-marinho-escuro)] text-white rounded-lg font-semibold">+ Adicionar</button>
                    </div>
                    <div class="space-y-3">${list}</div>
                </div>
            `;
        }

        // --- UTILITÁRIOS ---
        function showToast(title, type, message = '') {
            const container = document.getElementById('toastContainer');
            const colors = type === 'error' ? 'border-red-500 text-red-700' : 'border-green-500 text-green-700';
            const toast = document.createElement('div');
            toast.className = `bg-white rounded-lg shadow-xl p-4 flex items-center gap-3 border-l-4 ${colors} transform translate-y-full opacity-0 transition-all duration-300`;
            toast.innerHTML = `<div><div class="font-bold text-sm">${title}</div>${message ? `<div class="text-xs opacity-80">${message}</div>` : ''}</div>`;
            container.appendChild(toast);
            setTimeout(() => { toast.classList.remove('translate-y-full', 'opacity-0'); }, 10);
            setTimeout(() => { toast.classList.add('translate-y-full', 'opacity-0'); setTimeout(() => toast.remove(), 300); }, 4000);
        }

        function formatTimeRemaining(s) { return "71h 59m"; }
        function initSecurityPage() { if(countdownInterval) clearInterval(countdownInterval); }
    </script>
</body>
</html>
