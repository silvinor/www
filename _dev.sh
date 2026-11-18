#!/usr/bin/env -S bash

export JEKYLL_ENV="development"
export JEKYLL_SELF_BUILD=1

echo " "
echo "Running..."
figlet " Jekyll - Dev"
echo " "

bundler exec jekyll serve --config "_config.yml,_config-dev.yml" --trace
