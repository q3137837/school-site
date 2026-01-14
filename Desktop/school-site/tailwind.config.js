/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // 👇 关键修改：之前是 src，现在改成 app，这下它就能找到你的代码了！
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 把颜色定义加回来，这样背景色也就有了
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "hsl(var(--border))", // 防止边框报错
      },
    },
  },
  plugins: [],
};