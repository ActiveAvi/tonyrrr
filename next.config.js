const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const MDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

const nextConfig = {
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'images/[hash]-[name].[ext]' },
          },
        ],
      },
    ],
  },
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
}

module.exports = withPlugins(
  [
    [optimizedImages, {}],
    [MDX, {}],
  ],
  nextConfig
)
