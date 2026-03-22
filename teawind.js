const stylesDictionary = {
    // BACKGROUNDS
    "chai-bg-white": "background-color:white",
    "chai-bg-black": "background-color:black",
    "chai-bg-red": "background-color:red",
    "chai-bg-green": "background-color:green",
    "chai-bg-blue": "background-color:blue",
    "chai-bg-orange": "background-color:orange",
    "chai-bg-yellow": "background-color:yellow",
    "chai-bg-purple": "background-color:purple",
    "chai-bg-pink": "background-color:pink",
    "chai-bg-slate": "background-color: #64748b",
    "chai-bg-subtle-dark": "background-color: #292929",

    // TYPOGRAPHY
    "chai-sans": "font-family: ui-sans-serif, system-ui, sans-serif",
    "chai-serif": "font-family: ui-serif, Georgia, serif",
    "chai-mono": "font-family: ui-monospace, SFMono-Regular, monospace",
    "chai-font-dm-sans": "font-family: 'DM Sans', sans-serif",
    "chai-font-fraunces": "font-family: 'Fraunces', serif",
    "chai-font-fira": "font-family: 'Fira Code', monospace",
    "chai-uppercase": "text-transform: uppercase",
    "chai-lowercase": "text-transform: lowercase",
    "chai-capitalize": "text-transform: capitalize",
    "chai-italic": "font-style: italic",
    "chai-underline": "text-decoration: underline",
    "chai-line-through": "text-decoration: line-through",
    "chai-text-xs": "font-size:12px",
    "chai-text-sm": "font-size:14px",
    "chai-text-md": "font-size:16px",
    "chai-text-lg": "font-size:18px",
    "chai-text-xl": "font-size:20px",
    "chai-text-2xl": "font-size:24px",
    "chai-text-3xl": "font-size:30px",
    "chai-text-4xl": "font-size:36px",
    "chai-text-5xl": "font-size:42px",
    "chai-text-6xl": "font-size:48px",
    "chai-leading-none": "line-height: 1",
    "chai-leading-tight": "line-height: 1.1",
    "chai-leading-snug": "line-height: 1.375",
    "chai-leading-normal": "line-height: 1.5",
    "chai-leading-relaxed": "line-height: 1.625",
    "chai-leading-loose": "line-height: 2",
    "chai-font-thin": "font-weight: 100",
    "chai-font-normal": "font-weight: 400",
    "chai-font-bold": "font-weight: 700",
    "chai-text-left": "text-align: left",
    "chai-text-center": "text-align: center",
    "chai-text-right": "text-align: right",
    "chai-text-justify": "text-align: justify",
    "chai-text-black": "color:black",
    "chai-text-white": "color:white",
    "chai-text-red": "color:red",
    "chai-text-orange": "color:orange",
    "chai-text-yellow": "color:yellow",
    "chai-text-green": "color:green",
    "chai-text-blue": "color:blue",
    "chai-text-purple": "color:purple",
    "chai-text-pink": "color:pink",
    "chai-text-slate": "color: #64748b",

    // BORDERS
    "chai-rounded-xs": "border-radius:2px",
    "chai-rounded-sm": "border-radius:4px",
    "chai-rounded-md": "border-radius:6px",
    "chai-rounded-lg": "border-radius:8px",
    "chai-rounded-xl": "border-radius:12px",
    "chai-rounded-2xl": "border-radius:16px",
    "chai-rounded-3xl": "border-radius:24px",
    "chai-rounded-4xl": "border-radius:32px",
    "chai-border-white": "border-color: white",
    "chai-border-black": "border-color: black",
    "chai-border-red": "border-color: red",
    "chai-border-green": "border-color: green",
    "chai-border-blue": "border-color: blue",
    "chai-border-solid": "border-style: solid",
    "chai-border-dashed": "border-style: dashed",
    "chai-border-dotted": "border-style: dotted",
    "chai-border-none": "border-style: none",

    // LAYOUT UTILITIES
    "chai-block": "display: block",
    "chai-inline-block": "display: inline-block",
    "chai-hidden": "display: none",
    "chai-relative": "position: relative",
    "chai-absolute": "position: absolute",
    "chai-fixed": "position: fixed",
    "chai-overflow-hidden": "overflow: hidden",
    "chai-overflow-auto": "overflow: auto",
    "chai-cursor-pointer": "cursor: pointer",
    "chai-cursor-default": "cursor: default",
    "chai-box-border": "box-sizing: border-box",
    "chai-box-content": "box-sizing: content-box",
    "chai-scroll-smooth": "scroll-behavior: smooth",
    "chai-scroll-auto": "scroll-behavior: auto",

    // EFFECTS
    "chai-shadow-xs": "box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "chai-shadow-sm": "box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
    "chai-shadow-md": "box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
    "chai-shadow-lg": "box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
    "chai-shadow-xl": "box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    "chai-text-shadow-xs": "text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05)",
    "chai-text-shadow-sm": "text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1)",
    "chai-text-shadow-md": "text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)",
    "chai-text-shadow-lg": "text-shadow: 0 10px 15px rgba(0, 0, 0, 0.1)",
    "chai-text-shadow-xl": "text-shadow: 0 20px 25px rgba(0, 0, 0, 0.1)",
    "chai-opacity-0": "opacity: 0",
    "chai-opacity-25": "opacity: 0.25",
    "chai-opacity-50": "opacity: 0.5",
    "chai-opacity-75": "opacity: 0.75",
    "chai-opacity-100": "opacity: 1",

    // FLEXBOX AND GRID
    "chai-flex": "display:flex",
    "chai-grid": "display:grid",
    "chai-flex-row": "flex-direction:row",
    "chai-flex-row-reverse": "flex-direction:row-reverse",
    "chai-flex-column": "flex-direction:column",
    "chai-flex-column-reverse": "flex-direction:column-reverse",
    "chai-justify-start": "justify-content: flex-start",
    "chai-justify-end": "justify-content: flex-end",
    "chai-justify-center": "justify-content: center",
    "chai-justify-between": "justify-content: space-between",
    "chai-justify-around": "justify-content: space-around",
    "chai-justify-evenly": "justify-content: space-evenly",
    "chai-justify-stretch": "justify-content: stretch",
    "chai-justify-items-start": "justify-items: flex-start",
    "chai-justify-items-end": "justify-items: flex-end",
    "chai-justify-items-center": "justify-items: center",
    "chai-justify-items-stretch": "justify-items: stretch",
    "chai-items-start": "align-items: flex-start",
    "chai-items-end": "align-items: flex-end",
    "chai-items-center": "align-items: center",
    "chai-items-stretch": "align-items: stretch",
    "chai-content-center": "align-content: center",
    "chai-content-start": "align-content: flex-start",
    "chai-content-end": "align-content: flex-end",
    "chai-content-between": "align-content: space-between",
    "chai-content-around": "align-content: space-around",
    "chai-content-stretch": "align-content: stretch",
    "chai-flex-wrap": "flex-wrap: wrap",
    "chai-flex-wrap-reverse": "flex-wrap: wrap-reverse",
    "chai-flex-nowrap": "flex-wrap: nowrap",

    // SIZING 
    "chai-w-full": "width: 100%",
    "chai-w-screen": "width: 100vw",
    "chai-h-full": "height: 100%",
    "chai-h-screen": "height: 100vh",
    "chai-mx-auto": "margin-left: auto; margin-right: auto",
}

const dynamicPrefixes = {
    // SPACING
    "chai-p-": "padding",
    "chai-m-": "margin",

    // SIZING
    "chai-w-": "width",
    "chai-h-": "height",

    // BORDERS
    "chai-rounded-": "border-radius",
    "chai-border-w-": "border-width",

    // FLEXBOX & GRID
    "chai-gap-": "gap",
    "chai-flex-": "flex",

};

const palette = {
    red: { light: "#fca5a5", dark: "#991b1b" },
    yellow: { light: "#fef08a", dark: "#854d0e" },
    blue: { light: "#93c5fd", dark: "#1e40af" },
    purple: { light: "#d8b4fe", dark: "#6b21a8" },
    orange: { light: "#fdba74", dark: "#c2410c" },
    green: { light: "#86efac", dark: "#166534" },
    pink: { light: "#f9a8d4", dark: "#be185d" },
    slate: { light: "#cbd5e1", dark: "#334155" }
};


class TeaWind {
    constructor() {
        this.cache = new Map();
        this.prefix = "chai-";
    }

    resolveClass(c) {
        // 1. Instant Cache Return
        if (this.cache.has(c)) {
            return this.cache.get(c);
        }

        let styleToApply = null;

        // 2. Static Dictionary Check
        let style = stylesDictionary[c];
        if (style) {
            styleToApply = style + ";";
        }
        // 3. Dynamic Prefix & Palette Checks
        else {
            let keys = Object.keys(dynamicPrefixes);
            for (let k of keys) {
                if (c.startsWith(k)) {
                    let attribute = dynamicPrefixes[k];
                    let value = c.replace(k, "");
                    const cssValue = isNaN(value) ? value : `${value}px`;
                    styleToApply = `${attribute}: ${cssValue};`;
                    break;
                }
            }

            if (!styleToApply) {
                if (c.startsWith("chai-text-")) {
                    let textColor = c.replace("chai-text-", "");
                    let textColorSplit = textColor.split("-");
                    if (palette[textColorSplit[0]]) {
                        let colorHexCode = palette[textColorSplit[0]][textColorSplit[1]];
                        if (colorHexCode) {
                            styleToApply = `color:${colorHexCode};`;
                        }
                    }
                } else if (c.startsWith("chai-bg-")) {
                    let bgColor = c.replace("chai-bg-", "");
                    let bgColorSplit = bgColor.split("-");
                    if (palette[bgColorSplit[0]]) {
                        let bgHexCode = palette[bgColorSplit[0]][bgColorSplit[1]];
                        if (bgHexCode) {
                            styleToApply = `background-color:${bgHexCode};`;
                        }
                    }
                }
            }
        }

        // 4. Save to Cache & Return
        if (styleToApply) {
            this.cache.set(c, styleToApply);
        } else if (c.startsWith(this.prefix)) {
            console.warn(`🍵 TeaWind: unknown utility class "${c}"`);
        }
        return styleToApply;
    }

    processElement(e) {
        let count = 0;
        const multipleClasses = [...e.classList];
        multipleClasses.forEach(c => {
            if (!c.startsWith(this.prefix)) return;
            const styleString = this.resolveClass(c);
            if (styleString) {
                e.style.cssText += styleString;
                e.classList.remove(c);
                count++;
            }
        });
        if (e.classList.length === 0) e.removeAttribute("class");
        return count;
    }

    // DOM Scanner and Injector
    init() {
        const startTime = performance.now();
        let parsedCount = 0;

        const elements = document.querySelectorAll(`[class*="${this.prefix}"]`);

        elements.forEach(e => {
            parsedCount += this.processElement(e);
        })

        const endTime = performance.now();
        console.log(`🍵 TeaWind initialized in ${(endTime - startTime).toFixed(2)}ms. Processed ${parsedCount} utility classes.`);

        const observer = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType !== 1) return;
                    if (node.className && node.className.includes(this.prefix)) {
                        this.processElement(node);
                    }
                    node.querySelectorAll?.(`[class*="${this.prefix}"]`)
                        .forEach(child => this.processElement(child));
                });
            });
        });
        const targetNode = document.body || document.documentElement;
        observer.observe(targetNode, { childList: true, subtree: true });
    }


}

const _instance = new TeaWind();
if (typeof document !== 'undefined') {
    document.addEventListener("DOMContentLoaded", () => _instance.init());
}

function brew() {
    const engine = new TeaWind();
    engine.init();
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { default: TeaWind, brew };
}
