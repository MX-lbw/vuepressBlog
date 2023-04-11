#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 打包生成的文件夹路径

dist_path=docs/.vuepress/dist

# 生成静态文件

npm run build

# 进入生成的文件夹

cd $dist_path


git add -A

git commit -m "Add dist folder"

git subtree push --prefix  $dist_path origin gh-pagess

cd -