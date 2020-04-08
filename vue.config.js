module.exports = {
    publicPath: './',
    devServer: {
        port: 8082,
        proxy: {
            '/jiezi': {
                target: 'http://localhost:8808',
                changeOrigin: true,
                pathRewrite: {
                    '^/jiezi': '/api'
                }
            }
        }
    },
    outputDir: './dist',
    productionSourceMap: false,
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: []
        }
    }
}
