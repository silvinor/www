#!/usr/bin/env -S bash
set -euo pipefail
cd "$(dirname "$0")"

# Tools
for cmd in ruby bundle node npm figlet; do
  command -v "$cmd" >/dev/null || { echo "Missing: $cmd" >&2; exit 1; }
done

want="$(cat .ruby-version)"
have="$(ruby -e 'print RUBY_VERSION')"
[ "$want" = "$have" ] || echo "Warning: Ruby $have, but .ruby-version wants $want" >&2

figlet " Setup"

# Gems (Jekyll 4 self-build set) and npm packages
JEKYLL_SELF_BUILD=1 bundle install

echo "Done. Run ./_dev.sh"
