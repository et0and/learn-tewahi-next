export default {
  logo: <span>Te Wāhi Learn</span>,
  project: {
    link: 'https://github.com/et0and/learn-tewahi-next',
  },
  footer: {
    text: <span>
      {new Date().getFullYear()} © <a href="https://tewahi.com" target="_blank">Te Wāhi Auaha</a>.
    </span>,
    },
    useNextSeoProps() {
      return {
        titleTemplate: '%s – Te Wāhi Learn'
      }
    },
    head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Te Wāhi Auaha" />
        <meta property="og:description" content="A learning hub." />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </>
    ),
}