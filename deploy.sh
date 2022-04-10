#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

mv dist docs

git add .
git commit -m "Build and deloy"
git push origin main
