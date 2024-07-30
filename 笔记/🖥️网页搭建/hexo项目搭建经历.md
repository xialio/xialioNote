---
comment: true
tags:
  - hexo
---

# hexo项目搭建经历
## 由来
阅读[如何使用 Hexo 搭建博客 - licyk的小窝](https://licyk.netlify.app/2024/06/26/how-to-deploy-hexo/#%E4%BD%BF%E7%94%A8-Github-Pages)
## 视频教程

[【零成本】Hexo个人博客搭建教程 | 无需服务器](https://www.bilibili.com/video/BV1Ju4m1c7WR?vd_source=3959badcbe10b1f39835643c2f2a72c5)_
建立了基本部署在[Hexo](http://localhost:4000/)页面的hello world页面
## 主题优化
[Themes | Hexo](https://hexo.io/themes/)
#### Edinburgh 
·1· [sharvaridesai/hexo-theme-edinburgh: Beautiful minimal portfolio theme for Hexo. (github.com)](https://github.com/sharvaridesai/hexo-theme-edinburgh)
搭建了 主题，但是提交相关文章md页面不起作用
```
# Hexo Configuration ## Docs: https://hexo.io/docs/configuration.html ## Source: https://github.com/hexojs/hexo/ # Site title: Hexo subtitle: '' description: '' keywords: author: John Doe language: en timezone: '' # URL ## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project' url: http://example.com permalink: :year/:month/:day/:title/ permalink_defaults: pretty_urls: trailing_index: true # Set to false to remove trailing 'index.html' from permalinks trailing_html: true # Set to false to remove trailing '.html' from permalinks # Directory source_dir: source public_dir: public tag_dir: tags archive_dir: archives category_dir: categories code_dir: downloads/code i18n_dir: :lang skip_render: # Writing new_post_name: :title.md # File name of new posts default_layout: post titlecase: false # Transform title into titlecase external_link: enable: true # Open external links in new tab field: site # Apply to the whole site exclude: '' filename_case: 0 render_drafts: false post_asset_folder: false relative_link: false future: true syntax_highlighter: highlight.js highlight: line_number: true auto_detect: false tab_replace: '' wrap: true hljs: false prismjs: preprocess: true line_number: true tab_replace: '' # Home page setting # path: Root path for your blogs index page. (default = '') # per_page: Posts displayed per page. (0 = disable pagination) # order_by: Posts order. (Order by date descending by default) index_generator: path: '' per_page: 10 order_by: -date # Category & Tag default_category: uncategorized category_map: tag_map: # Metadata elements ## https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta meta_generator: true # Date / Time format ## Hexo uses Moment.js to parse and display date ## You can customize the date format as defined in ## http://momentjs.com/docs/#/displaying/format/ date_format: YYYY-MM-DD time_format: HH:mm:ss ## updated_option supports 'mtime', 'date', 'empty' updated_option: 'mtime' # Pagination ## Set per_page to 0 to disable pagination per_page: 10 pagination_dir: page # Include / Exclude file(s) ## include:/exclude: options only apply to the 'source/' folder include: exclude: ignore: # Extensions ## Plugins: http://hexo.io/plugins/ ## Themes: http://hexo.io/themes/ theme: edinburgh # Header menu: About: /about Contact: /contact Pixiv: https://www.pixiv.net/users/5623285 Instagram: https://www.instagram.com/sheimeijiecao/ LinkedIn: https://www.linkedin.com/in/%E6%8C%AF%E6%9D%B0-%E5%A7%9C-19451810b/ GitHub: https://github.com/xialio/ # Google Analytics Tracking ID google_analytics: G-50MQEP1J8V # Deployment ## Docs: https://hexo.io/docs/one-command-deployment deploy: type: git repository: https://github.com/xialio/xialio.github.io.git branch: main 翻译 并告诉我如何填写

![GPT](https://files.oaiusercontent.com/file-hbxowtiyxew901FywZXTcb4V?se=2124-03-22T16%3A51%3A30Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D1209600%2C%20immutable&rscd=attachment%3B%20filename%3Dlogo-brighter.png&sig=d/1A/B6wbaTwAWj2ZuPziepcTlEt6UaqNaJhXsY9DrU%3D)

要翻译 Hexo 配置文件并指导您如何填写，请参考以下内容：

yaml

复制代码

`# 站点 title: Hexo subtitle: '' description: '' keywords: author: John Doe language: zh timezone: ''  # URL ## 在这里设置您的网站 URL。例如，如果您使用 GitHub Page，将 URL 设置为 'https://username.github.io/project' url: http://example.com permalink: :year/:month/:day/:title/ permalink_defaults: pretty_urls:   trailing_index: true # 设置为 false 以从永久链接中删除末尾的 'index.html'   trailing_html: true # 设置为 false 以从永久链接中删除末尾的 '.html'  # 目录 source_dir: source public_dir: public tag_dir: tags archive_dir: archives category_dir: categories code_dir: downloads/code i18n_dir: :lang skip_render:  # 写作 new_post_name: :title.md # 新文章的文件名 default_layout: post titlecase: false # 将标题转换为标题大小写 external_link:   enable: true # 在新标签页中打开外部链接   field: site # 应用于整个站点   exclude: '' filename_case: 0 render_drafts: false post_asset_folder: false relative_link: false future: true syntax_highlighter: highlight.js highlight:   line_number: true   auto_detect: false   tab_replace: ''   wrap: true   hljs: false prismjs:   preprocess: true   line_number: true   tab_replace: ''  # 主页设置 # path: 博客首页的根路径。(默认 = '') # per_page: 每页显示的文章数量。(0 = 禁用分页) # order_by: 文章排序。(默认按日期降序) index_generator:   path: ''   per_page: 10   order_by: -date  # 分类和标签 default_category: uncategorized category_map: tag_map:  # 元数据元素 ## https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta meta_generator: true  # 日期 / 时间格式 ## Hexo 使用 Moment.js 来解析和显示日期 ## 您可以自定义日期格式，详见 ## http://momentjs.com/docs/#/displaying/format/ date_format: YYYY-MM-DD time_format: HH:mm:ss ## updated_option 支持 'mtime', 'date', 'empty' updated_option: 'mtime'  # 分页 ## 设置 per_page 为 0 以禁用分页 per_page: 10 pagination_dir: page  # 包含 / 排除文件 ## include:/exclude: 选项仅适用于 'source/' 文件夹 include: exclude: ignore:  # 扩展 ## 插件: http://hexo.io/plugins/ ##`
```
#### 计划搭建主题
[flex-block](https://github.com/miiiku/hexo-theme-flexblock)
参考由来部分
### 页面其他代码
[前言 |妖怪 (hexo.io)](https://hexo.io/docs/front-matter.html)

## 部署

[Sign up | Netlify](https://app.netlify.com/signup)

GitHub pages


