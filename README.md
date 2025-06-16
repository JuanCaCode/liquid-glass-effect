
# 🧊 Liquid Glass Effect

![Version](https://img.shields.io/npm/v/liquid-glass-effect.svg)
![License](https://img.shields.io/npm/l/liquid-glass-effect)
![Minified size](https://img.shields.io/bundlephobia/min/liquid-glass-effect)
![React](https://img.shields.io/badge/React-%5E18.0.0-blue?logo=react)

> ✨ A lightweight React library for applying a dynamic liquid glass visual effect to any HTML element via a simple CSS class — with no external dependencies.


![image](https://github.com/user-attachments/assets/0871e497-7d96-4d2d-907b-7316f9b62326)

<!-- Agregar agradecimiento a lucasromerodb por crear los efectos de svg y los estilos necsarios este es el enlace del repo:-->

## 🙏 Acknowledgements
A special thanks to [Lucas Romero](https://github.com/lucasromerodb/liquid-glass-effect-macos) for creating the original SVG effects and styles that inspired this library. His work laid the foundation for this project, and I am grateful for his contributions to this package. If you find this library useful, please check out his repository for more amazing effects!



---

## 📦 Installation

```bash
npm install liquid-glass-effect
```

Or using Yarn:

```bash
yarn add liquid-glass-effect
```

---

## 🚀 Quick Start

### 1. Wrap your app with the `LiquidGlassProvider`

This enables automatic detection and enhancement of all elements with the `liquid-glass` class.


### 2. Use the class `liquid-glass` anywhere

```tsx
<div
  className="liquid-glass"
  style={{
    borderRadius: '16px',
    overflow: 'hidden',
    border: '2px solid white'
  }}
>
  <p>Content with a liquid glass effect</p>
</div>
```

---

## 🧠 What does `LiquidGlassProvider` do?

- 🕵️ Scans the DOM for elements with the `liquid-glass` class
- 🔄 Dynamically wraps them in a container with layered effects
- 🎨 Copies styles like `border-radius`, `overflow`, `box-shadow`, and more
- 👁️ Uses a `MutationObserver` to handle new dynamic elements in real-time

---

## 🧱 DOM Structure (generated)

```html
<div class="glass__container">
  <div class="glass__effect"></div>
  <div class="glass__color"></div>
  <div class="glass__shine"></div>
  <div class="liquid-glass">Your content here</div>
</div>
```

---

## ✨ Features

- 🌈 Realistic liquid glass effect using `feTurbulence` + `backdrop-filter`
- ⚛️ Fully compatible with React 18+
- 🧩 No third-party dependencies
- 💻 Modern CSS + SVG effects
- 💅 Style encapsulation using pure CSS

---

## 🎨 Style Inheritance

Any inline styles like `border-radius`, `box-shadow`, etc. applied to the `.liquid-glass` element will be inherited by the wrapper and all internal visual layers, preserving your design intent.

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

## 📸 Visual Preview (optional)

> You can add a GIF or screenshot here to showcase the effect. Recommended dimensions: 1200x600

```md
![Liquid Glass Effect Demo](./assets/demo.png)
```

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

> Made with ❤️ by [JuanCaCoder](https://github.com/juancacoder)

<!-- Agregar enlaces a redes sociales de tiktok, instagram, kick, facebook y youtube -->
## 📧 Contact
If you have any questions, suggestions, or just want to say hi, feel free to reach out:
- [TikTok](https://www.tiktok.com/@juancacoder)
- [Instagram](https://www.instagram.com/juancacoder)
- [Kick](https://kick.com/juancacoder)
- [Facebook](https://www.facebook.com/juancacoder)
- [YouTube](https://www.youtube.com/@juancacoder)
- [Email](mailto:juanccampo95@gmail.com)

## 📝 Changelog
For detailed changes, please refer to the [CHANGELOG](./CHANGELOG.md).
