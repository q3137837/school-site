/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // 👇 绝对重点：这里必须是 ./app，这样布局才会生效！
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // 👇 我保留了这些变量定义，这样你的卡片颜色就能正常显示
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        border: "var(--border)",
      },
    },
  },
  plugins: [],
};