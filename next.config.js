const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra(),
{
  images: {
    domains: ['assets.tina.io','media.tewahi.com','cdn.tewahi.me','f005.backblazeb2.com'],
  },
}
