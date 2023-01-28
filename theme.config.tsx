import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Te Wāhi Learn</span>,
  docsRepositoryBase: 'https://tewahi.com',
  footer: {
    text: 'Te Wāhi Auaha, 2023',
  },
}

export default {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Te Wāhi Auaha" />
      <meta property="og:description" content="A learning hub" />
    </>
  ),
}