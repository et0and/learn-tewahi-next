import { GoogleTagManager } from "@next/third-parties/google";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
      <GoogleTagManager gtmId="GTM-TFLHLL6N" />
    </>
  );
}
