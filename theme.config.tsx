import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>Te Wāhi Learn</span>,
  docsRepositoryBase: 'https://tewahi.com',
  footer: {
    text: 'Te Wāhi Auaha, 2023',
  },
}

export default {
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return <>
      <meta property="og:url" content={`https://my-app.com${asPath}`} />
      <meta property="og:title" content={frontMatter.title || 'Te Wāhi Learn'} />
      <meta property="og:description" content={frontMatter.description || 'Te Wāhi Learn'} />
    </>
  },
}