// ==UserScript==
// @name         X (Twitter) Action Bar Extended
// @namespace    https://greasyfork.org/en/users/1575945-star-tanuki07
// @homepageURL  https://github.com/Startanuki07
// @license      MIT
// @author       Star_tanuki07
// @version      1.3.0.3
// @description     Adds Not Interested, Mute, and Block buttons directly to every tweet — manage your feed without opening dropdown menus. Includes a one-click mute shortcut on profile pages and a settings panel to choose which buttons appear and where.
// @description:zh-TW  在每則推文上直接新增「不感興趣、靜音、封鎖」按鈕，無需開啟下拉選單即可一鍵管理動態牆。另附個人頁面靜音捷徑，以及可自訂按鈕顯示與擺放位置的設定面板。
// @description:zh-CN  在每条推文上直接添加「不感兴趣、静音、屏蔽」按钮，无需打开下拉菜单即可一键管理时间线。附带个人页面静音快捷方式，以及可自定义按钮显示与位置的设置面板。
// @description:ja  各ツイートに「興味なし・ミュート・ブロック」ボタンを直接追加し、メニューを開かずタイムラインを管理できます。プロフィールページのミュートショートカットと、ボタンの表示・位置をカスタマイズできる設定パネルも搭載。
// @description:ko  각 트윗에 관심 없음・뮤트・차단 버튼을 직접 추가하여 드롭다운 메뉴 없이 피드를 관리할 수 있습니다. 프로필 페이지 뮤트 단축키와 버튼 표시 및 위치를 설정할 수 있는 패널도 포함되어 있습니다.
// @description:es  Añade botones de No me interesa, Silenciar y Bloquear directamente en cada tuit para gestionar tu feed sin abrir menús. Incluye un acceso directo de silenciar en páginas de perfil y un panel de configuración para personalizar qué botones aparecen y dónde.
// @description:pt-BR  Adiciona botões de Não tenho interesse, Silenciar e Bloquear diretamente em cada tweet para gerenciar seu feed sem abrir menus suspensos. Inclui atalho de silenciar na página de perfil e painel de configurações para personalizar os botões exibidos e sua posição.
// @description:fr  Ajoute des boutons Ne m'intéresse pas, Masquer et Bloquer directement sur chaque tweet pour gérer votre fil sans ouvrir de menus déroulants. Comprend un raccourci de masquage sur les pages de profil et un panneau de paramètres pour personnaliser les boutons affichés et leur position.
// @description:ru  Добавляет кнопки «Не интересно», «Игнорировать» и «Заблокировать» прямо на каждый твит — управляйте лентой без открытия выпадающих меню. Включает ярлык отключения звука на странице профиля и панель настроек для выбора отображаемых кнопок и их расположения.
// @description:de  Fügt Nicht interessiert-, Stummschalten- und Blockieren-Schaltflächen direkt zu jedem Tweet hinzu — Feed verwalten ohne Dropdown-Menüs. Enthält eine Stummschalten-Verknüpfung auf Profilseiten und ein Einstellungsfenster zur Auswahl der Schaltflächen und ihrer Position.
// @description:tr  Her tweete doğrudan İlgilenmiyorum, Sessize Al ve Engelle düğmeleri ekler — açılır menü açmadan beslemeni yönet. Profil sayfası için sessize alma kısayolu ve düğmelerin görünümüyle konumunu özelleştiren bir ayarlar paneli içerir.
// @description:id  Menambahkan tombol Tidak Tertarik, Bisukan, dan Blokir langsung ke setiap tweet — kelola feed tanpa membuka menu dropdown. Dilengkapi pintasan bisukan di halaman profil dan panel pengaturan untuk memilih tombol yang ditampilkan beserta posisinya.
// @description:ar  يضيف أزرار غير مهتم والكتم والحظر مباشرةً على كل تغريدة — أدِر خلاصتك دون فتح القوائم المنسدلة. يتضمن اختصار كتم في صفحات الملف الشخصي ولوحة إعدادات لتخصيص الأزرار الظاهرة ومواضعها.
// @match        https://twitter.com/*
// @match        https://x.com/*
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTMiIGZpbGw9IiMxREExRjIiLz48cGF0aCBkPSJNNTAgMTkuMmMtMS4zLjU1LTIuNi45Mi00LjAgMS4wOGMxLjQ0LS44NiAyLjU1LTIuMjIgMy4wNy0zLjg0Yy0xLjM2LjgtMi44NyAxLjM5LTQuNDcgMS43Yy0xLjI4LTEuMzctMy4xMi0yLjIyLTUuMTQtMi4yMmMtMy44OSAwLTcuMDQgMy4xNS03LjA0IDcuMDRjMCAuNTUuMDYgMS4wOS4xOCAxLjZDMjYuNSAyNC4zIDIxIDIxLjUgMTcuMyAxNy4xYy0uNjEgMS4wNC0uOTYgMi4yNC0uOTYgMy41M2MwIDIuNDQgMS4yNCA0LjU5IDMuMTMgNS44NWMtMS4xNS0uMDQtMi4yMy0uMzUtMy4xOC0uODh2LjA5YzAgMy40MSAyLjQzIDYuMjUgNS42NSA2LjljLS41OS4xNi0xLjIxLjI1LTEuODUuMjVjLS40NSAwLS44OS0uMDQtMS4zMi0uMTJjLjg5IDIuNzkgMy40OSA0LjgyIDYuNTcgNC44OEMyMi45OSAzOS42IDIwLjEgNDAuNyAxNi45IDQwLjdjLS41NyAwLTEuMTMtLjAzLTEuNjgtLjFjMy4xMiAyIDYuODIgMy4xNiAxMC44IDMuMTZjMTIuOTUgMCAyMC4wMy0xMC43MyAyMC4wMy0yMC4wM2MwLS4zMS0uMDEtLjYxLS4wMi0uOTFjMS4zOC0uOTkgMi41Ny0yLjIzIDMuNTEtMy42NGMtMS4yNi41Ni0yLjYyLjk0LTQuMDQgMS4xMUw1MCAxOS4yeiIgZmlsbD0id2hpdGUiLz48bGluZSB4MT0iMzguNSIgeTE9IjIwLjUiIHgyPSI0Mi41IiB5Mj0iMjQuNSIgc3Ryb2tlPSIjMURBMUYyIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGxpbmUgeDE9IjQyLjUiIHkxPSIyMC41IiB4Mj0iMzguNSIgeTI9IjI0LjUiIHN0cm9rZT0iIzFEQTFGMiIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPgo=
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

const NOT_INTERESTED_PATH = 'path[d="M12 13.6c1.64-.013 3.278.76 4.284 2.02.114.14.218.282.317.43l-1.202.9c-.088-.102-.177-.197-.272-.289-.844-.823-1.98-1.264-3.125-1.26-1.146-.002-2.282.441-3.129 1.263-.095.092-.185.186-.273.287l-1.2-.902c.1-.149.205-.29.319-.429C8.728 14.364 10.36 13.59 12 13.6zM9.25 8c.828 0 1.5.796 1.5 1.9 0 1.105-.672 1.85-1.5 1.85s-1.5-.745-1.5-1.85c0-1.104.672-1.9 1.5-1.9zm5.5 0c.828 0 1.5.796 1.5 1.9 0 1.105-.672 1.85-1.5 1.85s-1.5-.745-1.5-1.85c0-1.104.672-1.9 1.5-1.9z"]';
const MUTE_PATH           = 'path[d="M16 22h-2.35l-.275-.219-3.842-3.073 1.424-1.424L14 19.72v-5.477l2-2V22z"]';
const BLOCK_PATH          = 'path[d="M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08L17.09 5.5C15.68 4.4 13.92 3.75 12 3.75zm6.5 3.17L6.92 18.5c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z"]';
const BLOCK_CONFIRM_SEL   = '[data-testid="confirmationSheetConfirm"]';
const PROFILE_MORE_PATH   = 'path[d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"]';

const SETTINGS_KEY = 'mtga_settings';
const CARET_RETRY_LIMIT = 5;
const SETTINGS_DEFAULTS = {
    showNotInterested: true,
    showMute:          false,
    showBlock:         false,
    niAction:          'off',
    buttonPosition:    'header',
    panelTheme:        'dark',
};

let SETTINGS = { ...SETTINGS_DEFAULTS };

const VALID_NI_ACTIONS    = ['off', 'fewer', 'irrelevant', 'pick'];
const VALID_POSITIONS     = ['header', 'actionbar'];
const VALID_PANEL_THEMES  = ['dark', 'light'];
const sanitizeSettings = (raw) => {
    const merged = { ...SETTINGS_DEFAULTS, ...raw };
    return {
        ...merged,
        niAction:       VALID_NI_ACTIONS.includes(merged.niAction)       ? merged.niAction       : SETTINGS_DEFAULTS.niAction,
        buttonPosition: VALID_POSITIONS.includes(merged.buttonPosition)   ? merged.buttonPosition : SETTINGS_DEFAULTS.buttonPosition,
        panelTheme:     VALID_PANEL_THEMES.includes(merged.panelTheme)   ? merged.panelTheme     : SETTINGS_DEFAULTS.panelTheme,
        showNotInterested: !!merged.showNotInterested,
        showMute:          !!merged.showMute,
        showBlock:         !!merged.showBlock,
    };
};

const loadSettings = () => {
    try {
        const stored = GM_getValue(SETTINGS_KEY, null);
        if (stored) SETTINGS = sanitizeSettings(JSON.parse(stored));
    } catch (e) {
        console.warn('[MTGA] Failed to load settings, using defaults:', e);
    }
};

const saveSettings = () => {
    try {
        GM_setValue(SETTINGS_KEY, JSON.stringify(SETTINGS));
    } catch (e) {
        console.warn('[MTGA] Failed to save settings:', e);
    }
};

(function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
        
        .mtga-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            padding: 0;
            border: none;
            background: transparent;
            border-radius: 50%;
            cursor: pointer;
            color: rgb(113, 118, 123);
            flex-shrink: 0;
            transition: color 0.15s ease, background-color 0.15s ease;
            vertical-align: middle;
        }
        .mtga-btn.mtga-not-interested:hover {
            color: rgb(255, 160, 0);
            background-color: rgba(255, 160, 0, 0.1);
        }
        .mtga-btn.mtga-mute:hover {
            color: rgb(29, 155, 240);
            background-color: rgba(29, 155, 240, 0.1);
        }
        
        .mtga-btn.mtga-mute.mtga-active {
            color: rgb(29, 155, 240);
        }
        .mtga-btn.mtga-mute.mtga-active:hover {
            color: rgb(29, 155, 240);
            background-color: rgba(29, 155, 240, 0.15);
        }
        
        .mtga-btn.mtga-mute.mtga-mute-blocked {
            opacity: 0.35;
            cursor: not-allowed;
            animation: mtga-shake 0.35s ease;
        }
        @keyframes mtga-shake {
            0%,100% { transform: translateX(0); }
            25%      { transform: translateX(-3px); }
            75%      { transform: translateX(3px); }
        }
        .mtga-btn.mtga-block:hover {
            color: rgb(244, 33, 46);
            background-color: rgba(244, 33, 46, 0.1);
        }
        
        .mtga-btn.mtga-block.mtga-active {
            color: rgb(244, 33, 46);
        }
        .mtga-btn.mtga-block.mtga-active:hover {
            color: rgb(244, 33, 46);
            background-color: rgba(244, 33, 46, 0.15);
        }
        
        .mtga-btn.mtga-disabled {
            opacity: 0.3;
            cursor: not-allowed;
            pointer-events: none;
        }
        .mtga-btn svg {
            width: 18px;
            height: 18px;
            fill: currentColor;
            display: block;
            pointer-events: none;
        }
        
        .mtga-header-group {
            display: flex;
            align-items: center;
            flex-direction: row;
        }

        #mtga-settings-gear {
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 9000;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            background-color: rgb(29, 155, 240);
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(0,0,0,0.25);
            opacity: 0;
            transition: opacity 0.2s ease, background-color 0.15s ease, transform 0.15s ease;
        }
        #mtga-settings-gear:hover { opacity: 1; background-color: rgb(26,140,216); transform: rotate(30deg); }
        #mtga-settings-gear:focus { opacity: 1; outline: 2px solid rgb(29,155,240); outline-offset: 2px; }
        #mtga-settings-gear svg   { width: 20px; height: 20px; fill: currentColor; pointer-events: none; }

        #mtga-panel {
            position: fixed;
            bottom: 72px;
            right: 24px;
            z-index: 9001;
            width: 288px;
            
            max-height: calc(100vh - 88px);
            overflow-y: auto;
            
            scrollbar-width: thin;
            scrollbar-color: rgba(113,118,123,0.4) transparent;
            border-radius: 16px;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            font-size: 14px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.28);
            
            opacity: 0;
            visibility: hidden;
            transform: translateY(8px);
            pointer-events: none;
            transition: opacity 0.18s ease, transform 0.18s ease, visibility 0s linear 0.18s,
                        background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        #mtga-panel.mtga-panel-open {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            pointer-events: auto;
            transition: opacity 0.18s ease, transform 0.18s ease, visibility 0s linear 0s,
                        background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }

        #mtga-panel[data-mtga-theme="dark"] {
            background-color: #1e2732;
            color: #e7e9ea;
            border: 1px solid rgba(255,255,255,0.1);
        }
        #mtga-panel[data-mtga-theme="dark"] .mtga-divider        { border-color: rgba(255,255,255,0.1); }
        #mtga-panel[data-mtga-theme="dark"] .mtga-section-label  { color: rgb(113,118,123); }
        #mtga-panel[data-mtga-theme="dark"] .mtga-toggle-desc    { color: rgb(113,118,123); }
        #mtga-panel[data-mtga-theme="dark"] .mtga-panel-footer   { color: rgb(113,118,123); }
        #mtga-panel[data-mtga-theme="dark"] .mtga-radio-btn      { border-color: rgba(255,255,255,0.15); color: #e7e9ea; }
        #mtga-panel[data-mtga-theme="dark"] .mtga-radio-btn.mtga-radio-active {
            border-color: rgb(29,155,240); background-color: rgba(29,155,240,0.15); color: rgb(29,155,240);
        }
        #mtga-panel[data-mtga-theme="dark"] .mtga-theme-toggle   { background: rgba(255,255,255,0.12); color: #e7e9ea; }

        #mtga-panel[data-mtga-theme="light"] {
            background-color: #ffffff;
            color: #0f1419;
            border: 1px solid rgba(0,0,0,0.12);
        }
        #mtga-panel[data-mtga-theme="light"] .mtga-divider        { border-color: rgba(0,0,0,0.1); }
        #mtga-panel[data-mtga-theme="light"] .mtga-section-label  { color: rgb(83,100,113); }
        #mtga-panel[data-mtga-theme="light"] .mtga-toggle-desc    { color: rgb(83,100,113); }
        #mtga-panel[data-mtga-theme="light"] .mtga-panel-footer   { color: rgb(83,100,113); }
        #mtga-panel[data-mtga-theme="light"] .mtga-radio-btn      { border-color: rgba(0,0,0,0.15); color: #0f1419; }
        #mtga-panel[data-mtga-theme="light"] .mtga-radio-btn.mtga-radio-active {
            border-color: rgb(29,155,240); background-color: rgba(29,155,240,0.1); color: rgb(29,155,240);
        }
        #mtga-panel[data-mtga-theme="light"] .mtga-theme-toggle   { background: rgba(0,0,0,0.08); color: #0f1419; }

        #mtga-panel .mtga-panel-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 6px;
            margin-bottom: 4px;
        }
        #mtga-panel h3 { margin: 0; font-size: 16px; font-weight: 700; letter-spacing: -0.01em; flex: 1; }

        .mtga-panel-close {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            transition: background-color 0.15s ease;
            padding: 0;
        }
        .mtga-panel-close svg { width: 14px; height: 14px; fill: currentColor; pointer-events: none; }
        #mtga-panel[data-mtga-theme="dark"]  .mtga-panel-close { background: rgba(255,255,255,0.10); color: rgb(113,118,123); }
        #mtga-panel[data-mtga-theme="dark"]  .mtga-panel-close:hover { background: rgba(255,255,255,0.18); color: #e7e9ea; }
        #mtga-panel[data-mtga-theme="light"] .mtga-panel-close { background: rgba(0,0,0,0.06); color: rgb(113,118,123); }
        #mtga-panel[data-mtga-theme="light"] .mtga-panel-close:hover { background: rgba(0,0,0,0.12); color: #0f1419; }

        .mtga-theme-toggle {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            transition: background-color 0.15s ease;
            padding: 0;
        }
        .mtga-theme-toggle svg { width: 15px; height: 15px; fill: currentColor; pointer-events: none; }

        #mtga-panel .mtga-panel-subtitle { margin: 0 0 14px 0; font-size: 12px; }
        #mtga-panel .mtga-divider        { border: none; border-top: 1px solid; margin: 12px 0; }
        #mtga-panel .mtga-section-label  {
            font-size: 11px; font-weight: 600; text-transform: uppercase;
            letter-spacing: 0.06em; margin: 14px 0 4px 0; display: block;
        }

        .mtga-toggle-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 0;
        }
        .mtga-toggle-label         { display: flex; align-items: center; gap: 10px; font-weight: 500; }
        .mtga-toggle-label svg     { width: 16px; height: 16px; fill: currentColor; flex-shrink: 0; color: rgb(113,118,123); }
        .mtga-toggle-desc          { font-size: 11px; margin-top: 2px; }

        .mtga-switch               { position: relative; width: 40px; height: 22px; flex-shrink: 0; }
        .mtga-switch input         { opacity: 0; width: 0; height: 0; position: absolute; }
        .mtga-switch-track         {
            position: absolute; inset: 0; border-radius: 11px;
            background-color: rgb(196,207,214);
            transition: background-color 0.2s ease; cursor: pointer;
        }
        .mtga-switch-track::after  {
            content: ''; position: absolute; top: 3px; left: 3px;
            width: 16px; height: 16px; border-radius: 50%;
            background: #fff; transition: transform 0.2s ease;
            box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }
        .mtga-switch input:checked + .mtga-switch-track            { background-color: rgb(29,155,240); }
        .mtga-switch input:checked + .mtga-switch-track::after     { transform: translateX(18px); }

        .mtga-radio-group { display: flex; gap: 8px; margin: 4px 0 2px 0; }
        .mtga-radio-btn {
            flex: 1;
            padding: 6px 0;
            border-radius: 8px;
            border: 1.5px solid;
            background: transparent;
            font-size: 12px;
            font-weight: 500;
            cursor: pointer;
            text-align: center;          
            transition: border-color 0.15s ease, background-color 0.15s ease, color 0.15s ease;
            font-family: inherit;
        }
        
        .mtga-radio-btn.mtga-legacy { opacity: 0.55; font-size: 11.5px; }
        .mtga-radio-btn.mtga-legacy:hover { opacity: 0.85; }
        .mtga-radio-btn.mtga-legacy.mtga-radio-active { opacity: 1; }
        
        .mtga-legacy-toggle {
            display: flex;
            align-items: center;
            gap: 5px;
            margin-top: 8px;
            padding: 0;
            border: none;
            background: transparent;
            cursor: pointer;
            font-family: inherit;
            font-size: 11px;
            font-weight: 500;
            transition: color 0.15s ease;
        }
        .mtga-legacy-toggle svg {
            width: 12px; height: 12px; fill: none; stroke: currentColor;
            stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round;
            flex-shrink: 0;
            transition: transform 0.2s ease;
        }
        .mtga-legacy-toggle.open svg { transform: rotate(180deg); }
        #mtga-panel[data-mtga-theme="dark"]  .mtga-legacy-toggle { color: rgba(255,255,255,0.38); }
        #mtga-panel[data-mtga-theme="dark"]  .mtga-legacy-toggle:hover { color: rgba(255,255,255,0.65); }
        #mtga-panel[data-mtga-theme="light"] .mtga-legacy-toggle { color: rgba(0,0,0,0.38); }
        #mtga-panel[data-mtga-theme="light"] .mtga-legacy-toggle:hover { color: rgba(0,0,0,0.60); }
        .mtga-legacy-section {
            overflow: hidden;
            max-height: 0;
            transition: max-height 0.22s ease, opacity 0.18s ease, margin-top 0.18s ease;
            opacity: 0;
            margin-top: 0;
        }
        .mtga-legacy-section.open {
            max-height: 80px;
            opacity: 1;
            margin-top: 6px;
        }

        #mtga-panel .mtga-panel-footer { margin-top: 14px; font-size: 11px; text-align: center; }

        .mtga-picker {
            position: fixed;
            z-index: 9100;
            display: flex;
            flex-direction: column;
            gap: 6px;
            padding: 12px;
            border-radius: 12px;
            width: 240px;
            box-shadow: 0 6px 24px rgba(0,0,0,0.30);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            font-size: 13px;
            
            animation: mtga-picker-in 0.18s cubic-bezier(0.22, 1, 0.36, 1);
            transform-origin: right center;
            
            pointer-events: none;
            animation-fill-mode: forwards;
        }
        
        .mtga-picker.mtga-picker-ready { pointer-events: auto; }
        @keyframes mtga-picker-in {
            
            from { opacity: 0; transform: translateX(10px) scale(0.95); }
            to   { opacity: 1; transform: translateX(0)    scale(1); }
        }
        
        .mtga-picker[data-side="right"] {
            transform-origin: left center;
            animation-name: mtga-picker-in-left;
        }
        @keyframes mtga-picker-in-left {
            from { opacity: 0; transform: translateX(-10px) scale(0.95); }
            to   { opacity: 1; transform: translateX(0)     scale(1); }
        }
        
        .mtga-picker[data-mtga-theme="dark"] {
            background: #1e2732;
            color: #e7e9ea;
            border: 1px solid rgba(255,255,255,0.1);
        }
        
        .mtga-picker[data-mtga-theme="light"] {
            background: #ffffff;
            color: #0f1419;
            border: 1px solid rgba(0,0,0,0.12);
        }
        
        .mtga-picker-label {
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 2px;
            opacity: 0.6;
        }
        
        .mtga-picker-btn {
            display: flex;
            align-items: center;
            gap: 8px;
            width: 100%;
            padding: 8px 12px;
            border-radius: 8px;
            border: 1px solid transparent;
            background: transparent;
            cursor: pointer;
            font-size: 13px;
            font-family: inherit;
            text-align: left;
            transition: background-color 0.12s ease, border-color 0.12s ease, color 0.12s ease;
        }
        .mtga-picker-btn svg { width: 15px; height: 15px; fill: currentColor; flex-shrink: 0; }
        
        .mtga-picker[data-mtga-theme="dark"]  .mtga-picker-btn { color: #e7e9ea; }
        .mtga-picker[data-mtga-theme="dark"]  .mtga-picker-btn:hover {
            background: rgba(255,160,0,0.12); border-color: rgba(255,160,0,0.3); color: rgb(255,160,0);
        }
        
        .mtga-picker[data-mtga-theme="light"] .mtga-picker-btn { color: #0f1419; }
        .mtga-picker[data-mtga-theme="light"] .mtga-picker-btn:hover {
            background: rgba(255,140,0,0.10); border-color: rgba(255,140,0,0.30); color: rgb(200,110,0);
        }
        
        .mtga-picker-bar {
            height: 2px;
            border-radius: 1px;
            background: rgba(255,160,0,0.45);
            transform-origin: left;
            animation: mtga-picker-bar var(--mtga-picker-timeout, 8s) linear forwards;
        }
        @keyframes mtga-picker-bar {
            from { transform: scaleX(1); }
            to   { transform: scaleX(0); }
        }

    `;
    document.head.appendChild(style);
})();

const SVG_NOT_INTERESTED = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/></svg>`;
const SVG_MUTE           = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c-1.66 0-3 1.34-3 3v6c0 1.66 1.34 3 3 3s3-1.34 3-3V6c0-1.66-1.34-3-3-3zm-1 9V6c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1zm6 0c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-2.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>`;
const SVG_MUTED          = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.27 3L3 4.27l6.73 6.73H9v6c0 1.66 1.34 3 3 3s3-1.34 3-3v-1.73l3.73 3.73c-.6.43-1.28.75-2.02.92L16.28 21H16v-.08c-3.39-.49-6-3.39-6-6.92H8c0 3.53 2.61 6.43 6 6.92V21h2v-2.08c.74-.17 1.42-.5 2.02-.94L21 21l1.27-1.27L4.27 3zM12 3c-1.66 0-3 1.34-3 3v.73l5.27 5.27H15V6c0-1.66-1.34-3-3-3z"/></svg>`;
const SVG_BLOCK          = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.5 2L3 7v10l8.5 5 8.5-5V7L11.5 2zm0 2.31L18 8.11v7.78l-6.5 3.82L5 15.89V8.11L11.5 4.31zM11.5 7c-1.38 0-2.5 1.12-2.5 2.5S10.12 12 11.5 12s2.5-1.12 2.5-2.5S12.88 7 11.5 7zm0 1.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4.5c-1.67 0-5 .84-5 2.5V16h10v-.5c0-1.66-3.33-2.5-5-2.5zm0 1.5c1.87 0 3.14.55 3.74 1H7.76c.6-.45 1.87-1 3.74-1z"/></svg>`;
const SVG_BLOCKED        = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.5 2L3 7v10l8.5 5 8.5-5V7L11.5 2zm0 2.31L18 8.11v7.78l-6.5 3.82L5 15.89V8.11L11.5 4.31zM8.29 7.88L11.5 11.1l3.21-3.22 1.41 1.41-3.21 3.22 3.21 3.2-1.41 1.42L11.5 14.9l-3.21 3.22-1.41-1.42 3.21-3.2-3.21-3.21 1.41-1.41z"/></svg>`;
const SVG_GEAR           = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>`;
const SVG_SUN  = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm1-6h-2v3h2V3zm0 15h-2v3h2v-3zM3 11v2h3v-2H3zm15 0v2h3v-2h-3zM5.99 4.58l-1.42 1.42 2.12 2.12 1.42-1.42L5.99 4.58zm12.02 12.02l-1.42 1.42 2.12 2.12 1.42-1.42-2.12-2.12zM4.57 17.99l1.42 1.42 2.12-2.12-1.42-1.42-2.12 2.12zm12.03-12.02l1.42 1.42 2.12-2.12-1.42-1.42-2.12 2.12z"/></svg>`;
const SVG_MOON = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/></svg>`;
const SVG_AUTO_NI = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>`;
const SVG_CLOSE   = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;
const SVG_COPY    = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>`;

const SCRIPT_VERSION = (typeof GM_info !== 'undefined' && GM_info?.script?.version)
    ? GM_info.script.version
    : '1.3.0.3';

const sleep = ms => new Promise(r => setTimeout(r, ms));

const waitForElm = (selector) => new Promise((resolve, reject) => {
    const existing = document.querySelector(selector);
    if (existing) return resolve(existing);
    const observer = new MutationObserver(() => {
        const elm = document.querySelector(selector);
        if (elm) { clearTimeout(timer); observer.disconnect(); resolve(elm); }
    });
    const timer = setTimeout(() => { observer.disconnect(); reject(new Error(`waitForElm: timed out for "${selector}"`)); }, 10000);
    observer.observe(document.body, { childList: true, subtree: true });
});

const makeTweetBtn = (cls, label, svg) => {
    const btn = document.createElement('button');
    btn.classList.add('mtga-btn', cls);
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
    btn.innerHTML = svg;

    const guard = new MutationObserver(() => {
        if (btn.getAttribute('aria-label') !== label) btn.setAttribute('aria-label', label);
        if (btn.getAttribute('title') !== label)      btn.setAttribute('title', label);
    });
    guard.observe(btn, { attributes: true, attributeFilter: ['title', 'aria-label'] });
    makeTweetBtn._registry?.register(btn, guard);

    return btn;
};
makeTweetBtn._registry = (typeof FinalizationRegistry !== 'undefined')
    ? new FinalizationRegistry(observer => observer.disconnect())
    : null;

const getHeaderInsertionPoint = (tweet) => {
    const caret = tweet.querySelector('[data-testid="caret"]');
    if (!caret) return null;

    const flexRow = caret.parentElement?.parentElement?.parentElement?.parentElement;
    if (!flexRow || flexRow.children.length < 2) return null;

    const grokWrapper = flexRow.firstElementChild;
    if (!grokWrapper) return null;

    return { container: flexRow, before: grokWrapper };
};

const addBtnToTweet = (tweet) => {
    if (!tweet) return;

    const pos = SETTINGS.buttonPosition;
    const isForYouTab  = document.body.getAttribute('data-make-twitter-great-again') === '1';
    const isDetailPage = /\/status\/\d+/.test(window.location.pathname);
    const niState      = isForYouTab ? (isDetailPage ? 'dim' : 'active') : 'hidden';
    const stamp        = `${pos}|${niState}`;
    if (tweet.getAttribute('data-mtga-stamped') === stamp) return;

    tweet.querySelectorAll('.mtga-btn, .mtga-header-group').forEach(el => el.remove());
    tweet.setAttribute('data-mtga-stamped', stamp);

    if (pos === 'header') {
        const insertion = getHeaderInsertionPoint(tweet);
        if (!insertion) {
            const retries = parseInt(tweet.getAttribute('data-mtga-caret-retries') ?? '0', 10);
            if (retries >= CARET_RETRY_LIMIT) {
                tweet.setAttribute('data-mtga-stamped', 'no-caret');
                return;
            }
            tweet.setAttribute('data-mtga-caret-retries', retries + 1);
            tweet.removeAttribute('data-mtga-stamped');
            return;
        }
        const group = document.createElement('div');
        group.classList.add('mtga-header-group');
        if (SETTINGS.showNotInterested && niState !== 'hidden') {
            const niBtn = makeTweetBtn('mtga-not-interested', 'Not Interested', SVG_NOT_INTERESTED);
            if (niState === 'dim') { niBtn.classList.add('mtga-disabled'); niBtn.setAttribute('aria-disabled', 'true'); }
            group.appendChild(niBtn);
        }
        if (SETTINGS.showMute)  group.appendChild(makeTweetBtn('mtga-mute',  'Mute',  SVG_MUTE));
        if (SETTINGS.showBlock) group.appendChild(makeTweetBtn('mtga-block', 'Block', SVG_BLOCK));
        insertion.container.insertBefore(group, insertion.before);
    } else {
        injectToActionBar(tweet, niState);
    }
};

const injectToActionBar = (tweet, niState = 'hidden') => {
    const navAction = tweet.querySelector('div[role="group"][id*="id__"]');
    if (!navAction) return;
    if (SETTINGS.showNotInterested && niState !== 'hidden') {
        const niBtn = makeTweetBtn('mtga-not-interested', 'Not Interested', SVG_NOT_INTERESTED);
        if (niState === 'dim') { niBtn.classList.add('mtga-disabled'); niBtn.setAttribute('aria-disabled', 'true'); }
        navAction.appendChild(niBtn);
    }
    if (SETTINGS.showMute)  navAction.appendChild(makeTweetBtn('mtga-mute',  'Mute',  SVG_MUTE));
    if (SETTINGS.showBlock) navAction.appendChild(makeTweetBtn('mtga-block', 'Block', SVG_BLOCK));
};

const addBtnToTweets = () => {
    document.querySelectorAll('[role="region"] article')
        .forEach(tweet => addBtnToTweet(tweet));
};

const refreshAllTweets = () => {
    document.querySelectorAll('[role="region"] article[data-mtga-stamped]')
        .forEach(tweet => { tweet.removeAttribute('data-mtga-stamped'); addBtnToTweet(tweet); });
};

const addProfileMuteBtn = () => {
    const userActions = document.querySelector('[role="main"] [data-testid="userActions"]');
    if (!userActions) return;
    const contentActions = userActions.parentElement;
    if (!contentActions || contentActions.getAttribute('data-mtga-profile')) return;
    contentActions.setAttribute('data-mtga-profile', 'true');
    const btn = makeTweetBtn('mtga-mute', 'Mute User', SVG_MUTE);
    contentActions.insertBefore(btn, contentActions.firstChild);
};

const waitForMenuItem = (selector, timeout = 3000) => new Promise((resolve, reject) => {
    const existing = document.querySelector(selector);
    if (existing) return resolve(existing);
    const layers = document.getElementById('layers') || document.body;
    const observer = new MutationObserver(() => {
        const el = document.querySelector(selector);
        if (el) { clearTimeout(timer); observer.disconnect(); resolve(el); }
    });
    const timer = setTimeout(() => { observer.disconnect(); reject(new Error(`waitForMenuItem timeout: ${selector}`)); }, timeout);
    observer.observe(layers, { childList: true, subtree: true });
});

const waitForNewDropdown = (selector, timeout = 3000) => {
    const existingNodes = new Set(document.querySelectorAll(selector));
    return new Promise((resolve, reject) => {
        const layers = document.getElementById('layers') || document.body;
        const observer = new MutationObserver(() => {
            const el = document.querySelector(selector);
            if (el && !existingNodes.has(el)) {
                clearTimeout(timer);
                observer.disconnect();
                resolve(el);
            }
        });
        const timer = setTimeout(() => {
            observer.disconnect();
            reject(new Error(`waitForNewDropdown timeout: ${selector}`));
        }, timeout);
        observer.observe(layers, { childList: true, subtree: true });
    });
};

const UNMUTE_KEYWORDS = [
    'unmute',
    '取消靜音',
    'rétablir le son',
    'ton açma',
    'звук',
    '取消静音',
    'stummschaltung aufheben',
    'dejar de silenciar',
    'dessilenciar',
    'ミュート解除',
    '음소거 해제',
    'dempen opheffen',
    'riattiva audio',
    'cofnij wyciszenie',
    'увімкнути звук',
    'activează sunetul',
    'némítás feloldása',
    'zrušit ztlumení',
    'sluta tysta',
    'opphev demping',
    'poista mykistys',
    'αναίρεση σίγασης',
    'בטל השתקה',
    'премахни заглушаването',
    'zrušiť stlmenie',
    'deixar de silenciar',
    'ukini utišavanje',
    'إلغاء كتم',
    'لغو بی‌صدا',
    'अनम्यूट',
    'নিঃশব্দ বাতিল',
    'خاموشی ختم',
    'batalkan bisukan',
    'nyahsenyap',
    'เปิดเสียง',
    'bật tiếng',
    'i-unmute',
];
const MUTE_KEYWORDS = [
    'mute',
    '靜音',
    'silencier',
    'sessize al',
    'игнорировать',
    '静音',
    'stummschalten',
    'silenciar',
    'ミュート',
    '음소거',
    'dempen',
    'silenzia',
    'wycisz',
    'вимкнути звук',
    'dezactivează sunetul',
    'némítás',
    'ztlumit',
    'tysta',
    'demp',
    'mykistä',
    'σίγαση',
    'השתק',
    'заглуш',
    'stlmiť',
    'utišaj',
    'كتم',
    'بی‌صدا',
    'म्यूट',
    'নিঃশব্দ',
    'خاموش',
    'bisukan',
    'senyapkan',
    'ปิดเสียง',
    'tắt tiếng',
    'i-mute',
];
const CONVERSATION_KEYWORDS = [
    'conversation',
    '對話',
    '对话',
    'unterhaltung',
    'conversación',
    'conversa',
    '会話',
    '대화',
    'konuşma',
    'разговор',
    'gesprek',
    'conversazione',
    'konwersacja',
    'розмова',
    'conversație',
    'beszélgetés',
    'konverzace',
    'konversation',
    'samtale',
    'keskustelu',
    'συνομιλία',
    'שיחה',
    'konverzácia',
    'razgovor',
    'محادثة',
    'گفتگو',
    'बातचीत',
    'কথোপকথন',
    'percakapan',
    'perbualan',
    'การสนทนา',
    'cuộc trò chuyện',
    'usapan',
];
const MUTE_EXCLUDE_KEYWORDS = [...UNMUTE_KEYWORDS, ...CONVERSATION_KEYWORDS];
const stripQuotes = str => str.replace(/[\u0022\u0027\u2018\u2019\u201c\u201d\u300c\u300d\uff02]/g, '');
const NI_KEYWORDS = [
    'not interested',
    '不感興趣',
    '不感兴趣',
    'pas intéressé',
    'nicht interessiert',
    'no me interesa',
    'não estou interessado',
    'não me interessa',
    '興味がない',
    '관심 없음',
    'ilgilenmiyor',
    'не интересно',
    'niet geïnteresseerd',
    'non mi interessa',
    'nie interesuje',
    'не цікавить',
    'nu mă interesează',
    'nem érdekel',
    'nezajímá',
    'inte intresserad',
    'ikke interessert',
    'ikke interesseret',
    'ei kiinnosta',
    'δεν με ενδιαφέρει',
    'לא מעניין',
    'не ме интересува',
    'nezaujíma',
    'no m\'interessa',
    'nije me zanimaju',
    'غير مهتم',
    'علاقه‌ای ندارم',
    'दिलचस्पी नहीं',
    'আগ্রহী নই',
    'دلچسپی نہیں',
    'tidak tertarik',
    'tidak berminat',
    'ไม่สนใจ',
    'không quan tâm',
    'hindi ako interesado',
];

const NI_FEWER_KEYWORDS = [
    'show fewer',
    'see fewer',
    '減少顯示',
    '减少显示',
    'voir moins',
    'weniger',
    'ver menos',
    '少ない',
    '덜 보기',
    'az göster',
    'меньше',
    'minder zien',
    'meno post',
    'mniej postów',
    'менше',
    'mai puțin',
    'kevesebb',
    'méně',
    'färre',
    'færre',
    'vähemmän',
    'λιγότερα',
    'פחות פוסטים',
    'по-малко',
    'menej',
    'menys',
    'manje',
    'عرض أقل',
    'کمتر',
    'कम पोस्ट',
    'কম পোস্ট',
    'کم پوسٹ',
    'lebih sedikit',
    'kurang',
    'โพสต์น้อยลง',
    'ít hơn',
    'mas kaunti',
];

const NI_IRRELEVANT_KEYWORDS = [
    'isn\u2019t relevant',
    "isn't relevant",
    'not relevant',
    'relevant',
    'irrelevant',
    '不相關',
    '不相关',
    'pas pertinent',
    'nicht relevant',
    'no relevante',
    'não relevante',
    '関係ない',
    '관련 없',
    'alakasız',
    'не относится',
    'niet relevant',
    'non pertinente',
    'nieistotny',
    'не стосується',
    'nu este relevant',
    'nem releváns',
    'není relevantní',
    'inte relevant',
    'ikke relevant',
    'ei osuva',
    'δεν σχετίζεται',
    'לא רלוונטי',
    'не е релевантно',
    'nie je relevantný',
    'no és rellevant',
    'nije relevantno',
    'غير ذي صلة',
    'نامربوط',
    'अप्रासंगिक',
    'অপ্রাসঙ্গিক',
    'غیر متعلقہ',
    'tidak relevan',
    'tidak berkaitan',
    'ไม่เกี่ยวข้อง',
    'không liên quan',
    'hindi kaugnay',
];

const waitForNIToast = (keywords, timeout = 1500) => new Promise((resolve, reject) => {
    const TOAST_SCOPES = [
        '[data-testid="toast"]',
        '#layers',
    ];
    const MTGA_OWN_CONTAINERS = ['#mtga-panel', '#mtga-ni-picker'];
    const isOwnUI = (el) => MTGA_OWN_CONTAINERS.some(sel => el.closest(sel));
    const matchBtn = (root) => {
        const btns = root.querySelectorAll('button');
        return [...btns].find(b =>
            !isOwnUI(b) &&
            keywords.some(kw =>
                (b.textContent ?? '').toLowerCase().includes(kw.toLowerCase())
            )
        ) ?? null;
    };
    const find = () => {
        for (const sel of TOAST_SCOPES) {
            const containers = document.querySelectorAll(sel);
            for (const c of containers) {
                const hit = matchBtn(c);
                if (hit) return hit;
            }
        }
        return matchBtn(document) ?? null;
    };
    const existing = find();
    if (existing) return resolve(existing);
    const observer = new MutationObserver(() => {
        const el = find();
        if (el) { clearTimeout(timer); observer.disconnect(); resolve(el); }
    });
    const timer = setTimeout(() => { observer.disconnect(); reject(new Error('NI toast timeout')); }, timeout);
    observer.observe(document.body, { childList: true, subtree: true });
});

const waitForClickable = (el, timeout = 2000) => new Promise((resolve, reject) => {
    if (getComputedStyle(el).pointerEvents !== 'none') return resolve(el);
    const start = Date.now();
    const poll = () => {
        if (getComputedStyle(el).pointerEvents !== 'none') return resolve(el);
        if (Date.now() - start >= timeout) return reject(new Error('waitForClickable: timed out'));
        setTimeout(poll, 30);
    };
    setTimeout(poll, 30);
});

const callFiberOnClick = (el, maxDepth = 10) => {
    const fiberKey = Object.keys(el).find(k =>
        k.startsWith('__reactFiber') || k.startsWith('__reactInternalInstance')
    );
    if (!fiberKey) { el.click(); return false; }
    let fiber = el[fiberKey];
    for (let d = 0; d <= maxDepth && fiber; d++) {
        const props = fiber.memoizedProps ?? fiber.pendingProps;
        if (props?.onClick) {
            props.onClick();
            return true;
        }
        fiber = fiber.return;
    }
    el.click();
    return false;
};

const waitForConfirmDialog = () => new Promise(resolve => {
    const existing = document.querySelector('[data-testid="confirmationSheetDialog"]');
    if (existing) return resolve(existing);
    const observer = new MutationObserver(() => {
        const el = document.querySelector('[data-testid="confirmationSheetDialog"]');
        if (el) { clearTimeout(timer); observer.disconnect(); resolve(el); }
    });
    const layers = document.getElementById('layers') || document.body;
    const timer = setTimeout(() => { observer.disconnect(); resolve(null); }, 8000);
    observer.observe(layers, { childList: true, subtree: true });
});

const setMuteBtn = (muteBtn, isMuted) => {
    if (!muteBtn) return;
    if (isMuted) {
        muteBtn.innerHTML = SVG_MUTED;
        muteBtn.classList.add('mtga-active');
        muteBtn.setAttribute('title', 'Unmute');
        muteBtn.setAttribute('aria-label', 'Unmute');
    } else {
        muteBtn.innerHTML = SVG_MUTE;
        muteBtn.classList.remove('mtga-active');
        muteBtn.setAttribute('title', 'Mute');
        muteBtn.setAttribute('aria-label', 'Mute');
    }
};

const setBlockBtn = (blockBtn, isBlocked) => {
    if (!blockBtn) return;
    if (isBlocked) {
        blockBtn.innerHTML = SVG_BLOCKED;
        blockBtn.classList.add('mtga-active');
        blockBtn.setAttribute('title', 'Unblock');
        blockBtn.setAttribute('aria-label', 'Unblock');
    } else {
        blockBtn.innerHTML = SVG_BLOCK;
        blockBtn.classList.remove('mtga-active');
        blockBtn.setAttribute('title', 'Block');
        blockBtn.setAttribute('aria-label', 'Block');
    }
};

const getCardRow = (tweet) => {
    const threeUp = tweet.parentElement?.parentElement?.parentElement;
    const SAFE_ROLES = ['main', 'region', 'navigation'];
    if (threeUp && !SAFE_ROLES.includes(threeUp.getAttribute('role')) && threeUp !== document.body) {
        return threeUp;
    }
    return tweet.closest('div[data-testid]') ?? tweet.parentElement?.parentElement ?? tweet;
};

const OWN_UI_SELECTORS = [
    'div[role="group"][id*="id__"]',
    '.mtga-header-group',
];
const THIRD_PARTY_SELECTORS_RAW = [
    '.my-grok-robot-btn',
    '.my-commander-btn',
    '.custom-copy-icon',
    '.force-media-copy-btn',
];
const THIRD_PARTY_SELECTORS = [...OWN_UI_SELECTORS, ...THIRD_PARTY_SELECTORS_RAW];

const PICKER_TIMEOUT_MS   = 8000;
const NI_TOAST_TIMEOUT_MS = 3000;

const showNIPickerMenu = (anchorRect) => new Promise(resolve => {

    document.getElementById('mtga-ni-picker')?.remove();

    const picker = document.createElement('div');
    picker.id = 'mtga-ni-picker';
    picker.className = 'mtga-picker';
    picker.setAttribute('role', 'dialog');
    picker.setAttribute('aria-label', 'Interactive Mode — choose effect');
    picker.setAttribute('data-mtga-theme', SETTINGS.panelTheme);
    picker.style.setProperty('--mtga-picker-timeout', `${PICKER_TIMEOUT_MS}ms`);

    picker.innerHTML = `
        <div class="mtga-picker-label">Interactive Mode — choose effect</div>
        <button class="mtga-picker-btn" data-pick="fewer" aria-label="Reduce posts from this user">
            ${SVG_NOT_INTERESTED}<span>Reduce posts from user</span>
        </button>
        <button class="mtga-picker-btn" data-pick="irrelevant" aria-label="Mark as not relevant">
            ${SVG_AUTO_NI}<span>Not relevant to me</span>
        </button>
        <div class="mtga-picker-bar"></div>
    `;

    const rect = anchorRect;
    const PICKER_W = 240;
    const PICKER_H = 130;
    const GAP = 4;

    let left = rect.left - PICKER_W - GAP;
    const side = left < 8 ? 'right' : 'left';
    if (left < 8) {
        left = rect.right + GAP;
    }
    if (left + PICKER_W > window.innerWidth - 8) left = window.innerWidth - PICKER_W - 8;

    picker.setAttribute('data-side', side);

    const btnMidY = rect.top + rect.height / 2;
    let top = btnMidY - PICKER_H / 2;
    if (top + PICKER_H > window.innerHeight - 8) top = window.innerHeight - PICKER_H - 8;
    if (top < 8) top = 8;

    picker.style.left = `${left}px`;
    picker.style.top  = `${top}px`;

    document.body.appendChild(picker);

    const actualH = picker.offsetHeight;
    const refinedTop = btnMidY - actualH / 2;
    const clampedTop = Math.min(Math.max(refinedTop, 8), window.innerHeight - actualH - 8);
    picker.style.top = `${clampedTop}px`;

    setTimeout(() => picker.classList.add('mtga-picker-ready'), 150);

    const cleanup = (choice) => {
        clearTimeout(timer);
        document.removeEventListener('keydown', onKey, true);
        document.removeEventListener('click',   onOutside, true);
        picker.remove();
        resolve(choice);
    };

    picker.querySelectorAll('.mtga-picker-btn').forEach(btn => {
        btn.addEventListener('click', () => cleanup(btn.dataset.pick));
    });

    const onKey = (ev) => { if (ev.key === 'Escape') { ev.stopPropagation(); cleanup(null); } };
    document.addEventListener('keydown', onKey, true);

    let outsideReady = false;
    requestAnimationFrame(() => { outsideReady = true; });
    const onOutside = (ev) => {
        if (!outsideReady) return;
        if (!picker.contains(ev.target)) cleanup(null);
    };
    document.addEventListener('click', onOutside, true);

    const timer = setTimeout(() => cleanup(null), PICKER_TIMEOUT_MS);
});

const handleBtnClick = async (e, dropdownSelector) => {
    if (!(e.target instanceof Element)) return;
    const btn = e.target.closest('.mtga-btn');
    if (!btn) return;
    const tweet = btn.closest('article');
    if (!tweet) return;

    const btnRect = btn.getBoundingClientRect();

    const caretBtn = tweet.querySelector('[data-testid="caret"]');
    if (!caretBtn) return;

    const isBlock = dropdownSelector === BLOCK_PATH;
    const isMute  = dropdownSelector === MUTE_PATH;

    if (isBlock) {
        caretBtn.click();
        let wasBlocked = false;
        try {
            const item = await waitForMenuItem('[data-testid="block"],[data-testid="unblock"]', 3000);
            wasBlocked = item.dataset.testid === 'unblock';
            item.click();
            if (!wasBlocked) {
                const confirmDialog = await waitForConfirmDialog();
                if (confirmDialog) {
                    const confirmBtn = confirmDialog.querySelector(BLOCK_CONFIRM_SEL);
                    if (confirmBtn) {
                        confirmBtn.click();
                    } else {
                        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
                        console.warn('[MTGA] Block: confirmationSheetConfirm not found — action aborted');
                        return;
                    }
                } else {
                    console.warn('[MTGA] Block: confirm dialog timed out — UI state not updated');
                    return;
                }
            }
        } catch {
            document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
            return;
        }
        setBlockBtn(btn, !wasBlocked);
        const muteBtn = tweet.querySelector('.mtga-mute');
        setMuteBtn(muteBtn, false);
        const tabStatus = document.body.getAttribute('data-make-twitter-great-again');
        if (tabStatus === '1' || tabStatus === '2') return;
        setTimeout(() => getCardRow(tweet).remove(), 400);
        return;
    }

    let niFiberOnClick = null;
    if (!isMute) {
        const fiberKey = Object.keys(caretBtn).find(k =>
            k.startsWith('__reactFiber') || k.startsWith('__reactInternalInstance')
        );
        if (fiberKey) {
            let fiber = caretBtn[fiberKey];
            for (let d = 0; d <= 30 && fiber; d++) {
                const props = fiber.memoizedProps ?? fiber.pendingProps;
                if (props?.feedbackItems?.[0]?.onClick) {
                    niFiberOnClick = props.feedbackItems[0].onClick;
                    break;
                }
                fiber = fiber.return;
            }
        }
    }

    if (niFiberOnClick) {
        niFiberOnClick();
    } else {
        caretBtn.click();
    }

    try {
        if (isMute) {
            const dropdown = await waitForNewDropdown('[data-testid="Dropdown"],[data-testid="sheetDialog"]', 3000);

            const items = [...dropdown.querySelectorAll('[role="menuitem"]')];
            const unmuteItem = items.find(el =>
                UNMUTE_KEYWORDS.some(kw => stripQuotes(el.innerText).toLowerCase().includes(kw.toLowerCase()))
            );
            const muteItem = items.find(el => {
                const text = stripQuotes(el.innerText).toLowerCase();
                return MUTE_KEYWORDS.some(kw => text.includes(kw.toLowerCase()))
                    && !MUTE_EXCLUDE_KEYWORDS.some(kw => text.includes(kw.toLowerCase()));
            });

            if (unmuteItem) {
                (unmuteItem.closest('[role="menuitem"]') ?? unmuteItem).click();
                setMuteBtn(btn, false);
            } else if (muteItem) {
                (muteItem.closest('[role="menuitem"]') ?? muteItem).click();
                setMuteBtn(btn, true);
            } else {
                document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
                setMuteBtn(btn, false);
                btn.setAttribute('title', 'Unblock this user first to mute');
                btn.setAttribute('aria-label', 'Unblock this user first to mute');
                btn.classList.add('mtga-mute-blocked');
                setTimeout(() => {
                    btn.setAttribute('title', 'Mute');
                    btn.setAttribute('aria-label', 'Mute');
                    btn.classList.remove('mtga-mute-blocked');
                }, 1500);
                return;
            }
        } else if (!niFiberOnClick) {
            const dropdown = await waitForNewDropdown('[data-testid="Dropdown"],[data-testid="sheetDialog"]', 3000);
            const items = [...dropdown.querySelectorAll('[role="menuitem"]')];
            const niItem = items.find(el =>
                NI_KEYWORDS.some(kw => stripQuotes(el.innerText).toLowerCase().includes(kw.toLowerCase()))
            );
            if (niItem) {
                (niItem.closest('[role="menuitem"]') ?? niItem).click();
            } else {
                document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
                return;
            }
        }
    } catch {
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
        return;
    }

    if (isMute || !niFiberOnClick) {
        await sleep(50);
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    }

    const tabStatus = document.body.getAttribute('data-make-twitter-great-again');
    if (tabStatus === '1' || tabStatus === '2') {
        if (!isMute) {
            const cardRow = getCardRow(tweet);

            THIRD_PARTY_SELECTORS.forEach(sel => tweet.querySelectorAll(sel).forEach(el => { el.style.display = 'none'; }));

            const UNDO_KEYWORDS = [
                'undo',
                '復原',
                '撤销',
                'annuler',
                'rückgängig',
                'deshacer',
                'desfazer',
                '元に戻す',
                '실행 취소',
                'geri al',
                'отменить',
                'ongedaan',
                'annulla',
                'cofnij',
                'скасувати',
                'anulare',
                'visszavon',
                'zpět',
                'ångra',
                'angre',
                'kumoa',
                'αναίρεση',
                'בטל',
                'отмени',
                'späť',
                'desfer',
                'poništi',
                'تراجع',
                'لغو',
                'पूर्ववत',
                'পূর্বাবস্থায়',
                'واپس',
                'batalkan',
                'เลิกทำ',
                'hoàn tác',
                'i-undo',
            ];
            const THANKS_WAIT_MS = 1200;
            const waitForThanksOrGone = () => new Promise(resolve => {
                if (!document.contains(cardRow)) return resolve('gone');
                const hasUndo = (root) => {
                    const btns = root.querySelectorAll('button[role="button"]');
                    if (!btns.length) return false;
                    return [...btns].some(b => {
                        const t = b.innerText.trim().toLowerCase();
                        return UNDO_KEYWORDS.some(kw => t.includes(kw.toLowerCase()));
                    });
                };
                if (hasUndo(cardRow)) return resolve('thanks');
                const obs = new MutationObserver(() => {
                    if (!document.contains(cardRow)) { clearTimeout(t); obs.disconnect(); resolve('gone'); return; }
                    if (hasUndo(cardRow))             { clearTimeout(t); obs.disconnect(); resolve('thanks'); }
                });
                obs.observe(cardRow, { childList: true, subtree: true });
                const t = setTimeout(() => { obs.disconnect(); resolve('timeout'); }, THANKS_WAIT_MS);
            });

            if (SETTINGS.niAction !== 'off') {
                try {
                    if (SETTINGS.niAction === 'pick') {
                        const [pickedAction] = await Promise.all([
                            showNIPickerMenu(btnRect),
                            waitForNIToast([...NI_FEWER_KEYWORDS, ...NI_IRRELEVANT_KEYWORDS], PICKER_TIMEOUT_MS),
                        ]);
                        if (pickedAction) {
                            const pickedKeywords = pickedAction === 'irrelevant'
                                ? NI_IRRELEVANT_KEYWORDS
                                : NI_FEWER_KEYWORDS;
                            const pickedBtn = await waitForNIToast(pickedKeywords, 2000);
                            await waitForClickable(pickedBtn);
                            callFiberOnClick(pickedBtn);
                        }
                    } else {
                        const keywords = SETTINGS.niAction === 'irrelevant' ? NI_IRRELEVANT_KEYWORDS : NI_FEWER_KEYWORDS;
                        const toastBtn = await waitForNIToast(keywords, NI_TOAST_TIMEOUT_MS);
                        await waitForClickable(toastBtn);
                        callFiberOnClick(toastBtn);
                    }
                    const outcome = await waitForThanksOrGone();
                    if (outcome !== 'timeout') return;
                    setTimeout(() => cardRow.remove(), 400);
                    return;
                } catch {
                    
                }
            }

            setTimeout(() => cardRow.remove(), 400);
        }
        return;
    }

    THIRD_PARTY_SELECTORS.forEach(sel => {
        tweet.querySelectorAll(sel).forEach(el => { el.style.display = 'none'; });
    });

    const cardRow = getCardRow(tweet);
    setTimeout(() => cardRow.remove(), 400);
};

const handleProfileMuteClick = async () => {
    const userActions = document.querySelector('[role="main"] [data-testid="userActions"]');
    if (!userActions) return;

    const path = userActions.querySelector(PROFILE_MORE_PATH);
    if (!path) return;
    const caretBtn = path.closest('div[dir]');
    if (!caretBtn) return;

    const profileMuteBtn = userActions.parentElement?.querySelector('.mtga-mute');

    caretBtn.click();

    let didUnmute = false;
    try {
        const dropdown = await waitForNewDropdown('[data-testid="Dropdown"],[data-testid="sheetDialog"]', 3000);
        const items = [...dropdown.querySelectorAll('[role="menuitem"]')];
        const unmuteItem = items.find(el =>
            UNMUTE_KEYWORDS.some(kw => stripQuotes(el.innerText).toLowerCase().includes(kw.toLowerCase()))
        );
        const muteItem = items.find(el => {
            const text = stripQuotes(el.innerText).toLowerCase();
            return MUTE_KEYWORDS.some(kw => text.includes(kw.toLowerCase()))
                && !MUTE_EXCLUDE_KEYWORDS.some(kw => text.includes(kw.toLowerCase()));
        });
        didUnmute = !!unmuteItem;
        const target = unmuteItem ?? muteItem;
        if (target) {
            target.click();
        } else {
            document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
            return;
        }
    } catch {
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
        return;
    }

    await sleep(50);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));

    setMuteBtn(profileMuteBtn, !didUnmute);
    if (profileMuteBtn) {
        const label = didUnmute ? 'Mute User' : 'Unmute User';
        profileMuteBtn.setAttribute('title', label);
        profileMuteBtn.setAttribute('aria-label', label);
    }
};

const buildSettingsPanel = () => {
    const gear = document.createElement('button');
    gear.id = 'mtga-settings-gear';
    gear.setAttribute('aria-label', 'Settings');
    gear.setAttribute('title', 'Settings');
    gear.innerHTML = SVG_GEAR;
    document.body.appendChild(gear);

    const panel = document.createElement('div');
    panel.id = 'mtga-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
    panel.setAttribute('aria-label', 'Twitter Action Bar Extended — Settings');
    panel.setAttribute('data-mtga-theme', SETTINGS.panelTheme);

    panel.innerHTML = `
        <div class="mtga-panel-header">
            <h3>Settings</h3>
            <button class="mtga-theme-toggle" aria-label="Toggle theme" title="Toggle theme">
                ${SETTINGS.panelTheme === 'dark' ? SVG_SUN : SVG_MOON}
            </button>
            <button class="mtga-panel-close" aria-label="Close settings" title="Close settings">
                ${SVG_CLOSE}
            </button>
        </div>
        <p class="mtga-panel-subtitle">Choose which buttons appear on each tweet.</p>
        <hr class="mtga-divider">
        <span class="mtga-section-label">Buttons</span>
        ${makeToggleRow('showNotInterested', SVG_NOT_INTERESTED, 'Not Interested', 'Tell the algorithm you dislike this post')}
        ${makeToggleRow('showMute',          SVG_MUTE,           'Mute',           "Mute user silently — they won't know")}
        ${makeToggleRow('showBlock',         SVG_BLOCK,          'Block',          'Block user — they cannot see your tweets')}
        <hr class="mtga-divider">
        <span class="mtga-section-label">After Not Interested</span>
        <div class="mtga-toggle-row" style="align-items:flex-start; flex-direction:column; gap:6px;">
            <div class="mtga-toggle-label">${SVG_AUTO_NI}<span>Auto-confirm</span></div>
            <div class="mtga-toggle-desc">Click an extra option from the thank-you toast automatically.</div>
            <div class="mtga-radio-group" style="width:100%; margin:2px 0 0 0; flex-wrap:wrap;">
                <button class="mtga-radio-btn ${SETTINGS.niAction === 'off'         ? 'mtga-radio-active' : ''}" data-ni-action="off">Off</button>
                <button class="mtga-radio-btn ${SETTINGS.niAction === 'fewer'       ? 'mtga-radio-active' : ''}" data-ni-action="fewer">Reduce posts</button>
                <button class="mtga-radio-btn ${SETTINGS.niAction === 'irrelevant'  ? 'mtga-radio-active' : ''}" data-ni-action="irrelevant">Not relevant</button>
            </div>
            <button class="mtga-legacy-toggle ${SETTINGS.niAction === 'pick' ? 'open' : ''}" id="mtga-legacy-toggle" aria-expanded="${SETTINGS.niAction === 'pick' ? 'true' : 'false'}" aria-controls="mtga-legacy-section">
                <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                ⟡ Elegant Menu Mode ⟡
            </button>
            <div class="mtga-legacy-section ${SETTINGS.niAction === 'pick' ? 'open' : ''}" id="mtga-legacy-section" style="width:100%;">
                <div class="mtga-radio-group" style="width:100%; flex-wrap:wrap;">
                    <button class="mtga-radio-btn mtga-legacy ${SETTINGS.niAction === 'pick' ? 'mtga-radio-active' : ''}" data-ni-action="pick" style="flex:1;">Interactive Mode ✦</button>
                </div>
            </div>
        </div>
        <hr class="mtga-divider">
        <span class="mtga-section-label">Button Position</span>
        <div class="mtga-radio-group">
            <button class="mtga-radio-btn ${SETTINGS.buttonPosition === 'header'    ? 'mtga-radio-active' : ''}" data-pos="header">Header</button>
            <button class="mtga-radio-btn ${SETTINGS.buttonPosition === 'actionbar' ? 'mtga-radio-active' : ''}" data-pos="actionbar">Action Bar</button>
        </div>
        <p class="mtga-panel-footer">Twitter Action Bar Extended · v${SCRIPT_VERSION}</p>
    `;
    document.body.appendChild(panel);

    panel.querySelectorAll('.mtga-switch input').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            SETTINGS[checkbox.dataset.key] = checkbox.checked;
            saveSettings();
            refreshAllTweets();
        });
    });

    panel.querySelectorAll('[data-ni-action]').forEach(btn => {
        btn.addEventListener('click', () => {
            SETTINGS.niAction = btn.dataset.niAction;
            saveSettings();
            panel.querySelectorAll('[data-ni-action]').forEach(b => b.classList.remove('mtga-radio-active'));
            btn.classList.add('mtga-radio-active');
        });
    });

    const legacyToggle  = panel.querySelector('#mtga-legacy-toggle');
    const legacySection = panel.querySelector('#mtga-legacy-section');
    legacyToggle.addEventListener('click', () => {
        const isOpen = legacySection.classList.toggle('open');
        legacyToggle.classList.toggle('open', isOpen);
        legacyToggle.setAttribute('aria-expanded', String(isOpen));
    });

    panel.querySelectorAll('.mtga-radio-btn[data-pos]').forEach(btn => {
        btn.addEventListener('click', () => {
            SETTINGS.buttonPosition = btn.dataset.pos;
            saveSettings();
            panel.querySelectorAll('.mtga-radio-btn[data-pos]').forEach(b => b.classList.remove('mtga-radio-active'));
            btn.classList.add('mtga-radio-active');
            refreshAllTweets();
        });
    });

    panel.querySelector('.mtga-theme-toggle').addEventListener('click', () => {
        const next = SETTINGS.panelTheme === 'dark' ? 'light' : 'dark';
        SETTINGS.panelTheme = next;
        saveSettings();
        panel.setAttribute('data-mtga-theme', next);
        panel.querySelector('.mtga-theme-toggle').innerHTML = next === 'dark' ? SVG_SUN : SVG_MOON;
    });

    panel.querySelector('.mtga-panel-close').addEventListener('click', () => {
        panel.classList.remove('mtga-panel-open');
    });

    gear.addEventListener('click', () => panel.classList.toggle('mtga-panel-open'));

    document.addEventListener('click', (e) => {
        if (panel.classList.contains('mtga-panel-open')
            && !panel.contains(e.target)
            && !gear.contains(e.target)) {
            panel.classList.remove('mtga-panel-open');
        }
    });
};

const makeToggleRow = (key, svgIcon, label, desc) => {
    if (!Object.prototype.hasOwnProperty.call(SETTINGS_DEFAULTS, key)) {
        console.warn('[MTGA] makeToggleRow: rejected unknown key', key);
        return '';
    }
    const checked = SETTINGS[key] ? 'checked' : '';
    return `
        <div class="mtga-toggle-row">
            <div>
                <div class="mtga-toggle-label">${svgIcon}<span>${label}</span></div>
                <div class="mtga-toggle-desc">${desc}</div>
            </div>
            <label class="mtga-switch" aria-label="Toggle ${label}">
                <input type="checkbox" data-key="${key}" ${checked}>
                <span class="mtga-switch-track"></span>
            </label>
        </div>
    `;
};

const setTabStatusToBody = () => {
    const tabs = document.querySelectorAll('[role="tablist"] [role="tab"]');
    if (!document.body || tabs.length === 0) return;
    if (document.querySelectorAll('[role="tablist"] [role="tab"][data-index]').length === 0) {
        Array.from(tabs).forEach((el, idx) => el.parentElement?.setAttribute('data-index', idx + 1));
    }
    const selected = document.querySelector('[role="tablist"] [role="tab"][aria-selected="true"]');
    if (selected) {
        const parent = selected.parentElement;
        if (parent) {
            const newIndex = parent.getAttribute('data-index');
            const prevIndex = document.body.getAttribute('data-make-twitter-great-again');
            document.body.setAttribute('data-make-twitter-great-again', newIndex);
            if (newIndex !== prevIndex) refreshAllTweets();
        }
    }
};

const isProfile = () => {
    if (document.querySelector('head meta[content*="twitter://user?screen_name="]')) {
        document.body.setAttribute('data-profile', 'true');
        addProfileMuteBtn();
    } else {
        document.body.removeAttribute('data-profile');
    }
};

const observeTweets = () => {
    let throttleTimer = null;
    let rafPending = false;
    const observer = new MutationObserver(() => {
        if (!rafPending) {
            rafPending = true;
            requestAnimationFrame(() => { rafPending = false; addBtnToTweets(); });
        }
        if (throttleTimer) return;
        throttleTimer = setTimeout(() => {
            throttleTimer = null;
            setTabStatusToBody();
            isProfile();
        }, 300);
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return observer;
};

(async () => {
    loadSettings();

    try {
        await waitForElm('[role="region"] article');
    } catch (err) {
        console.warn('[MTGA]', err.message);
        return;
    }

    setTabStatusToBody();
    isProfile();
    addBtnToTweets();
    buildSettingsPanel();

    let mtgaExecuting = false;

    document.addEventListener('click', (e) => {
        if (mtgaExecuting) return;
        if (e.target.closest('.mtga-not-interested')) {
            if (e.target.closest('.mtga-disabled')) return;
            e.stopPropagation();
            mtgaExecuting = true;
            handleBtnClick(e, NOT_INTERESTED_PATH).finally(() => { mtgaExecuting = false; });
        } else if (e.target.closest('.mtga-mute')) {
            e.stopPropagation();
            mtgaExecuting = true;
            if (document.body.getAttribute('data-profile')) {
                handleProfileMuteClick().finally(() => { mtgaExecuting = false; });
            } else {
                handleBtnClick(e, MUTE_PATH).finally(() => { mtgaExecuting = false; });
            }
        } else if (e.target.closest('.mtga-block')) {
            e.stopPropagation();
            mtgaExecuting = true;
            handleBtnClick(e, BLOCK_PATH).finally(() => { mtgaExecuting = false; });
        }
    });

    const tweetsObserver = observeTweets();
    window.addEventListener('beforeunload', () => tweetsObserver.disconnect());
})();