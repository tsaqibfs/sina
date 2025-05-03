import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sina",
  description: "Belajar UTBK & SKD",
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/site.webmanifest"}],
    ['link', { rel: "shortcut icon", href: "/favicon.ico"}]
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    nav: [

      { text: 'Home', link: '/' },
      {
        text: 'Belajar',
        items: [
          { text: 'UTBK', link: '/utbk/' },
          { text: 'SKD', link: '/skd/' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'UTBK',
        items: [
          {
            text: 'Penalaran Umum',
            collapsed: true,
            items: [
              // { text: 'Simpulan Logis', link: '/utbk/pu/sl' }
            ]
          },
          {
            text: 'Pengetahuan & Pemahaman Umum',
            collapsed: true,
            items: [
              // { text: 'Makna', link: '/utbk/ppu/makna' }
            ]
          },
          {
            text: 'Pemahaman Bacaan & Menulis',
            collapsed: true,
            items: [
              // { text: 'Ejaan', link: '/utbk/pbm/ejaan' }
            ]
          },
          {
            text: 'Pengetahuan Kuantitatif',
            collapsed: true,
            items: [
              // { text: 'Markdown Examples', link: '/markdown-examples' }
            ]
          },
          {
            text: 'Literasi Bahasa Indonesia',
            collapsed: true,
            items: [
              // { text: 'Markdown Examples', link: '/markdown-examples' }
            ]
          },
          {
            text: 'Literasi Bahasa Inggris',
            collapsed: true,
            items: [
              // { text: 'Markdown Examples', link: '/markdown-examples' }
            ]
          },
          {
            text: 'Penalaran Matematika',
            collapsed: true,
            items: [
              // { text: 'Markdown Examples', link: '/markdown-examples' }
            ]
          },
        ]
      },
      {
        text: 'SKD',
        items: [
          {
            text: 'Tes Wawasan Kebangsaan',
            collapsed: true,
            items: [
              // { text: 'Markdown Examples', link: '/markdown-examples' }
            ]
          },
          {
            text: 'Tes Intelegensi Umum',
            collapsed: true,
            items: [
              // { text: 'Markdown Examples', link: '/markdown-examples' }
            ]
          },
          {
            text: 'Tes Karakteristik Pribadi',
            collapsed: true,
            items: [
              // { text: 'Markdown Examples', link: '/markdown-examples' }
            ]
          }
        ]
      }
    ],

    footer: {
      message: 'Made with ❤️ by Tsaqib.',
      copyright: 'Copyright © 2025 Sina'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tsaqibfs' }
    ]
  },
  lastUpdated: true
}
)