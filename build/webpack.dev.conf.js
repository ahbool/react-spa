
const utils = require('./utils')
const config = require('./config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    optimization: {
        minimize: false
    },
    devServer: {
        contentBase: utils.resolve(config.buildDirectory),
        allowedHosts: [
            'localhost'
        ],
        port: config.devPort,
        open: true,
        proxy: {
          '/api': {
              target: `http://localhost:7777`,
              changeOrigin: true,
              pathRewrite: function (_path, req) {
                //return _path.replace(/\/api\/.*\/([^?]+)(\?.*)?/, '/api/$1.json')
              }
          }
        }
    }
})
