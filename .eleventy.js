module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' })

  // Return your Object options:
  return {
    dir: {
      input: 'src',
    }
  }
}
