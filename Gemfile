# frozen_string_literal: true

source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.

gem "jekyll", '~> 4.4.1'

# This is the default theme for new Jekyll sites. You may change this to anything you like.
# gem "minima", "~> 2.5"
# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins
# If you have any plugins, put them here!

#!!! gem 'ts-jekyll-bs', '>= 0.1.0', :git => 'http://github.com/tecsmith/ts-jekyll-bs.git', branch: 'main'
gem 'eventmachine', '1.2.7', git: 'https://github.com/eventmachine/eventmachine.git', tag: 'v1.2.7'
gem 'sass-embedded', '<= 1.78.0'

## If you want to use GitHub Pages, remove the "gem "jekyll"" above and uncomment the line below.
## To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

## If you have any plugins, put them here!
group :jekyll_plugins do
  ## Remember to also change in `_config.yml`
  ## ... Theme ...
  #!!!  gem 'jekyll-remote-theme', '~> 0.4'
  ## ... Site Gems ...
  gem "jekyll-feed", "~> 0.15"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-paginate", "~> 1.1"
  # gem "jekyll-redirect-from", "~> 0.16"  # unknown usage
  gem "jemoji", "~> 0.13"
  gem "jekyll-avatar", "~> 0.8"
  gem "jekyll-last-modified-at", "~> 1.3"
  gem "jekyll-category-pages", "~> 1.1"
  gem "jekyll-toc", "~> 0.19"
  gem "jekyll-email-protect", "~> 1.1"
  gem "jekyll-seo-tag", "~> 2.8"
end

## Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
## and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

## Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

## Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
## do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

## HTTP server toolkit, used for livereload in debug mode
gem "webrick", "~> 1.8"

# Remove SASS deprecation warnings
Bundler.settings.set_local("quiet_deps", true)
