#!/usr/bin/env bash

export JEKYLL_ENV="production"

echo ""
echo "Running..."
figlet " Jekyll"
echo ""

bundle exec jekyll clean
bundle exec jekyll build --config "_config.yml,_config-prod.yml"

# echo "Running..."
# figlet " NPM"
# echo ""

# npm run build

echo ""
echo "...done"
figlet -f slant " Thank you :)"
echo ""
