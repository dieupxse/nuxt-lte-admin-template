module.exports = {
  build: {
    vendor: [
      'axios',
      'jquery',
      'vuelidate',
      'vue-notification',
      'vuejs-dialog',
      'vue-croppie',
      'moment'
    ],
    plugins: [
      
    ]
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'VAS DEALER MANAGEMENT SYSTEM',
    bodyAttrs: {
      class: 'hold-transition skin-blue sidebar-mini'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic'}
    ],
    script: [
      {src: '//cdn.ckeditor.com/4.8.0/full/ckeditor.js'},
      //{src: '/js/adminlte.min.js'}
    ]
  },
  plugins: [
    '@/plugins/vuelidate.js',
    //{src: '@/plugins/config-editor.js', ssr:false},
    //{src: '@/plugins/tinymce-editor.js', ssr : false},
    //{src: '@/plugins/ck-editor.js', ssr : false},
    {src: '@/plugins/auth-cookies.js', ssr:false},
    {src: '@/plugins/image-crop.js', ssr:false},
    {src: '@/plugins/vue-confirm.js', ssr:false},
    {src: '@/plugins/theme.js', ssr:false},
    {src: '@/plugins/use-jquery', ssr: false},
    {src: '@/assets/js/adminlte.js', ssr: false},
    {src: '@/node_modules/bootstrap/dist/js/bootstrap.js', ssr: false},
    {src: '@/plugins/vue-notification.js', ssr: false},
    {src: '@/plugins/datetimepicker.js', ssr: false},
    {src: '@/plugins/click-outside.js', ssr: false },
    {src: '@/plugins/vue-mansory.js', ssr: false },
  ],
  modules: [
    '@nuxtjs/router',
    'cookie-universal-nuxt',
    '@nuxtjs/font-awesome'
  ],
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.css',
    '@/assets/css/AdminLTE.css',
    '@/assets/css/skins/skin-blue.css',
    '@/assets/css/style.scss'
   ],
  router: {
    middleware: [
      'check-auth'
    ]
  },
  generate: {
    routes: [
      '/'
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
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
  }
}
