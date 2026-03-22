# 🍵 TeaWind CSS

**A lightweight, zero-build, utility-first CSS engine built entirely in Vanilla JavaScript.**

CSS can be incredibly stressful. Centering a div, fighting specificity, and managing massive stylesheets is enough to make anyone pull their hair out.

That's exactly why every class in this library starts with the prefix `chai-`. It's a built-in reminder: whenever you're styling your app and things get overwhelming, take a deep breath, take a sip of **chai (tea)** ☕️, and calm down. We've got the styles covered.


🌐 **Live Demo & Full Documentation:** [Visit the TeaWind Showcase](https://preetmax85.github.io/teawindcss/)
---

##  What is TeaWind?

TeaWind is a Just-In-Time (JIT) CSS engine that runs entirely on the client side in the browser. Instead of writing traditional CSS files, you write simple class names directly in your HTML or JSX (like `chai-bg-red` or `chai-p-20`). TeaWind scans your webpage, translates those classes into perfectly formatted inline styles, and then automatically sweeps the DOM to remove the classes, keeping your markup clean.

---

## ✨ Key Features

- **Blisteringly Fast:** Powered by an intelligent `Map()` caching system. Once a utility is calculated, it's remembered, dropping execution times to roughly ~1 millisecond.
- **Smart Dynamic Values:** Need a specific width? Type `chai-w-42` for pixels, or `chai-w-full` for 100%. TeaWind handles both seamlessly.
- **Multi-Dimensional Palette:** Built-in modern color system with light and dark shades (e.g., `chai-text-blue-dark`, `chai-bg-red-light`).
- ** MutationObserver Powered:** Automatically styles dynamically added elements — perfect for React, Vue, and other frameworks without any extra setup. No `useEffect` needed.
- **Self-Cleaning DOM:** Once TeaWind applies your styles, it removes the original utility classes from your HTML, leaving only clean inline styles.

---

## 📦 Installation

```bash
npm install teawindcss
```

---

## ⚡️ Quick Start

### HTML / Vanilla JS

Just import the package once. TeaWind auto-initializes and processes the entire DOM on load.

```javascript
import 'teawindcss';
```

That's it. Write your classes and TeaWind handles the rest:

```html
<div class="chai-flex chai-justify-center chai-items-center chai-p-16
            chai-bg-slate-dark chai-flex-column chai-shadow-md chai-rounded-lg">
  <h1 class="chai-text-3xl chai-font-bold chai-text-white">Welcome to TeaWind CSS</h1>
  <p class="chai-m-10 chai-text-white">A modern framework with a calming touch.</p>
</div>
```

---

### Manual Control with `brew()`

If you need to manually trigger processing — for example, after injecting HTML dynamically — use the named `brew()` export:

```javascript
import { brew } from 'teawindcss';

// Process all chai- classes in the DOM right now
brew();
```

---

### React Usage

Import TeaWind **once** at the root of your app. Because of the built-in `MutationObserver`, all components — including dynamically rendered ones — are styled automatically. No `useEffect` needed anywhere.

**main.jsx**
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'teawindcss'; // Import once here — done

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**App.jsx**
```jsx
export default function App() {
  return (
    <div className="chai-flex chai-justify-center chai-items-center
                    chai-w-screen chai-h-screen chai-bg-black chai-flex-column">
      <div className="chai-p-32 chai-rounded-xl chai-bg-slate-dark chai-shadow-xl">
        <h1 className="chai-text-4xl chai-font-bold chai-text-white chai-text-center">
          React + TeaWind
        </h1>
        <button className="chai-m-16 chai-p-16 chai-bg-blue-dark chai-text-white
                           chai-rounded-4xl chai-cursor-pointer">
          Click Me
        </button>
      </div>
    </div>
  );
}
```

---

## 📚 Supported Utilities

TeaWind supports **100+ utilities**. Use this as your quick-reference cheat sheet.

---

### 📝 Typography

| Class Name | CSS Equivalent | Description |
|---|---|---|
| `chai-text-xs` to `chai-text-6xl` | `font-size: 12px` to `48px` | Scales text size. Supports `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`. |
| `chai-font-thin` | `font-weight: 100` | Ultra-light text. |
| `chai-font-normal` | `font-weight: 400` | Standard text weight. |
| `chai-font-bold` | `font-weight: 700` | Bold text for emphasis or headings. |
| `chai-text-center` / `left` / `right` / `justify` | `text-align: ...` | Aligns text within its container. |
| `chai-uppercase` / `lowercase` / `capitalize` | `text-transform: ...` | Changes letter casing. |
| `chai-italic` | `font-style: italic` | Italicizes the text. |
| `chai-underline` / `chai-line-through` | `text-decoration: ...` | Adds underline or strikethrough. |
| `chai-sans` / `chai-serif` / `chai-mono` / `chai-fira` / `chai-fraunces` | `font-family: ...` | Applies modern fallback font stacks. |

---

### 🎨 Colors (Text & Background)

Built-in palette: `red`, `blue`, `green`, `yellow`, `orange`, `purple`, `pink`, `slate`, `black`, and `white`. Each palette color supports `-light` and `-dark` variants.

| Class Name | CSS Equivalent | Description |
|---|---|---|
| `chai-bg-blue` | `background-color: blue` | Standard browser blue background. |
| `chai-bg-blue-light` | `background-color: #93c5fd` | Light blue from the TeaWind palette. |
| `chai-bg-blue-dark` | `background-color: #1e40af` | Dark blue from the TeaWind palette. |
| `chai-text-red` | `color: red` | Standard red text. |
| `chai-text-slate-dark` | `color: #334155` | Dark slate text from the TeaWind palette. |

> All 8 palette colors (`red`, `yellow`, `blue`, `purple`, `orange`, `green`, `pink`, `slate`) support both `-light` and `-dark` variants for both `chai-bg-*` and `chai-text-*`.

---

### 📏 Sizing & Spacing (Dynamic)

Pass any number — it converts to pixels automatically. Special string values like `full`, `screen`, and `auto` are also supported.

| Class Name | CSS Equivalent | Description |
|---|---|---|
| `chai-p-24` | `padding: 24px` | 24px of padding. |
| `chai-m-15` | `margin: 15px` | 15px of margin. |
| `chai-mx-auto` | `margin-left: auto; margin-right: auto` | Centers block-level elements. |
| `chai-w-200` | `width: 200px` | Strict pixel width. |
| `chai-w-full` | `width: 100%` | Full width of parent. |
| `chai-w-screen` | `width: 100vw` | Full viewport width. |
| `chai-h-full` / `chai-h-screen` | `height: 100%` / `100vh` | Full height variants. |

---

### 🧱 Layout, Flexbox & Grid

| Class Name | CSS Equivalent | Description |
|---|---|---|
| `chai-flex` / `chai-grid` | `display: flex / grid` | Enables Flexbox or CSS Grid. |
| `chai-block` / `chai-inline-block` | `display: block / inline-block` | Standard block displays. |
| `chai-flex-column` / `chai-flex-row` | `flex-direction: column / row` | Controls flex direction. |
| `chai-flex-wrap` / `chai-flex-nowrap` | `flex-wrap: wrap / nowrap` | Controls flex wrapping. |
| `chai-justify-center` / `between` / `around` / `evenly` | `justify-content: ...` | Spaces items along the main axis. |
| `chai-items-center` / `start` / `end` / `stretch` | `align-items: ...` | Aligns items along the cross axis. |
| `chai-gap-20` | `gap: 20px` | 20px gap between flex/grid children. |
| `chai-flex-1` / `chai-flex-2` | `flex: 1 / 2` | Flex grow values. |
| `chai-absolute` / `chai-relative` / `chai-fixed` / `chai-sticky` | `position: ...` | Element positioning. |
| `chai-hidden` | `display: none` | Hides the element. |

---

### 🌫️ Borders, Radius & Effects

| Class Name | CSS Equivalent | Description |
|---|---|---|
| `chai-rounded-md` | `border-radius: 6px` | Medium rounded corners. Supports `xs` through `4xl`. |
| `chai-border-w-2` | `border-width: 2px` | Dynamic border width. |
| `chai-border-dashed` / `dotted` / `solid` | `border-style: ...` | Border style variants. |
| `chai-border-blue` | `border-color: blue` | Border color. |
| `chai-shadow-lg` | `box-shadow: ...` | Multi-layered drop shadow. Supports `xs` through `xl`. |
| `chai-text-shadow-md` | `text-shadow: ...` | Text shadow. Supports `xs` through `xl`. |
| `chai-opacity-50` | `opacity: 0.5` | 50% transparency. Supports `0`, `25`, `50`, `75`, `100`. |
| `chai-cursor-pointer` | `cursor: pointer` | Pointer cursor for buttons and links. |
| `chai-overflow-hidden` / `chai-overflow-auto` | `overflow: hidden / auto` | Controls element overflow. |

---

## 🔧 Advanced Usage

### Using as a Class (programmatic control)

```javascript
import TeaWind from 'teawindcss';

const engine = new TeaWind();
engine.init(); // scans and processes the DOM
```

### CommonJS

```javascript
const { default: TeaWind, brew } = require('teawindcss');

brew(); // or
const engine = new TeaWind();
engine.init();
```

---
