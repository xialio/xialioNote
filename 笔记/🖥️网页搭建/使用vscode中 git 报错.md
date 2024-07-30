# 使用vscode中 git 报错
## 取消代理设置

## 设置系统代理

有时候取消代理设置仍然会出现报错，这时可以通过设置系统代理来解决。具体步骤如下：

1. 打开系统设置，搜索代理设置，并点击编辑按钮。
![[使用vscode中 git 报错01.png]]
2. 在代理服务器中，将端口设置为7890（这个端口不会影响正常上网，可以放心设置），然后点击保存。
![[使用vscode中 git 报错02.png]]
3. 在终端输入以下命令，设置 Git 使用本地代理：

`git config --global http.proxy http://127.0.0.1:7890

4. 设置完成后，可以通过以下命令检验是否设置成功：

`git config --global -l`

重新

`git branch -M main   git push -u origin main`

在弹出的页面登录GitHub验证即可

## Tips

错误提示 `error: remote origin already exists.
表示您尝试添加的名为 origin 的远程仓库已经存在于您当前的本地仓库配置中。

这通常发生在您之前已经为该本地仓库设置过一个名为 origin 的远程仓库，而现在又尝试再次添加同名的远程仓库。

如果您想解决这个问题，可以根据您的实际需求采取以下不同的方法：

1. 如果您想要修改已存在的 origin 远程仓库的 URL，可以使用以下命令：



   `git remote set-url origin https://github.com/xialio/vscode-PAPAYA-.git

1. 如果您确定不再需要之前设置的 origin 远程仓库，可以先删除它，然后再重新添加：


  `git remote remove origin  
  `git remote add origin https://github.com/xialio/vscode-PAPAYA-.git