import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        transparent: "var(--color-transparent)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        background1: "var(--color-background1)",
        background2: "var(--color-background2)",
        background3: "var(--color-background3)",
        text: "var(--color-text)",
      },
      fontFamily: {
        heading: "var(--font-heading)",
        body: "var(--font-body)",
      },
      fontSize: {
        paragraph: "var(--font-size-paragraph)",
        subheading: "var(--font-size-subheading)",
        "heading-small": "var(--font-size-heading-small)",
        "heading-medium": "var(--font-size-heading-medium)",
        "heading-large": "var(--font-size-heading-large)",
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        xxl: "var(--spacing-xxl)",
      },
      borderRadius: {
        xs: "var(--border-radius-xs)",
        sm: "var(--border-radius-sm)",
        md: "var(--border-radius-md)",
        lg: "var(--border-radius-lg)",
        xl: "var(--border-radius-xl)",
      },
    },
  },
  plugins: [],
  safelist: [
    ...["primary", "secondary", "tertiary"].flatMap((color) => [
      `bg-${color}`,
      `text-${color}`,
      `border-${color}`,
    ]),
  ],
};
export default config;
