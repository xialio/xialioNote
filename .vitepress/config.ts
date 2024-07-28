import process from 'node:process'
import { defineConfig } from 'vitepress'
import MarkdownItFootnote from 'markdown-it-footnote'
import MarkdownItMathjax3 from 'markdown-it-mathjax3'

import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links'
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'
import { buildEndGenerateOpenGraphImages } from '@nolebase/vitepress-plugin-og-image/vitepress'
import { UnlazyImages } from '@nolebase/markdown-it-unlazy-img'

import { discordLink, githubRepoLink, siteDescription, siteName, targetDomain } from '../metadata'
import { creatorNames, creatorUsernames } from './creators'
import { sidebar } from './docsMetadata.json'

export default defineConfig({
  vue: {
    template: {
      transformAssetUrls: {
        video: ['src', 'poster'],
        source: ['src'],
        img: ['src'],
        image: ['xlink:href', 'href'],
        use: ['xlink:href', 'href'],
        NolebaseUnlazyImg: ['src'],
      },
    },
  },
  lang: 'zh-CN',
  title: siteName,
  description: siteDescription,
  ignoreDeadLinks: true,
  head: [
    ['meta', {
      name: 'theme-color',
      content: '#ffffff',
    }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
    ['link', {
      rel: 'icon',
      href: '/logo.svg',
      type: 'image/svg+xml',
    }],
    [
      'link',
      {
        rel: 'alternate icon',
        href: '/favicon.ico',
        type: 'image/png',
        sizes: '16x16',
      },
    ],
    ['meta', {
      name: 'author',
      content: creatorNames.join(', '),
    }],
    [
      'meta',
      {
        name: 'keywords',
        content:
          ['markdown', 'knowledge-base', '知识库', 'vitepress', 'obsidian', 'notebook', 'notes', ...creatorUsernames].join(', '),
      },
    ],

    ['meta', {
      property: 'og:title',
      content: siteName,
    }],
    [
      'meta',
      {
        property: 'og:image',
        content: `${targetDomain}/og.png`,
      },
    ],
    ['meta', {
      property: 'og:description',
      content: siteDescription,
    }],
    ['meta', {
      property: 'og:site_name',
      content: siteName,
    }],

    ['meta', {
      name: 'twitter:card',
      content: 'summary_large_image',
    }],
    ['meta', {
      name: 'twitter:creator',
      content: creatorUsernames.join(', '),
    }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: `${targetDomain}/og.png`,
      },
    ],

    [
      'link',
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#927baf',
      },
    ],
    ['link', {
      rel: 'manifest',
      href: '/site.webmanifest',
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#603cba',
    }],
    // Proxying Plausible through Netlify | Plausible docs
    // https://plausible.io/docs/proxy/guides/netlify
    ['script', { 'defer': 'true', 'data-domain': 'nolebase.ayaka.io', 'data-api': '/api/v1/page-external-data/submit', 'src': '/assets/page-external-data/js/script.js' }],
  ],
  themeConfig: {
    outline: { label: '页面大纲', level: 'deep' },
    darkModeSwitchLabel: '切换主题',
    editLink: {
      pattern: `${githubRepoLink}/tree/main/:path`,
      text: '编辑本页面',
    },
    socialLinks: [
      { icon: 'github', link: githubRepoLink },
      { icon: 'discord', link: discordLink },
      { icon: 'weibo', link: weiboLink },
      { icon: 'weibo', link: 'weiboLink' },
      // 可以通过将 SVG 作为字符串传递来添加自定义图标：
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="32px" height="32px"><path d="M 21.9375 6.28125 C 21.394531 6.253906 20.847656 6.292969 20.3125 6.40625 C 19.816406 6.511719 19.488281 7.003906 19.59375 7.5 C 19.699219 7.996094 20.191406 8.324219 20.6875 8.21875 C 22.214844 7.894531 23.878906 8.355469 25 9.59375 C 26.117188 10.835938 26.417969 12.546875 25.9375 14.03125 C 25.78125 14.515625 26.046875 15.03125 26.53125 15.1875 C 27.011719 15.34375 27.53125 15.074219 27.6875 14.59375 C 28.359375 12.503906 27.953125 10.121094 26.375 8.375 C 25.191406 7.066406 23.570313 6.359375 21.9375 6.28125 Z M 13.65625 9.03125 C 11.980469 9.210938 9.640625 10.515625 7.5625 12.59375 C 5.300781 14.859375 4 17.269531 4 19.34375 C 4 23.3125 9.082031 25.71875 14.0625 25.71875 C 20.589844 25.71875 24.9375 21.917969 24.9375 18.90625 C 24.9375 17.085938 23.410156 16.050781 22.03125 15.625 C 21.691406 15.523438 21.449219 15.476563 21.625 15.03125 C 22.007813 14.066406 22.070313 13.21875 21.65625 12.625 C 20.878906 11.511719 18.722656 11.570313 16.28125 12.59375 C 16.28125 12.59375 15.523438 12.953125 15.71875 12.34375 C 16.09375 11.136719 16.023438 10.117188 15.4375 9.53125 C 15.023438 9.117188 14.417969 8.949219 13.65625 9.03125 Z M 21.78125 9.53125 C 21.515625 9.519531 21.261719 9.539063 21 9.59375 C 20.570313 9.683594 20.28125 10.132813 20.375 10.5625 C 20.46875 10.988281 20.886719 11.25 21.3125 11.15625 C 21.824219 11.046875 22.40625 11.210938 22.78125 11.625 C 23.15625 12.039063 23.253906 12.597656 23.09375 13.09375 C 22.960938 13.507813 23.179688 13.957031 23.59375 14.09375 C 24.007813 14.226563 24.460938 14.007813 24.59375 13.59375 C 24.921875 12.578125 24.707031 11.414063 23.9375 10.5625 C 23.363281 9.925781 22.578125 9.566406 21.78125 9.53125 Z M 14.59375 14.8125 C 17.914063 14.929688 20.585938 16.59375 20.8125 18.875 C 21.070313 21.484375 18.066406 23.921875 14.09375 24.3125 C 10.121094 24.703125 6.664063 22.890625 6.40625 20.28125 C 6.148438 17.671875 9.183594 15.234375 13.15625 14.84375 C 13.652344 14.792969 14.121094 14.796875 14.59375 14.8125 Z M 13.03125 16.75 C 11.59375 16.886719 10.242188 17.71875 9.625 18.96875 C 8.789063 20.667969 9.589844 22.570313 11.5 23.1875 C 13.480469 23.824219 15.8125 22.835938 16.625 21 C 17.425781 19.207031 16.425781 17.378906 14.46875 16.875 C 13.996094 16.753906 13.511719 16.703125 13.03125 16.75 Z M 13.9375 18.9375 C 14 18.9375 14.035156 18.945313 14.09375 18.96875 C 14.335938 19.058594 14.445313 19.324219 14.3125 19.5625 C 14.171875 19.800781 13.867188 19.910156 13.625 19.8125 C 13.386719 19.714844 13.304688 19.453125 13.4375 19.21875 C 13.542969 19.042969 13.75 18.941406 13.9375 18.9375 Z M 12.09375 19.5 C 12.261719 19.503906 12.441406 19.527344 12.59375 19.59375 C 13.214844 19.859375 13.410156 20.570313 13.03125 21.1875 C 12.648438 21.800781 11.839844 22.09375 11.21875 21.8125 C 10.609375 21.535156 10.429688 20.816406 10.8125 20.21875 C 11.097656 19.773438 11.59375 19.492188 12.09375 19.5 Z"/></svg>'
        },
        link: 'weiboLink',
        // 也可以为无障碍添加一个自定义标签 (可选但推荐):
        ariaLabel: 'cool link'
      }
    ],
    footer: {
      message: '用 <span style="color: #e25555;">&#9829;</span> 撰写',
      copyright:
        '<a class="footer-cc-link" target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a> © 2024-2024 PRESENT xialioNote 的创作者们',
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                },
              },
            },
          },
        },

        // Add title ang tags field in frontmatter to search
        // You can exclude a page from search by adding search: false to the page's frontmatter.
        _render(src, env, md) {
          // without `md.render(src, env)`, the some information will be missing from the env.
          let html = md.render(src, env)
          let tagsPart = ''
          let headingPart = ''
          let contentPart = ''
          let fullContent = ''
          const sortContent = () => [headingPart, tagsPart, contentPart] as const
          let { frontmatter, content } = env

          if (!frontmatter)
            return html

          if (frontmatter.search === false)
            return ''

          contentPart = content ||= src

          const headingMatch = content.match(/^#{1} .*/m)
          const hasHeading = !!(headingMatch && headingMatch[0] && headingMatch.index !== undefined)

          if (hasHeading) {
            const headingEnd = headingMatch.index! + headingMatch[0].length
            headingPart = content.slice(0, headingEnd)
            contentPart = content.slice(headingEnd)
          }
          else if (frontmatter.title) {
            headingPart = `# ${frontmatter.title}`
          }

          const tags = frontmatter.tags
          if (tags && Array.isArray(tags) && tags.length)
            tagsPart = `Tags: #${tags.join(', #')}`

          fullContent = sortContent().filter(Boolean).join('\n\n')

          html = md.render(fullContent, env)

          return html
        },
      },
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '笔记', link: '/笔记/' },
      { text: '最近更新', link: '/toc' },
    ],
    sidebar,
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'one-dark-pro',
    },
    math: true,
    config: (md) => {
      md.use(MarkdownItFootnote)
      md.use(MarkdownItMathjax3)
      md.use(BiDirectionalLinks({
        dir: process.cwd(),
      }))
      md.use(UnlazyImages(), {
        imgElementTag: 'NolebaseUnlazyImg',
      })
      md.use(InlineLinkPreviewElementTransform, {
        tag: 'VPNolebaseInlineLinkPreview',
      })
    },
  },
  async buildEnd(siteConfig) {
    await buildEndGenerateOpenGraphImages({
      baseUrl: targetDomain,
      category: {
        byLevel: 2,
      },
    })(siteConfig)
  },
})
