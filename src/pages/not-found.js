export default function SSR() {
	return <></>;
}

export function getServerSideProps() {
	return {
		notFound: true,
	};
}
