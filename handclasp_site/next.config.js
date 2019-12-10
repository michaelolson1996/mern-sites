const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    // cssModules: true,
    exportPathMap: function() {
        return {
            '/': {page: '/'},
            '/donate': {page: '/donate'},
            '/about': {page: '/about'},
            '/contact': {page: '/contact'},
            '/questions': {page: '/questions'},
            '/volunteer': {page: '/volunteer'}
        }
    }
})