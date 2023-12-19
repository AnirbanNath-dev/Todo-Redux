/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation : {
        blob : "blob 10s infinite ease-in-out"
      },
      keyframes : {
        blob : {
          "0%":{
            transform : "translate(0 , 0) scale(1)",
          },
          "33%":{
            transform : "translate(30px , -50px) scale(1.2)",
          },
          "66%":{
            transform : "translate(-20px , 20px)scale(0.8)",
          },
          "100%":{
            transform : "translate(0,0) scale(1)",
          }
        }
      }
    },
  },
  plugins: [],
}

