module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'learn',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { defer: '', src: '//use.fontawesome.com/releases/v5.0.10/js/all.js', integrity: 'sha384-slN8GvtUJGnv6ca26v8EzVaR9DC58QEwsIk9q1QXdCU8Yu8ck/tL/5szYlBbqmS+', crossorigin: 'anonymous' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'favicon.png' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Amatic+SC:400,700|Open+Sans+Condensed:300,700' }
    ]
  },
  css: [
    '@/assets/css/main.scss',
    '@/assets/css/_override.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#00a077' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    'nuxt-buefy',
 ],
 buefy: { defaultIconPack: 'fas' }
}
