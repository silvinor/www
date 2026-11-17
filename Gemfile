# frozen_string_literal: true

source "https://rubygems.org"

## GitHub Pages builds a site with its own frozen gem set: the `github-pages`
## gem, which carries Jekyll 3.10 and only the plugins GitHub allows.
## A self-build uses Jekyll 4, the npm tool chain and the extra plugins.
## Set JEKYLL_SELF_BUILD=1 to get that second set. The npm scripts in
## `package.json` set it, so `npm run dev` and `npm run prod` need no change.

if ENV["JEKYLL_SELF_BUILD"]
  ## The theme's own gemspec. GitHub Pages builds the site, not the gem, and
  ## its frozen gem set has no entry for a gem built from this repository.
  gemspec

  gem "liquid", "~> 4.0"
  gem "jekyll", "~> 4.4.1"
  gem "ostruct", "~> 0.6"

  gem 'eventmachine', '1.2.7', git: 'https://github.com/eventmachine/eventmachine.git', tag: 'v1.2.7'
  gem 'sass-embedded', '<= 1.78.0'

  group :jekyll_plugins do
    ## --- GitHub Pages supports these ---
    gem "jekyll-feed", "~> 0.15"
    gem "jekyll-sitemap", "~> 1.4"
    # gem "jekyll-paginate", "~> 1.1"
    gem "jekyll-redirect-from", "~> 0.16"
    gem "jemoji", "~> 0.13"
    gem "jekyll-avatar", "~> 0.8"
    gem "jekyll-seo-tag", "~> 2.8"

    ## --- Self-build only: GitHub Pages does NOT support these ---
    # gem "jekyll-category-pages", "~> 1.1"
    gem "jekyll-last-modified-at", "~> 1.3"
    gem "jekyll-toc", "~> 0.19"
    gem "jekyll-email-protect", "~> 1.1"
  end

  # Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
  # and associated library.
  platforms :mingw, :x64_mingw, :mswin, :jruby do
    gem "tzinfo", ">= 1", "< 3"
    gem "tzinfo-data"
  end

  # Performance-booster for watching directories on Windows
  gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

  # Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
  # do not have a Java counterpart.
  gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

  ## HTTP server toolkit, used for livereload in debug mode
  gem "webrick", "~> 1.8"
else
  ## The gem set GitHub Pages builds with. The plugins above that are absent
  ## here are the ones GitHub Pages does not support.
  gem "github-pages", group: :jekyll_plugins
end
