import Head from "next/head";
import "styles.css";

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
			<main>
				<Component {...pageProps} />
			</main>
			<footer>
				<p>
					This is the example for an <a href="">article about Next.js router</a>
				</p>
				<p>
					Author <a href="https://pavel.mineev.me">Pavel Mineev</a>
					<br />
					Source Code on <a href="">GitHub</a>
				</p>
			</footer>
		</>
	);
}
