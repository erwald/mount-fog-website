#!/usr/bin/env bash
set -Eeuo pipefail

tmux new-session -d -s mf-11ty "npx @11ty/eleventy --serve"
