import Router, { useRouter } from "lib/router";
import Link from "next/link";

export default function Index() {
	const { pathname, query } = useRouter();
	const params = typeof query.params === "string" ? [query.params] : query.params || [];

	function handleClickAddFilter() {
		params.push(Math.floor(Math.random() * 10));
		Router.push({ pathname, query: { ...query, params } }, { shallow: true });
	}

	function handleClickResetFilter() {
		Router.push(pathname, { shallow: true });
	}

	return (
		<>
			<Link href="/">
				<a>Back home</a>
			</Link>

			<h1>Update query params</h1>

			<div>
				<button onClick={handleClickAddFilter}>Add a param</button>
				<button onClick={handleClickResetFilter}>Reset params</button>
			</div>

			<h3>Params</h3>
			{params.length > 0 ? (
				<ul className="list">
					{params.map((v, i) => (
						<li key={i} className="list-item">
							{v}
						</li>
					))}
				</ul>
			) : (
				<span className="empty-state">No params</span>
			)}
		</>
	);
}
