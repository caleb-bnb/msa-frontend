const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		},
  },
  // devServer: {
  //   proxy: 'http://localhost:10110'
  // },
  // api 로 시작하는 소스 는 traget으로 잡아준다. > 사용할때 url 이 api 가 있어야 한다.
  devServer: {
    port: '8080',
    proxy: {
      '/v1/': {
        target: 'http://localhost:10110/',
        changeOrigin: true
      }
    }
  },
})
