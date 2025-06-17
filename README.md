# 🧊 React Liquid Glass Effect

![Version](https://img.shields.io/npm/v/react-liquid-glass-effect.svg)
![License](https://img.shields.io/npm/l/react-liquid-glass-effect)
![Minified size](https://img.shields.io/bundlephobia/min/react-liquid-glass-effect)
![React](https://img.shields.io/badge/React-%5E18.0.0-blue?logo=react)

> ✨ A lightweight React library for applying a dynamic liquid glass visual effect to any HTML element via a simple Wrapper — with no external dependencies.

![Liquid Glass Preview](https://github.com/user-attachments/assets/0871e497-7d96-4d2d-907b-7316f9b62326)

## 🙏 Acknowledgements

A special thanks to [Lucas Romero](https://github.com/lucasromerodb/liquid-glass-effect-macos) for creating the original SVG effects and styles that inspired this library.

---

## 📦 Installation

```bash
npm install react-liquid-glass-effect
```

Or using Yarn:

```bash
yarn add react-liquid-glass-effect
```

---

## 🚀 Quick Start

### 1. Wrap your App with the `LiquidGlassProvider`

```tsx
import { LiquidGlassProvider } from 'react-liquid-glass-effect';

const Root = () => (
  <LiquidGlassProvider>
    <App />
  </LiquidGlassProvider>
);
```

### 2. Import the CSS styles

```tsx
import 'react-liquid-glass-effect/dist/react-liquid-glass-effect.css';
```

### 3. Use the `LiquidGlass` wrapper to apply the effect

```tsx
import { LiquidGlass } from 'react-liquid-glass-effect';

const Component = () => (
  <LiquidGlass>
    <p>Content with a liquid glass effect</p>
  </LiquidGlass>
);
```

---

## 🧠 What does `LiquidGlassProvider` do?

- Injects the SVG filter into the DOM.
- Provides global context for the effect.

## 🧠 What does `LiquidGlass` do?

- Wraps your content in a styled container.
- Applies the liquid glass effect via CSS + SVG.

---

## 🧱 Generated DOM Structure

```html
<div class="glass__container">
  <div class="glass__effect"></div>
  <div class="glass__color"></div>
  <div class="glass__shine"></div>
  <div class="glass__content">Your content here</div>
</div>
```

---

## ✨ Features

- 🌈 Realistic glass effect using `feTurbulence` and `backdrop-filter`
- ⚛️ Works with React 18+
- 🧩 No external dependencies
- 💅 Pure CSS and SVG implementation

---

## 🧪 Requirements

- React `^18.0.0` or newer
- Browser support for `backdrop-filter` and SVG filters

---

## 📁 Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [SVG Filters](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter)

---

## 📃 License

[MIT](./LICENSE) © [JuanCaCoder](https://github.com/juancacoder)

---

## 🧑‍💻 Contributing

PRs are welcome! If you have suggestions for improvements or want to help enhance this project, feel free to open an issue or submit a pull request.

---

## 🌐 Useful Resources

- [MDN: backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
- [MDN: SVG Filters](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter)

---

## ⭐ Stay Connected

If you enjoy this library, consider starring the repo, following the creator, or sharing your use case!

---

## 📧 Contact

- [TikTok](https://www.tiktok.com/@juancacoder)
- [Instagram](https://www.instagram.com/juancacoder)
- [Kick](https://kick.com/juancacoder)
- [Facebook](https://www.facebook.com/juancacoder)
- [YouTube](https://www.youtube.com/@juancacoder)
- [Email](mailto:juanccampo95@gmail.com)

## 📝 Changelog

For detailed changes, please refer to the [CHANGELOG](./CHANGELOG.md).
