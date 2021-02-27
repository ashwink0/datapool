import { useEffect, useState } from 'react';
import Landing from '@/components/Landing';
import HomePage from '@/components/Home';
import fire from '../../utils/firebase';

export default function Home() {
	const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

	useEffect(() => {
		const unregisterAuthObserver = fire.auth().onAuthStateChanged((user) => {
			setIsSignedIn(!!user);
		});
		return () => unregisterAuthObserver();
	}, []);

	if (!isSignedIn) {
		return <Landing />;
	}
	return <HomePage />;
}
