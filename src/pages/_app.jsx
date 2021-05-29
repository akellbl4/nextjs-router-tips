import Head from "next/head";

import "styles.css";
import { GitHubLink } from "components/GitHubLink";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js Router – Tips &amp; Tricks</title>
        <meta
          name="description"
          content="This is the example for an article about Next.js router"
        />
        <meta name="author" content="Pavel Mineev" />
      </Head>
      <header>
        <h1>Next.js Router – Tips &amp; Tricks</h1>
        <GitHubLink />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        Author <a href="https://pavel.mineev.me">Pavel Mineev</a>
      </footer>
    </>
  );
}
