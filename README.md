# Container Margin TailwindCSS Plugin

## Installation

Install with a package manager:

```bash
# Install via npm
npm install --save-dev tailwindcss-container-margin

# or yarn
yarn add tailwindcss-container-margin --dev

# or pnpm
pnpm add -D tailwindcss-container-margin
```

## Usage

The container margin is the remaining space around the `container`, this plugin provides classes computed from half of the margin.

Example.

```js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("tailwindcss-container-margin"),
    // ...
  ],
};
```

```html
<div class="p-container-margin">...</div>
<section class="-ml-container-margin-4">...</section>
```

Generated CSS:

```css
.p-container-margin {
  padding: var(--tw-container-margin);
}

.-ml-container-margin-4 {
  margin-left: calc(calc(var(--tw-container-margin) + 1rem) * -1);
}
```
