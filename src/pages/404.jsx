import Link from "next/link";

export default function NotFound() {
	return (
		<div>
			<h1>Not Found</h1>
			<p>
				Page rendered from file <code>404.js</code> because <code>getServerSideProps</code> returned
				code 404
			</p>
			<Link href="/">
				<a>Go to home page</a>
			</Link>
		</div>
	);
}
