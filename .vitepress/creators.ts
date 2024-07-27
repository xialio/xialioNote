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
   
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
