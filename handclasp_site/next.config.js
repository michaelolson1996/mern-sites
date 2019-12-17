const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    exportPathMap: function() {
        return {
            '/': {page: '/'},
            '/donate': {page: '/donate'},
            '/about': {page: '/about', query: 'siami'},
            '/contact': {page: '/contact'},
            '/questions': {page: '/questions'},
            '/volunteer': {page: '/volunteer'},
            '/inprogress': {page: '/inprogress'}
        }
    }
})