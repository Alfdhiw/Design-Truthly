/** @type {import('tailwindcss').Config} */
export default {
    content: ["../index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          purpleWhite: "#F5F3FF",
          lightBlue: "#60A5FA",
        },
      },
    },
    plugins: [],
  };
  