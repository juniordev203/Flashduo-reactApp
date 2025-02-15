/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./component/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        BeVietNamPro: ["BeVietNamPro-Bold", "sans-serif"],
        "BeVietNamPro-Italic": ["BeVietNamPro-Italic", "sans-serif"],
        "BeVietNamPro-Light": ["BeVietNamPro-Light", "sans-serif"],
        "BeVietNamPro-Medium": ["BeVietNamPro-Medium", "sans-serif"],
        "BeVietNamPro-Regular": ["BeVietNamPro-Regular", "sans-serif"],
        "BeVietNamPro-SemiBold": ["BeVietNamPro-SemiBold", "sans-serif"],
        "BeVietNamPro-ExtraBold": ["BeVietNamPro-ExtraBold", "sans-serif"],   
      },
    },
  },
  plugins: [],
}