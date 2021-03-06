#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

rm -rf docs
cp -r dist docs

git pull
git add .
git commit -m "Build and deloy"
git push origin main
