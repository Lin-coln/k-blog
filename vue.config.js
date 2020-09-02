const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
 
module.exports = {
    outputDir: "build",
    publicPath: './',
    assetsDir: "assets",

    chainWebpack: config => {
        config.resolve.alias.set('@pub', resolve('public'))
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
        // 为生产环境修改配置...
        } else {
        // 为开发环境修改配置...
        
        }
    }
}