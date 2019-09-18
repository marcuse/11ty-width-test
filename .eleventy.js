module.exports = (eleventyConfig) => {
    const md = require('markdown-it');
    const mdAttrs = require('markdown-it-attrs');

    const mdLib = md().use(mdAttrs);
    eleventyConfig.setLibrary('md', mdLib);
};