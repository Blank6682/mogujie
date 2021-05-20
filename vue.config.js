// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            //配置全局scss
            scss: {
                prependData:
                    `@import "./src/style/tools/_sassMagic.scss";
                     @import "./src/style/setting/var.scss";`
            },
        }
    }
}