export default function SSR() {
	return <></>;
}

export function getServerSideProps() {
	return {
		redirect: {
			destination: "/?redirected-from=/ssr",
			permanent: false,
		},
	};
}
