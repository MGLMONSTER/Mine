# 构建
vuepress build docs

# 导航到构建输出目录
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 推到你仓库的的 gh-page 分支
# 将 <USERNAME>/<REPO> 替换为你的信息
git push -f git@github.com:MGLMONSTER/Mine.git master:gh-pages

# 链接远程仓库
 git remote add origin https://github.com/MGLMONSTER/Mine.git
# 拉取远程仓库的文件
 git pull --rebase origin master
# 同步更新代码
 git push -f origin master