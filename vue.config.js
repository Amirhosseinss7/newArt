module.exports = {
    transpileDependencies: ["vuetify"],

    css: {
        loaderOptions: {
            sass: {
                data: ` @import "@/scss/font.scss"`
            }
        }
    },

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: false
      }
    }
};
