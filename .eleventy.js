module.exports = function (eleventyConfig) {
    return {
        templateFormats: [
            "md",
            "njk",
            "html",
            "png",
            "jpg",
        ],
        passthroughFileCopy: true,
        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};
