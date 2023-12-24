export default defineNuxtConfig({
    extends: '@nuxt-themes/docus',
    css: [
        '~/assets/css/prose-code.css'
    ],
    devtools: {enabled: true},
    modules: ['@nuxt/content', '@element-plus/nuxt'],
    elementPlus: {
        components:['ElButton']
    },
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
