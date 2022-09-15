# Mount Fog Website

This site uses [11ty](https://www.11ty.io/). For more information, see the [11ty docs](https://www.11ty.io/docs/).

All internal links, including to images, need to be piped through the `url` filter or they won't load correctly when deployed. For example, `<img src="{{ '/img/some_image.png' | url }}" />` instead of `<img src="/img/some_image.png" />`.

## Getting Started

1. Make sure you have [node.js](https://nodejs.org/en/) (version 8 or greater) installed.
2. Navigate to this directory in the terminal and run `npm install`. This should install 11ty.
3. Also in the terminal, run `npx @11ty/eleventy --serve` and then open [localhost:8080](http://localhost:8080/) in your browser. You should now see the website. The `--serve` option makes it so that, whenever you make any code changes, 11ty will automatically recompile the code and refresh the website.

## How to Deploy

1. Navigate to this directory and run `npm install` in the terminal. This should install gh-pages.
2. Run `npx @11ty/eleventy` to generate the HTML pages to the `_site` folder.
3. Run `npm run deploy`. The website should be live at [erwald.github.io/mount-fog-website](https://erwald.github.io/mount-fog-website/).

## To-do

- Fill in missing photos (M)
- Do CSS styling and fine-tuning (M)
- Get domain from Squarespace (E)
