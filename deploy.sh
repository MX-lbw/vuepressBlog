#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git add docs/.vuepress/dist

git commit -m "Add dist folder"

git subtree push --prefix dist origin gh-pages

cd -