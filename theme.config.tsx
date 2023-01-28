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
}