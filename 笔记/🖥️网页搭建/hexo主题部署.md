---
tags:
  - hexo
---

# hexo主题

[Hexo Aurora Docs | Hexo Aurora Docs (tridiamond.tech)](https://aurora.tridiamond.tech/cn/)在
[三钻 Benny X Guo | 三钻 Benny X Guo](https://blog.bennyxguo.com/)
页面

## 目前问题

首页 语言设置cn会hexo g报错

> 留言栏 黑色 更多及链接菜单黑色，
> 不显示文字

页尾备案代码留空依旧显示
个人页面图标引用不成功
hexo的页面添加图片好麻烦



# GitHub Action

hexo d 命令git 上传的像是输出html网页
另一个hexo项目应该是直接配置了源码
```
name: Build Hexo Pages

on:
  push:
    branches:
      - main # 默认分支

jobs:
  pages:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js 20.4.0 # 配置 NodeJs
        uses: actions/setup-node@v2
        with:
          node-version: "16"
      - name: Cache NPM dependencies # 安装 Npm 依赖
        uses: actions/cache@v2
        with:
          path: node_modules
          key: ${{ runner.OS }}-npm-cache
          restore-keys: |
            ${{ runner.OS }}-npm-cache
      - name: Install Dependencies # 安装 Hexo 依赖
        run: npm install
      - name: Build # 构建 Hexo 环境
        run: npm run build
      #- name: Deploy # 部署到当前项目的网页上
      #  uses: peaceiris/actions-gh-pages@v3
      #  with:
      #    github_token: ${{ secrets.GITHUB_TOKEN }}
      #    publish_dir: ./public
      - name: Configure Git # 配置 Git, 用于把网页推送到另一个项目上
        env:
          DEPLOY_PRI: ${{secrets.DEPLOY_PRI}} # 这里就是刚刚配置的私钥了
          GIT_USERNAME: xialio # Github 用户名，这里用了 Actions 自带的变量
          GIT_EMAIL: a1356281880@hotmail.com # 邮箱, 可以写自己的邮箱
        run: |
          sudo timedatectl set-timezone "Asia/Shanghai"
          mkdir -p ~/.ssh/
          echo "$DEPLOY_PRI" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan github.com >> ~/.ssh/known_hosts
          git config --global user.name '$DEPLOY_PRI'
          git config --global user.email '$DEPLOY_PRI'
      - name: Commit Blog # 提交文档到 Git 仓库
        env:
          GIT_URL: 'git@github.com:xialio/hexoBlogFile.git' # 把它换成项目的地址，注意要用 SSH 格式的
        run: |
          cd public
          git init
          git remote add origin $GIT_URL
          git add -A
          git commit -m "Blog auto generated. Time: $(date +'%Y-%m-%d %H:%M:%S')"
      - name: Push blog # 推送
        run: |
          cd public
          git push origin HEAD:gh-pages --force
```

```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC/HrT14CxvZSvgQbEcRnPemsf0oG4AjIzYBbKnCrNRpseLeZUTjddzxhCYa0pHDlynQyO9UT9XFaiGk5m5utKXJr7zpQTnr7sJPyP9MeSyVNzeGsUDjFfCiS5ynBeV1QOJxRXT8058KgBFpAGLTQJc7jHl+rvZiWj6lNAFWe99gEfz5KT0XY9UvMqIuJ2K4kmL06eRMiBl5IbK1+3DcbhuQC+kJFVSC2PVuls0YLq1QpIPmOSUjd0Tl2TMmKHvpDfMOvLLKsWfMTZySH9XplwBVNi+xYXPvnkzGqragM8KbXD8HUiwyqP5HMsg2m8pm1Mr5bErlHuPt5QN74f3lSNo2+8gow/dYRaS/PLdjUMkYleLz6nragT8LjYhmxKQOCxYsvZ9nSXYZihCNYEcGK3qZX417H6lYnCVSuzL/XH8a4k2vgK1gZAaoLtPIqr3LGPQODk295f33E1s+LqF/BnjObkY+iUlIVu5/z0LWqBKegOqkjZG9Euw58RnjH6u/v8= a1356281880@hotmail.com

```
## 在 GitHub Pages 上部署 Hexo
```github/workflows/pages.yml

|   |
|---|
|name: Pages  <br>  <br>on:  <br>  push:  <br>    branches:  <br>      - main # default branch  <br>  <br>jobs:  <br>  build:  <br>    runs-on: ubuntu-latest  <br>    steps:  <br>      - uses: actions/checkout@v4  <br>        with:  <br>          token: ${{ secrets.GITHUB_TOKEN }}  <br>          # If your repository depends on submodule, please see: https://github.com/actions/checkout  <br>          submodules: recursive  <br>      - name: Use Node.js 20.16.0  <br>        uses: actions/setup-node@v4  <br>        with:  <br>          # Examples: 20, 18.19, >=16.20.2, lts/Iron, lts/Hydrogen, *, latest, current, node  <br>          # Ref: https://github.com/actions/setup-node#supported-version-syntax  <br>          node-version: "20"  <br>      - name: Cache NPM dependencies  <br>        uses: actions/cache@v4  <br>        with:  <br>          path: node_modules  <br>          key: ${{ runner.OS }}-npm-cache  <br>          restore-keys: \|  <br>            ${{ runner.OS }}-npm-cache  <br>      - name: Install Dependencies  <br>        run: npm install  <br>      - name: Build  <br>        run: npm run build  <br>      - name: Upload Pages artifact  <br>        uses: actions/upload-pages-artifact@v3  <br>        with:  <br>          path: ./public  <br>  deploy:  <br>    needs: build  <br>    permissions:  <br>      pages: write  <br>      id-token: write  <br>    environment:  <br>      name: github-pages  <br>      url: ${{ steps.deployment.outputs.page_url }}  <br>    runs-on: ubuntu-latest  <br>    steps:  <br>      - name: Deploy to GitHub Pages  <br>        id: deployment  <br>        uses: actions/deploy-pages@v4|
```
github/workflows/pages.yml

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name: Pages  <br>  <br>on:  <br>  push:  <br>    branches:  <br>      - main # default branch  <br>  <br>jobs:  <br>  build:  <br>    runs-on: ubuntu-latest  <br>    steps:  <br>      - uses: actions/checkout@v4  <br>        with:  <br>          token: ${{ secrets.GITHUB_TOKEN }}  <br>          # If your repository depends on submodule, please see: https://github.com/actions/checkout  <br>          submodules: recursive  <br>      - name: Use Node.js 20  <br>        uses: actions/setup-node@v4  <br>        with:  <br>          # Examples: 20, 18.19, >=16.20.2, lts/Iron, lts/Hydrogen, *, latest, current, node  <br>          # Ref: https://github.com/actions/setup-node#supported-version-syntax  <br>          node-version: "20"  <br>      - name: Cache NPM dependencies  <br>        uses: actions/cache@v4  <br>        with:  <br>          path: node_modules  <br>          key: ${{ runner.OS }}-npm-cache  <br>          restore-keys: \|  <br>            ${{ runner.OS }}-npm-cache  <br>      - name: Install Dependencies  <br>        run: npm install  <br>      - name: Build  <br>        run: npm run build  <br>      - name: Upload Pages artifact  <br>        uses: actions/upload-pages-artifact@v3  <br>        with:  <br>          path: ./public  <br>  deploy:  <br>    needs: build  <br>    permissions:  <br>      pages: write  <br>      id-token: write  <br>    environment:  <br>      name: github-pages  <br>      url: ${{ steps.deployment.outputs.page_url }}  <br>    runs-on: ubuntu-latest  <br>    steps:  <br>      - name: Deploy to GitHub Pages  <br>        id: deployment  <br>        uses: actions/deploy-pages@v4 |
