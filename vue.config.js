const { defineConfig } = require('@vue/cli-service');

const NODE_ENV = process.env.NODE_ENV === 'development'
  ? 'development'
  : 'production';

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: NODE_ENV === 'production',
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/style/config/${NODE_ENV}.scss";`
      },
    }
  }
})
