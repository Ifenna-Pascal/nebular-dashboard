import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clashDisplay: ['clashDisplay', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        light: {
          10: '#FFFFFF1A',
          15: '#FFFFFF26',
          50: '#FFFFFF80',
          70: '#FFFFFFB2'
        },
        dark: {
          200: '#010510'
        },
        blue: {
          100: '#5457DC'
        }
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #5356E0, #6868AE)',
        'dark-gradient': 'linear-gradient(to bottom, #01051000 0%, #010510 100%)',
      }
    },
  },
  plugins: [],
};
export default config;
