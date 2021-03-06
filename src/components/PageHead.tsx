import Head from 'next/head';

export default function PageHead() {
	return (
		<Head>
			<title>DataPool</title>
			<meta
				name="description"
				content="An efficient and intuitive tool to interact with all of your databases."
			/>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta property="og:title" content="DataPool" key="title" />
			<meta
				property="og:description"
				content="An efficient and intuitive tool to interact with all of your databases."
			/>
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:creator" content="@ashwin__" />
			<meta
				name="google-site-verification"
				content="kNlHUmvPEuuaQNIt1yporg1-f3vpLHMmBAcA7wXqS7U"
			/>
		</Head>
	);
}
