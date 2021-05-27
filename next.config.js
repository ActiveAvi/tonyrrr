// const withNextOptimizedImages = require('next-optimized-images')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      }
    }
    return config
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
  target: 'serverless',
  trailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/bio': { page: '/bio' },
      '/blog': { page: '/blog' },
      '/projects': { page: '/projects' },
      '/contact': { page: '/contact' },
    }
  },
})
