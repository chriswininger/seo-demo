#!/bin/zsh

set +e
docker stop caw-seo-demo
docker rm caw-seo-demo
set -e

docker run --name caw-seo-demo -p 3000:80 caw/seo-demo &
