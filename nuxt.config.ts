export default defineNuxtConfig({
    extends: '@nuxt-themes/docus',
    components: [
        '~/node_modules/element-plus/**/*.vue'
    ],
    css: [
        '~/assets/css/prose-code.css'
    ],
    devtools: {enabled: true},
    modules: ['@nuxt/components', '@nuxt/content', '@element-plus/nuxt'],
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
