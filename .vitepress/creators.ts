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
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/kagarinokenn' },
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
      { type: 'github', icon: 'github', link: 'https://github.com/kagarinokenn' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/sheimeijiecao' },
    ],
    nameAliases: ['dog', 'sinubi'],
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
