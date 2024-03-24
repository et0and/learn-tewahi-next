import { useConfig } from "nextra-theme-docs";

export default {
  docsRepositoryBase: "https://github.com/et0and/learn-tewahi-next/tree/main/",
  logo: (
    <span>
      <strong>Te Wāhi Learn</strong>

      <style jsx>{`
        span {
          padding: 0.5rem 0.5rem 0.5rem 0;
          mask-image: linear-gradient(
            60deg,
            black 25%,
            rgba(0, 0, 0, 0.2) 50%,
            black 75%
          );
          mask-size: 400%;
          mask-position: 0%;
        }
        span:hover {
          mask-position: 100%;
          transition: mask-position 1s ease, -webkit-mask-position 1s ease;
        }
      `}</style>
    </span>
  ),

  darkMode: false,

  search: {
    placeholder: "Search",
  },

  editLink: {
    component: null,
  },

  gitTimestamp: null,

  toc: {
    backToTop: true,
    title: "On this page",
  },

  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://tewahi.com" target="_blank">
          Te Wāhi Auaha
        </a>
        .
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Te Wāhi Learn",
    };
  },
  feedback: {
    content: "",
    labels: "feedback",
    useLink() {
      const config = useConfig();
      return `https://google.com/search?q=${encodeURIComponent(
        `Feedback for ${config.title}`
      )}`;
    },
  },

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Te Wāhi Auaha" />
      <meta property="og:description" content="A learning hub." />
      <link rel="icon" type="image/x-icon" href="favicon.ico" />
    </>
  ),
};
