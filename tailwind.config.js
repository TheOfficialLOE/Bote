module.exports = {
  mode: "jit",
  content: [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        "primary": "#292929",
        "accent": "#FDBE3B",
        "searchBackground": "#333333",
        "searchIcon": "#DBDBDB",
        "textHint": "#7B7B7B",
        "quickActionsBackground": "#2F2D2E",
        "icon": "#A4A4A4",
        "subtitle": "#CECECE",
        "noteSubtitleText": "#FAFAFA",
        "miscellaneous": "#1F1F1F",
        "noteColor1": "#333333",
        "noteColor2": "#FDBE3B",
        "noteColor3": "#FF4842",
        "noteColor4": "#3A52Fc",
        "noteColor5": "#000000",
        "delete": "#FF4842",
      },
    },
  },
  plugins: [],
}
