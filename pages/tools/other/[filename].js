import Head from 'next/head'
import { useTina } from 'tinacms/dist/react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import client from '../../../tina/__generated__/client'

const OtherPage = (props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  return (
    <>
      <Head>
        {/* Tailwind CDN */}
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.7/tailwind.min.css'
          integrity='sha512-y6ZMKFUQrn+UUEVoqYe8ApScqbjuhjqzTuwUMEGMDuhS2niI8KA3vhH2LenreqJXQS+iIXVTRL2iaNfJbDNA1Q=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
      </Head>
      <div>
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <h1 className='text-3xl m-8 text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            {data.other.title}
          </h1>
          <ContentSection content={data.other.body}></ContentSection>
        </div>
        <div className='bg-green-100 text-center'>
          Lost and looking for a place to start?
          <a
            href='https://tina.io/guides/tina-cloud/getting-started/overview/'
            className='text-blue-500 underline'
          >
            {' '}
            Check out this guide
          </a>{' '}
          to see how add TinaCMS to an existing Next.js site.
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  let data = {}
  let query = {}
  let variables = { relativePath: `${params.filename}.mdx` }
  try {
    const res = await client.queries.other(variables)
    query = res.query
    data = res.data
    variables = res.variables
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      variables: variables,
      data: data,
      query: query,
      //myOtherProp: 'some-other-data',
    },
  }
}

export const getStaticPaths = async () => {
  const allPaths = new Set();

  try {
    // Fetch data from Tina CMS for the "howto" collection
    const otherListData = await client.queries.otherConnection();

    // Add unique paths to the Set
    otherListData.data.otherConnection.edges.forEach((other) => {
      allPaths.add({
        params: { filename: other.node._sys.filename.replace('.mdx', '') },
      });
    });
  } catch (error) {
    console.error('Error fetching data from Tina CMS:', error);
  }

  return {
    paths: [...allPaths], // Convert the Set to an array
    fallback: false,
  };
};

export default OtherPage

const PageSection = (props) => {
  return (
    <>
      <h2>{props.heading}</h2>
      <p>{props.content}</p>
    </>
  )
}

const iframe = ({ src, height, width }) => {

  return (
    <iframe
      src={src}
      height={height}
      width={width}
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  );
};

const components = {
  PageSection: PageSection,
  iframe: iframe,

}

const ContentSection = ({ content }) => {
  return (
    <div className='relative py-16 bg-white overflow-hidden text-black'>
      <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full'>
        <div
          className='relative h-full text-lg max-w-prose mx-auto'
          aria-hidden='true'
        >
          <svg
            className='absolute top-12 left-full transform translate-x-32'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)'
            />
          </svg>
          <svg
            className='absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
            />
          </svg>
          <svg
            className='absolute bottom-12 left-full transform translate-x-32'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='d3eb07ae-5182-43e6-857d-35c643af9034'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)'
            />
          </svg>
        </div>
      </div>
      <div className='relative px-4 sm:px-6 lg:px-8'>
        <div className='text-lg max-w-prose mx-auto'>
          <TinaMarkdown components={components} content={content} />
        </div>
      </div>
    </div>
  )
}
