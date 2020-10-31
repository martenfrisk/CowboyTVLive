module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: [
    'src/**/*.html',
    'src/**/*.js',
    'src/*.js',
    'src/**/*.jsx',
  ]
},
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
