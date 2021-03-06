import {useEffect, useState} from 'react';
import fire from '../../utils/firebase';
import Head from 'next/head'
import Loading from "@/components/Home/Loading";
import Landing from "@/components/Home/Landing";
import HomePage from "@/components/Home/Home";

export default function Home() {
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [signed, setSigned] = useState(false);

	useEffect(() => {
		const unregisterAuthObserver = fire.auth().onAuthStateChanged((user) => {
			setIsSignedIn(!!user);
			setSigned(true)
		});
		return () => unregisterAuthObserver();
	}, []);

	const returnElement = () => {
		if (!isSignedIn && !signed) {
			return <Loading/>
		}
		else if(!isSignedIn) {
			return <Landing/>;
		}
		return <HomePage/>;
	}

	return (
		<div>
			<Head>
				<title>DataPool</title>
				<meta name="description" content="Easily interact with all of your databases."/>
				<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
				<meta property="og:title" content="DataPool" key="title" />
				<meta property="og:description" content="Easily interact with all of your databases." />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:creator" content="@ashwin__" />
			</Head>
			{returnElement()}
		</div>
	);
}
