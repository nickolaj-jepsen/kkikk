import type { AppProps } from "next/app";
import theme from "../theme";
import NavBar from "../modules/navbar/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <style jsx global>{`
        @font-face {
          font-family: "Mukta";
          font-style: normal;
          font-weight: 400;
          font-display: optional;
          src: url(/fonts/Mukta/Mukta-Regular.woff2) format("woff2");
        }
        @font-face {
          font-family: "Mukta";
          font-style: normal;
          font-weight: 200;
          font-display: optional;
          src: url(/fonts/Mukta/Mukta-Light.woff2) format("woff2");
        }
        @font-face {
          font-family: "Mukta";
          font-style: normal;
          font-weight: 700;
          font-display: optional;
          src: url(/fonts/Mukta/Mukta-Bold.woff2) format("woff2");
        }

        body {
          background-color: ${theme.color.background};
          color: ${theme.color.foreground};
          font-family: "Mukta", sans-serif;
        }

        /* CSS RESET */
        html {
          box-sizing: border-box;
          font-size: 16px;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ol,
        ul {
          margin: 0;
          padding: 0;
          font-weight: normal;
        }

        ol,
        ul {
          list-style: none;
        }

        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
