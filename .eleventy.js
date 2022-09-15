module.exports = function (eleventyConfig) {
  // copy images and css to site dir
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("fonts");

  return {
    templateFormats: ["md", "njk", "html", "png", "jpg"],
    passthroughFileCopy: true,
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    pathPrefix: "/mount-fog-website",
  };
};
