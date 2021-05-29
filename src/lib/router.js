import NextRouter, { useRouter as useNextRouter } from "next/router";

export function useRouter() {
	const router = useNextRouter();
	const [pathname, queryString = ""] = router.asPath.split("?");

	return Object.assign(router, { pathname, queryString });
}

function push(url, opts) {
	return NextRouter.push(url, null, opts);
}

function replace(url, opts) {
	return NextRouter.replace(url, null, opts);
}

const Router = {
	...NextRouter,
	push,
	replace,
};

export default Router;
