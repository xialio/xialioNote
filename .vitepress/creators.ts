export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: '夏莉欧',
    avatar: '',
    username: 'xialio',
    title: 'xialioNote 原始创作者',
    desc: '动漫绘画、二次元艺术、个人作品集、创意插画',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/xialio' },
      { type: 'linkedin', icon: 'linkedin', link: 'https://www.linkedin.com/in/%E6%8C%AF%E6%9D%B0-%E5%A7%9C-19451810b/' },
      // 可以通过将 SVG 作为字符串传递来添加自定义图标：
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="32px" height="32px"><path d="M 21.9375 6.28125 C 21.394531 6.253906 20.847656 6.292969 20.3125 6.40625 C 19.816406 6.511719 19.488281 7.003906 19.59375 7.5 C 19.699219 7.996094 20.191406 8.324219 20.6875 8.21875 C 22.214844 7.894531 23.878906 8.355469 25 9.59375 C 26.117188 10.835938 26.417969 12.546875 25.9375 14.03125 C 25.78125 14.515625 26.046875 15.03125 26.53125 15.1875 C 27.011719 15.34375 27.53125 15.074219 27.6875 14.59375 C 28.359375 12.503906 27.953125 10.121094 26.375 8.375 C 25.191406 7.066406 23.570313 6.359375 21.9375 6.28125 Z M 13.65625 9.03125 C 11.980469 9.210938 9.640625 10.515625 7.5625 12.59375 C 5.300781 14.859375 4 17.269531 4 19.34375 C 4 23.3125 9.082031 25.71875 14.0625 25.71875 C 20.589844 25.71875 24.9375 21.917969 24.9375 18.90625 C 24.9375 17.085938 23.410156 16.050781 22.03125 15.625 C 21.691406 15.523438 21.449219 15.476563 21.625 15.03125 C 22.007813 14.066406 22.070313 13.21875 21.65625 12.625 C 20.878906 11.511719 18.722656 11.570313 16.28125 12.59375 C 16.28125 12.59375 15.523438 12.953125 15.71875 12.34375 C 16.09375 11.136719 16.023438 10.117188 15.4375 9.53125 C 15.023438 9.117188 14.417969 8.949219 13.65625 9.03125 Z M 21.78125 9.53125 C 21.515625 9.519531 21.261719 9.539063 21 9.59375 C 20.570313 9.683594 20.28125 10.132813 20.375 10.5625 C 20.46875 10.988281 20.886719 11.25 21.3125 11.15625 C 21.824219 11.046875 22.40625 11.210938 22.78125 11.625 C 23.15625 12.039063 23.253906 12.597656 23.09375 13.09375 C 22.960938 13.507813 23.179688 13.957031 23.59375 14.09375 C 24.007813 14.226563 24.460938 14.007813 24.59375 13.59375 C 24.921875 12.578125 24.707031 11.414063 23.9375 10.5625 C 23.363281 9.925781 22.578125 9.566406 21.78125 9.53125 Z M 14.59375 14.8125 C 17.914063 14.929688 20.585938 16.59375 20.8125 18.875 C 21.070313 21.484375 18.066406 23.921875 14.09375 24.3125 C 10.121094 24.703125 6.664063 22.890625 6.40625 20.28125 C 6.148438 17.671875 9.183594 15.234375 13.15625 14.84375 C 13.652344 14.792969 14.121094 14.796875 14.59375 14.8125 Z M 13.03125 16.75 C 11.59375 16.886719 10.242188 17.71875 9.625 18.96875 C 8.789063 20.667969 9.589844 22.570313 11.5 23.1875 C 13.480469 23.824219 15.8125 22.835938 16.625 21 C 17.425781 19.207031 16.425781 17.378906 14.46875 16.875 C 13.996094 16.753906 13.511719 16.703125 13.03125 16.75 Z M 13.9375 18.9375 C 14 18.9375 14.035156 18.945313 14.09375 18.96875 C 14.335938 19.058594 14.445313 19.324219 14.3125 19.5625 C 14.171875 19.800781 13.867188 19.910156 13.625 19.8125 C 13.386719 19.714844 13.304688 19.453125 13.4375 19.21875 C 13.542969 19.042969 13.75 18.941406 13.9375 18.9375 Z M 12.09375 19.5 C 12.261719 19.503906 12.441406 19.527344 12.59375 19.59375 C 13.214844 19.859375 13.410156 20.570313 13.03125 21.1875 C 12.648438 21.800781 11.839844 22.09375 11.21875 21.8125 C 10.609375 21.535156 10.429688 20.816406 10.8125 20.21875 C 11.097656 19.773438 11.59375 19.492188 12.09375 19.5 Z"/></svg>'
        },
        link: 'https://weibo.com/222971230', // 替换为微博链接
        ariaLabel: 'weibo' // 可选，为无障碍添加标签
      }
    ],
    nameAliases: ['xialio', 'kagarinokenn'],
    emailAliases: ['sansuke@a126.com'],
  },
  {
    name: '史努比',
    avatar: 'https://github.com/xialio/xialioNote/blob/main/public/Snoopy1.png?raw=true',
    username: 'Snoopy',
    title: '一只狗狗',
    desc: '有着蓬松的毛发和聪明的眼睛。',
    links: [
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/kagarinokenn' },
      { type: 'github', icon: 'github', link: 'https://github.com/kagarinokennn' },
    ],
    nameAliases: ['dog', 'sinubi', 'Zhenyu'],
    emailAliases: ['2630210869@qq.com'],
  },
  {
    name: 'jackiexiao',
    avatar: '',
    username: 'Jackiexiao',
    title: 'software developer',
    desc: 'yet another programmer',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/jackiexiao' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/realjackiexiao' },
    ],
    nameAliases: ['jackiexiao', 'realjackiexiaoi'],
    emailAliases: ['707610215@qq.com'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
