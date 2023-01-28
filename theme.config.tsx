import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
 
export default {
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return <>
      <meta property="og:url" content={`https://learn-tewahi-next.vercel.app/${asPath}`} />
      <meta property="og:title" content={frontMatter.title || 'Te Wāhi Learn'} />
      <meta property="og:description" content={frontMatter.description || 'A learning hub'} />
    </>
  },
}