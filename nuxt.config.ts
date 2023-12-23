export default defineNuxtConfig({
    // https://github.com/nuxt-themes/docus
    extends: '@nuxt-themes/docus',
    css: [
        '~/assets/css/prose-code.css'
    ],
    devtools: {enabled: true},
    modules: ['@nuxt/content'],
    content: {
        highlight: {
            theme: 'dark-plus',
            preload: [
                'c',
                'cpp',
                'java',
                'sql',
                'ts',
                'json',
                'kotlin',
                'css',
                'php'
            ]
        },
    },
})
