const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  ({ theme, addBase }) => {
    /** Container margin */
    addBase({
      "*, ::before, ::after": Object.fromEntries(
        Object.entries(theme("screens")).map(([k, v]) => [
          `@media (min-width: ${v})`,
          {
            "--tw-container-margin": `calc((100vw - ${v}) / 2)`,
          },
        ])
      ),
    });
  },
  {
    theme: {
      extend: {
        spacing: {
          "container-margin": "var(--tw-container-margin)",
          /** Extra utilities */
          ...Object.fromEntries(
            Object.entries(defaultTheme.spacing).map(([k, v]) => [
              `container-margin-${k}`,
              `calc(var(--tw-container-margin) + ${v})`,
            ])
          ),
        },
      },
    },
  }
);
