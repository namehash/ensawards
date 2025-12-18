/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  safelist: [
    "bg-emerald-600",
    "bg-amber-600",
    "bg-red-600",
    "text-emerald-600",
    "text-amber-600",
    "text-red-600",
  ],
  plugins: [require("@tailwindcss/typography")],
};
