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
              { text: 'Simpulan Logis', link: '/utbk/pu/sl' },
              { text: 'Argumentasi', link: '/utbk/pu/arg' },
              { text: 'Statistik', link: '/utbk/pu/stat' },
              { text: 'Barisan Bilangan', link: '/utbk/pu/bb' },
              { text: 'Aritmatika', link: '/utbk/pu/arit' },
              { text: 'Perbandingan', link: '/utbk/pu/perb' }
            ]
          },
          {
            text: 'Pengetahuan & Pemahaman Umum',
            collapsed: true,
            items: [
              { text: 'Makna', link: '/utbk/ppu/makna' },
              { text: 'Kata', link: '/utbk/ppu/kata' },
              { text: 'Frasa', link: '/utbk/ppu/frasa' },
              { text: 'Kalimat', link: '/utbk/ppu/kalimat' },
              { text: 'Paragraf', link: '/utbk/ppu/paragraf' },
              { text: 'Tujuan', link: '/utbk/ppu/tujuan' },
              { text: 'Bahasa Panda', link: '/utbk/ppu/bp' }
            ]
          },
          {
            text: 'Pemahaman Bacaan & Menulis',
            collapsed: true,
            items: [
              { text: 'Ejaan', link: '/utbk/pbm/ejaan' },
              { text: 'Kata dan Makna', link: '/utbk/pbm/km' },
              { text: 'Konjungsi', link: '/utbk/pbm/konjungsi' },
              { text: 'Kalimat', link: '/utbk/pbm/kalimat' },
              { text: 'Wacana', link: '/utbk/pbm/wacana' }
            ]
          },
          {
            text: 'Pengetahuan Kuantitatif',
            collapsed: true,
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          },
          {
            text: 'Literasi Bahasa Indonesia',
            collapsed: true,
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          },
          {
            text: 'Literasi Bahasa Inggris',
            collapsed: true,
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          },
          {
            text: 'Penalaran Matematika',
            collapsed: true,
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
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
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          },
          {
            text: 'Tes Intelegensi Umum',
            collapsed: true,
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          },
          {
            text: 'Tes Karakteristik Pribadi',
            collapsed: true,
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
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