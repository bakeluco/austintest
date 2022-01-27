#!/usr/bin/env sh

# abort on errors
set -env

# build
npm run build

#navigate into the build output directory
cd dist

# git
git init

git add -A

git commit -m 'New Deployment'

git push -f git@github.com:bakeluco/austintest.git master:gh-pages

cd - 