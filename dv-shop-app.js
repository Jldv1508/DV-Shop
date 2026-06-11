const LOCAL_PROXY_URL = "/__proxy?url=";
const PHP_PROXY_URL = "/proxy.php?url=";
const PROXY_URL = "https://api.allorigins.win/raw?url=";
const API_BASE = "https://tienda.mercadona.es/api";
const PLACEHOLDER_IMAGE = "https://placehold.co/120x120/7c3aed/ffffff?text=DV";
const STORAGE_KEY = "dvshop_data";
const LEGACY_STORAGE_KEY = "mercadona_app_data";
const THEME_KEY = "dvshop_theme";
const SYNC_CONFIG_KEY = "dvshop_sync_config";
const DEVICE_ID_KEY = "dvshop_device_id";
const DEFAULT_THEME = "volcano";
const APP_VERSION = "5.3";
const LIST_TEMPLATE_VERSION = "1.0";
const SYNC_PUSH_DEBOUNCE_MS = 1200;
const SYNC_POLL_MS = 15000;
const VISUAL_BLOCKS = [
    { id: "fresco", label: "Fresco", icon: "fa-carrot", description: "Comida, despensa y comida fresca" },
    { id: "bebidas", label: "Bebidas", icon: "fa-bottle-water", description: "Agua, refrescos, café, vino y zumos" },
    { id: "congelados", label: "Congelados", icon: "fa-snowflake", description: "Helados, hielo y productos congelados" },
    { id: "hogar", label: "Hogar", icon: "fa-house", description: "Limpieza, menaje y casa" },
    { id: "cuidado", label: "Cuidado personal - Bebes", icon: "fa-hand-sparkles", description: "Higiene, salud, maquillaje y bebé" },
    { id: "mascotas", label: "Mascotas", icon: "fa-paw", description: "Perro, gato y otros animales" }
];
const DEFAULT_BLOCK_ACCENTS = {
    fresco: "#16a34a",
    bebidas: "#0284c7",
    congelados: "#2563eb",
    hogar: "#d97706",
    cuidado: "#d946ef",
    mascotas: "#e11d48"
};
const ICON_GALLERY_SECTIONS = [
    {
        id: "produce",
        label: "Fruta y verdura",
        items: [
            { icon: "fa-carrot", label: "Verdura" },
            { icon: "fa-apple-whole", label: "Fruta" },
            { icon: "fa-lemon", label: "Citricos" },
            { icon: "fa-seedling", label: "Brotes" },
            { icon: "fa-leaf", label: "Hoja" },
            { icon: "fa-pepper-hot", label: "Pimiento" },
            { icon: "fa-leaf", label: "Hierbas" },
            { icon: "fa-tree", label: "Arbol" },
            { icon: "fa-sun", label: "Temporada" }
        ]
    },
    {
        id: "food",
        label: "Comida",
        items: [
            { icon: "fa-pepper-hot", label: "Especias" },
            { icon: "fa-bread-slice", label: "Pan" },
            { icon: "fa-cheese", label: "Queso" },
            { icon: "fa-egg", label: "Huevos" },
            { icon: "fa-drumstick-bite", label: "Carne" },
            { icon: "fa-fish", label: "Pescado" },
            { icon: "fa-hotdog", label: "Embutido" },
            { icon: "fa-burger", label: "Burger" },
            { icon: "fa-pizza-slice", label: "Pizza" },
            { icon: "fa-bacon", label: "Bacon" },
            { icon: "fa-cookie-bite", label: "Snacks" },
            { icon: "fa-ice-cream", label: "Postres" },
            { icon: "fa-candy-cane", label: "Dulces" },
            { icon: "fa-bowl-food", label: "Pasta" },
            { icon: "fa-utensils", label: "Comida" },
            { icon: "fa-utensils", label: "Plato" },
            { icon: "fa-wheat-awn", label: "Cereal" },
            { icon: "fa-jar", label: "Grano" }
        ]
    },
    {
        id: "drinks",
        label: "Bebidas",
        items: [
            { icon: "fa-bottle-water", label: "Botella" },
            { icon: "fa-glass-water", label: "Agua" },
            { icon: "fa-mug-hot", label: "Cafe" },
            { icon: "fa-wine-glass", label: "Copa" },
            { icon: "fa-wine-bottle", label: "Vino" },
            { icon: "fa-beer-mug-empty", label: "Cerveza" },
            { icon: "fa-martini-glass", label: "Cocktail" },
            { icon: "fa-champagne-glasses", label: "Brindis" },
            { icon: "fa-whiskey-glass", label: "Whisky" },
            { icon: "fa-bottle-droplet", label: "Aceite" },
            { icon: "fa-glass-water-droplet", label: "Zumo" },
            { icon: "fa-jar", label: "Tarro" },
            { icon: "fa-glass-water", label: "Batido" },
            { icon: "fa-mug-saucer", label: "Desayuno" }
        ]
    },
    {
        id: "pantry",
        label: "Despensa",
        items: [
            { icon: "fa-box-open", label: "Caja" },
            { icon: "fa-box-archive", label: "Conserva" },
            { icon: "fa-jar", label: "Bote" },
            { icon: "fa-bottle-droplet", label: "Botella" },
            { icon: "fa-wine-bottle", label: "Vidrio" },
            { icon: "fa-cubes-stacked", label: "Pack" },
            { icon: "fa-tags", label: "Oferta" },
            { icon: "fa-barcode", label: "Codigo" },
            { icon: "fa-receipt", label: "Ticket" }
        ]
    },
    {
        id: "shopping",
        label: "Compra",
        items: [
            { icon: "fa-bag-shopping", label: "Bolsa" },
            { icon: "fa-basket-shopping", label: "Cesta" },
            { icon: "fa-cart-shopping", label: "Carro" },
            { icon: "fa-store", label: "Tienda" },
            { icon: "fa-store", label: "Local" },
            { icon: "fa-credit-card", label: "Pago" },
            { icon: "fa-cash-register", label: "Caja" },
            { icon: "fa-percent", label: "Descuento" },
            { icon: "fa-gift", label: "Regalo" }
        ]
    },
    {
        id: "home",
        label: "Hogar",
        items: [
            { icon: "fa-house", label: "Casa" },
            { icon: "fa-house-chimney", label: "Hogar" },
            { icon: "fa-couch", label: "Sofa" },
            { icon: "fa-bed", label: "Cama" },
            { icon: "fa-chair", label: "Silla" },
            { icon: "fa-lightbulb", label: "Luz" },
            { icon: "fa-gift", label: "Regalo" },
            { icon: "fa-recycle", label: "Reciclar" },
            { icon: "fa-broom", label: "Escoba" },
            { icon: "fa-plug", label: "Enchufe" },
            { icon: "fa-battery-half", label: "Pilas" },
            { icon: "fa-wrench", label: "Herramienta" },
            { icon: "fa-screwdriver", label: "Destorn." },
            { icon: "fa-house", label: "Fregadero" },
            { icon: "fa-soap", label: "Limpieza" }
        ]
    },
    {
        id: "care",
        label: "Cuidado",
        items: [
            { icon: "fa-pump-soap", label: "Jabon" },
            { icon: "fa-soap", label: "Pastilla" },
            { icon: "fa-shower", label: "Ducha" },
            { icon: "fa-toilet-paper", label: "Papel" },
            { icon: "fa-tooth", label: "Dental" },
            { icon: "fa-hand-sparkles", label: "Higiene" },
            { icon: "fa-scissors", label: "Corte" },
            { icon: "fa-spray-can", label: "Spray" },
            { icon: "fa-droplet", label: "Liquido" },
            { icon: "fa-shirt", label: "Ropa" },
            { icon: "fa-socks", label: "Calcetin" },
            { icon: "fa-heart-pulse", label: "Salud" },
            { icon: "fa-bandage", label: "Vendas" },
            { icon: "fa-pills", label: "Pastillas" },
            { icon: "fa-syringe", label: "Jeringa" },
            { icon: "fa-stethoscope", label: "Medico" },
            { icon: "fa-spa", label: "Spa" },
            { icon: "fa-spray-can", label: "Perfume" }
        ]
    },
    {
        id: "family",
        label: "Bebe y mascotas",
        items: [
            { icon: "fa-baby", label: "Bebe" },
            { icon: "fa-baby-carriage", label: "Carrito" },
            { icon: "fa-child", label: "Infantil" },
            { icon: "fa-heart", label: "Cuidado" },
            { icon: "fa-paw", label: "Mascota" },
            { icon: "fa-dog", label: "Perro" },
            { icon: "fa-cat", label: "Gato" },
            { icon: "fa-bone", label: "Hueso" },
            { icon: "fa-fish", label: "Pecera" },
            { icon: "fa-dove", label: "Ave" },
            { icon: "fa-shield-dog", label: "Proteccion" },
            { icon: "fa-bowl-food", label: "Pienso" },
            { icon: "fa-heart", label: "Cuidados" }
        ]
    },
    {
        id: "tech",
        label: "Tecnologia y UI",
        items: [
            { icon: "fa-mobile-screen-button", label: "Movil" },
            { icon: "fa-tablet-screen-button", label: "Tablet" },
            { icon: "fa-laptop", label: "Portatil" },
            { icon: "fa-desktop", label: "Pantalla" },
            { icon: "fa-print", label: "Imprimir" },
            { icon: "fa-camera", label: "Camara" },
            { icon: "fa-microphone", label: "Micro" },
            { icon: "fa-headphones", label: "Audio" },
            { icon: "fa-wifi", label: "Wifi" },
            { icon: "fa-tv", label: "TV" }
        ]
    },
    {
        id: "symbols",
        label: "Varios",
        items: [
            { icon: "fa-star", label: "Favorito" },
            { icon: "fa-gem", label: "Premium" },
            { icon: "fa-crown", label: "Top" },
            { icon: "fa-bell", label: "Aviso" },
            { icon: "fa-bolt", label: "Energia" },
            { icon: "fa-leaf", label: "Eco" },
            { icon: "fa-snowflake", label: "Frio" },
            { icon: "fa-sun", label: "Sol" },
            { icon: "fa-moon", label: "Noche" },
            { icon: "fa-cloud", label: "Nube" },
            { icon: "fa-fire", label: "Fuego" },
            { icon: "fa-tree", label: "Arbol" },
            { icon: "fa-location-dot", label: "Lugar" },
            { icon: "fa-tag", label: "Etiqueta" },
            { icon: "fa-palette", label: "Color" },
            { icon: "fa-camera", label: "Camara" },
            { icon: "fa-music", label: "Musica" },
            { icon: "fa-bookmark", label: "Marca" },
            { icon: "fa-circle-check", label: "OK" },
            { icon: "fa-heart", label: "Like" }
        ]
    }
];

let categoriesCache = null;
let productsCache = {};
let mergedProductsCache = {};
let allProductsCache = [];
let toastTimer = null;
let searchDebounceTimer = null;
let activeSearchRequest = 0;
let lastScrollY = 0;
let headerScrollOffset = 0;

let state = {
    categories: [],
    products: [],
    cart: [],
    savedLists: [],
    simulationDraft: [],
    simulationManualQuery: "",
    budget: null,
    purchaseHistory: {},
    purchaseLog: [],
    iconOverrides: {},
    groupColorOverrides: {},
    trendOverrides: {},
    priceHistory: {},
    lastUpdated: null,
    lastPriceRefreshAt: null,
    currentVisualBlock: null,
    currentCategoryId: null,
    currentCategoryName: null,
    currentSubcategoryId: null,
    currentSubcategoryName: null,
    currentCategoryHasSubcategories: false,
    loading: false
};

const syncRuntime = {
    saveTimer: null,
    pollTimer: null,
    paused: false,
    busy: false,
    status: "Modo local. Sin nube configurada.",
    lastRemoteUpdatedAt: null,
    deviceId: ""
};

function getOrCreateDeviceId() {
    const existing = localStorage.getItem(DEVICE_ID_KEY);
    if (existing) {
        return existing;
    }

    const created = window.crypto?.randomUUID?.()
        || `device_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    localStorage.setItem(DEVICE_ID_KEY, created);
    return created;
}

function getCurrentTheme() {
    return document.documentElement.dataset.theme || DEFAULT_THEME;
}

function setTheme(themeName) {
    const next = String(themeName || DEFAULT_THEME);
    document.documentElement.dataset.theme = next;
    localStorage.setItem(THEME_KEY, next);
    const select = document.getElementById("themeSelect");
    if (select && select.value !== next) {
        select.value = next;
    }
}

function loadTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const themeSelect = document.getElementById("themeSelect");
    const availableThemes = themeSelect
        ? new Set([...themeSelect.options].map((option) => option.value))
        : new Set([DEFAULT_THEME]);
    const nextTheme = saved && availableThemes.has(saved) ? saved : DEFAULT_THEME;
    setTheme(nextTheme);
}

function normalizeHexColor(value) {
    const raw = String(value || "").trim();
    if (/^#[0-9a-f]{3}$/i.test(raw)) {
        return `#${raw.slice(1).split("").map((char) => char + char).join("").toLowerCase()}`;
    }
    if (/^#[0-9a-f]{6}$/i.test(raw)) {
        return raw.toLowerCase();
    }
    return null;
}

function hexToRgb(hex) {
    const normalized = normalizeHexColor(hex);
    if (!normalized) return null;
    const value = normalized.slice(1);
    return {
        r: Number.parseInt(value.slice(0, 2), 16),
        g: Number.parseInt(value.slice(2, 4), 16),
        b: Number.parseInt(value.slice(4, 6), 16)
    };
}

function mixHex(colorA, colorB, ratio = 0.5) {
    const a = hexToRgb(colorA);
    const b = hexToRgb(colorB);
    if (!a || !b) return colorA;
    const mix = (start, end) => Math.round((start * (1 - ratio)) + (end * ratio));
    return `rgb(${mix(a.r, b.r)}, ${mix(a.g, b.g)}, ${mix(a.b, b.b)})`;
}

function rgbaFromHex(color, alpha = 1) {
    const rgb = hexToRgb(color);
    if (!rgb) return `rgba(99, 102, 241, ${alpha})`;
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
}

function getDefaultBlockAccent(blockId) {
    return DEFAULT_BLOCK_ACCENTS[blockId] || DEFAULT_BLOCK_ACCENTS.fresco;
}

function getBlockAccent(blockId) {
    return normalizeHexColor(state.groupColorOverrides?.[blockId]) || getDefaultBlockAccent(blockId);
}

function getBlockPalette(blockId) {
    const accent = getBlockAccent(blockId);
    return {
        accent,
        groupBg: mixHex(accent, "#ffffff", 0.76),
        nestedBg: mixHex(accent, "#ffffff", 0.87),
        groupBorder: rgbaFromHex(accent, 0.48),
        nestedBorder: rgbaFromHex(accent, 0.28),
        groupShadow: rgbaFromHex(accent, 0.18),
        nestedShadow: rgbaFromHex(accent, 0.10),
        stripeStart: mixHex(accent, "#111827", 0.18),
        stripeMid: accent,
        stripeEnd: mixHex(accent, "#ffffff", 0.42),
        iconColor: mixHex(accent, "#111827", 0.18),
        iconFill: rgbaFromHex(accent, 0.22),
        iconBorder: rgbaFromHex(accent, 0.34)
    };
}

function getBlockCardStyle(blockId, variant = "group") {
    const palette = getBlockPalette(blockId);
    const backgroundEnd = variant === "group" ? palette.groupBg : palette.nestedBg;
    const borderColor = variant === "group" ? palette.groupBorder : palette.nestedBorder;
    const shadow = variant === "group"
        ? `0 12px 26px ${palette.groupShadow}`
        : `0 8px 18px ${palette.nestedShadow}`;
    return [
        `background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), ${backgroundEnd})`,
        `border-color: ${borderColor}`,
        `box-shadow: ${shadow}`,
        `--block-stripe-start: ${palette.stripeStart}`,
        `--block-stripe-mid: ${palette.stripeMid}`,
        `--block-stripe-end: ${palette.stripeEnd}`
    ].join("; ");
}

function getBlockIconStyle(blockId) {
    const palette = getBlockPalette(blockId);
    return [
        `color: ${palette.iconColor}`,
        `background: linear-gradient(180deg, rgba(255, 255, 255, 0.94), ${palette.iconFill})`,
        `border-color: ${palette.iconBorder}`
    ].join("; ");
}

function renderGroupColorControls() {
    const target = document.getElementById("groupColorTarget");
    const input = document.getElementById("groupColorInput");
    const summary = document.getElementById("groupColorSummary");
    if (!target || !input) return;

    const previousValue = cleanDisplayText(target.value || "");
    target.innerHTML = VISUAL_BLOCKS.map((block) => `
        <option value="${escapeHtml(block.id)}">${escapeHtml(block.label)}</option>
    `).join("");
    target.value = VISUAL_BLOCKS.some((block) => block.id === previousValue) ? previousValue : VISUAL_BLOCKS[0].id;

    if (summary) {
        const total = Object.keys(state.groupColorOverrides || {}).length;
        summary.textContent = total
            ? `${total} grupos con color personalizado.`
            : "Usando colores automáticos por grupo.";
    }
    syncGroupColorSelection();
}

function syncGroupColorSelection() {
    const target = document.getElementById("groupColorTarget");
    const input = document.getElementById("groupColorInput");
    if (!target || !input) return;

    input.value = getBlockAccent(target.value || VISUAL_BLOCKS[0].id);
    updateGroupColorPreview();
}

function updateGroupColorPreview() {
    const target = document.getElementById("groupColorTarget");
    const input = document.getElementById("groupColorInput");
    const preview = document.getElementById("groupColorPreview");
    const label = document.getElementById("groupColorLabel");
    if (!target || !input || !preview || !label) return;

    const block = getVisualBlockDefinition(target.value || VISUAL_BLOCKS[0].id) || VISUAL_BLOCKS[0];
    const normalized = normalizeHexColor(input.value) || getBlockAccent(block.id);
    const palette = {
        accent: normalized,
        bg: mixHex(normalized, "#ffffff", 0.76),
        border: rgbaFromHex(normalized, 0.42),
        stripeStart: mixHex(normalized, "#111827", 0.18),
        stripeMid: normalized,
        stripeEnd: mixHex(normalized, "#ffffff", 0.42),
        iconColor: mixHex(normalized, "#111827", 0.18),
        iconFill: rgbaFromHex(normalized, 0.22)
    };

    preview.innerHTML = `<i class="fas ${block.icon}"></i>`;
    preview.style.background = `linear-gradient(180deg, rgba(255, 255, 255, 0.96), ${palette.bg})`;
    preview.style.borderColor = palette.border;
    preview.style.color = palette.iconColor;
    preview.style.boxShadow = `inset 0 1px 0 rgba(255, 255, 255, 0.76), 0 10px 20px ${rgbaFromHex(normalized, 0.16)}`;
    label.textContent = `${block.label}: ${normalized.toUpperCase()}`;
}

function saveGroupColorOverride() {
    const target = document.getElementById("groupColorTarget");
    const input = document.getElementById("groupColorInput");
    if (!target || !input) return;

    const blockId = cleanDisplayText(target.value || "");
    const color = normalizeHexColor(input.value);
    if (!blockId || !color) {
        showToast("Selecciona un grupo y un color válido", 2200);
        return;
    }

    const defaultColor = getDefaultBlockAccent(blockId);
    if (color === defaultColor) {
        delete state.groupColorOverrides[blockId];
    } else {
        state.groupColorOverrides[blockId] = color;
    }

    saveToLocalStorage();
    renderGroupColorControls();
    refreshVisibleIconViews();
    showToast(`Color guardado para ${getVisualBlockDefinition(blockId)?.label || blockId}`, 2200);
}

function resetCurrentGroupColorOverride() {
    const target = document.getElementById("groupColorTarget");
    if (!target) return;

    const blockId = cleanDisplayText(target.value || "");
    if (!blockId) return;

    delete state.groupColorOverrides[blockId];
    saveToLocalStorage();
    renderGroupColorControls();
    refreshVisibleIconViews();
    showToast("Color del grupo restablecido", 2200);
}

function getVisualBlockDefinition(blockId) {
    return VISUAL_BLOCKS.find((block) => block.id === blockId) || null;
}

function getVisualBlockCategories(blockId) {
    return state.categories.filter((category) => getVisualBlock(category.name, "category") === blockId);
}

function updateCategoriesHeader() {
    const title = document.getElementById("categoriesTitle");
    const subtitle = document.getElementById("categoriesSubtitle");
    const backBtn = document.getElementById("categoriesBackBtn");
    if (!title || !backBtn) return;

    if (!state.currentVisualBlock) {
        title.innerHTML = "";
        if (subtitle) {
            subtitle.textContent = "";
        }
        backBtn.classList.add("hidden");
        return;
    }

    const block = getVisualBlockDefinition(state.currentVisualBlock);
    if (!block) return;

    const categories = getVisualBlockCategories(block.id);
    const totalSubcategories = categories.reduce((sum, category) => sum + ((category.categories || []).length), 0);
    title.innerHTML = `<i class="fas ${block.icon}"></i> ${escapeHtml(block.label)}`;
    if (subtitle) {
        subtitle.textContent = `${categories.length} categorías y ${totalSubcategories} subcategorías dentro de ${block.label}.`;
    }
    backBtn.classList.remove("hidden");
}


function showToast(message, duration = 2500) {
    const toast = document.getElementById("toast");
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.remove("hidden");
    toastTimer = setTimeout(() => {
        toast.classList.add("hidden");
    }, duration);
}

function formatCurrency(value) {
    return `${Number(value || 0).toFixed(2)}€`;
}

function buildShareableListText() {
    if (!state.cart.length) {
        return "Mi lista de DV Shop esta vacia.";
    }

    const lines = [
        "Mi lista de DV Shop",
        "",
        ...state.cart.map((item) => (
            `- ${item.quantity} x ${cleanDisplayText(item.name)} · ${formatCurrency(item.price * item.quantity)}`
        )),
        "",
        `Total: ${formatCurrency(calculateTotal())}`
    ];

    if (state.budget) {
        lines.push(`Presupuesto: ${formatCurrency(state.budget)}`);
    }

    return lines.join("\n");
}

function getListSharePayload() {
    if (shareListDraft && Array.isArray(shareListDraft.items) && shareListDraft.items.length) {
        const payload = buildSharePayloadFromDraft();
        return {
            title: "Lista de DV Shop",
            text: buildShareTextFromPayload(payload)
        };
    }

    return {
        title: "Lista de DV Shop",
        text: buildShareableListText()
    };
}

function buildListTemplatePayload() {
    return {
        appName: "DV Shop",
        template: "dvshop-list",
        version: LIST_TEMPLATE_VERSION,
        exportDate: new Date().toISOString(),
        budget: state.budget,
        total: calculateTotal(),
        currency: "EUR",
        items: state.cart.map((item) => ({
            id: item.id,
            name: cleanDisplayText(item.name),
            brand: formatBrandName(item.brand || ""),
            price: Number(item.price || 0),
            quantity: Math.max(1, Number(item.quantity || 1)),
            thumbnail: item.thumbnail || "",
            categoryName: cleanDisplayText(item.categoryName || "")
        }))
    };
}

let exportListDraft = null;
let shareListDraft = null;

function buildExportDraftFromCart() {
    return {
        exportDate: new Date().toISOString(),
        items: state.cart.map((item) => ({
            id: item.id,
            name: cleanDisplayText(item.name),
            brand: formatBrandName(item.brand || ""),
            quantity: Math.max(1, Number(item.quantity || 1)),
            originalPrice: Math.max(0, Number(item.price || 0)),
            price: Math.max(0, Number(item.price || 0)),
            status: null,
            thumbnail: item.thumbnail || "",
            categoryName: cleanDisplayText(item.categoryName || "")
        }))
    };
}

function buildShareDraftFromCart() {
    return {
        exportDate: new Date().toISOString(),
        items: state.cart.map((item) => ({
            id: item.id,
            name: cleanDisplayText(item.name),
            brand: formatBrandName(item.brand || ""),
            quantity: Math.max(1, Number(item.quantity || 1)),
            price: Math.max(0, Number(item.price || 0)),
            status: null,
            thumbnail: item.thumbnail || "",
            categoryName: cleanDisplayText(item.categoryName || "")
        }))
    };
}

function setShareItemStatus(index, status) {
    if (!shareListDraft || !Array.isArray(shareListDraft.items)) return;
    const item = shareListDraft.items[index];
    if (!item) return;
    item.status = status;
    renderShareListModal();
}

function updateShareItemPrice(index, value) {
    if (!shareListDraft || !Array.isArray(shareListDraft.items)) return;
    const item = shareListDraft.items[index];
    if (!item) return;
    const num = Number(value);
    item.price = Number.isFinite(num) && num >= 0 ? num : item.price;
}

function renderShareListModal() {
    const itemsContainer = document.getElementById("shareListItems");
    const copy = document.getElementById("shareListCopy");
    if (!itemsContainer || !shareListDraft) return;

    if (copy) {
        copy.textContent = "Marca lo comprado (✅/❌) y ajusta precios antes de enviar.";
    }

    itemsContainer.innerHTML = shareListDraft.items.map((item, index) => {
        const status = item.status;
        const yesActive = status === "yes" ? "is-active" : "";
        const noActive = status === "no" ? "is-active" : "";
        const noneActive = !status ? "is-active" : "";
        return `
            <div class="export-item-row">
                <div class="export-item-main">
                    <div class="export-item-name">${escapeHtml(item.name)}</div>
                    <div class="export-item-meta">${renderBrandPrefix(item.brand)}${Math.max(1, Number(item.quantity || 1))} uds</div>
                </div>
                <div class="export-item-controls">
                    <div class="export-status">
                        <button type="button" class="export-status-btn status-none ${noneActive}" onclick="setShareItemStatus(${index}, null)" aria-label="Sin marcar">
                            <i class="fas fa-minus"></i>
                        </button>
                        <button type="button" class="export-status-btn status-yes ${yesActive}" onclick="setShareItemStatus(${index}, 'yes')" aria-label="Comprado">
                            <i class="fas fa-check"></i>
                        </button>
                        <button type="button" class="export-status-btn status-no ${noActive}" onclick="setShareItemStatus(${index}, 'no')" aria-label="No comprado">
                            <i class="fas fa-xmark"></i>
                        </button>
                    </div>
                    <input class="export-price-input" type="number" step="0.01" min="0" value="${Number(item.price || 0).toFixed(2)}" onchange="updateShareItemPrice(${index}, this.value)" aria-label="Editar precio">
                </div>
            </div>
        `;
    }).join("");
}

function buildSharePayloadFromDraft() {
    const draft = shareListDraft || buildShareDraftFromCart();
    const items = (draft.items || []).map((item) => ({
        id: item.id,
        name: cleanDisplayText(item.name),
        brand: formatBrandName(item.brand || ""),
        price: Math.max(0, Number(item.price || 0)),
        quantity: Math.max(1, Number(item.quantity || 1)),
        status: item.status || null
    }));
    const total = items.reduce((sum, item) => sum + (Number(item.price || 0) * Number(item.quantity || 1)), 0);
    return {
        budget: state.budget,
        total,
        items
    };
}

function buildShareTextFromPayload(payload) {
    const symbol = (status) => (status === "yes" ? "✅" : status === "no" ? "❌" : "•");
    const lines = [
        "Mi lista de DV Shop",
        "",
        ...(payload.items || []).map((item) => (
            `${symbol(item.status)} ${item.quantity} x ${cleanDisplayText(item.name)} · ${formatCurrency(item.price * item.quantity)}`
        )),
        "",
        `Total: ${formatCurrency(payload.total || 0)}`
    ];

    if (payload.budget) {
        lines.push(`Presupuesto: ${formatCurrency(payload.budget)}`);
    }

    return lines.join("\n");
}

function buildShareChecklistTextFromPayload(payload) {
    const items = payload.items || [];
    const lines = [
        "Lista para comprar (DV Shop)",
        "",
        "Marca con [x] lo comprado y ajusta el precio si hace falta:",
        ""
    ];

    items.forEach((item) => {
        const qty = Math.max(1, Number(item.quantity || 1));
        const unitPrice = Math.max(0, Number(item.price || 0));
        const total = unitPrice * qty;
        lines.push(`- [ ] ${qty} x ${cleanDisplayText(item.name)} · ${formatCurrency(unitPrice)} · Total ${formatCurrency(total)}`);
    });

    lines.push("");
    lines.push(`Total estimado: ${formatCurrency(payload.total || 0)}`);
    if (payload.budget) {
        lines.push(`Presupuesto: ${formatCurrency(payload.budget)}`);
    }
    return lines.join("\n");
}

function getShareTxtText() {
    const payload = buildSharePayloadFromDraft();
    return buildShareChecklistTextFromPayload(payload);
}

function buildShareFormHtmlFromPayload(payload) {
    const date = new Date().toISOString().split("T")[0];
    const items = payload.items || [];
    const rows = items.map((item, index) => {
        const qty = Math.max(1, Number(item.quantity || 1));
        const unitPrice = Math.max(0, Number(item.price || 0));
        const name = escapeHtml(cleanDisplayText(item.name));
        const checked = item.status === "yes" ? "checked" : "";
        return `
            <div class="row" data-index="${index}">
                <label class="check">
                    <input type="checkbox" ${checked}>
                    <span></span>
                </label>
                <div class="main">
                    <div class="name">${name}</div>
                    <div class="meta">${qty} uds</div>
                </div>
                <input class="price" type="number" step="0.01" min="0" value="${unitPrice.toFixed(2)}">
                <div class="total"></div>
            </div>
        `;
    }).join("");

    return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>Lista DV Shop ${date}</title>
  <style>
    :root { color-scheme: light; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; margin: 0; background: #f6f7fb; color: #0f172a; }
    .wrap { max-width: 720px; margin: 0 auto; padding: 16px; }
    h1 { font-size: 18px; margin: 0 0 8px; }
    .hint { font-size: 13px; color: #475569; margin: 0 0 12px; }
    .card { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; }
    .row { display: grid; grid-template-columns: 42px 1fr 92px 92px; gap: 10px; align-items: center; padding: 12px; border-top: 1px solid #eef2f7; }
    .row:first-child { border-top: none; }
    .check { display: grid; place-items: center; }
    .check input { width: 20px; height: 20px; }
    .name { font-size: 14px; font-weight: 700; line-height: 1.2; }
    .meta { font-size: 12px; color: #64748b; margin-top: 2px; }
    .price { width: 100%; border: 1px solid #e2e8f0; border-radius: 12px; padding: 10px; text-align: right; font: inherit; }
    .total { text-align: right; font-weight: 800; font-size: 13px; }
    .footer { display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-top: 12px; }
    .pill { background: #fff; border: 1px solid #e2e8f0; border-radius: 999px; padding: 10px 12px; font-weight: 800; }
    .ok { background: #dcfce7; border-color: #86efac; }
    .no { background: #fee2e2; border-color: #fecaca; }
    @media (max-width: 520px) { .row { grid-template-columns: 42px 1fr 86px 86px; } }
  </style>
</head>
<body>
  <div class="wrap">
    <h1>Lista DV Shop</h1>
    <p class="hint">Marca lo comprado y ajusta el precio. Se recalcula el total automáticamente.</p>
    <div class="card" id="list">
      ${rows}
    </div>
    <div class="footer">
      <div class="pill" id="totalPill">Total: 0.00€</div>
      <div class="pill ok" id="boughtPill">Comprado: 0</div>
      <div class="pill no" id="pendingPill">Pendiente: 0</div>
    </div>
  </div>
  <script>
    const format = (n) => (Number(n || 0).toFixed(2) + "€");
    const rows = Array.from(document.querySelectorAll(".row"));
    const totalPill = document.getElementById("totalPill");
    const boughtPill = document.getElementById("boughtPill");
    const pendingPill = document.getElementById("pendingPill");
    function recalc() {
      let total = 0;
      let bought = 0;
      rows.forEach((row) => {
        const qtyText = row.querySelector(".meta")?.textContent || "1";
        const qty = Math.max(1, Number(String(qtyText).replace(/\\D/g, "")) || 1);
        const price = Math.max(0, Number(row.querySelector(".price")?.value || 0));
        const lineTotal = qty * price;
        row.querySelector(".total").textContent = format(lineTotal);
        total += lineTotal;
        const checked = !!row.querySelector("input[type=checkbox]")?.checked;
        if (checked) bought += 1;
      });
      totalPill.textContent = "Total: " + format(total);
      boughtPill.textContent = "Comprado: " + bought;
      pendingPill.textContent = "Pendiente: " + (rows.length - bought);
    }
    document.addEventListener("input", recalc);
    document.addEventListener("change", recalc);
    recalc();
  </script>
</body>
</html>`;
}

function getShareFormHtml() {
    const payload = buildSharePayloadFromDraft();
    return buildShareFormHtmlFromPayload(payload);
}

function downloadShareTxt() {
    if (!state.cart.length) {
        showToast("Tu lista está vacía", 2200);
        return;
    }
    if (!shareListDraft) {
        shareListDraft = buildShareDraftFromCart();
    }
    const date = new Date().toISOString().split("T")[0];
    downloadTextFile(getShareTxtText(), `dvshop_lista_${date}.txt`, "TXT descargado");
}

function downloadShareForm() {
    if (!state.cart.length) {
        showToast("Tu lista está vacía", 2200);
        return;
    }
    if (!shareListDraft) {
        shareListDraft = buildShareDraftFromCart();
    }
    const date = new Date().toISOString().split("T")[0];
    downloadTextFile(getShareFormHtml(), `dvshop_lista_${date}.html`, "Formulario descargado");
}

async function shareFormFile() {
    if (!state.cart.length) {
        showToast("Tu lista está vacía", 2200);
        return;
    }
    if (!shareListDraft) {
        shareListDraft = buildShareDraftFromCart();
    }

    const html = getShareFormHtml();
    const date = new Date().toISOString().split("T")[0];
    const filename = `dvshop_lista_${date}.html`;

    if (navigator.share) {
        try {
            const file = typeof File !== "undefined"
                ? new File([html], filename, { type: "text/html" })
                : null;
            const shareData = file
                ? { title: "Lista de DV Shop", files: [file] }
                : { title: "Lista de DV Shop", text: getShareTxtText() };

            if (!file || !navigator.canShare || navigator.canShare(shareData)) {
                closeShareListModal();
                await navigator.share(shareData);
                showToast("Formulario compartido", 2000);
                return;
            }
        } catch (error) {
            if (error && error.name === "AbortError") {
                return;
            }
        }
    }

    downloadShareForm();
    closeShareListModal();
    showToast("Formulario descargado. Adjunta el archivo en WhatsApp.", 3200);
}

async function shareTxtFile() {
    if (!state.cart.length) {
        showToast("Tu lista está vacía", 2200);
        return;
    }
    if (!shareListDraft) {
        shareListDraft = buildShareDraftFromCart();
    }

    const plainText = getShareTxtText();
    const date = new Date().toISOString().split("T")[0];
    const filename = `dvshop_lista_${date}.txt`;

    if (navigator.share) {
        try {
            const file = typeof File !== "undefined"
                ? new File([plainText], filename, { type: "text/plain" })
                : null;
            const shareData = file
                ? { title: "Lista de DV Shop", files: [file] }
                : { title: "Lista de DV Shop", text: plainText };

            if (!file || !navigator.canShare || navigator.canShare(shareData)) {
                closeShareListModal();
                await navigator.share(shareData);
                showToast("TXT compartido", 2000);
                return;
            }
        } catch (error) {
            if (error && error.name === "AbortError") {
                return;
            }
        }
    }

    downloadShareTxt();
    closeShareListModal();
    showToast("TXT descargado. Adjunta el archivo en WhatsApp o Correo.", 3200);
}

function openExportListModal() {
    const modal = document.getElementById("exportListModal");
    if (!modal) {
        downloadJsonFile(
            buildListTemplatePayload(),
            `dvshop_lista_${new Date().toISOString().split("T")[0]}.json`,
            `Lista exportada: ${state.cart.length} productos`
        );
        return;
    }

    if (!state.cart.length) {
        showToast("No hay productos en la lista para exportar", 2200);
        return;
    }

    exportListDraft = buildExportDraftFromCart();
    renderExportListModal();
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeExportListModal() {
    const modal = document.getElementById("exportListModal");
    if (!modal) return;
    modal.classList.add("hidden");
    document.body.style.overflow = "";
}

function setExportFormat(format) {
    if (!exportListDraft) return;
    exportListDraft.format = format;
    renderExportListModal();
}

function setExportItemStatus(index, status) {
    if (!exportListDraft || !Array.isArray(exportListDraft.items)) return;
    const item = exportListDraft.items[index];
    if (!item) return;
    item.status = status;
    renderExportListModal();
}

function updateExportItemPrice(index, value) {
    if (!exportListDraft || !Array.isArray(exportListDraft.items)) return;
    const item = exportListDraft.items[index];
    if (!item) return;
    const num = Number(value);
    item.price = Number.isFinite(num) && num >= 0 ? num : item.price;
}

function renderExportListModal() {
    const itemsContainer = document.getElementById("exportListItems");
    const formatRow = document.getElementById("exportFormatRow");
    if (!itemsContainer || !formatRow || !exportListDraft) return;

    const format = exportListDraft.format || "json";
    const btnClass = (id) => `btn-secondary export-format-btn ${format === id ? "is-active" : ""}`;

    formatRow.innerHTML = `
        <button type="button" class="${btnClass("json")}" onclick="setExportFormat('json')" aria-label="Exportar JSON">
            <i class="fas fa-brackets-curly"></i>
        </button>
        <button type="button" class="${btnClass("csv")}" onclick="setExportFormat('csv')" aria-label="Exportar CSV">
            <i class="fas fa-table"></i>
        </button>
        <button type="button" class="${btnClass("txt")}" onclick="setExportFormat('txt')" aria-label="Exportar Texto">
            <i class="fas fa-align-left"></i>
        </button>
        <button type="button" class="btn-primary export-download-btn" onclick="downloadExportList()" aria-label="Descargar">
            <i class="fas fa-download"></i>
        </button>
    `;

    itemsContainer.innerHTML = exportListDraft.items.map((item, index) => {
        const status = item.status;
        const yesActive = status === "yes" ? "is-active" : "";
        const noActive = status === "no" ? "is-active" : "";
        const noneActive = !status ? "is-active" : "";
        return `
            <div class="export-item-row">
                <div class="export-item-main">
                    <div class="export-item-name">${escapeHtml(item.name)}</div>
                    <div class="export-item-meta">${renderBrandPrefix(item.brand)}${Math.max(1, Number(item.quantity || 1))} uds</div>
                </div>
                <div class="export-item-controls">
                    <div class="export-status">
                        <button type="button" class="export-status-btn status-none ${noneActive}" onclick="setExportItemStatus(${index}, null)" aria-label="Sin marcar">
                            <i class="fas fa-minus"></i>
                        </button>
                        <button type="button" class="export-status-btn status-yes ${yesActive}" onclick="setExportItemStatus(${index}, 'yes')" aria-label="Comprado">
                            <i class="fas fa-check"></i>
                        </button>
                        <button type="button" class="export-status-btn status-no ${noActive}" onclick="setExportItemStatus(${index}, 'no')" aria-label="No comprado">
                            <i class="fas fa-xmark"></i>
                        </button>
                    </div>
                    <input class="export-price-input" type="number" step="0.01" min="0" value="${Number(item.price || 0).toFixed(2)}" onchange="updateExportItemPrice(${index}, this.value)" aria-label="Editar precio">
                </div>
            </div>
        `;
    }).join("");
}

function buildExportPayloadFromDraft() {
    const draft = exportListDraft || buildExportDraftFromCart();
    const items = (draft.items || []).map((item) => ({
        id: item.id,
        name: cleanDisplayText(item.name),
        brand: formatBrandName(item.brand || ""),
        price: Math.max(0, Number(item.price || 0)),
        quantity: Math.max(1, Number(item.quantity || 1)),
        thumbnail: item.thumbnail || "",
        categoryName: cleanDisplayText(item.categoryName || ""),
        status: item.status || null
    }));

    const total = items.reduce((sum, item) => sum + (Number(item.price || 0) * Number(item.quantity || 1)), 0);
    return {
        appName: "DV Shop",
        template: "dvshop-list",
        version: LIST_TEMPLATE_VERSION,
        exportDate: new Date().toISOString(),
        budget: state.budget,
        total,
        currency: "EUR",
        items
    };
}

function downloadTextFile(text, filename, toastMessage) {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
    showToast(toastMessage || "Archivo descargado", 2200);
}

function downloadCsvFile(text, filename) {
    const blob = new Blob([text], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
    showToast("Lista exportada en CSV", 2200);
}

function buildExportTextFromDraft() {
    const payload = buildExportPayloadFromDraft();
    const symbol = (status) => (status === "yes" ? "✅" : status === "no" ? "❌" : "•");
    const lines = [
        "Mi lista de DV Shop",
        "",
        ...payload.items.map((item) => (
            `${symbol(item.status)} ${item.quantity} x ${cleanDisplayText(item.name)} · ${formatCurrency(item.price * item.quantity)}`
        )),
        "",
        `Total: ${formatCurrency(payload.total)}`
    ];
    if (payload.budget) {
        lines.push(`Presupuesto: ${formatCurrency(payload.budget)}`);
    }
    return lines.join("\n");
}

function buildExportCsvFromDraft() {
    const payload = buildExportPayloadFromDraft();
    const header = ["status", "quantity", "name", "brand", "price"];
    const rows = payload.items.map((item) => ([
        item.status || "",
        String(item.quantity || 1),
        cleanDisplayText(item.name).replace(/"/g, '""'),
        cleanDisplayText(item.brand || "").replace(/"/g, '""'),
        String(Number(item.price || 0).toFixed(2))
    ]));
    return [header, ...rows].map((row) => row.map((cell) => `"${String(cell)}"`).join(",")).join("\n");
}

function downloadExportList() {
    if (!exportListDraft) {
        exportListDraft = buildExportDraftFromCart();
    }
    const format = exportListDraft.format || "json";
    const date = new Date().toISOString().split("T")[0];
    if (format === "csv") {
        downloadCsvFile(buildExportCsvFromDraft(), `dvshop_lista_${date}.csv`);
        closeExportListModal();
        return;
    }
    if (format === "txt") {
        downloadTextFile(buildExportTextFromDraft(), `dvshop_lista_${date}.txt`, "Lista exportada en texto");
        closeExportListModal();
        return;
    }

    downloadJsonFile(
        buildExportPayloadFromDraft(),
        `dvshop_lista_${date}.json`,
        `Lista exportada: ${state.cart.length} productos`
    );
    closeExportListModal();
}

function downloadShareableList(text) {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `dvshop_lista_${new Date().toISOString().split("T")[0]}.txt`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
    showToast("Lista exportada en texto", 2200);
}

function downloadJsonFile(payload, filename, successMessage) {
    const dataStr = JSON.stringify(payload, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);

    if (successMessage) {
        showToast(successMessage, 2200);
    }
}

function normalizeImportedCartItems(rawItems) {
    if (!Array.isArray(rawItems)) {
        return [];
    }

    return rawItems.map((item, index) => {
        const name = cleanDisplayText(item?.name || "");
        if (!name) return null;

        return {
            id: item?.id ?? `imported-${index}-${Date.now()}`,
            name,
            brand: formatBrandName(item?.brand || ""),
            price: Math.max(0, Number(item?.price || 0)),
            quantity: Math.max(1, Number(item?.quantity || 1)),
            thumbnail: item?.thumbnail || "",
            categoryName: cleanDisplayText(item?.categoryName || "")
        };
    }).filter(Boolean);
}

function splitDelimitedRow(line, delimiter) {
    const out = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i += 1) {
        const char = line[i];
        if (char === '"') {
            const next = line[i + 1];
            if (inQuotes && next === '"') {
                current += '"';
                i += 1;
                continue;
            }
            inQuotes = !inQuotes;
            continue;
        }
        if (!inQuotes && char === delimiter) {
            out.push(current);
            current = "";
            continue;
        }
        current += char;
    }
    out.push(current);
    return out.map((cell) => String(cell || "").trim());
}

function parseFlexibleNumber(value) {
    const raw = String(value || "").trim().replace(/\s/g, "");
    if (!raw) return null;
    const cleaned = raw
        .replace(/€/g, "")
        .replace(/,/g, ".")
        .replace(/[^\d.\\-]/g, "");
    const num = Number(cleaned);
    return Number.isFinite(num) ? num : null;
}

function parseCsvListText(text) {
    const content = String(text || "").trim();
    if (!content) return [];
    const lines = content.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    if (lines.length < 1) return [];

    const delimiterCandidates = [",", ";", "\t"];
    const headerLine = lines[0];
    const delimiter = delimiterCandidates
        .map((candidate) => ({ candidate, count: (headerLine.match(new RegExp(`\\${candidate}`, "g")) || []).length }))
        .sort((a, b) => b.count - a.count)[0]?.candidate || ",";

    const headerCells = splitDelimitedRow(headerLine, delimiter).map((cell) => normalizeText(cell));
    const hasHeader = headerCells.some((cell) => ["name", "producto", "articulo", "quantity", "cantidad", "price", "precio"].includes(cell));

    const startIndex = hasHeader ? 1 : 0;
    const headerIndex = (key) => headerCells.findIndex((cell) => cell === key);
    const nameIndex = hasHeader ? (headerIndex("name") >= 0 ? headerIndex("name") : headerIndex("producto")) : 1;
    const brandIndex = hasHeader ? headerIndex("brand") : 2;
    const qtyIndex = hasHeader ? (headerIndex("quantity") >= 0 ? headerIndex("quantity") : headerIndex("cantidad")) : 0;
    const priceIndex = hasHeader ? (headerIndex("price") >= 0 ? headerIndex("price") : headerIndex("precio")) : 3;
    const statusIndex = hasHeader ? headerIndex("status") : -1;

    const items = [];
    for (let i = startIndex; i < lines.length; i += 1) {
        const cells = splitDelimitedRow(lines[i], delimiter);
        const name = cleanDisplayText(cells[nameIndex] || "");
        if (!name) continue;
        const quantity = Math.max(1, Number(parseFlexibleNumber(cells[qtyIndex]) || 1));
        const price = Math.max(0, Number(parseFlexibleNumber(cells[priceIndex]) || 0));
        const brand = formatBrandName(cells[brandIndex] || "");
        const status = statusIndex >= 0 ? cleanDisplayText(cells[statusIndex] || "") : "";
        items.push({
            id: `imported-csv-${i}-${Date.now()}`,
            name,
            brand,
            price,
            quantity,
            status: status || null
        });
    }
    return items;
}

function parseTextList(text) {
    const content = String(text || "").trim();
    if (!content) return [];
    const lines = content.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    const items = [];
    for (const line of lines) {
        if (/^mi lista de dv shop/i.test(line) || /^total:/i.test(line) || /^presupuesto:/i.test(line)) {
            continue;
        }
        const match = line.match(/^([✅❌•\\-])?\\s*(\\d+)\\s*x\\s*(.+?)(?:\\s*·\\s*([0-9.,]+)\\s*€?)?$/i);
        if (!match) continue;
        const symbol = match[1] || "";
        const qty = Math.max(1, Number(match[2] || 1));
        const name = cleanDisplayText(match[3] || "");
        if (!name) continue;
        const totalOrUnit = parseFlexibleNumber(match[4]);
        const assumedTotal = totalOrUnit != null ? totalOrUnit : 0;
        const price = qty > 0 ? Math.max(0, assumedTotal / qty) : Math.max(0, assumedTotal);
        const status = symbol === "✅" ? "yes" : symbol === "❌" ? "no" : null;
        items.push({
            id: `imported-txt-${Date.now()}-${items.length}`,
            name,
            brand: "",
            price,
            quantity: qty,
            status
        });
    }
    return items;
}

function parseMarkdownChecklistText(text) {
    const content = String(text || "").trim();
    if (!content) return [];
    const lines = content.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    const items = [];
    for (const line of lines) {
        if (!line.startsWith("- [")) continue;
        const match = line.match(/^- \[(x| )\]\s*(\d+)\s*x\s*(.+?)(?:\s*·\s*([0-9.,]+)\s*€?)?/i);
        if (!match) continue;
        const checked = String(match[1] || "").toLowerCase() === "x";
        const qty = Math.max(1, Number(match[2] || 1));
        const name = cleanDisplayText(match[3] || "");
        if (!name) continue;
        const unitPrice = parseFlexibleNumber(match[4]);
        items.push({
            id: `imported-md-${Date.now()}-${items.length}`,
            name,
            brand: "",
            price: Math.max(0, Number(unitPrice || 0)),
            quantity: qty,
            status: checked ? "yes" : null
        });
    }
    return items;
}

function syncBudgetInputs() {
    const budgetInput = document.getElementById("budgetInput");
    const budgetDisplay = document.getElementById("budgetDisplay");
    if (budgetInput) {
        budgetInput.value = state.budget || "";
    }
    if (budgetDisplay) {
        budgetDisplay.textContent = state.budget
            ? `Presupuesto actual: ${formatCurrency(state.budget)}`
            : "Sin límite de presupuesto";
    }
}

function isListTemplatePayload(source) {
    return source?.template === "dvshop-list" && Array.isArray(source?.items);
}

function importListTemplate(template) {
    const items = normalizeImportedCartItems(template.items);

    state.cart = items;
    if (template.budget !== undefined) {
        const numericBudget = Number(template.budget);
        state.budget = Number.isFinite(numericBudget) && numericBudget > 0 ? numericBudget : null;
    }

    syncBudgetInputs();
    saveToLocalStorage();
    updateCartUI();
    maybeWarnBudgetExceeded();
    if (document.getElementById("cartView").classList.contains("active")) {
        renderCart();
    }

    showToast(
        items.length
            ? `Lista importada: ${items.length} productos`
            : "Lista importada vacía",
        2200
    );
}

function openShareListModal() {
    const modal = document.getElementById("shareListModal");
    if (!modal) {
        shareListVia("more");
        return;
    }

    if (!state.cart.length) {
        showToast("Tu lista está vacía", 2200);
        return;
    }

    shareListDraft = buildShareDraftFromCart();
    renderShareListModal();
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeShareListModal() {
    const modal = document.getElementById("shareListModal");
    if (!modal) return;
    modal.classList.add("hidden");
    document.body.style.overflow = "";
}

function buildSmsHref(text) {
    const encodedText = encodeURIComponent(text);
    return /iPhone|iPad|iPod/i.test(navigator.userAgent)
        ? `sms:&body=${encodedText}`
        : `sms:?&body=${encodedText}`;
}

async function shareListVia(channel) {
    const payload = getListSharePayload();
    if (!shareListDraft) {
        shareListDraft = buildShareDraftFromCart();
    }
    const plainText = getShareTxtText();
    const date = new Date().toISOString().split("T")[0];
    const filename = `dvshop_lista_${date}.md`;

    if (navigator.share) {
        try {
            const file = typeof File !== "undefined"
                ? new File([plainText], filename, { type: "text/markdown" })
                : null;
            const shareData = file
                ? { title: payload.title, files: [file] }
                : { title: payload.title, text: plainText };

            if (!file || !navigator.canShare || navigator.canShare(shareData)) {
                closeShareListModal();
                await navigator.share(shareData);
                showToast("Lista compartida como checklist", 2000);
                return;
            }
        } catch (error) {
            if (error && error.name === "AbortError") {
                return;
            }
        }
    }

    closeShareListModal();
    downloadTextFile(plainText, filename, "Checklist descargado");
    showToast("Checklist descargado. Adjunta el archivo en WhatsApp o Correo.", 3200);
}

function escapeInlineJsString(str) {
    if (str == null) return "";
    return String(str)
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/\r/g, "\\r")
        .replace(/\n/g, "\\n")
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function escapeHtml(str) {
    if (str == null) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function sanitizeStoreText(value) {
    if (typeof value !== "string") {
        return value;
    }
    return value
        .replace(/\bmercadona\b/gi, "")
        .replace(/\bhacendado\b/gi, "")
        .replace(/\s{2,}/g, " ");
}

function fixMojibake(value) {
    if (typeof value !== "string" || !/[ÃÂ]/.test(value)) {
        return value;
    }

    try {
        const bytes = Uint8Array.from(value, (char) => char.charCodeAt(0) & 0xff);
        return new TextDecoder("utf-8").decode(bytes);
    } catch (error) {
        return value;
    }
}

function normalizeCatalogEntries(entries) {
    return (entries || []).map((category) => ({
        ...category,
        name: fixMojibake(category.name),
        categories: (category.categories || []).map((subCategory) => ({
            ...subCategory,
            name: fixMojibake(subCategory.name)
        }))
    }));
}

function getCatalogResults() {
    if (categoriesCache) {
        return categoriesCache;
    }

    const rawResults = window.MERCADONA_CATALOG && Array.isArray(window.MERCADONA_CATALOG.results)
        ? window.MERCADONA_CATALOG.results
        : [];

    categoriesCache = normalizeCatalogEntries(rawResults);
    return categoriesCache;
}

function updateCatalogStatus(message) {
    const status = document.getElementById("catalogStatus");
    if (status) {
        status.textContent = message;
    }
}

function updatePriceRefreshStatus(message) {
    const status = document.getElementById("priceRefreshStatus");
    if (status) {
        status.textContent = message;
    }
}

function getTodayKey() {
    return new Date().toISOString().slice(0, 10);
}

function normalizeText(value) {
    return sanitizeStoreText(fixMojibake(String(value || "")))
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, " ")
        .trim();
}

function cleanDisplayText(value) {
    return sanitizeStoreText(fixMojibake(String(value || ""))).trim();
}

function getIconOverrideKey(name, kind = "any") {
    return `${kind}::${normalizeText(name)}`;
}

function getIconOverride(name, kind = "any") {
    const normalized = normalizeText(name);
    if (!normalized) return null;

    const specific = state.iconOverrides?.[`${kind}::${normalized}`];
    if (specific) return specific;

    return state.iconOverrides?.[`any::${normalized}`] || null;
}

function formatBrandName(value) {
    const text = cleanDisplayText(value || "");
    if (!text) return "";
    if (/^(hac|mercadona|hacendado)$/i.test(text)) return "";
    return text;
}

function renderBrandDiv(value, className) {
    const brand = formatBrandName(value);
    return brand ? `<div class="${className}">${escapeHtml(brand)}</div>` : "";
}

function renderBrandPrefix(value) {
    const brand = formatBrandName(value);
    return brand ? `${escapeHtml(brand)} · ` : "";
}

function formatQuantity(value) {
    const num = Number(value);
    if (!Number.isFinite(num)) return "";
    return Number.isInteger(num) ? String(num) : String(num).replace(/\.0+$/, "").replace(/(\.\d*?)0+$/, "$1");
}

function buildRealProductDescription(product) {
    const displayName = cleanDisplayText(product.display_name || "");
    const packaging = cleanDisplayText(product.packaging || "");
    const unitSize = formatQuantity(product.price_instructions?.unit_size);
    const sizeFormat = cleanDisplayText(product.price_instructions?.size_format || "");
    const unitPriceDescription = cleanDisplayText(product.price_instructions?.unit_price_description || "");

    const pieces = [];
    if (displayName) pieces.push(displayName);
    if (packaging) pieces.push(packaging);
    if (unitSize && sizeFormat) {
        pieces.push(`${unitSize} ${sizeFormat}`);
    } else if (unitPriceDescription) {
        pieces.push(unitPriceDescription);
    }

    return pieces
        .filter(Boolean)
        .filter((piece, index, arr) => arr.indexOf(piece) === index)
        .join(" · ");
}

function classifyHealthScore(item) {
    const text = normalizeText(`${item.categoryName || ""} ${item.name || ""} ${item.brand || ""}`);
    let score = 50;

    const healthy = [
        "fruta", "verdura", "ensalada", "lechuga", "tomate", "pepino", "manzana", "platano", "pera", "naranja",
        "legumbre", "lenteja", "garbanzo", "judia", "alubia", "avena", "integral",
        "pollo", "pavo", "pescado", "atun", "salmon", "huevo", "yogur", "natural"
    ];

    const unhealthy = [
        "golosina", "caramelo", "chicle", "chocolate", "galleta", "bolleria", "tarta", "pastel", "helado",
        "snack", "patata frita", "patatas fritas", "refresco", "cola", "azucar", "energetico", "isotonico",
        "pizza", "hamburguesa", "precocinado", "frito", "rebozado", "salchicha", "bacon", "chorizo"
    ];

    healthy.forEach((token) => {
        if (text.includes(token)) score += 8;
    });
    unhealthy.forEach((token) => {
        if (text.includes(token)) score -= 10;
    });

    score = Math.max(0, Math.min(100, score));
    const label = score >= 70 ? "Alta" : score >= 45 ? "Media" : "Baja";
    return { score, label };
}

function recordPricePoint(productId, price, at = new Date().toISOString()) {
    const key = String(productId);
    if (!state.priceHistory[key]) {
        state.priceHistory[key] = [];
    }

    const series = state.priceHistory[key];
    const last = series.length ? series[series.length - 1] : null;
    if (last && Number(last.price) === Number(price)) {
        return;
    }

    series.push({ at, price: Number(price || 0) });
    if (series.length > 60) {
        state.priceHistory[key] = series.slice(series.length - 60);
    }
}

function getLatestPriceChanges(direction = "all", limit = 8) {
    return Object.entries(state.priceHistory)
        .map(([id, series]) => {
            if (!Array.isArray(series) || series.length < 2) return null;
            const prev = series[series.length - 2];
            const last = series[series.length - 1];
            const diff = Number(last.price) - Number(prev.price);
            if (!Number.isFinite(diff) || diff === 0) return null;
            if (direction === "up" && diff <= 0) return null;
            if (direction === "down" && diff >= 0) return null;

            const meta = state.purchaseHistory[String(id)] || allProductsCache.find((p) => String(p.id) === String(id));
            const from = Number(prev.price);
            const to = Number(last.price);
            const pct = from > 0 ? (diff / from) * 100 : 0;

            return {
                id,
                name: meta?.name || `Producto ${id}`,
                brand: formatBrandName(meta?.brand),
                from,
                to,
                diff,
                pct,
                at: last.at
            };
        })
        .filter(Boolean)
        .sort((a, b) =>
            new Date(b.at || 0) - new Date(a.at || 0)
            || Math.abs(b.diff) - Math.abs(a.diff)
        )
        .slice(0, limit);
}

function formatShortDate(day) {
    if (!day) return "";
    const parsed = new Date(`${day}T12:00:00`);
    if (Number.isNaN(parsed.getTime())) return day;
    return parsed.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}

function getPurchaseEntriesByDay(day) {
    return state.purchaseLog.filter((entry) => entry.day === day);
}

function getPurchaseSummaryByDay(day) {
    const entries = getPurchaseEntriesByDay(day);
    const grouped = {};

    entries.forEach((entry) => {
        (entry.items || []).forEach((item) => {
            const key = `${String(item.id || "")}|${normalizeText(item.name)}|${normalizeText(item.brand || "")}`;
            if (!grouped[key]) {
                grouped[key] = {
                    id: item.id,
                    name: cleanDisplayText(item.name || "Producto"),
                    brand: formatBrandName(item.brand),
                    quantity: 0,
                    total: 0,
                    unitPrice: Number(item.price || 0)
                };
            }

            grouped[key].quantity += Number(item.quantity || 0);
            grouped[key].total += Number(item.price || 0) * Number(item.quantity || 0);
            grouped[key].unitPrice = Number(item.price || grouped[key].unitPrice || 0);
        });
    });

    const items = Object.values(grouped)
        .sort((a, b) => b.quantity - a.quantity || b.total - a.total);

    return {
        entries,
        items,
        total: entries.reduce((sum, entry) => sum + Number(entry.total || 0), 0),
        units: items.reduce((sum, item) => sum + Number(item.quantity || 0), 0)
    };
}

function formatShortTime(value) {
    if (!value) return "";
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return "";
    return parsed.toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit"
    });
}

function computePriceVariation(series) {
    if (!Array.isArray(series) || series.length < 2) return null;
    const prices = series.map((point) => Number(point.price || 0)).filter((value) => Number.isFinite(value) && value > 0);
    if (prices.length < 2) return null;
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    if (min <= 0) return null;
    const pct = ((max - min) / min) * 100;
    return { min, max, pct };
}

function createNormalizedIconMap(entries) {
    return Object.fromEntries(
        Object.entries(entries).map(([name, icon]) => [normalizeText(name), icon])
    );
}

const EXACT_CATEGORY_ICON_MAP = createNormalizedIconMap({
    "Aceite, especias y salsas": "fa-bottle-droplet",
    "Agua y refrescos": "fa-bottle-water",
    "Aperitivos": "fa-cookie-bite",
    "Arroz, legumbres y pasta": "fa-bowl-food",
    "Azúcar, caramelos y chocolate": "fa-candy-cane",
    "Bebé": "fa-baby-carriage",
    "Bodega": "fa-wine-bottle",
    "Cacao, café e infusiones": "fa-mug-hot",
    "Carne": "fa-drumstick-bite",
    "Cereales y galletas": "fa-wheat-awn",
    "Charcutería y quesos": "fa-cheese",
    "Congelados": "fa-snowflake",
    "Conservas, caldos y cremas": "fa-box-archive",
    "Cuidado del cabello": "fa-pump-soap",
    "Cuidado facial y corporal": "fa-hand-sparkles",
    "Fitoterapia y parafarmacia": "fa-stethoscope",
    "Fruta y verdura": "fa-carrot",
    "Huevos, leche y mantequilla": "fa-cheese",
    "Limpieza y hogar": "fa-house",
    "Maquillaje": "fa-palette",
    "Marisco y pescado": "fa-fish",
    "Mascotas": "fa-paw",
    "Panadería y pastelería": "fa-bread-slice",
    "Pizzas y platos preparados": "fa-utensils",
    "Postres y yogures": "fa-ice-cream",
    "Zumos": "fa-glass-water-droplet"
});

const EXACT_SUBCATEGORY_ICON_MAP = createNormalizedIconMap({
    "Aceite, vinagre y sal": "fa-bottle-droplet",
    "Especias": "fa-pepper-hot",
    "Mayonesa, ketchup y mostaza": "fa-bottle-droplet",
    "Otras salsas": "fa-jar",
    "Agua": "fa-glass-water",
    "Isotónico y energético": "fa-bolt",
    "Refresco de cola": "fa-bottle-water",
    "Refresco de naranja y de limón": "fa-lemon",
    "Tónica y bitter": "fa-glass-water",
    "Refresco de té y sin gas": "fa-mug-hot",
    "Aceitunas y encurtidos": "fa-jar",
    "Frutos secos y fruta desecada": "fa-seedling",
    "Patatas fritas y snacks": "fa-cookie-bite",
    "Arroz": "fa-bowl-food",
    "Legumbres": "fa-seedling",
    "Pasta y fideos": "fa-bowl-food",
    "Azúcar y edulcorante": "fa-candy-cane",
    "Chicles y caramelos": "fa-candy-cane",
    "Chocolate": "fa-cookie-bite",
    "Golosinas": "fa-candy-cane",
    "Mermelada y miel": "fa-jar",
    "Alimentación infantil": "fa-baby",
    "Biberón y chupete": "fa-baby-carriage",
    "Higiene y cuidado": "fa-hand-sparkles",
    "Toallitas y pañales": "fa-baby",
    "Cerveza": "fa-beer-mug-empty",
    "Cerveza sin alcohol": "fa-beer-mug-empty",
    "Licores": "fa-whiskey-glass",
    "Sidra y cava": "fa-champagne-glasses",
    "Tinto de verano y sangría": "fa-wine-glass",
    "Vino blanco": "fa-wine-bottle",
    "Vino lambrusco y espumoso": "fa-champagne-glasses",
    "Vino rosado": "fa-wine-glass",
    "Vino tinto": "fa-wine-bottle",
    "Cacao soluble y chocolate a la taza": "fa-mug-hot",
    "Café cápsula y monodosis": "fa-mug-hot",
    "Café molido y en grano": "fa-mug-hot",
    "Café soluble y otras bebidas": "fa-mug-hot",
    "Té e infusiones": "fa-mug-hot",
    "Arreglos": "fa-drumstick-bite",
    "Aves y pollo": "fa-drumstick-bite",
    "Carne congelada": "fa-drumstick-bite",
    "Cerdo": "fa-bacon",
    "Conejo y cordero": "fa-drumstick-bite",
    "Embutido": "fa-hotdog",
    "Hamburguesas y picadas": "fa-burger",
    "Vacuno": "fa-drumstick-bite",
    "Empanados y elaborados": "fa-drumstick-bite",
    "Cereales": "fa-wheat-awn",
    "Galletas": "fa-cookie-bite",
    "Tortitas": "fa-cookie-bite",
    "Aves y jamón cocido": "fa-drumstick-bite",
    "Bacón y salchichas": "fa-bacon",
    "Chopped y mortadela": "fa-hotdog",
    "Embutido curado": "fa-hotdog",
    "Jamón serrano": "fa-hotdog",
    "Paté y sobrasada": "fa-jar",
    "Queso curado, semicurado y tierno": "fa-cheese",
    "Queso lonchas, rallado y en porciones": "fa-cheese",
    "Queso untable, fresco y especialidades": "fa-cheese",
    "Arroz y pasta": "fa-bowl-food",
    "Carne": "fa-drumstick-bite",
    "Fruta y verdura": "fa-carrot",
    "Helados": "fa-ice-cream",
    "Hielo": "fa-snowflake",
    "Marisco": "fa-fish",
    "Pescado": "fa-fish",
    "Pizzas": "fa-pizza-slice",
    "Rebozados": "fa-cookie-bite",
    "Tartas y churros": "fa-cookie-bite",
    "Atún y otras conservas de pescado": "fa-fish",
    "Berberechos y mejillones": "fa-fish",
    "Conservas de verdura y frutas": "fa-box-archive",
    "Gazpacho y cremas": "fa-box-archive",
    "Sopa y caldo": "fa-bowl-food",
    "Tomate": "fa-carrot",
    "Acondicionador y mascarilla": "fa-pump-soap",
    "Champú": "fa-pump-soap",
    "Coloración cabello": "fa-pump-soap",
    "Fijación cabello": "fa-spray-can",
    "Afeitado y cuidado para hombre": "fa-scissors",
    "Cuidado corporal": "fa-hand-sparkles",
    "Cuidado e higiene facial": "fa-hand-sparkles",
    "Depilación": "fa-scissors",
    "Desodorante": "fa-spray-can",
    "Gel y jabón de manos": "fa-pump-soap",
    "Higiene bucal": "fa-tooth",
    "Higiene íntima": "fa-hand-sparkles",
    "Manicura y pedicura": "fa-scissors",
    "Perfume y colonia": "fa-spray-can",
    "Protector solar y aftersun": "fa-sun",
    "Fitoterapia": "fa-leaf",
    "Parafarmacia": "fa-stethoscope",
    "Fruta": "fa-apple-whole",
    "Lechuga y ensalada preparada": "fa-leaf",
    "Verdura": "fa-carrot",
    "Huevos": "fa-egg",
    "Leche y bebidas vegetales": "fa-glass-water",
    "Mantequilla y margarina": "fa-cheese",
    "Detergente y suavizante ropa": "fa-shirt",
    "Estropajo, bayeta y guantes": "fa-soap",
    "Insecticida y ambientador": "fa-spray-can",
    "Lejía y líquidos fuertes": "fa-bottle-droplet",
    "Limpiacristales": "fa-spray-can",
    "Limpiahogar y friegasuelos": "fa-house",
    "Limpieza baño y WC": "fa-shower",
    "Limpieza cocina": "fa-utensils",
    "Limpieza muebles y multiusos": "fa-house",
    "Limpieza vajilla": "fa-soap",
    "Menaje y conservación de alimentos": "fa-box-open",
    "Papel higiénico y celulosa": "fa-toilet-paper",
    "Pilas y bolsas de basura": "fa-trash-can",
    "Utensilios de limpieza y calzado": "fa-broom",
    "Bases de maquillaje y corrector": "fa-palette",
    "Colorete y polvos": "fa-palette",
    "Labios": "fa-heart",
    "Ojos": "fa-eye",
    "Pinceles y brochas": "fa-palette",
    "Pescado congelado": "fa-fish",
    "Pescado fresco": "fa-fish",
    "Salazones y ahumados": "fa-fish",
    "Gato": "fa-cat",
    "Perro": "fa-dog",
    "Otros": "fa-paw",
    "Gato y otros": "fa-paw",
    "Bollería de horno": "fa-bread-slice",
    "Bollería envasada": "fa-cookie-bite",
    "Harina y preparado repostería": "fa-wheat-awn",
    "Pan de horno": "fa-bread-slice",
    "Pan de molde y otras especialidades": "fa-bread-slice",
    "Pan tostado y rallado": "fa-bread-slice",
    "Picos, rosquilletas y picatostes": "fa-bread-slice",
    "Tartas y pasteles": "fa-cookie-bite",
    "Velas y decoración": "fa-lightbulb",
    "Listo para Comer": "fa-utensils",
    "Platos preparados calientes": "fa-utensils",
    "Platos preparados fríos": "fa-utensils",
    "Bífidus": "fa-cheese",
    "Flan y natillas": "fa-ice-cream",
    "Gelatina y otros postres": "fa-ice-cream",
    "Postres de soja": "fa-ice-cream",
    "Yogures desnatados": "fa-cheese",
    "Yogures griegos": "fa-cheese",
    "Yogures líquidos": "fa-glass-water-droplet",
    "Yogures naturales y sabores": "fa-cheese",
    "Yogures y postres infantiles": "fa-baby",
    "Fruta variada": "fa-glass-water-droplet",
    "Melocotón y piña": "fa-glass-water-droplet",
    "Naranja": "fa-lemon",
    "Tomate y otros sabores": "fa-glass-water-droplet"
});

function getVisualBlock(name = "", kind = "any", parentName = "") {
    const normalizedName = normalizeText(name);
    const normalizedParent = normalizeText(parentName);
    const normalizedKind = cleanDisplayText(kind);

    if (
        normalizedName.includes("congelad") ||
        normalizedParent.includes("congelad") ||
        ["helados", "hielo", "pizzas", "rebozados", "tartas y churros"].includes(normalizedName) ||
        (normalizedKind === "subcategory" && normalizedParent === "congelados")
    ) {
        return "congelados";
    }

    if (
        ["agua y refrescos", "bodega", "cacao cafe e infusiones", "zumos"].includes(normalizedName) ||
        ["agua", "isotonico y energetico", "refresco de cola", "refresco de naranja y de limon", "tonica y bitter", "refresco de te y sin gas", "cerveza", "cerveza sin alcohol", "licores", "sidra y cava", "tinto de verano y sangria", "vino blanco", "vino lambrusco y espumoso", "vino rosado", "vino tinto", "cacao soluble y chocolate a la taza", "cafe capsula y monodosis", "cafe molido y en grano", "cafe soluble y otras bebidas", "te e infusiones", "fruta variada", "melocoton y pina", "naranja", "tomate y otros sabores"].includes(normalizedName)
    ) {
        return "bebidas";
    }

    if (
        ["limpieza y hogar"].includes(normalizedName) ||
        ["detergente y suavizante ropa", "estropajo bayeta y guantes", "insecticida y ambientador", "lejia y liquidos fuertes", "limpiacristales", "limpiahogar y friegasuelos", "limpieza bano y wc", "limpieza cocina", "limpieza muebles y multiusos", "limpieza vajilla", "menaje y conservacion de alimentos", "papel higienico y celulosa", "pilas y bolsas de basura", "utensilios de limpieza y calzado", "velas y decoracion"].includes(normalizedName)
    ) {
        return "hogar";
    }

    if (
        ["cuidado del cabello", "cuidado facial y corporal", "fitoterapia y parafarmacia", "maquillaje", "bebe"].includes(normalizedName) ||
        ["alimentacion infantil", "biberon y chupete", "higiene y cuidado", "toallitas y panales", "acondicionador y mascarilla", "champu", "coloracion cabello", "fijacion cabello", "afeitado y cuidado para hombre", "cuidado corporal", "cuidado e higiene facial", "depilacion", "desodorante", "gel y jabon de manos", "higiene bucal", "higiene intima", "manicura y pedicura", "perfume y colonia", "protector solar y aftersun", "fitoterapia", "parafarmacia", "bases de maquillaje y corrector", "colorete y polvos", "labios", "ojos", "pinceles y brochas", "yogures y postres infantiles"].includes(normalizedName)
    ) {
        return "cuidado";
    }

    if (
        ["mascotas", "gato", "perro", "otros"].includes(normalizedName) ||
        normalizedParent === "mascotas"
    ) {
        return "mascotas";
    }

    return "fresco";
}

function getIconForCategory(name, kind = "any") {
    const override = getIconOverride(name, kind);
    if (override && override.icon) {
        return override.icon;
    }

    const text = normalizeText(name);
    const exactIcon = kind === "subcategory"
        ? EXACT_SUBCATEGORY_ICON_MAP[text]
        : EXACT_CATEGORY_ICON_MAP[text];
    if (exactIcon) {
        return exactIcon;
    }
    const mapping = [
        { match: ["aperitivo", "snack", "patatas fritas", "aceituna", "encurtido", "galleta", "tortita", "tarta", "churro", "rebozado"], icon: "fa-cookie-bite" },
        { match: ["bodega", "licor", "sangria", "lambrusco", "espumoso"], icon: "fa-wine-glass" },
        { match: ["conserva", "gazpacho", "caldo", "sopa", "crema"], icon: "fa-box-archive" },
        { match: ["maquillaje", "labio", "ojo", "corrector", "colorete", "polvo", "pincel", "brocha"], icon: "fa-palette" },
        { match: ["zumo", "naranja", "pina", "melocoton"], icon: "fa-glass-water" },
        { match: ["fruta", "verdura", "hortaliza", "ensalada"], icon: "fa-carrot" },
        { match: ["carne", "pollo", "pavo", "cerdo", "vacuno", "cordero", "conejo", "hamburguesa", "picada", "jamon", "embutido", "mortadela", "bacon", "salchicha", "arreglo"], icon: "fa-drumstick-bite" },
        { match: ["pescado", "marisco", "atun", "salmon", "mejillon", "berberecho", "ahumado", "salazon"], icon: "fa-fish" },
        { match: ["huevo"], icon: "fa-egg" },
        { match: ["leche", "yogur", "mantequilla", "queso", "lacteo", "bifidus"], icon: "fa-cheese" },
        { match: ["pan", "bolleria", "pasteleria", "harina"], icon: "fa-bread-slice" },
        { match: ["arroz", "pasta", "legumbre", "cereal", "sopa", "caldo"], icon: "fa-bowl-food" },
        { match: ["aceite", "vinagre", "sal", "salsa", "mayonesa", "ketchup", "mostaza", "mermelada", "miel"], icon: "fa-bottle-droplet" },
        { match: ["especia"], icon: "fa-pepper-hot" },
        { match: ["agua"], icon: "fa-glass-water" },
        { match: ["refresco", "tonica", "bitter", "isotonico", "energetico"], icon: "fa-bottle-water" },
        { match: ["vino", "sidra", "cava"], icon: "fa-wine-bottle" },
        { match: ["cerveza"], icon: "fa-beer-mug-empty" },
        { match: ["cafe", "te", "infusion", "cacao"], icon: "fa-mug-hot" },
        { match: ["chocolate", "azucar", "caramelo", "golosina"], icon: "fa-candy-cane" },
        { match: ["congelado", "helado", "hielo", "flan", "natilla", "gelatina", "postre"], icon: "fa-ice-cream" },
        { match: ["limpieza", "hogar", "lejia", "detergente", "insecticida", "ambientador", "limpiacristales", "menaje", "conservacion", "vela", "decoracion"], icon: "fa-house" },
        { match: ["cabello", "champu", "acondicionador"], icon: "fa-pump-soap" },
        { match: ["higiene", "corporal", "facial", "desodorante", "afeitado", "depilacion", "manicura", "pedicura", "perfume", "colonia", "parafarmacia", "fitoterapia", "jabon", "manos"], icon: "fa-hand-sparkles" },
        { match: ["bebe", "infantil", "panal", "toallita"], icon: "fa-baby" },
        { match: ["mascota", "perro", "gato", "otros"], icon: "fa-dog" },
        { match: ["pizza"], icon: "fa-pizza-slice" },
        { match: ["papel higienico", "celulosa"], icon: "fa-toilet-paper" },
        { match: ["pila", "bolsa"], icon: "fa-battery-half" },
        { match: ["listo para comer", "plato preparado", "platos preparados"], icon: "fa-utensils" }
    ];

    const found = mapping.find((entry) => entry.match.some((token) => text.includes(token)));
    return found ? found.icon : "fa-bag-shopping";
}

function getAvailableIconTargets(kind = "category") {
    const catalog = getCatalogResults();
    if (kind === "subcategory") {
        return catalog
            .flatMap((category) => (category.categories || []).map((item) => cleanDisplayText(item.name)))
            .filter(Boolean)
            .sort((a, b) => a.localeCompare(b, "es"));
    }

    return catalog
        .map((category) => cleanDisplayText(category.name))
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b, "es"));
}

function populateIconTargetOptions() {
    const typeSelect = document.getElementById("iconTargetType");
    const nameSelect = document.getElementById("iconTargetName");
    if (!typeSelect || !nameSelect) return;

    const currentValue = cleanDisplayText(nameSelect.value);
    const options = getAvailableIconTargets(typeSelect.value || "category");
    nameSelect.innerHTML = options.map((name) => (
        `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`
    )).join("");

    if (currentValue && options.includes(currentValue)) {
        nameSelect.value = currentValue;
    }
}

function syncIconSelectionFromTarget() {
    const typeSelect = document.getElementById("iconTargetType");
    const nameSelect = document.getElementById("iconTargetName");
    const input = document.getElementById("iconClassInput");
    if (!typeSelect || !nameSelect || !input) return;

    const kind = typeSelect.value || "category";
    const name = cleanDisplayText(nameSelect.value || "");
    const override = getIconOverride(name, kind);
    input.value = override?.icon || getIconForCategory(name, kind) || "fa-icons";
    populateIconListOptions();
    updateIconOverridePreview();
}

function getFlatIconGallery() {
    return ICON_GALLERY_SECTIONS.flatMap((section) => section.items);
}

function findIconGalleryEntry(iconClass) {
    return getFlatIconGallery().find((entry) => entry.icon === iconClass) || null;
}

function populateIconListOptions() {
    const listSelect = document.getElementById("iconListSelect");
    const input = document.getElementById("iconClassInput");
    if (!listSelect) return;

    const selectedIcon = cleanDisplayText(input?.value || "");
    listSelect.innerHTML = ICON_GALLERY_SECTIONS.map((section) => `
        <optgroup label="${escapeHtml(section.label)}">
            ${section.items.map((entry) => `
                <option value="${escapeHtml(entry.icon)}">${escapeHtml(entry.label)}</option>
            `).join("")}
        </optgroup>
    `).join("");

    if (selectedIcon && [...listSelect.options].some((option) => option.value === selectedIcon)) {
        listSelect.value = selectedIcon;
    }
}

function selectIconOption(iconClass) {
    const input = document.getElementById("iconClassInput");
    if (!input) return;
    input.value = cleanDisplayText(iconClass || "");
    updateIconOverridePreview();
}

function updateIconSourceMode() {
    const modeSelect = document.getElementById("iconSourceMode");
    const listSelect = document.getElementById("iconListSelect");
    const fileActions = document.getElementById("iconFileActions");
    const useFile = modeSelect?.value === "file";

    if (listSelect) {
        listSelect.classList.toggle("hidden", useFile);
    }
    if (fileActions) {
        fileActions.classList.toggle("hidden", !useFile);
    }
}

function updateIconOverridePreview() {
    const preview = document.getElementById("iconPreviewGlyph");
    const input = document.getElementById("iconClassInput");
    const label = document.getElementById("iconSelectedLabel");
    if (!preview || !input) return;

    const raw = cleanDisplayText(input.value || "");
    const iconClass = raw.startsWith("fa-") ? raw : "fa-icons";
    preview.className = `fas ${iconClass}`;

    if (label) {
        const current = findIconGalleryEntry(iconClass);
        label.textContent = current ? `Seleccionado: ${current.label}` : `Seleccionado: ${iconClass}`;
    }

    const listSelect = document.getElementById("iconListSelect");
    if (listSelect && [...listSelect.options].some((option) => option.value === iconClass)) {
        listSelect.value = iconClass;
    }
}

function renderIconOverrideSummary() {
    const summary = document.getElementById("iconOverrideSummary");
    if (!summary) return;

    const entries = Object.entries(state.iconOverrides || {})
        .map(([key, value]) => ({ key, ...value }))
        .sort((a, b) => (a.name || "").localeCompare(b.name || "", "es"));

    if (!entries.length) {
        summary.textContent = "Sin iconos personalizados.";
        return;
    }

    const categoryCount = entries.filter((entry) => entry.kind !== "subcategory").length;
    const subcategoryCount = entries.length - categoryCount;
    summary.textContent = `${entries.length} personalizados guardados · ${categoryCount} categorias · ${subcategoryCount} subcategorias`;
}

function refreshVisibleIconViews() {
    if (document.getElementById("categoriesView").classList.contains("active")) {
        renderCategories();
    }
    if (document.getElementById("subcategoriesView").classList.contains("active") && state.currentCategoryId) {
        renderSubcategories(state.currentCategoryId, state.currentCategoryName);
    }
}

function renderIconOverrideControls() {
    populateIconTargetOptions();
    populateIconListOptions();
    syncIconSelectionFromTarget();
    updateIconSourceMode();
    renderIconOverrideSummary();
}

function saveIconOverride() {
    const typeSelect = document.getElementById("iconTargetType");
    const nameSelect = document.getElementById("iconTargetName");
    const iconInput = document.getElementById("iconClassInput");
    if (!typeSelect || !nameSelect || !iconInput) return;

    const kind = typeSelect.value || "category";
    const name = cleanDisplayText(nameSelect.value || "");
    const icon = cleanDisplayText(iconInput.value || "").replace(/^fas?\s+/, "");

    if (!name) {
        showToast("Selecciona una categoria o subcategoria", 2200);
        return;
    }

    if (!/^fa-[a-z0-9-]+$/i.test(icon)) {
        showToast("Selecciona un icono de la galeria", 2400);
        return;
    }

    const key = getIconOverrideKey(name, kind);
    state.iconOverrides[key] = { name, kind, icon };
    saveToLocalStorage();
    renderIconOverrideControls();
    refreshVisibleIconViews();
    showToast(`Icono guardado para ${name}`, 2200);
}

function deleteIconOverride(key) {
    if (!state.iconOverrides[key]) return;
    delete state.iconOverrides[key];
    saveToLocalStorage();
    renderIconOverrideControls();
    refreshVisibleIconViews();
    showToast("Icono personalizado eliminado", 2200);
}

function deleteCurrentIconOverride() {
    const typeSelect = document.getElementById("iconTargetType");
    const nameSelect = document.getElementById("iconTargetName");
    if (!typeSelect || !nameSelect) return;

    const kind = typeSelect.value || "category";
    const name = cleanDisplayText(nameSelect.value || "");
    if (!name) {
        showToast("Selecciona una categoria o subcategoria", 2200);
        return;
    }

    const key = getIconOverrideKey(name, kind);
    if (!state.iconOverrides[key]) {
        showToast("Ese objetivo no tiene icono personalizado", 2200);
        return;
    }

    deleteIconOverride(key);
}

function normalizeImportedIconOverrides(source) {
    const raw = source?.iconOverrides && typeof source.iconOverrides === "object"
        ? source.iconOverrides
        : source;

    if (!raw || typeof raw !== "object") {
        return {};
    }

    const normalized = {};
    Object.entries(raw).forEach(([key, value]) => {
        if (!value || typeof value !== "object") return;
        const name = cleanDisplayText(value.name || "");
        const kind = value.kind === "subcategory" ? "subcategory" : "category";
        const icon = cleanDisplayText(value.icon || "").replace(/^fas?\s+/, "");
        if (!name || !/^fa-[a-z0-9-]+$/i.test(icon)) return;

        const finalKey = key.includes("::") ? key : getIconOverrideKey(name, kind);
        normalized[finalKey] = { name, kind, icon };
    });

    return normalized;
}

function importIconOverrides() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.onchange = (event) => {
        const file = event.target.files && event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (loadEvent) => {
            try {
                const parsed = JSON.parse(loadEvent.target.result);
                const importedOverrides = normalizeImportedIconOverrides(parsed);
                const entries = Object.entries(importedOverrides);

                if (!entries.length) {
                    showToast("No se encontraron iconos validos", 2600);
                    return;
                }

                state.iconOverrides = {
                    ...state.iconOverrides,
                    ...importedOverrides
                };
                saveToLocalStorage();
                renderIconOverrideControls();
                refreshVisibleIconViews();
                showToast(`${entries.length} iconos importados`, 2400);
            } catch (error) {
                console.error("Error importando iconos:", error);
                showToast("No se pudo importar el archivo", 2600);
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function exportIconOverrides() {
    const entries = Object.entries(state.iconOverrides || {});
    if (!entries.length) {
        showToast("No hay iconos personalizados para exportar", 2400);
        return;
    }

    downloadJsonFile({
        appName: "DV Shop",
        version: APP_VERSION,
        exportDate: new Date().toISOString(),
        iconOverrides: state.iconOverrides
    }, `dvshop_iconos_${new Date().toISOString().split("T")[0]}.json`, "Iconos exportados");
}

function importIconForTarget() {
    const typeSelect = document.getElementById("iconTargetType");
    const nameSelect = document.getElementById("iconTargetName");
    if (!typeSelect || !nameSelect) return;

    const kind = typeSelect.value || "category";
    const name = cleanDisplayText(nameSelect.value || "");
    if (!name) {
        showToast("Selecciona una categoria o subcategoria", 2200);
        return;
    }

    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.onchange = (event) => {
        const file = event.target.files && event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (loadEvent) => {
            try {
                const parsed = JSON.parse(loadEvent.target.result);
                const normalized = normalizeImportedIconOverrides(parsed);
                let importedIcon = "";

                if (parsed && typeof parsed.icon === "string") {
                    importedIcon = cleanDisplayText(parsed.icon).replace(/^fas?\s+/, "");
                } else {
                    const match = Object.values(normalized).find((entry) => (
                        entry.name === name && entry.kind === kind
                    ));
                    importedIcon = cleanDisplayText(match?.icon || "");
                }

                if (!/^fa-[a-z0-9-]+$/i.test(importedIcon)) {
                    showToast("Archivo de icono no valido", 2400);
                    return;
                }

                selectIconOption(importedIcon);
                saveIconOverride();
            } catch (error) {
                console.error("Error importando icono:", error);
                showToast("No se pudo importar el archivo", 2400);
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function getBudgetSummary(total, budget) {
    if (!budget) return "";
    const diff = budget - total;
    return diff >= 0
        ? `Restante: ${formatCurrency(diff)}`
        : `Excedido: ${formatCurrency(Math.abs(diff))}`;
}

function getBudgetOverflowAmount() {
    if (!state.budget) return 0;
    return Math.max(0, calculateTotal() - state.budget);
}

function wouldExceedBudget(nextAmount = 0) {
    if (!state.budget) return false;
    return calculateTotal() + Number(nextAmount || 0) > state.budget;
}

function getAddButtonState(price) {
    const blocked = wouldExceedBudget(price);
    return {
        blocked,
        label: blocked ? "Presupuesto lleno" : "Añadir",
        icon: blocked ? "fa-lock" : "fa-cart-plus"
    };
}

function maybeWarnBudgetExceeded() {
    const overflow = getBudgetOverflowAmount();
    if (overflow > 0) {
        showToast(`Aviso: te pasas del presupuesto por ${formatCurrency(overflow)}`, 3200);
    }
}

function getHistoryEntry(productId) {
    return state.purchaseHistory[String(productId)] || null;
}

function getHabitualProducts(limit = 8) {
    return Object.values(state.purchaseHistory)
        .sort((a, b) =>
            (b.orders || 0) - (a.orders || 0) ||
            (b.unitsBought || 0) - (a.unitsBought || 0) ||
            (b.totalSpent || 0) - (a.totalSpent || 0) ||
            new Date(b.lastPurchasedAt || 0) - new Date(a.lastPurchasedAt || 0)
        )
        .slice(0, limit);
}

function getSimulationSourceProducts() {
    const catalogProducts = allProductsCache.length
        ? allProductsCache
        : Object.values(productsCache).flat();
    const prioritized = [
        ...(state.products || []).map((item) => ({ ...item, _priority: 0 })),
        ...catalogProducts.map((item) => ({ ...item, _priority: 1 })),
        ...Object.values(state.purchaseHistory).map((item) => ({
            ...item,
            price: item.lastPrice || item.currentPrice || item.price || 0,
            thumbnail: item.thumbnail || "",
            categoryName: item.categoryName || "",
            _priority: 2
        }))
    ];

    const unique = new Map();
    prioritized.forEach((item) => {
        if (!item || item.id == null) return;
        const normalized = {
            id: item.id,
            name: cleanDisplayText(item.name || ""),
            brand: formatBrandName(item.brand),
            price: Number(item.price || 0),
            thumbnail: item.thumbnail || "",
            categoryName: cleanDisplayText(item.categoryName || ""),
            description: cleanDisplayText(item.description || ""),
            _priority: Number(item._priority || 0)
        };
        if (!normalized.name || !Number.isFinite(normalized.price) || normalized.price <= 0) {
            return;
        }

        const key = String(normalized.id);
        const current = unique.get(key);
        if (!current || normalized._priority < current._priority) {
            unique.set(key, normalized);
        }
    });

    return Array.from(unique.values()).sort((a, b) =>
        a._priority - b._priority
        || a.name.localeCompare(b.name, "es")
    );
}

function getManualSimulationResults(query, limit = 8) {
    const text = normalizeText(query);
    if (text.length < 2) {
        return [];
    }

    return getSimulationSourceProducts()
        .map((product) => {
            const name = normalizeText(product.name);
            const brand = normalizeText(product.brand);
            const categoryName = normalizeText(product.categoryName);
            const description = normalizeText(product.description);
            let score = 0;

            if (name === text) score += 120;
            if (name.startsWith(text)) score += 90;
            if (name.includes(text)) score += 70;
            if (brand.startsWith(text)) score += 40;
            if (brand.includes(text)) score += 25;
            if (categoryName.includes(text)) score += 18;
            if (description.includes(text)) score += 10;

            return { product, score };
        })
        .filter((entry) => entry.score > 0)
        .sort((a, b) =>
            b.score - a.score
            || a.product._priority - b.product._priority
            || a.product.name.localeCompare(b.product.name, "es")
        )
        .slice(0, limit)
        .map((entry) => entry.product);
}

function upsertSimulationItem(product, quantity = 1, reason = "Añadido manualmente") {
    if (!product || product.id == null) {
        return null;
    }

    const qty = Math.max(1, Number(quantity || 1));
    const price = Number(product.price || 0);
    if (!Number.isFinite(price) || price <= 0) {
        return null;
    }

    const existing = state.simulationDraft.find((item) => String(item.id) === String(product.id));
    if (existing) {
        existing.quantity += qty;
        existing.name = cleanDisplayText(product.name || existing.name);
        existing.brand = formatBrandName(product.brand) || existing.brand || "";
        existing.price = price;
        existing.thumbnail = product.thumbnail || existing.thumbnail || "";
        existing.categoryName = cleanDisplayText(product.categoryName || existing.categoryName || "");
        if (reason) {
            existing.reason = cleanDisplayText(reason);
        }
        return existing;
    }

    const created = {
        id: product.id,
        name: cleanDisplayText(product.name || ""),
        brand: formatBrandName(product.brand),
        price,
        quantity: qty,
        thumbnail: product.thumbnail || "",
        categoryName: cleanDisplayText(product.categoryName || ""),
        reason: cleanDisplayText(reason || "Añadido manualmente")
    };
    state.simulationDraft.push(created);
    return created;
}

function buildBudgetAdjustmentSuggestions() {
    const total = calculateTotal();
    if (!state.budget || total <= state.budget || !state.cart.length) {
        return [];
    }

    const overflow = total - state.budget;
    const candidates = [];

    state.cart.forEach((item, index) => {
        const history = getHistoryEntry(item.id) || {};
        const health = classifyHealthScore(item);
        for (let unitIndex = 0; unitIndex < item.quantity; unitIndex += 1) {
            candidates.push({
                cartIndex: index,
                id: item.id,
                name: item.name,
                brand: item.brand,
                price: item.price,
                quantity: item.quantity,
                repeatedUnit: item.quantity > 1 ? 0 : 1,
                habitualOrders: history.orders || 0,
                habitualUnits: history.unitsBought || 0,
                historicalSpend: history.totalSpent || 0,
                healthScore: health.score,
                healthLabel: health.label
            });
        }
    });

    candidates.sort((a, b) =>
        a.repeatedUnit - b.repeatedUnit ||
        a.healthScore - b.healthScore ||
        b.price - a.price ||
        a.name.localeCompare(b.name, "es")
    );

    const chosen = [];
    let saved = 0;
    for (const candidate of candidates) {
        if (saved >= overflow) {
            break;
        }
        chosen.push(candidate);
        saved += candidate.price;
    }

    const aggregated = new Map();
    chosen.forEach((candidate) => {
        const key = String(candidate.id);
        if (!aggregated.has(key)) {
            aggregated.set(key, {
                id: candidate.id,
                name: candidate.name,
                brand: candidate.brand,
                quantityToRemove: 0,
                savedAmount: 0,
                habitualOrders: candidate.habitualOrders,
                repeatedUnit: candidate.repeatedUnit,
                healthLabel: candidate.healthLabel
            });
        }
        const entry = aggregated.get(key);
        entry.quantityToRemove += 1;
        entry.savedAmount += candidate.price;
    });

    return Array.from(aggregated.values());
}

function renderHabitualProducts() {
    const container = document.getElementById("habitualList");
    if (!container) return;

    const habituals = getHabitualProducts();
    if (!habituals.length) {
        container.innerHTML = '<div class="empty-state">Aún no hay compras finalizadas para calcular tus productos habituales.</div>';
        return;
    }

    container.innerHTML = habituals.map((item, index) => {
        const cachedProduct = allProductsCache.find((product) => String(product.id) === String(item.id));
        const thumb = item.thumbnail || cachedProduct?.thumbnail || "";
        return `
            <div class="habitual-item">
                <div class="habitual-thumb">
                    ${thumb ? `<img src="${thumb}" alt="${escapeHtml(cleanDisplayText(item.name))}" loading="lazy" onerror="this.parentNode.innerHTML = '${index + 1}'">` : `${index + 1}`}
                </div>
                <div class="habitual-info">
                    <div class="habitual-title">${escapeHtml(cleanDisplayText(item.name))}</div>
                    <div class="habitual-meta">${renderBrandPrefix(item.brand)}${item.orders} compras · ${item.unitsBought} uds</div>
                </div>
                <div class="habitual-extra">${formatCurrency(item.totalSpent)}</div>
            </div>
        `;
    }).join("");
}

function setSimulationManualQuery(value) {
    state.simulationManualQuery = cleanDisplayText(value || "");
    renderSimulationManualResults();
}

function openCatalogForSimulation() {
    switchView("categories");
    if (document.getElementById("searchBar").classList.contains("hidden")) {
        toggleSearch();
    }
    document.getElementById("searchInput").focus();
}

function renderSimulationManualResults() {
    const container = document.getElementById("simulationManualResults");
    if (!container) return;

    const query = state.simulationManualQuery || "";
    const source = getSimulationSourceProducts();
    if (!source.length) {
        container.innerHTML = `
            <div class="simulation-helper-card">
                <div class="simulation-helper">
                    Abre una categoria o precarga el catalogo para poder anadir productos manualmente a la simulacion.
                </div>
            </div>
        `;
        return;
    }

    const items = query.length >= 2
        ? getManualSimulationResults(query, 8)
        : source.slice(0, 6);

    if (!items.length) {
        container.innerHTML = '<div class="simulation-helper-card"><div class="simulation-helper">No hay coincidencias para esa busqueda.</div></div>';
        return;
    }

    container.innerHTML = `
        <div class="simulation-helper">
            ${query.length >= 2
                ? `Resultados para "${escapeHtml(query)}"`
                : "Productos disponibles para anadir manualmente"}
        </div>
        <div class="simulation-search-list">
            ${items.map((item) => `
                <div class="simulation-search-item">
                    <div class="simulation-search-thumb">
                        ${item.thumbnail
                            ? `<img src="${item.thumbnail}" alt="${escapeHtml(item.name)}" loading="lazy" onerror="this.parentNode.innerHTML = '<i class=&quot;fas fa-bag-shopping&quot;></i>'">`
                            : '<i class="fas fa-bag-shopping"></i>'}
                    </div>
                    <div class="simulation-search-info">
                        <div class="simulation-title">${escapeHtml(item.name)}</div>
                        <div class="simulation-meta">
                            ${(() => {
                                const brand = formatBrandName(item.brand);
                                const category = cleanDisplayText(item.categoryName || "");
                                if (brand && category) return `${escapeHtml(brand)} · ${escapeHtml(category)}`;
                                if (brand) return escapeHtml(brand);
                                if (category) return escapeHtml(category);
                                return "";
                            })()}
                        </div>
                    </div>
                    <div class="simulation-search-side">
                        <div class="simulation-total">${formatCurrency(item.price)}</div>
                        <button type="button" class="btn-secondary" onclick="addManualSimulationProduct('${escapeInlineJsString(String(item.id))}')">
                            <i class="fas fa-plus"></i> Añadir
                        </button>
                    </div>
                </div>
            `).join("")}
        </div>
    `;
}

function addManualSimulationProduct(productId) {
    const product = getSimulationSourceProducts().find((item) => String(item.id) === String(productId));
    if (!product) {
        showToast("Ese producto ya no está disponible para simular", 2200);
        return;
    }

    const created = upsertSimulationItem(product, 1, "Añadido manualmente");
    if (!created) {
        showToast("No se pudo añadir ese producto a la simulación", 2200);
        return;
    }

    commitSimulationChanges(`${product.name} añadido a la simulación`);
}

function addProductToSimulation(productId, name, brand, price, thumbnail = "", categoryName = "", stayOnCurrentView = true) {
    const created = upsertSimulationItem({
        id: productId,
        name,
        brand,
        price,
        thumbnail,
        categoryName
    }, 1, "Añadido desde catálogo");

    if (!created) {
        showToast("No se pudo añadir ese producto a la simulación", 2200);
        return;
    }

    if (!stayOnCurrentView) {
        switchView("simulation");
    } else {
        saveToLocalStorage();
        if (document.getElementById("simulationView").classList.contains("active")) {
            renderSimulationView();
        }
        showToast(`${cleanDisplayText(name)} añadido a la simulación`);
    }
}

function changeSimulationQuantity(productId, delta) {
    const item = state.simulationDraft.find((entry) => String(entry.id) === String(productId));
    if (!item) {
        showToast("Ese producto ya no está en la simulación", 2000);
        return;
    }

    const nextQuantity = Math.max(0, Number(item.quantity || 1) + Number(delta || 0));
    if (nextQuantity <= 0) {
        removeSimulationItem(productId);
        return;
    }

    item.quantity = nextQuantity;
    commitSimulationChanges();
}

function removeSimulationItem(productId) {
    const item = state.simulationDraft.find((entry) => String(entry.id) === String(productId));
    if (!item) {
        showToast("Ese producto ya no está en la simulación", 2000);
        return;
    }

    state.simulationDraft = state.simulationDraft.filter((entry) => String(entry.id) !== String(productId));
    commitSimulationChanges(`${item.name} quitado de la simulación`);
}

function clearSimulationDraft() {
    if (!state.simulationDraft.length) {
        showToast("La simulación ya está vacía", 1800);
        return;
    }

    state.simulationDraft = [];
    commitSimulationChanges("Simulación vaciada");
}

function daysBetweenDateValues(fromValue, toValue = new Date()) {
    const from = new Date(fromValue);
    const to = new Date(toValue);
    if (Number.isNaN(from.getTime()) || Number.isNaN(to.getTime())) {
        return 0;
    }

    from.setHours(0, 0, 0, 0);
    to.setHours(0, 0, 0, 0);
    return Math.max(0, Math.round((to.getTime() - from.getTime()) / 86400000));
}

function getPurchaseDaysForProduct(productId) {
    const days = new Set();
    state.purchaseLog.forEach((entry) => {
        if ((entry.items || []).some((item) => String(item.id) === String(productId))) {
            days.add(entry.day);
        }
    });
    return Array.from(days).sort();
}

function getHistoryCadenceDays(productId, orders = 0) {
    const days = getPurchaseDaysForProduct(productId);
    if (days.length >= 2) {
        let total = 0;
        let count = 0;
        for (let index = 1; index < days.length; index += 1) {
            const diff = daysBetweenDateValues(days[index - 1], days[index]);
            if (diff > 0) {
                total += diff;
                count += 1;
            }
        }
        if (count > 0) {
            return Math.max(3, Math.round(total / count));
        }
    }

    if (orders >= 10) return 7;
    if (orders >= 5) return 14;
    if (orders >= 2) return 21;
    return 30;
}

function getHistoryProposalItems(limit = 8) {
    const historyMap = new Map(
        Object.values(state.purchaseHistory || {}).map((item) => [String(item.id), { ...item }])
    );

    state.purchaseLog.forEach((entry) => {
        (entry.items || []).forEach((item) => {
            const key = String(item.id);
            const current = historyMap.get(key) || {
                id: item.id,
                name: item.name,
                brand: item.brand,
                thumbnail: item.thumbnail || null,
                categoryName: item.categoryName || "",
                orders: 0,
                unitsBought: 0,
                totalSpent: 0,
                lastPrice: Number(item.price || 0),
                lastPurchasedAt: entry.at || `${entry.day}T12:00:00`
            };

            current.name = current.name || item.name;
            current.brand = current.brand || item.brand;
            current.categoryName = current.categoryName || item.categoryName || "";
            current.lastPrice = Number(item.price || current.lastPrice || 0);
            current.lastPurchasedAt = entry.at || current.lastPurchasedAt;
            current.unitsBought = Number(current.unitsBought || 0) + Number(item.quantity || 0);
            current.totalSpent = Number(current.totalSpent || 0) + (Number(item.price || 0) * Number(item.quantity || 0));
            current.orders = Math.max(Number(current.orders || 0), getPurchaseDaysForProduct(item.id).length || 1);
            historyMap.set(key, current);
        });
    });

    const historyItems = Array.from(historyMap.values());
    const enriched = historyItems
        .map((item) => {
            const orders = Number(item.orders || 0);
            const unitsBought = Number(item.unitsBought || 0);
            const daysSince = item.lastPurchasedAt ? daysBetweenDateValues(item.lastPurchasedAt) : 999;
            const cadenceDays = getHistoryCadenceDays(item.id, orders);
            const suggestedQuantity = Math.max(1, Math.round(unitsBought / Math.max(1, orders)));
            const dueRatio = daysSince / Math.max(1, cadenceDays);
            const isHabitual = orders >= 2 || unitsBought >= 4;
            const isDue = daysSince >= Math.max(3, Math.round(cadenceDays * 0.7));
            const price = Number(item.lastPrice || item.currentPrice || item.price || 0);

            return {
                ...item,
                price,
                orders,
                unitsBought,
                daysSince,
                cadenceDays,
                suggestedQuantity,
                dueRatio,
                isHabitual,
                isDue,
                score: dueRatio * 100 + orders * 8 + unitsBought,
                reasonText: item.lastPurchasedAt
                    ? `Hace ${daysSince} dias · suele repetirse cada ${cadenceDays} dias`
                    : `Producto habitual con ${orders} compras registradas`
            };
        })
        .filter((item) => item.price > 0);

    const dueItems = enriched
        .filter((item) => item.isHabitual && item.isDue)
        .sort((a, b) =>
            b.score - a.score ||
            b.orders - a.orders ||
            new Date(a.lastPurchasedAt || 0) - new Date(b.lastPurchasedAt || 0)
        )
        .slice(0, limit);

    if (dueItems.length) {
        return dueItems;
    }

    return enriched
        .sort((a, b) =>
            b.orders - a.orders ||
            b.unitsBought - a.unitsBought ||
            new Date(b.lastPurchasedAt || 0) - new Date(a.lastPurchasedAt || 0)
        )
        .slice(0, limit)
        .map((item) => ({
            ...item,
            reasonText: item.lastPurchasedAt
                ? `Ultima compra hace ${item.daysSince} dias · ${item.orders} compras registradas`
                : `Producto guardado en tu historial`,
            isFallback: true
        }));
}

function getHistoryProductPayload(item) {
    const sourceProduct = getSimulationSourceProducts().find((entry) => String(entry.id) === String(item.id));
    if (sourceProduct) {
        return sourceProduct;
    }

    return {
        id: item.id,
        name: cleanDisplayText(item.name || ""),
        brand: formatBrandName(item.brand),
        price: Number(item.price || item.lastPrice || 0),
        thumbnail: item.thumbnail || "",
        categoryName: cleanDisplayText(item.categoryName || "")
    };
}

function addHistoryProposalToCart(productId, quantity = 1) {
    const proposalItem = getHistoryProposalItems(20).find((item) => String(item.id) === String(productId));
    if (!proposalItem) {
        showToast("Esa sugerencia ya no esta disponible", 2200);
        return;
    }

    const product = getHistoryProductPayload(proposalItem);
    const qty = Math.max(1, Number(quantity || proposalItem.suggestedQuantity || 1));
    if (!Number.isFinite(product.price) || product.price <= 0) {
        showToast("No se pudo calcular el precio de esa sugerencia", 2200);
        return;
    }

    if (wouldExceedBudget(product.price * qty)) {
        showToast(`No puedes anadir ${product.name}: superarias tu presupuesto`, 2600);
        return;
    }

    insertIntoCart(product, qty);
    commitCartChanges(`${product.name} anadido a la lista`);
}

function addAllHistoryProposalToCart() {
    const proposal = getHistoryProposalItems(8);
    if (!proposal.length) {
        showToast("No hay propuesta lista para pasar", 2200);
        return;
    }

    let added = 0;
    let blocked = 0;

    proposal.forEach((item) => {
        const product = getHistoryProductPayload(item);
        const qty = Math.max(1, Number(item.suggestedQuantity || 1));
        if (!Number.isFinite(product.price) || product.price <= 0) {
            blocked += 1;
            return;
        }
        if (wouldExceedBudget(product.price * qty)) {
            blocked += 1;
            return;
        }
        insertIntoCart(product, qty);
        added += 1;
    });

    if (added > 0) {
        commitCartChanges(
            blocked
                ? `${added} sugerencias pasadas a la lista y ${blocked} bloqueadas por presupuesto`
                : `${added} sugerencias pasadas a la lista`
        );
        return;
    }

    showToast("No se pudo pasar la propuesta por presupuesto", 2600);
}

function renderStats() {
    const container = document.getElementById("statsContent");
    if (!container) return;

    const mostConsumed = Object.values(state.purchaseHistory)
        .sort((a, b) => (b.unitsBought || 0) - (a.unitsBought || 0))
        .slice(0, 8);

    const recentIncreases = getLatestPriceChanges("up", 8);
    const priceDrops = getLatestPriceChanges("down", 8);

    const last14Days = Array.from({ length: 14 }, (_, idx) => {
        const date = new Date();
        date.setDate(date.getDate() - (13 - idx));
        return date.toISOString().slice(0, 10);
    });

    const purchasesByDay = last14Days.map((day) => {
        const entries = state.purchaseLog.filter((entry) => entry.day === day);
        const total = entries.reduce((sum, entry) => sum + Number(entry.total || 0), 0);
        const units = entries.reduce((sum, entry) => sum + (entry.items || []).reduce((s, it) => s + Number(it.quantity || 0), 0), 0);
        const override = state.trendOverrides?.[day];
        return {
            day,
            total: override && override.hidden ? 0 : (override?.total ?? total),
            units: override && override.hidden ? 0 : (override?.units ?? units),
            hidden: Boolean(override?.hidden)
        };
    }).filter((entry) => !entry.hidden);

    const maxTotal = Math.max(1, ...purchasesByDay.map((d) => d.total));

    const priceStatus = state.lastPriceRefreshAt
        ? `Última actualización diaria: ${new Date(state.lastPriceRefreshAt).toLocaleString("es-ES")}`
        : "Pendiente de actualización diaria.";

    container.innerHTML = `
        <div class="stats-grid">
            <div class="stats-card stats-toolbar-card">
                <div class="stats-toolbar">
                    <div class="stats-toolbar-copy">
                        <h3><i class="fas fa-rotate"></i> Actualizar precios</h3>
                        <div id="priceRefreshStatus" class="stats-muted">${escapeHtml(priceStatus)}</div>
                    </div>
                    <button type="button" class="btn-secondary" onclick="refreshDailyPrices(true)">
                        <i class="fas fa-rotate"></i> Actualizar ahora
                    </button>
                </div>
            </div>

            <div class="stats-card">
                <h3><i class="fas fa-basket-shopping"></i> Tendencia (últimos 14 días)</h3>
                <div class="sparkline">
                    ${purchasesByDay.map((entry) => `
                        <div class="spark-row">
                            <div class="spark-label">${entry.day.slice(5)}</div>
                            <div class="spark-bar"><div class="spark-fill" style="width:${Math.round((entry.total / maxTotal) * 100)}%"></div></div>
                            <div class="stats-trend-meta">
                                <div class="stats-muted">${formatCurrency(entry.total)} · ${entry.units} uds</div>
                                <div class="trend-actions">
                                    <button type="button" class="icon-btn" onclick="editTrendDay('${entry.day}')" aria-label="Editar tendencia ${entry.day}">
                                        <i class="fas fa-pen"></i>
                                    </button>
                                    <button type="button" class="icon-btn" onclick="openPurchaseLogModal('${entry.day}')" aria-label="Ver compra del ${entry.day}">
                                        <i class="fas fa-eye"></i>
                                    </button>
                                    <button type="button" class="icon-btn" onclick="openPurchaseTicketModal('${entry.day}')" aria-label="Ver tickets del ${entry.day}">
                                        <i class="fas fa-receipt"></i>
                                    </button>
                                    <button type="button" class="icon-btn danger" onclick="deleteTrendDay('${entry.day}')" aria-label="Eliminar tendencia ${entry.day}">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>

            <div class="stats-card">
                <h3><i class="fas fa-fire"></i> Lo que más consumes</h3>
                ${mostConsumed.length ? mostConsumed.map((item) => `
                    <div class="stats-row">
                        <div><strong>${escapeHtml(cleanDisplayText(item.name))}</strong>${renderBrandDiv(item.brand, "stats-muted")}</div>
                        <div>${item.unitsBought} uds</div>
                    </div>
                `).join("") : '<div class="stats-muted">Aún no hay compras finalizadas.</div>'}
            </div>

            <div class="stats-card">
                <h3><i class="fas fa-arrow-trend-up"></i> Subidas recientes</h3>
                ${recentIncreases.length ? recentIncreases.map((item) => `
                    <div class="stats-row">
                        <div><strong>${escapeHtml(cleanDisplayText(item.name))}</strong>${renderBrandDiv(item.brand, "stats-muted")}</div>
                        <div><span class="stats-delta-up">+${formatCurrency(item.diff)}</span><div class="stats-muted">${formatCurrency(item.from)} → ${formatCurrency(item.to)} · ${item.pct.toFixed(1)}%</div></div>
                    </div>
                `).join("") : '<div class="stats-muted">Aún no hay subidas recientes detectadas.</div>'}
            </div>

            <div class="stats-card">
                <h3><i class="fas fa-arrow-down"></i> Bajadas recientes</h3>
                ${priceDrops.length ? priceDrops.map((item) => `
                    <div class="stats-row">
                        <div><strong>${escapeHtml(cleanDisplayText(item.name))}</strong>${renderBrandDiv(item.brand, "stats-muted")}</div>
                        <div><span class="stats-delta-down">${formatCurrency(item.diff)}</span><div class="stats-muted">${formatCurrency(item.from)} → ${formatCurrency(item.to)}</div></div>
                    </div>
                `).join("") : '<div class="stats-muted">Aún no hay bajadas detectadas.</div>'}
            </div>
        </div>
    `;
}

function editTrendDay(day) {
    const current = state.trendOverrides?.[day];
    const currentEntries = state.purchaseLog.filter((entry) => entry.day === day);
    const currentTotal = current?.total ?? currentEntries.reduce((sum, entry) => sum + Number(entry.total || 0), 0);
    const currentUnits = current?.units ?? currentEntries.reduce((sum, entry) => sum + (entry.items || []).reduce((s, it) => s + Number(it.quantity || 0), 0), 0);

    const nextTotal = window.prompt(`Nuevo gasto total para ${day}`, String(currentTotal.toFixed(2)));
    if (nextTotal === null) return;
    const parsedTotal = Number.parseFloat(nextTotal);
    if (!Number.isFinite(parsedTotal) || parsedTotal < 0) {
        showToast("Importe inválido", 2200);
        return;
    }

    const nextUnits = window.prompt(`Nuevas unidades para ${day}`, String(currentUnits));
    if (nextUnits === null) return;
    const parsedUnits = Number.parseInt(nextUnits, 10);
    if (!Number.isFinite(parsedUnits) || parsedUnits < 0) {
        showToast("Unidades inválidas", 2200);
        return;
    }

    state.trendOverrides[day] = { total: parsedTotal, units: parsedUnits, hidden: false };
    saveToLocalStorage();
    renderStats();
    showToast(`Tendencia del ${day} actualizada`, 2200);
}

function openPurchaseLogModal(day) {
    const modal = document.getElementById("purchaseLogModal");
    const title = document.getElementById("purchaseLogTitle");
    const body = document.getElementById("purchaseLogBody");
    if (!modal || !title || !body) return;

    const summary = getPurchaseSummaryByDay(day);
    if (!summary.entries.length) {
        showToast("No hay compras guardadas para ese día", 2200);
        return;
    }

    title.innerHTML = `<i class="fas fa-receipt"></i> Compra del ${escapeHtml(formatShortDate(day))}`;
    body.innerHTML = `
        <div class="purchase-log-summary">
            <div class="purchase-log-pill">
                <strong>${formatCurrency(summary.total)}</strong>
                <span>Total</span>
            </div>
            <div class="purchase-log-pill">
                <strong>${summary.units}</strong>
                <span>Unidades</span>
            </div>
            <div class="purchase-log-pill">
                <strong>${summary.items.length}</strong>
                <span>Productos</span>
            </div>
        </div>
        <div class="purchase-log-list">
            ${summary.items.map((item) => `
                <div class="purchase-log-item">
                    <div>
                        <strong>${escapeHtml(item.name)}</strong>
                        ${renderBrandDiv(item.brand, "stats-muted")}
                    </div>
                    <div class="purchase-log-side">
                        <div>${formatCurrency(item.total)}</div>
                        <div class="stats-muted">${item.quantity} uds · ${formatCurrency(item.unitPrice)}</div>
                    </div>
                </div>
            `).join("")}
        </div>
    `;

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function openPurchaseTicketModal(day) {
    const modal = document.getElementById("purchaseLogModal");
    const title = document.getElementById("purchaseLogTitle");
    const body = document.getElementById("purchaseLogBody");
    if (!modal || !title || !body) return;

    const entries = getPurchaseEntriesByDay(day)
        .slice()
        .sort((a, b) => new Date(b.at || 0) - new Date(a.at || 0));

    if (!entries.length) {
        showToast("No hay tickets guardados para ese día", 2200);
        return;
    }

    title.innerHTML = `<i class="fas fa-receipt"></i> Tickets del ${escapeHtml(formatShortDate(day))}`;
    body.innerHTML = `
        <div class="purchase-ticket-list">
            ${entries.map((entry, index) => `
                <div class="purchase-ticket-card">
                    <div class="purchase-ticket-header">
                        <div>
                            <strong>Compra ${entries.length - index}</strong>
                            <div class="purchase-ticket-time">${escapeHtml(formatShortTime(entry.at))}</div>
                        </div>
                        <div class="purchase-log-side">
                            <div>${formatCurrency(entry.total || 0)}</div>
                            <div class="stats-muted">${(entry.items || []).reduce((sum, item) => sum + Number(item.quantity || 0), 0)} uds</div>
                        </div>
                    </div>
                    <div class="purchase-ticket-items">
                        ${(entry.items || []).map((item) => `
                            <div class="purchase-ticket-item">
                                <div>
                                    <strong>${escapeHtml(cleanDisplayText(item.name || "Producto"))}</strong>
                                    ${renderBrandDiv(item.brand, "stats-muted")}
                                </div>
                                <div class="purchase-log-side">
                                    <div>${formatCurrency(Number(item.price || 0) * Number(item.quantity || 0))}</div>
                                    <div class="stats-muted">${Number(item.quantity || 0)} uds · ${formatCurrency(item.price || 0)}</div>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            `).join("")}
        </div>
    `;

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closePurchaseLogModal() {
    const modal = document.getElementById("purchaseLogModal");
    if (!modal) return;
    modal.classList.add("hidden");
    document.body.style.overflow = "";
}

function deleteTrendDay(day) {
    if (!window.confirm(`¿Eliminar la tendencia del día ${day} de las estadísticas?`)) {
        return;
    }

    state.trendOverrides[day] = { ...(state.trendOverrides[day] || {}), hidden: true };
    saveToLocalStorage();
    renderStats();
    showToast(`Tendencia del ${day} eliminada`, 2200);
}

function recordCompletedPurchase() {
    const now = new Date().toISOString();
    const day = now.slice(0, 10);
    const purchasedItems = state.cart.map((item) => ({
        id: item.id,
        name: item.name,
        brand: item.brand,
        categoryName: item.categoryName || "",
        price: item.price,
        quantity: item.quantity
    }));

    if (purchasedItems.length) {
        state.purchaseLog.push({
            at: now,
            day,
            total: purchasedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
            items: purchasedItems
        });
        if (state.purchaseLog.length > 200) {
            state.purchaseLog = state.purchaseLog.slice(state.purchaseLog.length - 200);
        }
    }

    state.cart.forEach((item) => {
        const key = String(item.id);
        const existing = state.purchaseHistory[key] || {
            id: item.id,
            name: item.name,
            brand: item.brand,
            description: item.description || "",
            thumbnail: item.thumbnail || null,
            orders: 0,
            unitsBought: 0,
            totalSpent: 0,
            lastPrice: item.price,
            lastPurchasedAt: null
        };

        existing.name = item.name;
        existing.brand = item.brand;
        existing.description = item.description || existing.description || "";
        existing.thumbnail = item.thumbnail || existing.thumbnail || null;
        existing.orders += 1;
        existing.unitsBought += item.quantity;
        existing.totalSpent += item.price * item.quantity;
        existing.lastPrice = item.price;
        existing.lastPurchasedAt = now;

        state.purchaseHistory[key] = existing;
        recordPricePoint(item.id, item.price, now);
    });
}

function mergeProductsIntoGlobalCache(products) {
    const productMap = new Map(allProductsCache.map((item) => [String(item.id), item]));
    products.forEach((product) => {
        productMap.set(String(product.id), product);
    });
    allProductsCache = Array.from(productMap.values());
}

function setProgress(percent) {
    const progressBar = document.getElementById("progressBar");
    const progressFill = document.getElementById("progressFill");
    if (!progressBar || !progressFill) return;

    progressBar.classList.remove("hidden");
    progressFill.style.width = `${Math.max(0, Math.min(100, percent))}%`;
}

function hideProgress() {
    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
        setTimeout(() => {
            progressBar.classList.add("hidden");
        }, 500);
    }
}

function buildPersistedData() {
    return {
        cart: state.cart,
        savedLists: state.savedLists,
        simulationDraft: state.simulationDraft,
        budget: state.budget,
        purchaseHistory: state.purchaseHistory,
        purchaseLog: state.purchaseLog,
        iconOverrides: state.iconOverrides,
        groupColorOverrides: state.groupColorOverrides,
        trendOverrides: state.trendOverrides,
        priceHistory: state.priceHistory,
        lastPriceRefreshAt: state.lastPriceRefreshAt,
        lastUpdated: state.lastUpdated || new Date().toISOString(),
        theme: getCurrentTheme(),
        version: APP_VERSION
    };
}

function applyPersistedData(data, options = {}) {
    const {
        showLoadedToast = false,
        persistLocal = true
    } = options;

    state.cart = Array.isArray(data.cart) ? data.cart : [];
    state.savedLists = Array.isArray(data.savedLists) ? data.savedLists : [];
    state.simulationDraft = Array.isArray(data.simulationDraft) ? data.simulationDraft : [];
    state.budget = data.budget || null;
    state.purchaseHistory = data.purchaseHistory || {};
    state.purchaseLog = Array.isArray(data.purchaseLog) ? data.purchaseLog : [];
    state.iconOverrides = data.iconOverrides && typeof data.iconOverrides === "object" ? data.iconOverrides : {};
    state.groupColorOverrides = data.groupColorOverrides && typeof data.groupColorOverrides === "object" ? data.groupColorOverrides : {};
    state.trendOverrides = data.trendOverrides && typeof data.trendOverrides === "object" ? data.trendOverrides : {};
    state.priceHistory = data.priceHistory && typeof data.priceHistory === "object" ? data.priceHistory : {};
    state.lastUpdated = data.lastUpdated || state.lastUpdated || new Date().toISOString();
    state.lastPriceRefreshAt = data.lastPriceRefreshAt || null;

    updateCartUI();
    if (data.theme) {
        setTheme(data.theme);
    }

    syncBudgetInputs();
    updatePriceRefreshStatus(
        state.lastPriceRefreshAt
            ? `Última actualización diaria: ${new Date(state.lastPriceRefreshAt).toLocaleString("es-ES")}`
            : "Pendiente de actualización diaria."
    );

    if (document.getElementById("simulationView")?.classList.contains("active")) {
        renderSimulationView();
    }
    if (document.getElementById("statsView")?.classList.contains("active")) {
        renderStats();
    }
    if (document.getElementById("settingsView")?.classList.contains("active")) {
        renderIconOverrideControls();
        renderGroupColorControls();
        renderSyncSettings();
    }

    if (persistLocal) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            ...buildPersistedData(),
            lastUpdated: state.lastUpdated || data.lastUpdated || new Date().toISOString()
        }));
    }

    if (showLoadedToast) {
        showToast("Datos cargados correctamente", 1500);
    }
}

function saveToLocalStorage(options = {}) {
    const { skipRemoteSync = false } = options;
    state.lastUpdated = new Date().toISOString();
    const dataToSave = buildPersistedData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    updateStatsInfo();

    if (!skipRemoteSync) {
        scheduleRemoteSync();
    }
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!saved) return;

    try {
        const data = JSON.parse(saved);
        applyPersistedData(data, { showLoadedToast: true });
    } catch (error) {
        console.error("Error loading data:", error);
    }
}

function normalizeSupabaseProjectUrl(value) {
    const cleaned = cleanDisplayText(value || "").replace(/\/+$/, "");
    return cleaned.replace(/\/rest\/v1$/i, "");
}

function getSyncConfig() {
    try {
        const raw = JSON.parse(localStorage.getItem(SYNC_CONFIG_KEY) || "{}");
        const supabaseUrl = normalizeSupabaseProjectUrl(raw.supabaseUrl || "");
        const supabaseAnonKey = cleanDisplayText(raw.supabaseAnonKey || "");
        const householdId = cleanDisplayText(raw.householdId || "");
        return {
            supabaseUrl,
            supabaseAnonKey,
            householdId,
            enabled: Boolean(supabaseUrl && supabaseAnonKey && householdId)
        };
    } catch (error) {
        return {
            supabaseUrl: "",
            supabaseAnonKey: "",
            householdId: "",
            enabled: false
        };
    }
}

function setSyncStatus(message, isError = false) {
    syncRuntime.status = message;
    const target = document.getElementById("syncStatus");
    if (!target) return;
    target.textContent = message;
    target.classList.toggle("is-error", Boolean(isError));
}

function renderSyncSettings() {
    const config = getSyncConfig();
    const urlInput = document.getElementById("syncSupabaseUrl");
    const keyInput = document.getElementById("syncSupabaseAnonKey");
    const householdInput = document.getElementById("syncHouseholdId");

    if (urlInput && document.activeElement !== urlInput) {
        urlInput.value = config.supabaseUrl;
    }
    if (keyInput && document.activeElement !== keyInput) {
        keyInput.value = config.supabaseAnonKey;
    }
    if (householdInput && document.activeElement !== householdInput) {
        householdInput.value = config.householdId;
    }

    if (!config.enabled) {
        setSyncStatus("Modo local. Sin nube configurada.");
        return;
    }

    if (syncRuntime.lastRemoteUpdatedAt) {
        setSyncStatus(`Sync activo. Ultima nube: ${new Date(syncRuntime.lastRemoteUpdatedAt).toLocaleString("es-ES")}`);
        return;
    }

    setSyncStatus(`Sync activo para hogar: ${config.householdId}`);
}

function buildSupabaseHeaders(config) {
    return {
        apikey: config.supabaseAnonKey,
        Authorization: `Bearer ${config.supabaseAnonKey}`,
        "Content-Type": "application/json"
    };
}

async function fetchRemoteStateRecord(config) {
    const query = new URLSearchParams({
        select: "household_id,updated_at,device_id,payload",
        household_id: `eq.${config.householdId}`,
        limit: "1"
    });
    const response = await fetch(`${config.supabaseUrl}/rest/v1/dv_shop_state?${query.toString()}`, {
        headers: buildSupabaseHeaders(config)
    });

    if (!response.ok) {
        const errorBody = (await response.text()).slice(0, 240);
        throw new Error(`Sync GET ${response.status}: ${errorBody}`);
    }

    const rows = await response.json();
    return Array.isArray(rows) ? rows[0] || null : null;
}

function startRemoteSyncPolling() {
    if (syncRuntime.pollTimer) {
        clearInterval(syncRuntime.pollTimer);
        syncRuntime.pollTimer = null;
    }

    if (!getSyncConfig().enabled) {
        return;
    }

    syncRuntime.pollTimer = setInterval(() => {
        if (!document.hidden) {
            pullRemoteState(false);
        }
    }, SYNC_POLL_MS);
}

function scheduleRemoteSync() {
    if (syncRuntime.paused || !getSyncConfig().enabled) {
        return;
    }

    if (syncRuntime.saveTimer) {
        clearTimeout(syncRuntime.saveTimer);
    }

    syncRuntime.saveTimer = setTimeout(() => {
        pushRemoteState(false);
    }, SYNC_PUSH_DEBOUNCE_MS);
}

async function pushRemoteState(manual = false) {
    const config = getSyncConfig();
    if (!config.enabled) {
        if (manual) {
            showToast("Configura Supabase y el hogar antes de sincronizar", 2400);
        }
        renderSyncSettings();
        return false;
    }

    if (syncRuntime.busy) {
        return false;
    }

    syncRuntime.busy = true;
    setSyncStatus("Subiendo cambios a la nube...");

    try {
        const payload = buildPersistedData();
        const updatedAt = payload.lastUpdated || new Date().toISOString();
        const response = await fetch(`${config.supabaseUrl}/rest/v1/dv_shop_state?on_conflict=household_id`, {
            method: "POST",
            headers: {
                ...buildSupabaseHeaders(config),
                Prefer: "resolution=merge-duplicates,return=representation"
            },
            body: JSON.stringify([{
                household_id: config.householdId,
                device_id: syncRuntime.deviceId,
                updated_at: updatedAt,
                payload
            }])
        });

        if (!response.ok) {
            const errorBody = (await response.text()).slice(0, 240);
            throw new Error(`Sync POST ${response.status}: ${errorBody}`);
        }

        const rows = await response.json();
        syncRuntime.lastRemoteUpdatedAt = rows?.[0]?.updated_at || updatedAt;
        renderSyncSettings();
        if (manual) {
            showToast("Lista subida a la nube", 2200);
        }
        return true;
    } catch (error) {
        const debugMessage = error instanceof Error ? error.message : String(error);
        setSyncStatus(`Error al subir: ${debugMessage.slice(0, 140)}`, true);
        if (manual) {
            showToast(`No se pudo subir: ${debugMessage.slice(0, 80)}`, 3200);
        }
        return false;
    } finally {
        syncRuntime.busy = false;
    }
}

async function pullRemoteState(manual = false) {
    const config = getSyncConfig();
    if (!config.enabled) {
        if (manual) {
            showToast("Configura Supabase y el hogar antes de sincronizar", 2400);
        }
        renderSyncSettings();
        return false;
    }

    if (syncRuntime.busy) {
        return false;
    }

    syncRuntime.busy = true;
    setSyncStatus("Leyendo datos de la nube...");

    try {
        const row = await fetchRemoteStateRecord(config);
        if (!row?.payload) {
            setSyncStatus("La nube aun no tiene datos.");
            if (manual) {
                showToast("Aun no hay lista guardada en la nube", 2200);
            }
            return false;
        }

        const localUpdatedAt = Date.parse(buildPersistedData().lastUpdated || 0) || 0;
        const remoteUpdatedAt = Date.parse(row.updated_at || row.payload.lastUpdated || 0) || 0;

        if (!manual && remoteUpdatedAt <= localUpdatedAt) {
            syncRuntime.lastRemoteUpdatedAt = row.updated_at || row.payload.lastUpdated || null;
            renderSyncSettings();
            return false;
        }

        syncRuntime.paused = true;
        applyPersistedData(row.payload, { persistLocal: true });
        syncRuntime.paused = false;
        syncRuntime.lastRemoteUpdatedAt = row.updated_at || row.payload.lastUpdated || null;
        renderSyncSettings();
        if (manual || remoteUpdatedAt > localUpdatedAt) {
            showToast("Lista actualizada desde la nube", 2200);
        }
        return true;
    } catch (error) {
        console.error("Error bajando sync:", error);
        const debugMessage = error instanceof Error ? error.message : String(error);
        setSyncStatus(`Error al leer: ${debugMessage.slice(0, 140)}`, true);
        if (manual) {
            showToast(`No se pudo leer: ${debugMessage.slice(0, 80)}`, 3200);
        }
        return false;
    } finally {
        syncRuntime.paused = false;
        syncRuntime.busy = false;
    }
}

function saveSyncSettings() {
    const supabaseUrl = normalizeSupabaseProjectUrl(document.getElementById("syncSupabaseUrl")?.value || "");
    const supabaseAnonKey = cleanDisplayText(document.getElementById("syncSupabaseAnonKey")?.value || "");
    const householdId = cleanDisplayText(document.getElementById("syncHouseholdId")?.value || "");

    localStorage.setItem(SYNC_CONFIG_KEY, JSON.stringify({
        supabaseUrl,
        supabaseAnonKey,
        householdId
    }));

    renderSyncSettings();
    startRemoteSyncPolling();
    showToast(
        supabaseUrl && supabaseAnonKey && householdId
            ? "Sync guardado. Usa estos mismos datos en el otro dispositivo"
            : "Sync guardado en modo local",
        2600
    );
}

function clearSyncSettings() {
    localStorage.removeItem(SYNC_CONFIG_KEY);
    if (syncRuntime.saveTimer) {
        clearTimeout(syncRuntime.saveTimer);
        syncRuntime.saveTimer = null;
    }
    if (syncRuntime.pollTimer) {
        clearInterval(syncRuntime.pollTimer);
        syncRuntime.pollTimer = null;
    }
    syncRuntime.lastRemoteUpdatedAt = null;
    renderSyncSettings();
    showToast("Sincronizacion en nube desactivada", 2200);
}

function updateCartUI() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cartBadge").textContent = totalItems;
    if (document.getElementById("cartView").classList.contains("active")) {
        renderCart();
    }
    updateStatsInfo();
}

function calculateTotal() {
    return state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function insertIntoCart(product, quantity = 1) {
    const qty = Math.max(1, Number(quantity || 1));
    const name = cleanDisplayText(product.name || "");
    const brand = formatBrandName(product.brand);
    const categoryName = cleanDisplayText(product.categoryName || "");
    const thumbnail = product.thumbnail || "";
    const existing = state.cart.find((item) => String(item.id) === String(product.id));

    if (existing) {
        existing.quantity += qty;
        existing.name = name || existing.name;
        existing.brand = brand || existing.brand;
        if (!existing.thumbnail && thumbnail) existing.thumbnail = thumbnail;
        if (!existing.categoryName && categoryName) existing.categoryName = categoryName;
        return existing;
    }

    const created = {
        id: product.id,
        name,
        brand,
        price: Number(product.price || 0),
        quantity: qty,
        thumbnail,
        categoryName
    };
    state.cart.push(created);
    return created;
}

function commitCartChanges(message) {
    saveToLocalStorage();
    updateCartUI();
    maybeWarnBudgetExceeded();
    if (message) {
        showToast(message);
    }
}

function commitSimulationChanges(message) {
    saveToLocalStorage();
    renderSimulationView();
    if (message) {
        showToast(message);
    }
}

function moveSimulationToCart(productId) {
    const item = state.simulationDraft.find((entry) => String(entry.id) === String(productId));
    if (!item) {
        showToast("Ese producto ya no está en la simulación", 2000);
        return;
    }

    const extraCost = Number(item.price || 0) * Number(item.quantity || 1);
    if (wouldExceedBudget(extraCost)) {
        showToast(`No puedes pasar ${item.name}: superarías tu presupuesto`, 2800);
        return;
    }

    insertIntoCart(item, item.quantity);
    state.simulationDraft = state.simulationDraft.filter((entry) => String(entry.id) !== String(productId));
    commitCartChanges(`${item.name} pasado a la lista`);
    renderSimulationView();
}

function moveAllSimulationToCart() {
    if (!state.simulationDraft.length) {
        showToast("No hay simulacion que pasar a la lista", 2000);
        return;
    }

    let added = 0;
    let blocked = 0;
    const remaining = [];

    state.simulationDraft.forEach((item) => {
        const extraCost = Number(item.price || 0) * Number(item.quantity || 1);
        if (wouldExceedBudget(extraCost)) {
            blocked += 1;
            remaining.push(item);
            return;
        }
        insertIntoCart(item, item.quantity);
        added += 1;
    });

    state.simulationDraft = remaining;
    if (added > 0) {
        commitCartChanges(
            blocked
                ? `${added} productos pasados a la lista y ${blocked} bloqueados por presupuesto`
                : `${added} productos pasados a la lista`
        );
    } else {
        showToast("No se pudo pasar la simulación por presupuesto", 2600);
    }
    renderSimulationView();
}

function renderSimulationView() {
    const container = document.getElementById("simulationContent");
    if (!container) return;

    const proposalItems = getHistoryProposalItems(8);
    const draftItems = state.simulationDraft || [];
    const recentDays = Array.from(new Set(
        state.purchaseLog
            .slice()
            .sort((a, b) => new Date(b.at || 0) - new Date(a.at || 0))
            .map((entry) => entry.day)
    ))
        .slice(0, 6)
        .map((day) => {
            const summary = getPurchaseSummaryByDay(day);
            return {
                day,
                total: summary.total,
                units: summary.units,
                products: summary.items.length
            };
        });
    const lastPurchase = recentDays[0] || null;
    const totalOrders = state.purchaseLog.length;
    const habitualCount = Object.keys(state.purchaseHistory || {}).length;

    container.innerHTML = `
        <div class="history-workspace">
            <div class="history-hero">
                <div>
                    <div class="history-kicker">Historial inteligente</div>
                    <h3><i class="fas fa-clock-rotate-left"></i> Propuesta segun tus tendencias</h3>
                    <p>Reposicion sugerida segun repeticion y habitos.</p>
                </div>
                <div class="history-actions">
                    <button type="button" class="btn-secondary" onclick="switchView('stats')">
                        <i class="fas fa-chart-line"></i> Ver stats
                    </button>
                    <button type="button" class="btn-secondary" onclick="switchView('cart')" ${state.cart.length ? "" : "disabled"}>
                        <i class="fas fa-list-check"></i> Ver lista
                    </button>
                    ${proposalItems.length ? `
                        <button type="button" class="btn-primary" onclick="addAllHistoryProposalToCart()">
                            <i class="fas fa-cart-plus"></i> Pasar propuesta
                        </button>
                    ` : ""}
                </div>
                <div class="history-metrics">
                    <div class="history-metric">
                        <strong>${totalOrders}</strong>
                        <span>compras registradas</span>
                    </div>
                    <div class="history-metric">
                        <strong>${habitualCount}</strong>
                        <span>productos habituales</span>
                    </div>
                    <div class="history-metric">
                        <strong>${proposalItems.length}</strong>
                        <span>sugeridos ahora</span>
                    </div>
                </div>
                ${lastPurchase ? `
                    <div class="history-inline-tools">
                        <button type="button" class="history-tool-btn" onclick="openPurchaseLogModal('${lastPurchase.day}')" aria-label="Ver resumen de la ultima compra">
                            <i class="fas fa-eye"></i>
                            <span>Ver compra</span>
                        </button>
                        <button type="button" class="history-tool-btn" onclick="openPurchaseTicketModal('${lastPurchase.day}')" aria-label="Ver ticket de la ultima compra">
                            <i class="fas fa-receipt"></i>
                            <span>Ver ticket</span>
                        </button>
                    </div>
                ` : ""}
            </div>

            <div class="history-card history-proposal-card">
                <div class="history-card-header">
                    <div>
                        <h3><i class="fas fa-bag-shopping"></i> Propuesta de compra</h3>
                            <p>${proposalItems.length ? "Prioridad por repeticion y cadencia." : "Aun no hay historial suficiente."}</p>
                    </div>
                    <div class="history-chip">${proposalItems.length} sugeridos</div>
                </div>
                ${proposalItems.length ? `
                    <div class="history-proposal-list">
                        ${proposalItems.map((item, index) => `
                            <div class="history-proposal-item">
                                <div class="history-proposal-rank">${index + 1}</div>
                                <div class="history-proposal-main">
                                    <div class="history-proposal-topline">
                                        <div class="history-proposal-title">${escapeHtml(cleanDisplayText(item.name))}</div>
                                    </div>
                                    <div class="history-proposal-meta-line">
                                        ${renderBrandPrefix(item.brand)}${formatCurrency(item.price)} · ${escapeHtml(item.reasonText)}
                                    </div>
                                </div>
                                <div class="history-proposal-side">
                                    <div class="history-chip">${item.suggestedQuantity} uds</div>
                                    <div class="history-proposal-total">${formatCurrency(item.price * item.suggestedQuantity)}</div>
                                    <button type="button" class="btn-primary" onclick="addHistoryProposalToCart('${escapeInlineJsString(String(item.id))}', ${item.suggestedQuantity})">
                                        <i class="fas fa-arrow-right"></i> Pasar
                                    </button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                ` : `
                    <div class="history-empty">
                        Aun no hay suficientes compras repetidas para generar una propuesta fiable.
                    </div>
                `}
            </div>

            ${draftItems.length ? `
                <div class="history-card history-draft-card">
                    <div class="history-card-header">
                        <div>
                            <h3><i class="fas fa-pen-to-square"></i> Borrador manual pendiente</h3>
                            <p>Productos guardados del borrador anterior.</p>
                        </div>
                        <div class="history-actions">
                            <button type="button" class="btn-primary" onclick="moveAllSimulationToCart()">
                                <i class="fas fa-arrow-right"></i> Pasar borrador
                            </button>
                            <button type="button" class="btn-secondary" onclick="clearSimulationDraft()">
                                <i class="fas fa-trash"></i> Limpiar
                            </button>
                        </div>
                    </div>
                    <div class="history-proposal-list">
                        ${draftItems.map((item) => `
                            <div class="history-proposal-item">
                                <div class="history-proposal-main">
                                    <div class="history-proposal-title">${escapeHtml(cleanDisplayText(item.name))}</div>
                                    <div class="stats-muted">${renderBrandPrefix(item.brand)}${formatCurrency(item.price)} · ${item.quantity} uds</div>
                                    <div class="history-proposal-reason">${escapeHtml(item.reason || "Anadido manualmente")}</div>
                                </div>
                                <div class="history-proposal-side">
                                    <button type="button" class="btn-primary" onclick="moveSimulationToCart('${escapeInlineJsString(String(item.id))}')">
                                        <i class="fas fa-arrow-right"></i> Pasar
                                    </button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            ` : ""}
        </div>
    `;
}

function updateStatsInfo() {
    const statsDiv = document.getElementById("statsInfo");
    if (!statsDiv) return;

    const totalProducts = Object.values(productsCache).reduce((sum, arr) => sum + arr.length, 0);
    const totalUnits = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const loadedCategories = Object.keys(productsCache).length;
    const totalCategories = state.categories.length || getCatalogResults().length;
    const habitualCount = Object.keys(state.purchaseHistory).length;

    statsDiv.innerHTML = [
        { icon: "fa-tags", value: totalCategories, label: "Categorias" },
        { icon: "fa-boxes-stacked", value: totalProducts, label: "Cache" },
        { icon: "fa-layer-group", value: loadedCategories, label: "Precargadas" },
        { icon: "fa-list-check", value: totalUnits, label: "En lista" },
        { icon: "fa-repeat", value: habitualCount, label: "Habituales" }
    ].map((item) => `
        <div class="settings-stat-chip">
            <i class="fas ${item.icon}"></i>
            <strong>${item.value}</strong>
            <span>${item.label}</span>
        </div>
    `).join("");

    renderHabitualProducts();
    renderSimulationView();
    renderStats();
}

function exportData() {
    openExportListModal();
}

function exportCatalog() {
    const products = allProductsCache.length
        ? allProductsCache
        : Object.values(productsCache).flat();

    if (!products.length) {
        showToast("Primero pulsa “Precargar todas las categorías” para generar el catálogo", 3500);
        return;
    }

    const payload = {
        appName: "DV Shop",
        version: APP_VERSION,
        exportDate: new Date().toISOString(),
        categories: (state.categories || getCatalogResults()).map((category) => ({
            id: category.id,
            name: category.name,
            categories: (category.categories || []).map((subCategory) => ({
                id: subCategory.id,
                name: subCategory.name
            }))
        })),
        products: products.map((product) => ({
            id: product.id,
            name: product.name,
            description: product.description || "",
            brand: product.brand,
            price: product.price,
            thumbnail: product.thumbnail || null,
            unit: product.unit || "",
            packaging: product.packaging || "",
            categoryId: product.categoryId ?? null,
            categoryName: product.categoryName ?? null
        })),
        purchaseHistory: state.purchaseHistory
    };

    downloadJsonFile(
        payload,
        `dvshop_catalog_${new Date().toISOString().split("T")[0]}.json`,
        `Catálogo exportado: ${products.length} productos`
    );
}

function importData() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json,text/plain,text/csv,.json,.txt,.csv";
    input.onchange = (event) => {
        const file = event.target.files && event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (loadEvent) => {
            const raw = String(loadEvent.target.result || "");
            try {
                const importedData = JSON.parse(raw);
                if (isListTemplatePayload(importedData)) {
                    importListTemplate(importedData);
                    return;
                }

                if (importedData.cart) {
                    state.cart = normalizeImportedCartItems(importedData.cart);
                }

                if (Array.isArray(importedData.simulationDraft)) {
                    state.simulationDraft = importedData.simulationDraft;
                }

                if (Array.isArray(importedData.savedLists)) {
                    state.savedLists = importedData.savedLists;
                }

                if (importedData.budget !== undefined) {
                    const numericBudget = Number(importedData.budget);
                    state.budget = Number.isFinite(numericBudget) && numericBudget > 0 ? numericBudget : null;
                    syncBudgetInputs();
                }

                if (importedData.purchaseHistory && typeof importedData.purchaseHistory === "object") {
                    state.purchaseHistory = importedData.purchaseHistory;
                }

                if (Array.isArray(importedData.purchaseLog)) {
                    state.purchaseLog = importedData.purchaseLog;
                }

                if (importedData.trendOverrides && typeof importedData.trendOverrides === "object") {
                    state.trendOverrides = importedData.trendOverrides;
                }

                if (importedData.priceHistory && typeof importedData.priceHistory === "object") {
                    state.priceHistory = importedData.priceHistory;
                }

                if (importedData.lastPriceRefreshAt) {
                    state.lastPriceRefreshAt = importedData.lastPriceRefreshAt;
                    updatePriceRefreshStatus(`Última actualización diaria: ${new Date(state.lastPriceRefreshAt).toLocaleString("es-ES")}`);
                }

                saveToLocalStorage();
                updateCartUI();
                maybeWarnBudgetExceeded();
                if (document.getElementById("cartView").classList.contains("active")) {
                    renderCart();
                }
                showToast("Datos importados correctamente", 2000);
            } catch (error) {
                const csvItems = parseCsvListText(raw);
                const textItems = csvItems.length ? [] : parseTextList(raw);
                const items = csvItems.length ? csvItems : textItems;
                if (!items.length) {
                    showToast("Error al importar: archivo inválido", 3000);
                    return;
                }
                state.cart = normalizeImportedCartItems(items);
                saveToLocalStorage();
                updateCartUI();
                showToast(`Lista importada: ${state.cart.length} productos`, 2200);
            }
        };

        reader.readAsText(file);
    };

    input.click();
}

function resetAllData() {
    if (!confirm("¿Resetear TODOS los datos? Esto borrará el carrito y la configuración.")) {
        return;
    }

    state.cart = [];
    state.simulationDraft = [];
    state.budget = null;
    state.purchaseHistory = {};
    state.purchaseLog = [];
    state.iconOverrides = {};
    state.groupColorOverrides = {};
    state.trendOverrides = {};
    state.priceHistory = {};
    state.lastPriceRefreshAt = null;
    saveToLocalStorage();
    updateCartUI();
    document.getElementById("budgetInput").value = "";
    document.getElementById("budgetDisplay").textContent = "Sin límite de presupuesto";
    updatePriceRefreshStatus("Pendiente de actualización diaria.");
    if (document.getElementById("cartView").classList.contains("active")) {
        renderCart();
    }
    showToast("Todos los datos han sido reseteados", 2000);
}

async function fetchWithProxy(url) {
    const candidates = [];
    if (typeof location !== "undefined" && location.protocol.startsWith("http")) {
        candidates.push(`${LOCAL_PROXY_URL}${encodeURIComponent(url)}`);
        candidates.push(`${PHP_PROXY_URL}${encodeURIComponent(url)}`);
    }
    candidates.push(`${PROXY_URL}${encodeURIComponent(url)}`);

    let lastError = null;
    for (const candidate of candidates) {
        try {
            const response = await fetch(candidate);
            const text = await response.text();
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${text.slice(0, 120)}`);
            }
            try {
                return JSON.parse(text);
            } catch (error) {
                throw new Error(`Respuesta no JSON: ${text.slice(0, 120)}`);
            }
        } catch (error) {
            lastError = error;
        }
    }

    throw lastError || new Error("Failed to fetch");
}

function buildProductImage(product) {
    if (product.thumbnail) {
        return product.thumbnail;
    }

    if (product.image) {
        return product.image;
    }

    if (product.id) {
        return `https://tienda.mercadona.es/product-images/${product.id}`;
    }

    return PLACEHOLDER_IMAGE;
}

function extractProductsFromResponse(data, categoryId, categoryName) {
    const products = [];
    const sections = Array.isArray(data.categories) ? data.categories : [];

    sections.forEach((section) => {
        (section.products || []).forEach((product) => {
            const normalized = {
                id: product.id,
                name: cleanDisplayText(product.display_name || product.name || ""),
                description: buildRealProductDescription(product),
                brand: formatBrandName(product.brand),
                price: product.price_instructions?.unit_price || 0,
                thumbnail: buildProductImage(product),
                unit: cleanDisplayText(product.price_instructions?.unit_price_description || ""),
                packaging: cleanDisplayText(product.packaging || ""),
                categoryId,
                categoryName: cleanDisplayText(categoryName)
            };

            products.push(normalized);
        });
    });

    return products;
}

function findCategoryById(categoryId) {
    const categories = state.categories.length ? state.categories : getCatalogResults();
    return categories.find((category) => String(category.id) === String(categoryId)) || null;
}

function buildOfficialSearchResults(hits) {
    return (hits || []).map((hit) => {
        const cachedProduct = allProductsCache.find((item) => String(item.id) === String(hit.objectID));
        return {
            id: hit.objectID,
            name: cleanDisplayText(hit.display_name || hit.name || ""),
            description: buildRealProductDescription(hit) || cleanDisplayText(cachedProduct?.description || ""),
            brand: formatBrandName(hit.brand),
            price: (hit.price || 0) / 100,
            thumbnail: cachedProduct?.thumbnail || hit.thumbnail || PLACEHOLDER_IMAGE
        };
    });
}

async function searchOfficialProducts(query, hitsPerPage = 50) {
    const algoliaUrl = "https://7uzjkl1dj0-dsn.algolia.net/1/indexes/*/queries";
    const payload = {
        requests: [
            {
                indexName: "products_prod_mad1_es",
                params: `query=${encodeURIComponent(query)}&hitsPerPage=${hitsPerPage}`
            }
        ]
    };

    const response = await fetch(algoliaUrl, {
        method: "POST",
        headers: {
            "X-Algolia-API-Key": "9d8f2e39e90df472b4f2e559a116fe17",
            "X-Algolia-Application-Id": "7UZJKL1DJ0",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error("Algolia request failed");
    }

    const data = await response.json();
    return buildOfficialSearchResults(data.results?.[0]?.hits || []);
}

function scoreOfficialMatch(candidate, target) {
    const candidateName = normalizeText(candidate.name);
    const candidateBrand = normalizeText(candidate.brand);
    const targetName = normalizeText(target.name);
    const targetBrand = normalizeText(target.brand);

    let score = 0;
    if (String(candidate.id) === String(target.id)) score += 120;
    if (candidateName === targetName) score += 80;
    if (candidateName.includes(targetName) || targetName.includes(candidateName)) score += 35;
    if (targetBrand && candidateBrand === targetBrand) score += 25;
    if (targetBrand && candidateBrand.includes(targetBrand)) score += 10;
    return score;
}

function applyRefreshedProduct(target, refreshed) {
    const matchesTarget = (item) => {
        if (!item) return false;
        return String(item.id) === String(target.id)
            || (
                normalizeText(item.name) === normalizeText(target.name)
                && normalizeText(item.brand || "") === normalizeText(target.brand || "")
            );
    };

    allProductsCache = allProductsCache.map((item) => (
        matchesTarget(item)
            ? { ...item, ...refreshed, id: refreshed.id || item.id, price: refreshed.price, thumbnail: refreshed.thumbnail || item.thumbnail, description: refreshed.description || item.description || "" }
            : item
    ));

    Object.keys(productsCache).forEach((cacheKey) => {
        productsCache[cacheKey] = productsCache[cacheKey].map((item) => (
            matchesTarget(item)
                ? { ...item, ...refreshed, id: refreshed.id || item.id, price: refreshed.price, thumbnail: refreshed.thumbnail || item.thumbnail, description: refreshed.description || item.description || "" }
                : item
        ));
    });

    state.products = state.products.map((item) => (
        matchesTarget(item)
            ? { ...item, ...refreshed, id: refreshed.id || item.id, price: refreshed.price, thumbnail: refreshed.thumbnail || item.thumbnail, description: refreshed.description || item.description || "" }
            : item
    ));

    state.cart = state.cart.map((item) => (
        matchesTarget(item)
            ? {
                ...item,
                id: refreshed.id || item.id,
                name: refreshed.name || item.name,
                brand: refreshed.brand || item.brand,
                price: refreshed.price,
                thumbnail: refreshed.thumbnail || item.thumbnail || "",
                description: refreshed.description || item.description || ""
            }
            : item
    ));

    const existingHistoryKey = String(target.id);
    const currentHistory = state.purchaseHistory[existingHistoryKey];
    if (currentHistory) {
        const updatedHistory = {
            ...currentHistory,
            id: refreshed.id || currentHistory.id,
            name: refreshed.name || currentHistory.name,
            brand: refreshed.brand || currentHistory.brand,
            thumbnail: refreshed.thumbnail || currentHistory.thumbnail || null,
            lastPrice: refreshed.price,
            description: refreshed.description || currentHistory.description || ""
        };
        delete state.purchaseHistory[existingHistoryKey];
        state.purchaseHistory[String(updatedHistory.id)] = updatedHistory;
    }
}

async function refreshDailyPrices(force = false) {
    if (state.loading) {
        return;
    }

    const alreadyUpdatedToday = state.lastPriceRefreshAt && state.lastPriceRefreshAt.startsWith(getTodayKey());
    if (!force && alreadyUpdatedToday) {
        updatePriceRefreshStatus(`Última actualización diaria: ${new Date(state.lastPriceRefreshAt).toLocaleString("es-ES")}`);
        return;
    }

    const targets = [];
    const seen = new Set();
    [...state.cart, ...Object.values(state.purchaseHistory)]
        .sort((a, b) => (b.orders || 0) - (a.orders || 0))
        .forEach((item) => {
            const key = `${normalizeText(item.name)}|${normalizeText(item.brand || "")}`;
            if (item.name && !seen.has(key)) {
                seen.add(key);
                targets.push(item);
            }
        });

    if (!targets.length) {
        state.lastPriceRefreshAt = new Date().toISOString();
        saveToLocalStorage();
        updatePriceRefreshStatus(`Última actualización diaria: ${new Date(state.lastPriceRefreshAt).toLocaleString("es-ES")}`);
        return;
    }

    updatePriceRefreshStatus("Actualizando precios desde tienda online...");
    let refreshedCount = 0;
    const detectedChanges = [];

    for (const target of targets.slice(0, 20)) {
        try {
            const results = await searchOfficialProducts(target.name, 12);
            if (!results.length) continue;
            const bestMatch = results
                .map((candidate) => ({ candidate, score: scoreOfficialMatch(candidate, target) }))
                .sort((a, b) => b.score - a.score)[0];

            if (!bestMatch || bestMatch.score < 35) {
                continue;
            }

            const previousPrice = Number(target.price || target.lastPrice || 0);
            const nextPrice = Number(bestMatch.candidate.price || 0);
            const diff = nextPrice - previousPrice;

            applyRefreshedProduct(target, bestMatch.candidate);
            recordPricePoint(bestMatch.candidate.id, bestMatch.candidate.price);
            refreshedCount += 1;

            if (Number.isFinite(previousPrice) && previousPrice > 0 && Number.isFinite(diff) && diff !== 0) {
                detectedChanges.push({
                    name: cleanDisplayText(bestMatch.candidate.name || target.name || `Producto ${bestMatch.candidate.id}`),
                    from: previousPrice,
                    to: nextPrice,
                    diff
                });
            }
        } catch (error) {
            console.error(`No se pudo actualizar el precio de ${target.name}:`, error);
        }
    }

    state.lastPriceRefreshAt = new Date().toISOString();
    saveToLocalStorage();
    updateCartUI();
    if (document.getElementById("productsView").classList.contains("active")) {
        renderProducts();
    }
    renderStats();
    const refreshMessage = `Última actualización diaria: ${new Date(state.lastPriceRefreshAt).toLocaleString("es-ES")} · ${refreshedCount} productos revisados`;
    const status = document.getElementById("priceRefreshStatus");
    if (status) {
        const details = detectedChanges.slice(0, 4).map((item) => `
            <div class="price-refresh-item">
                <span class="price-refresh-name">${escapeHtml(item.name)}</span>
                <span class="price-refresh-delta ${item.diff > 0 ? "stats-delta-up" : "stats-delta-down"}">
                    ${item.diff > 0 ? "↑" : "↓"} ${formatCurrency(Math.abs(item.diff))}
                </span>
            </div>
        `).join("");
        status.innerHTML = `
            <span>${escapeHtml(refreshMessage)}</span>
            ${details ? `<div class="price-refresh-list">${details}</div>` : ""}
        `;
    } else {
        updatePriceRefreshStatus(refreshMessage);
    }
    if (force || refreshedCount > 0) {
        if (detectedChanges.length === 1) {
            const item = detectedChanges[0];
            showToast(`${item.name} ${item.diff > 0 ? "↑" : "↓"} ${formatCurrency(Math.abs(item.diff))}`, 3000);
        } else if (detectedChanges.length > 1) {
            showToast(`Cambios de precio detectados en ${detectedChanges.length} productos`, 2800);
        } else {
            showToast(`Precios revisados: ${refreshedCount} productos`, 2500);
        }
    }
}

async function fetchLeafCategoryProducts(categoryId, categoryName) {
    if (productsCache[categoryId]) {
        return productsCache[categoryId];
    }

    const data = await fetchWithProxy(`${API_BASE}/categories/${categoryId}/`);
    const products = extractProductsFromResponse(data, categoryId, categoryName);
    productsCache[categoryId] = products;
    mergeProductsIntoGlobalCache(products);
    updateStatsInfo();
    return products;
}

async function fetchCategories() {
    const localCategories = getCatalogResults();
    if (localCategories.length > 0) {
        state.categories = localCategories;
        renderCategories();
        updateCatalogStatus(`Catálogo local cargado: ${localCategories.length} categorías disponibles.`);
        updateStatsInfo();
        return;
    }

    const grid = document.getElementById("categoriesGrid");
    grid.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Conectando con tienda online...</div>';

    try {
        const data = await fetchWithProxy(`${API_BASE}/categories/`);
        state.categories = normalizeCatalogEntries(data.results || []);
        categoriesCache = state.categories;
        renderCategories();
        updateCatalogStatus(`Catálogo remoto cargado: ${state.categories.length} categorías.`);
        showToast("Categorías cargadas correctamente", 1500);
    } catch (error) {
        console.error("Error cargando categorías:", error);
        updateCatalogStatus("No se pudo cargar el catálogo base.");
        grid.innerHTML = `
            <div class="loading" style="grid-column: 1 / -1;">
                <i class="fas fa-exclamation-triangle" style="color: var(--warning);"></i>
                <p>No se pudo conectar con la tienda online</p>
                <p style="font-size: 0.85rem;">Verifica tu conexión a internet</p>
                <button type="button" class="btn-primary" onclick="fetchCategories()" style="margin-top: 16px;">
                    <i class="fas fa-arrow-rotate-right"></i> Reintentar
                </button>
            </div>
        `;
    }
}

async function fetchCategoryProducts(categoryId, categoryName) {
    if (productsCache[categoryId]) {
        return productsCache[categoryId];
    }

    const category = findCategoryById(categoryId);
    const subCategories = category && Array.isArray(category.categories) ? category.categories : [];

    if (subCategories.length > 0) {
        const aggregated = [];
        for (const subCategory of subCategories) {
            const leafProducts = await fetchLeafCategoryProducts(subCategory.id, subCategory.name);
            leafProducts.forEach((product) => {
                aggregated.push({
                    ...product,
                    categoryId,
                    categoryName
                });
            });
        }
        productsCache[categoryId] = aggregated;
        mergeProductsIntoGlobalCache(aggregated);
        updateStatsInfo();
        return aggregated;
    }

    return fetchLeafCategoryProducts(categoryId, categoryName);
}

function renderSubcategories(categoryId, categoryName) {
    const category = findCategoryById(categoryId);
    const grid = document.getElementById("subcategoriesGrid");
    const title = document.getElementById("subcategoriesTitle");
    if (title) {
        title.textContent = categoryName;
    }

    if (!grid) return;
    const subCategories = category && Array.isArray(category.categories) ? category.categories : [];
    const normalizedCategoryName = normalizeText(categoryName);
    const mergedSubCategories = normalizedCategoryName === "mascotas"
        ? (() => {
            const normalizedTargets = new Set(["gato", "otros"]);
            const hasTargets = subCategories.some((entry) => normalizedTargets.has(normalizeText(entry.name)));
            if (!hasTargets) return subCategories;

            const catEntry = subCategories.find((entry) => normalizeText(entry.name) === "gato") || null;
            const otherEntry = subCategories.find((entry) => normalizeText(entry.name) === "otros") || null;
            if (!catEntry || !otherEntry) return subCategories;

            const mergedEntry = {
                id: `${catEntry.id}+${otherEntry.id}`,
                name: "Gato y otros",
                mergedLeafIds: [catEntry.id, otherEntry.id],
                mergedLeafNames: [catEntry.name, otherEntry.name]
            };

            const output = [];
            let injected = false;
            for (const entry of subCategories) {
                const normalized = normalizeText(entry.name);
                if (normalizedTargets.has(normalized)) {
                    if (!injected) {
                        output.push(mergedEntry);
                        injected = true;
                    }
                    continue;
                }
                output.push(entry);
            }
            return output;
        })()
        : subCategories;

    if (!mergedSubCategories.length) {
        grid.innerHTML = '<div class="empty-state">No hay subcategorías disponibles.</div>';
        return;
    }

    const categoryIcon = getIconForCategory(categoryName, "category");
    const categoryFamily = getVisualBlock(categoryName, "category");
    const categoryCardStyle = getBlockCardStyle(categoryFamily, "nested");
    const categoryIconStyle = getBlockIconStyle(categoryFamily);
    grid.innerHTML = `
        <div class="subcategory-card nested-card block-${categoryFamily}" style="${categoryCardStyle}" role="button" tabindex="0"
             onclick="fetchProducts(${categoryId}, '${escapeInlineJsString(categoryName)}')"
             onkeydown="if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); fetchProducts(${categoryId}, '${escapeInlineJsString(categoryName)}'); }">
            <div class="category-icon icon-kind-category icon-family-${categoryFamily}" style="${categoryIconStyle}"><i class="fas ${categoryIcon}"></i></div>
            <div class="category-name">Ver todo</div>
            <div class="subcategory-meta">Productos de todas las subcategorías</div>
        </div>
        ${mergedSubCategories.map((subCategory) => {
            const subCategoryIcon = getIconForCategory(subCategory.name, "subcategory");
            const subCategoryFamily = getVisualBlock(subCategory.name, "subcategory", categoryName);
            const subCategoryCardStyle = getBlockCardStyle(subCategoryFamily, "nested");
            const subCategoryIconStyle = getBlockIconStyle(subCategoryFamily);
            const isMerged = Array.isArray(subCategory.mergedLeafIds) && subCategory.mergedLeafIds.length === 2;
            if (isMerged) {
                const [leftId, rightId] = subCategory.mergedLeafIds;
                const [leftName, rightName] = subCategory.mergedLeafNames || ["", ""];
                return `
            <div class="subcategory-card nested-card block-${subCategoryFamily}" style="${subCategoryCardStyle}" role="button" tabindex="0"
                 onclick="fetchMergedSubcategoryProducts(${categoryId}, '${escapeInlineJsString(categoryName)}', ${leftId}, '${escapeInlineJsString(leftName)}', ${rightId}, '${escapeInlineJsString(rightName)}', '${escapeInlineJsString(subCategory.name)}')"
                 onkeydown="if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); fetchMergedSubcategoryProducts(${categoryId}, '${escapeInlineJsString(categoryName)}', ${leftId}, '${escapeInlineJsString(leftName)}', ${rightId}, '${escapeInlineJsString(rightName)}', '${escapeInlineJsString(subCategory.name)}'); }">
                <div class="category-icon icon-kind-subcategory icon-family-${subCategoryFamily}" style="${subCategoryIconStyle}"><i class="fas ${subCategoryIcon}"></i></div>
                <div class="category-name">${escapeHtml(subCategory.name)}</div>
                <div class="subcategory-meta">Subcategoría</div>
            </div>
        `;
            }
            return `
            <div class="subcategory-card nested-card block-${subCategoryFamily}" style="${subCategoryCardStyle}" role="button" tabindex="0"
                 onclick="fetchSubcategoryProducts(${categoryId}, '${escapeInlineJsString(categoryName)}', ${subCategory.id}, '${escapeInlineJsString(subCategory.name)}')"
                 onkeydown="if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); fetchSubcategoryProducts(${categoryId}, '${escapeInlineJsString(categoryName)}', ${subCategory.id}, '${escapeInlineJsString(subCategory.name)}'); }">
                <div class="category-icon icon-kind-subcategory icon-family-${subCategoryFamily}" style="${subCategoryIconStyle}"><i class="fas ${subCategoryIcon}"></i></div>
                <div class="category-name">${escapeHtml(subCategory.name)}</div>
                <div class="subcategory-meta">Subcategoría</div>
            </div>
        `;
        }).join("")}
    `;
}

async function openCategory(categoryId, categoryName) {
    const category = findCategoryById(categoryId);
    const subCategories = category && Array.isArray(category.categories) ? category.categories : [];

    state.currentCategoryId = categoryId;
    state.currentCategoryName = categoryName;
    state.currentSubcategoryId = null;
    state.currentSubcategoryName = null;
    state.currentCategoryHasSubcategories = subCategories.length > 0;

    if (subCategories.length > 0) {
        renderSubcategories(categoryId, categoryName);
        switchView("subcategories");
        return;
    }

    await fetchProducts(categoryId, categoryName);
}

async function fetchSubcategoryProducts(categoryId, categoryName, subCategoryId, subCategoryName) {
    state.currentCategoryId = categoryId;
    state.currentCategoryName = categoryName;
    state.currentSubcategoryId = subCategoryId;
    state.currentSubcategoryName = subCategoryName;
    state.currentCategoryHasSubcategories = true;

    document.getElementById("productsTitle").textContent = `${categoryName} · ${subCategoryName}`;
    document.getElementById("productsGrid").innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Cargando productos...</div>';

    try {
        state.products = await fetchLeafCategoryProducts(subCategoryId, subCategoryName);
        renderProducts();
        switchView("products");
        showToast(`${state.products.length} productos cargados`, 1500);
    } catch (error) {
        console.error("Error cargando productos:", error);
        document.getElementById("productsGrid").innerHTML = `
            <div class="loading" style="grid-column: 1 / -1;">
                <i class="fas fa-exclamation-triangle" style="color: var(--warning);"></i>
                <p>Error al cargar los productos</p>
                <button type="button" class="btn-primary" onclick="fetchSubcategoryProducts(${categoryId}, '${escapeInlineJsString(categoryName)}', ${subCategoryId}, '${escapeInlineJsString(subCategoryName)}')" style="margin-top: 16px;">
                    <i class="fas fa-arrow-rotate-right"></i> Reintentar
                </button>
            </div>
        `;
    }
}

async function fetchMergedSubcategoryProducts(categoryId, categoryName, leftLeafId, leftLeafName, rightLeafId, rightLeafName, mergedName) {
    state.currentCategoryId = categoryId;
    state.currentCategoryName = categoryName;
    state.currentSubcategoryId = `${leftLeafId}+${rightLeafId}`;
    state.currentSubcategoryName = mergedName;
    state.currentCategoryHasSubcategories = true;

    document.getElementById("productsTitle").textContent = `${categoryName} · ${mergedName}`;
    document.getElementById("productsGrid").innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Cargando productos...</div>';

    const ordered = [Number(leftLeafId), Number(rightLeafId)].filter((value) => Number.isFinite(value)).sort((a, b) => a - b);
    const cacheKey = ordered.length === 2 ? `merged:${ordered[0]}+${ordered[1]}` : `merged:${leftLeafId}+${rightLeafId}`;
    if (mergedProductsCache[cacheKey]) {
        state.products = mergedProductsCache[cacheKey];
        renderProducts();
        switchView("products");
        showToast(`${state.products.length} productos cargados`, 1500);
        return;
    }

    try {
        const [left, right] = await Promise.all([
            fetchLeafCategoryProducts(leftLeafId, leftLeafName),
            fetchLeafCategoryProducts(rightLeafId, rightLeafName)
        ]);

        const merged = [];
        const seen = new Set();
        [...left, ...right].forEach((product) => {
            if (!product || product.id == null) return;
            const key = String(product.id);
            if (seen.has(key)) return;
            seen.add(key);
            merged.push({
                ...product,
                categoryName: mergedName
            });
        });

        mergedProductsCache[cacheKey] = merged;
        state.products = merged;
        renderProducts();
        switchView("products");
        showToast(`${state.products.length} productos cargados`, 1500);
    } catch (error) {
        console.error("Error cargando productos:", error);
        document.getElementById("productsGrid").innerHTML = `
            <div class="loading" style="grid-column: 1 / -1;">
                <i class="fas fa-exclamation-triangle" style="color: var(--warning);"></i>
                <p>Error al cargar los productos</p>
                <button type="button" class="btn-primary" onclick="fetchMergedSubcategoryProducts(${categoryId}, '${escapeInlineJsString(categoryName)}', ${leftLeafId}, '${escapeInlineJsString(leftLeafName)}', ${rightLeafId}, '${escapeInlineJsString(rightLeafName)}', '${escapeInlineJsString(mergedName)}')" style="margin-top: 16px;">
                    <i class="fas fa-arrow-rotate-right"></i> Reintentar
                </button>
            </div>
        `;
    }
}

function goBackToRootCategories() {
    state.currentCategoryId = null;
    state.currentCategoryName = null;
    state.currentSubcategoryId = null;
    state.currentSubcategoryName = null;
    state.currentCategoryHasSubcategories = false;
    switchView("categories");
}

function goBackToVisualBlocks() {
    state.currentVisualBlock = null;
    state.currentCategoryId = null;
    state.currentCategoryName = null;
    state.currentSubcategoryId = null;
    state.currentSubcategoryName = null;
    state.currentCategoryHasSubcategories = false;
    renderCategories();
    switchView("categories");
}

function openVisualBlock(blockId) {
    const block = getVisualBlockDefinition(blockId);
    if (!block) return;

    state.currentVisualBlock = blockId;
    state.currentCategoryId = null;
    state.currentCategoryName = null;
    state.currentSubcategoryId = null;
    state.currentSubcategoryName = null;
    state.currentCategoryHasSubcategories = false;
    renderCategories();
    switchView("categories");
}

async function fetchProducts(categoryId, categoryName) {
    state.currentCategoryId = categoryId;
    state.currentCategoryName = categoryName;
    document.getElementById("productsTitle").textContent = categoryName;
    document.getElementById("productsGrid").innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Cargando productos...</div>';

    try {
        state.products = await fetchCategoryProducts(categoryId, categoryName);
        renderProducts();
        switchView("products");
        showToast(`${state.products.length} productos cargados`, 1500);
    } catch (error) {
        console.error("Error cargando productos:", error);
        document.getElementById("productsGrid").innerHTML = `
            <div class="loading" style="grid-column: 1 / -1;">
                <i class="fas fa-exclamation-triangle" style="color: var(--warning);"></i>
                <p>Error al cargar los productos</p>
                <button type="button" class="btn-primary" onclick="fetchProducts(${categoryId}, '${escapeInlineJsString(categoryName)}')" style="margin-top: 16px;">
                    <i class="fas fa-arrow-rotate-right"></i> Reintentar
                </button>
            </div>
        `;
    }
}

async function preloadAllProducts() {
    if (state.loading) {
        return;
    }

    const categories = state.categories.length ? state.categories : getCatalogResults();
    if (!categories.length) {
        showToast("No hay categorías para precargar");
        return;
    }

    const button = document.getElementById("preloadCatalogBtn");
    state.loading = true;
    if (button) {
        if (!button.dataset.originalHtml) {
            button.dataset.originalHtml = button.innerHTML;
        }
        button.disabled = true;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    }

    updateCatalogStatus(`Precargando catálogo completo (${categories.length} categorías)...`);
    setProgress(0);

    let loaded = 0;
    let totalProducts = 0;
    let failures = 0;

    for (const category of categories) {
        try {
            const products = await fetchCategoryProducts(category.id, category.name);
            totalProducts += products.length;
        } catch (error) {
            failures += 1;
            console.error(`Error precargando ${category.name}:`, error);
        } finally {
            loaded += 1;
            setProgress((loaded / categories.length) * 100);
        }
    }

    state.loading = false;
    if (button) {
        button.disabled = false;
        button.innerHTML = button.dataset.originalHtml || '<i class="fas fa-box-open"></i>';
    }

    hideProgress();
    updateCatalogStatus(
        failures
            ? `Precarga terminada con ${failures} categorías con error. Productos cacheados: ${allProductsCache.length}.`
            : `Precarga completa lista. Productos cacheados: ${allProductsCache.length}.`
    );
    showToast(
        failures
            ? `Precarga terminada: ${totalProducts} productos y ${failures} categorías con error`
            : `Precarga completa: ${totalProducts} productos disponibles`,
        3500
    );
}

async function searchProducts(query) {
    if (!query.trim() || query.length < 2) return;
    const requestId = ++activeSearchRequest;
    const searchResultsDiv = document.getElementById("searchResults");
    searchResultsDiv.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Buscando en tienda online...</div>';

    try {
        const results = await searchOfficialProducts(query, 50);
        if (requestId !== activeSearchRequest) return;

        if (!results.length) {
            searchResultsDiv.innerHTML = '<div class="empty-state">No se encontraron productos.</div>';
            return;
        }

        renderSearchResults(results);
        showToast(`${results.length} resultados encontrados`, 1000);
    } catch (error) {
        console.error("Error en búsqueda:", error);
        if (requestId !== activeSearchRequest) return;

        const localResults = searchInCache(query);
        if (localResults.length > 0) {
            renderSearchResults(localResults);
        } else {
            searchResultsDiv.innerHTML = '<div class="empty-state">Error en la búsqueda. Prueba a precargar el catálogo.</div>';
        }
    }
}

function searchInCache(query) {
    const searchTerm = query.toLowerCase();
    const source = allProductsCache.length ? allProductsCache : Object.values(productsCache).flat();
    return source.filter((product) => {
        const name = (product.name || "").toLowerCase();
        const brand = (product.brand || "").toLowerCase();
        return name.includes(searchTerm) || brand.includes(searchTerm);
    }).slice(0, 60);
}

function getHomeAvailableProducts(limit = 60) {
    const merged = [];
    const seen = new Set();
    const pushUnique = (product) => {
        if (!product || product.id == null) return;
        const key = String(product.id);
        if (seen.has(key)) return;
        const price = Number(product.price || 0);
        if (!Number.isFinite(price) || price <= 0) return;
        seen.add(key);
        merged.push(product);
    };

    const catalogProducts = allProductsCache.length
        ? allProductsCache
        : Object.values(productsCache).flat();

    const habitual = getHabitualProducts(18)
        .map((item) => ({
            id: item.id,
            name: item.name,
            brand: item.brand,
            price: item.lastPrice || item.currentPrice || item.price || 0,
            thumbnail: item.thumbnail || "",
            categoryName: item.categoryName || "",
            description: item.description || ""
        }));

    habitual.forEach(pushUnique);
    catalogProducts.forEach(pushUnique);

    return merged
        .sort((a, b) => cleanDisplayText(a.name || "").localeCompare(cleanDisplayText(b.name || ""), "es"))
        .slice(0, limit);
}

function ensureSavedListNameUnique(name) {
    const base = cleanDisplayText(name || "").trim();
    const fallback = base || "Lista";
    const existing = new Set((state.savedLists || []).map((entry) => normalizeText(entry.name)));
    if (!existing.has(normalizeText(fallback))) return fallback;

    let counter = 2;
    while (existing.has(normalizeText(`${fallback} (${counter})`))) {
        counter += 1;
    }
    return `${fallback} (${counter})`;
}

function promptSaveCurrentList(defaultName = "") {
    if (!state.cart.length) {
        showToast("Tu lista está vacía", 2200);
        return;
    }
    const raw = window.prompt("Nombre de la lista:", defaultName || "Lista");
    if (raw == null) return;
    const name = cleanDisplayText(raw).trim();
    if (!name) {
        showToast("Nombre inválido", 2200);
        return;
    }
    saveCartAsSavedList(name);
}

function promptCreateEmptySavedList(defaultName = "") {
    const raw = window.prompt("Nombre de la lista:", defaultName || "Lista");
    if (raw == null) return;
    const name = cleanDisplayText(raw).trim();
    if (!name) {
        showToast("Nombre inválido", 2200);
        return;
    }
    createEmptySavedList(name);
}

function saveCartAsSavedList(name) {
    const normalized = normalizeText(name);
    const existingIndex = (state.savedLists || []).findIndex((entry) => normalizeText(entry.name) === normalized);
    if (existingIndex >= 0) {
        const overwrite = window.confirm(`Ya existe "${name}". ¿Quieres reemplazarla?`);
        if (!overwrite) return;
    }

    const now = new Date().toISOString();
    const payload = {
        id: existingIndex >= 0 ? state.savedLists[existingIndex].id : `list_${Date.now()}`,
        name: existingIndex >= 0 ? cleanDisplayText(name) : ensureSavedListNameUnique(name),
        updatedAt: now,
        items: state.cart.map((item) => ({
            id: item.id,
            name: item.name,
            brand: item.brand,
            price: item.price,
            thumbnail: item.thumbnail || "",
            categoryName: item.categoryName || "",
            quantity: item.quantity
        }))
    };

    if (existingIndex >= 0) {
        state.savedLists.splice(existingIndex, 1, payload);
    } else {
        state.savedLists.push(payload);
    }

    saveToLocalStorage();
    renderCart();
    showToast(`Lista guardada: ${payload.name}`, 2400);
}

function createEmptySavedList(name) {
    const normalized = normalizeText(name);
    const existingIndex = (state.savedLists || []).findIndex((entry) => normalizeText(entry.name) === normalized);
    if (existingIndex >= 0) {
        const overwrite = window.confirm(`Ya existe "${name}". ¿Quieres reemplazarla?`);
        if (!overwrite) return;
    }

    const now = new Date().toISOString();
    const payload = {
        id: existingIndex >= 0 ? state.savedLists[existingIndex].id : `list_${Date.now()}`,
        name: existingIndex >= 0 ? cleanDisplayText(name) : ensureSavedListNameUnique(name),
        updatedAt: now,
        items: []
    };

    if (existingIndex >= 0) {
        state.savedLists.splice(existingIndex, 1, payload);
    } else {
        state.savedLists.push(payload);
    }

    saveToLocalStorage();
    renderCart();
    showToast(`Lista creada: ${payload.name}`, 2200);
}

function applySavedList(listId) {
    const list = (state.savedLists || []).find((entry) => String(entry.id) === String(listId));
    if (!list) {
        showToast("Lista no encontrada", 2200);
        return;
    }
    if (!Array.isArray(list.items) || !list.items.length) {
        showToast("Lista vacía", 2000);
        return;
    }

    list.items.forEach((item) => {
        insertIntoCart(
            {
                id: item.id,
                name: item.name,
                brand: item.brand,
                price: item.price,
                thumbnail: item.thumbnail || "",
                categoryName: item.categoryName || ""
            },
            item.quantity || 1
        );
    });

    saveToLocalStorage();
    updateCartUI();
    showToast(`Añadido: ${list.name}`, 2200);
}

function deleteSavedList(listId) {
    const index = (state.savedLists || []).findIndex((entry) => String(entry.id) === String(listId));
    if (index < 0) return;
    const name = state.savedLists[index].name;
    const ok = window.confirm(`¿Eliminar "${name}"?`);
    if (!ok) return;
    state.savedLists.splice(index, 1);
    saveToLocalStorage();
    renderCart();
    showToast("Lista eliminada", 2000);
}

function renderCategories() {
    const grid = document.getElementById("categoriesGrid");
    updateCategoriesHeader();

    if (!state.categories.length) {
        grid.innerHTML = '<div class="empty-state">No hay categorías disponibles.</div>';
        return;
    }

    if (!state.currentVisualBlock) {
        const blocksHtml = VISUAL_BLOCKS.map((block) => {
            const categories = getVisualBlockCategories(block.id);
            const totalSubcategories = categories.reduce((sum, category) => sum + ((category.categories || []).length), 0);
            const blockCardStyle = getBlockCardStyle(block.id, "group");
            const blockIconStyle = getBlockIconStyle(block.id);
            return `
        <div class="category-card group-card block-${block.id}" style="${blockCardStyle}"
             onclick="openVisualBlock('${block.id}')"
             role="button"
             tabindex="0"
             onkeydown="if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openVisualBlock('${block.id}'); }">
            <div class="category-icon icon-kind-category icon-family-${block.id}" style="${blockIconStyle}">
                <i class="fas ${block.icon}"></i>
            </div>
            <div class="category-name">${escapeHtml(block.label)}</div>
            <div class="category-meta">${categories.length} categorías · ${totalSubcategories} subcategorías</div>
        </div>
    `;
        }).join("");

        const products = getHomeAvailableProducts(36);
        const productsHtml = products.map((product) => {
            const productName = cleanDisplayText(product.name);
            const productBrand = formatBrandName(product.brand);
            const productDescription = cleanDisplayText(product.description || "");
            const productUnit = cleanDisplayText(product.unit || "");
            const addState = getAddButtonState(product.price);
            return `
        <div class="product-card">
            <img
                src="${product.thumbnail || PLACEHOLDER_IMAGE}"
                class="product-image"
                alt="${escapeHtml(productName)}"
                loading="lazy"
                onerror="this.src='${PLACEHOLDER_IMAGE}'">
            <div class="product-name">${escapeHtml(productName)}</div>
            ${renderBrandDiv(productBrand, "product-brand")}
            ${productDescription ? `<div class="product-description">${escapeHtml(productDescription)}</div>` : ""}
            <div class="product-price">${formatCurrency(product.price)}</div>
            ${productUnit ? `<div class="product-unit">${escapeHtml(productUnit)}</div>` : ""}
            <div class="product-actions">
                <button type="button" class="add-btn ${addState.blocked ? "is-blocked" : ""}" ${addState.blocked ? "disabled" : ""} onclick="addToCart(${product.id}, '${escapeInlineJsString(productName)}', '${escapeInlineJsString(productBrand)}', ${product.price}, '${escapeInlineJsString(product.thumbnail || "")}', '${escapeInlineJsString(cleanDisplayText(product.categoryName || ""))}')">
                    <i class="fas ${addState.icon}"></i> ${addState.label}
                </button>
            </div>
        </div>
    `;
        }).join("");

        grid.innerHTML = blocksHtml + (productsHtml || '<div class="empty-state" style="grid-column: 1 / -1;">Usa Buscar o Precargar catálogo para ver artículos aquí.</div>');
        return;
    }

    const filteredCategories = getVisualBlockCategories(state.currentVisualBlock);
    if (!filteredCategories.length) {
        grid.innerHTML = '<div class="empty-state">No hay categorías disponibles en este grupo.</div>';
        return;
    }

    grid.innerHTML = filteredCategories.map((category) => {
        const blockId = getVisualBlock(category.name, "category");
        const categoryCardStyle = getBlockCardStyle(blockId, "nested");
        const categoryIconStyle = getBlockIconStyle(blockId);
        return `
        <div class="category-card nested-card block-${blockId}" style="${categoryCardStyle}"
             onclick="openCategory(${category.id}, '${escapeInlineJsString(category.name)}')"
             role="button"
             tabindex="0"
             onkeydown="if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openCategory(${category.id}, '${escapeInlineJsString(category.name)}'); }">
            <div class="category-icon icon-kind-category icon-family-${blockId}" style="${categoryIconStyle}">
                <i class="fas ${getIconForCategory(category.name, "category")}"></i>
            </div>
            <div class="category-name">${escapeHtml(category.name)}</div>
            <div class="category-meta">${(category.categories || []).length} subcategorías</div>
        </div>
    `;
    }).join("");
}

function renderProducts() {
    const grid = document.getElementById("productsGrid");

    if (!state.products.length) {
        grid.innerHTML = '<div class="empty-state">No hay productos disponibles en esta categoría.</div>';
        return;
    }

    grid.innerHTML = state.products.map((product) => {
        const productName = cleanDisplayText(product.name);
        const productBrand = formatBrandName(product.brand);
        const productDescription = cleanDisplayText(product.description || "");
        const productUnit = cleanDisplayText(product.unit || "");
        const addState = getAddButtonState(product.price);
        return `
        <div class="product-card">
            <img
                src="${product.thumbnail || PLACEHOLDER_IMAGE}"
                class="product-image"
                alt="${escapeHtml(productName)}"
                loading="lazy"
                onerror="this.src='${PLACEHOLDER_IMAGE}'">
            <div class="product-name">${escapeHtml(productName)}</div>
            ${renderBrandDiv(productBrand, "product-brand")}
            ${productDescription ? `<div class="product-description">${escapeHtml(productDescription)}</div>` : ""}
            <div class="product-price">${formatCurrency(product.price)}</div>
            ${productUnit ? `<div class="product-unit">${escapeHtml(productUnit)}</div>` : ""}
            <div class="product-actions">
                <button type="button" class="simulate-btn" onclick="addProductToSimulation(${product.id}, '${escapeInlineJsString(productName)}', '${escapeInlineJsString(productBrand)}', ${product.price}, '${escapeInlineJsString(product.thumbnail || "")}', '${escapeInlineJsString(cleanDisplayText(product.categoryName || ""))}', true)">
                    <i class="fas fa-wand-magic-sparkles"></i> Simular
                </button>
                <button type="button" class="add-btn ${addState.blocked ? "is-blocked" : ""}" ${addState.blocked ? "disabled" : ""} onclick="addToCart(${product.id}, '${escapeInlineJsString(productName)}', '${escapeInlineJsString(productBrand)}', ${product.price}, '${escapeInlineJsString(product.thumbnail || "")}', '${escapeInlineJsString(cleanDisplayText(product.categoryName || ""))}')">
                    <i class="fas ${addState.icon}"></i> ${addState.label}
                </button>
            </div>
        </div>
    `;
    }).join("");
}

function renderSearchResults(results) {
    const container = document.getElementById("searchResults");
    container.innerHTML = `
        <div style="margin-bottom: 12px; font-weight: bold;">Resultados encontrados: ${results.length}</div>
        <div class="products-grid">
            ${results.map((product) => {
                const productName = cleanDisplayText(product.name);
                const productBrand = formatBrandName(product.brand);
                const productDescription = cleanDisplayText(product.description || "");
                const addState = getAddButtonState(product.price);
                return `
                <div class="product-card">
                    <img
                        src="${product.thumbnail || PLACEHOLDER_IMAGE}"
                        class="product-image"
                        alt="${escapeHtml(productName)}"
                        loading="lazy"
                        onerror="this.src='${PLACEHOLDER_IMAGE}'">
                    <div class="product-name">${escapeHtml(productName)}</div>
                    ${renderBrandDiv(productBrand, "product-brand")}
                    ${productDescription ? `<div class="product-description">${escapeHtml(productDescription)}</div>` : ""}
                    <div class="product-price">${formatCurrency(product.price)}</div>
                    <div class="product-actions">
                        <button type="button" class="simulate-btn" onclick="addProductToSimulation(${product.id}, '${escapeInlineJsString(productName)}', '${escapeInlineJsString(productBrand)}', ${product.price}, '${escapeInlineJsString(product.thumbnail || "")}', '', false); closeSearch();">
                            <i class="fas fa-wand-magic-sparkles"></i> Simular
                        </button>
                        <button type="button" class="add-btn ${addState.blocked ? "is-blocked" : ""}" ${addState.blocked ? "disabled" : ""} onclick="addToCart(${product.id}, '${escapeInlineJsString(productName)}', '${escapeInlineJsString(productBrand)}', ${product.price}, '${escapeInlineJsString(product.thumbnail || "")}', ''); closeSearch();">
                            <i class="fas ${addState.icon}"></i> ${addState.label}
                        </button>
                    </div>
                </div>
            `;
            }).join("")}
        </div>
    `;
}

function renderCart() {
    const container = document.getElementById("cartContent");
    const savedLists = Array.isArray(state.savedLists) ? state.savedLists : [];
    const savedListsSorted = [...savedLists].sort((a, b) =>
        cleanDisplayText(a.name || "").localeCompare(cleanDisplayText(b.name || ""), "es")
    );
    const savedListsPanel = `
        <div class="saved-lists-panel">
            <div class="saved-lists-head">
                <div class="saved-lists-title"><i class="fas fa-bookmark"></i> Listas</div>
                <div class="saved-lists-actions">
                    <button type="button" class="btn-secondary icon-only" onclick="promptCreateEmptySavedList()" aria-label="Crear lista">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button type="button" class="btn-secondary icon-only" onclick="promptSaveCurrentList()" aria-label="Guardar lista actual">
                        <i class="fas fa-floppy-disk"></i>
                    </button>
                </div>
            </div>
            ${savedListsSorted.length ? `
                <div class="saved-lists-grid">
                    ${savedListsSorted.map((entry) => `
                        <div class="saved-list-item">
                            <button type="button" class="saved-list-apply" onclick="applySavedList('${escapeInlineJsString(String(entry.id))}')" aria-label="Cargar ${escapeHtml(entry.name)}">
                                <i class="fas fa-play"></i>
                                <span>${escapeHtml(entry.name)}</span>
                            </button>
                            <button type="button" class="saved-list-delete" onclick="deleteSavedList('${escapeInlineJsString(String(entry.id))}')" aria-label="Eliminar ${escapeHtml(entry.name)}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    `).join("")}
                </div>
            ` : `<div class="saved-lists-empty">Aún no tienes listas guardadas.</div>`}
        </div>
    `;

    if (!state.cart.length) {
        container.innerHTML = `
            ${savedListsPanel}
            <div class="empty-cart">
                <i class="fas fa-list-check"></i>
                <p>Tu lista está vacía</p>
            </div>
        `;
        return;
    }

    const total = calculateTotal();
    const overBudget = state.budget && total > state.budget;
    const suggestions = buildBudgetAdjustmentSuggestions();
    const topSuggestion = suggestions[0] || null;
    const remainingBudget = state.budget ? state.budget - total : null;

    container.innerHTML = `
        ${savedListsPanel}
        <div>
            ${state.cart.map((item, index) => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${escapeHtml(cleanDisplayText(item.name))}</div>
                        <div class="cart-item-brand">${escapeHtml(formatBrandName(item.brand))}</div>
                        <div class="cart-item-price">${formatCurrency(item.price)} · Subtotal: ${formatCurrency(item.price * item.quantity)}</div>
                    </div>
                    <div class="cart-item-actions">
                        <button type="button" class="qty-btn" onclick="updateQuantity(${index}, -1)" aria-label="Reducir cantidad">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span style="min-width: 30px; text-align: center;">${item.quantity}</span>
                        <button type="button" class="qty-btn" onclick="updateQuantity(${index}, 1)" aria-label="Aumentar cantidad">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button type="button" class="delete-btn" onclick="removeFromCart(${index})" aria-label="Eliminar producto">
                            <i class="fas fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            `).join("")}
        </div>
        <div class="cart-summary-card ${overBudget ? "is-over" : ""}">
            <div class="cart-summary-row">
                <span>Total actual</span>
                <strong>${formatCurrency(total)}</strong>
            </div>
            ${state.budget ? `
                <div class="budget-counter ${overBudget ? "over" : ""}">
                    <div class="budget-counter-label">${overBudget ? "Te pasas" : "Te queda"}</div>
                    <div class="budget-counter-value">${formatCurrency(Math.abs(remainingBudget))}</div>
                    <div class="budget-counter-meta">Presupuesto: ${formatCurrency(state.budget)}</div>
                </div>
            ` : ""}
        </div>
        <div class="cart-footer ${overBudget ? "over-budget" : "within-budget"}">
            ${state.budget && overBudget ? `
                <div class="budget-warning ${overBudget ? "over" : "ok"}" role="status" aria-live="polite">
                    <div class="budget-warning-icon">
                        <i class="fas ${overBudget ? "fa-triangle-exclamation" : "fa-circle-check"}"></i>
                    </div>
                    <div>
                        <strong>${overBudget ? "Atención: presupuesto superado" : "Presupuesto OK"}</strong>
                        <div>
                            ${overBudget
                                ? `Te excediste en ${formatCurrency(total - state.budget)}. Revisa la lista antes de finalizar.`
                                : `Te quedan ${formatCurrency(state.budget - total)} para completar tu compra.`}
                        </div>
                    </div>
                </div>
            ` : ""}
            ${overBudget ? `
                <div class="budget-advice">
                    <h4><i class="fas fa-scale-balanced"></i> Qué quitar para ajustarte</h4>
                    ${topSuggestion ? `
                        <div class="budget-top-pick">
                            <strong>Quita primero:</strong> ${escapeHtml(topSuggestion.name)}
                            <span>· ${topSuggestion.quantityToRemove > 1 ? `-${topSuggestion.quantityToRemove} uds` : "-1 ud"} · ahorro ${formatCurrency(topSuggestion.savedAmount)}</span>
                        </div>
                    ` : ""}
                    <p>Criterios objetivos: primero unidades repetidas, después menor salubridad (según categoría/nombre) y, por último, mayor ahorro económico por unidad.</p>
                    <div class="suggestion-list">
                        ${suggestions.map((item, index) => `
                            <div class="suggestion-item">
                                <div class="suggestion-rank">${index + 1}</div>
                                <div class="suggestion-info">
                                    <div class="suggestion-title">${escapeHtml(cleanDisplayText(item.name))}</div>
                                    <div class="suggestion-meta">
                                        ${item.quantityToRemove > 1 ? `Quitar ${item.quantityToRemove} uds` : "Quitar 1 ud"} ·
                                        Salubridad: ${item.healthLabel} ·
                                        ${item.repeatedUnit === 0 ? "Tienes varias unidades en lista" : "Unidad unica"}
                                    </div>
                                </div>
                                <div class="suggestion-saving">Ahorro ${formatCurrency(item.savedAmount)}</div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            ` : ""}
            <button type="button" class="checkout-btn" onclick="checkout()" ${overBudget ? "disabled" : ""}>
                <i class="fas fa-circle-check"></i> Finalizar compra
            </button>
        </div>
    `;
}

function addToCart(id, name, brand, price, thumbnail = "", categoryName = "") {
    const cleanProduct = {
        id,
        name: cleanDisplayText(name),
        brand: formatBrandName(brand),
        price,
        thumbnail: thumbnail || "",
        categoryName: cleanDisplayText(categoryName || "")
    };

    if (wouldExceedBudget(price)) {
        showToast(`No puedes añadir ${cleanProduct.name}: superarías tu presupuesto`, 3000);
        return;
    }

    const item = insertIntoCart(cleanProduct, 1);
    commitCartChanges(
        item.quantity > 1
            ? `${cleanProduct.name} x${item.quantity}`
            : `${cleanProduct.name} anadido a la lista`
    );
}

function updateQuantity(index, change) {
    const newQty = state.cart[index].quantity + change;
    if (newQty <= 0) {
        const removed = state.cart[index];
        state.cart.splice(index, 1);
        showToast(`${removed.name} eliminado`);
    } else {
        state.cart[index].quantity = newQty;
    }

    saveToLocalStorage();
    updateCartUI();
    maybeWarnBudgetExceeded();
}

function removeFromCart(index) {
    const removed = state.cart[index];
    state.cart.splice(index, 1);
    saveToLocalStorage();
    updateCartUI();
    showToast(`${removed.name} eliminado`);
}

function clearCart() {
    if (!confirm("¿Vaciar toda la lista?")) {
        return;
    }

    state.cart = [];
    saveToLocalStorage();
    updateCartUI();
    showToast("Lista vaciada");
}

function checkout() {
    const total = calculateTotal();
    if (!state.cart.length) {
        showToast("No hay productos en la lista");
        return;
    }

    if (state.budget && total > state.budget) {
        showToast(`Has excedido tu presupuesto de ${formatCurrency(state.budget)}`);
        return;
    }

    alert(
        `¡Compra finalizada!\n\n` +
        `Productos: ${state.cart.reduce((sum, item) => sum + item.quantity, 0)}\n` +
        `Total: ${formatCurrency(total)}\n\n` +
        `Gracias por tu compra en DV Shop`
    );

    recordCompletedPurchase();
    state.cart = [];
    saveToLocalStorage();
    updateCartUI();
    switchView("categories");
    showToast("Compra completada con éxito");
}

function saveBudget() {
    const value = parseFloat(document.getElementById("budgetInput").value);
    state.budget = !Number.isNaN(value) && value > 0 ? value : null;
    saveToLocalStorage();
    document.getElementById("budgetDisplay").textContent = state.budget
        ? `Presupuesto actual: ${formatCurrency(state.budget)}`
        : "Sin límite de presupuesto";
    showToast(state.budget ? `Presupuesto: ${formatCurrency(state.budget)}` : "Presupuesto eliminado");
    if (document.getElementById("cartView").classList.contains("active")) {
        renderCart();
    }
    maybeWarnBudgetExceeded();
}

function switchView(view) {
    document.querySelectorAll(".view").forEach((element) => element.classList.remove("active"));
    document.getElementById(`${view}View`).classList.add("active");

    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
    const targetNav = document.querySelector(`.nav-item[data-view="${view}"]`);
    if (targetNav) {
        targetNav.classList.add("active");
    }

    if (view === "cart") {
        renderCart();
    }

    if (view === "categories") {
        renderCategories();
    }

    if (view === "simulation") {
        renderSimulationView();
    }

    if (view === "stats") {
        renderStats();
    }

    if (view === "settings") {
        renderIconOverrideControls();
        renderGroupColorControls();
        renderSyncSettings();
    }

    if (view !== "categories") {
        closeSearch();
    }
}

function goBackToCategories() {
    if (state.currentCategoryHasSubcategories) {
        renderSubcategories(state.currentCategoryId, state.currentCategoryName);
        switchView("subcategories");
        return;
    }
    switchView("categories");
}

function toggleSearch() {
    const searchBar = document.getElementById("searchBar");
    searchBar.classList.toggle("hidden");
    if (!searchBar.classList.contains("hidden")) {
        document.getElementById("searchInput").focus();
    } else {
        document.getElementById("searchResults").innerHTML = "";
        document.getElementById("searchInput").value = "";
    }
}

function closeSearch() {
    document.getElementById("searchBar").classList.add("hidden");
    document.getElementById("searchInput").value = "";
    document.getElementById("searchResults").innerHTML = "";
}

function updateFloatingChrome() {
    const currentY = Math.max(window.scrollY || 0, 0);
    const body = document.body;
    const header = document.querySelector(".header");
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    const delta = currentY - lastScrollY;

    body.classList.toggle("chrome-condensed", currentY > 20);
    if (scrollTopBtn) {
        scrollTopBtn.classList.toggle("hidden", currentY < 220);
    }

    if (header) {
        if (currentY <= 8) {
            headerScrollOffset = 0;
        } else if (delta > 2) {
            headerScrollOffset = -10;
        } else if (delta < -2) {
            headerScrollOffset = 10;
        }
        header.style.transform = `translateY(${headerScrollOffset}px)`;
    }

    lastScrollY = currentY;
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.getElementById("searchInput").addEventListener("input", (event) => {
    const query = event.target.value.trim();
    clearTimeout(searchDebounceTimer);

    if (query.length >= 2) {
        searchDebounceTimer = setTimeout(() => {
            searchProducts(query);
        }, 250);
    } else if (query.length === 0) {
        document.getElementById("searchResults").innerHTML = "";
    } else {
        document.getElementById("searchResults").innerHTML = '<div class="empty-state">Escribe al menos 2 caracteres para buscar.</div>';
    }
});

document.getElementById("searchInput").addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeSearch();
    }
});

document.getElementById("budgetInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        saveBudget();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeShareListModal();
        closePurchaseLogModal();
    }
});

document.addEventListener("visibilitychange", () => {
    if (!document.hidden && getSyncConfig().enabled) {
        pullRemoteState(false);
    }
});

window.addEventListener("scroll", updateFloatingChrome, { passive: true });

document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
        const view = button.getAttribute("data-view");
        if (view) {
            switchView(view);
        }
    });
});

window.fetchCategories = fetchCategories;
window.fetchProducts = fetchProducts;
window.openVisualBlock = openVisualBlock;
window.openCategory = openCategory;
window.goBackToVisualBlocks = goBackToVisualBlocks;
window.fetchSubcategoryProducts = fetchSubcategoryProducts;
window.preloadAllProducts = preloadAllProducts;
window.switchView = switchView;
window.toggleSearch = toggleSearch;
window.closeSearch = closeSearch;
window.goBackToCategories = goBackToCategories;
window.goBackToRootCategories = goBackToRootCategories;
window.addToCart = addToCart;
window.promptSaveCurrentList = promptSaveCurrentList;
window.promptCreateEmptySavedList = promptCreateEmptySavedList;
window.applySavedList = applySavedList;
window.deleteSavedList = deleteSavedList;
window.moveSimulationToCart = moveSimulationToCart;
window.moveAllSimulationToCart = moveAllSimulationToCart;
window.addHistoryProposalToCart = addHistoryProposalToCart;
window.addAllHistoryProposalToCart = addAllHistoryProposalToCart;
window.openCatalogForSimulation = openCatalogForSimulation;
window.setSimulationManualQuery = setSimulationManualQuery;
window.addManualSimulationProduct = addManualSimulationProduct;
window.addProductToSimulation = addProductToSimulation;
window.changeSimulationQuantity = changeSimulationQuantity;
window.removeSimulationItem = removeSimulationItem;
window.clearSimulationDraft = clearSimulationDraft;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.checkout = checkout;
window.saveBudget = saveBudget;
window.exportData = exportData;
window.openExportListModal = openExportListModal;
window.closeExportListModal = closeExportListModal;
window.setExportFormat = setExportFormat;
window.setExportItemStatus = setExportItemStatus;
window.updateExportItemPrice = updateExportItemPrice;
window.downloadExportList = downloadExportList;
window.exportCatalog = exportCatalog;
window.importData = importData;
window.resetAllData = resetAllData;
window.refreshDailyPrices = refreshDailyPrices;
window.setTheme = setTheme;
window.syncGroupColorSelection = syncGroupColorSelection;
window.updateGroupColorPreview = updateGroupColorPreview;
window.saveGroupColorOverride = saveGroupColorOverride;
window.resetCurrentGroupColorOverride = resetCurrentGroupColorOverride;
window.populateIconTargetOptions = populateIconTargetOptions;
window.syncIconSelectionFromTarget = syncIconSelectionFromTarget;
window.selectIconOption = selectIconOption;
window.updateIconSourceMode = updateIconSourceMode;
window.updateIconOverridePreview = updateIconOverridePreview;
window.saveIconOverride = saveIconOverride;
window.deleteCurrentIconOverride = deleteCurrentIconOverride;
window.importIconForTarget = importIconForTarget;
window.importIconOverrides = importIconOverrides;
window.exportIconOverrides = exportIconOverrides;
window.deleteIconOverride = deleteIconOverride;
window.scrollToTop = scrollToTop;
window.openPurchaseLogModal = openPurchaseLogModal;
window.openPurchaseTicketModal = openPurchaseTicketModal;
window.closePurchaseLogModal = closePurchaseLogModal;
window.openShareListModal = openShareListModal;
window.closeShareListModal = closeShareListModal;
window.shareListVia = shareListVia;
window.setShareItemStatus = setShareItemStatus;
window.updateShareItemPrice = updateShareItemPrice;
window.downloadShareTxt = downloadShareTxt;
window.shareTxtFile = shareTxtFile;
window.downloadShareForm = downloadShareForm;
window.shareFormFile = shareFormFile;
window.saveSyncSettings = saveSyncSettings;
window.clearSyncSettings = clearSyncSettings;
window.pushRemoteState = pushRemoteState;
window.pullRemoteState = pullRemoteState;

if ("serviceWorker" in navigator && window.isSecureContext) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js?v=20260611at", { scope: "./" }).catch((error) => {
            console.error("No se pudo registrar el service worker:", error);
        });
    });
}

syncRuntime.deviceId = getOrCreateDeviceId();
loadTheme();
loadFromLocalStorage();
renderSyncSettings();
startRemoteSyncPolling();
updatePriceRefreshStatus(
    state.lastPriceRefreshAt
        ? `Última actualización diaria: ${new Date(state.lastPriceRefreshAt).toLocaleString("es-ES")}`
        : "Pendiente de actualización diaria."
);
renderSimulationView();
renderIconOverrideControls();
renderGroupColorControls();
fetchCategories().finally(() => {
    renderIconOverrideControls();
    renderGroupColorControls();
    renderSyncSettings();
    refreshDailyPrices(false);
});
updateFloatingChrome();
if (getSyncConfig().enabled) {
    pullRemoteState(false);
}
