import { useEffect, useState } from 'react';
import Loading from '@/components/Home/Loading';
import PageHead from '@/components/PageHead';
import NotSignedIn from '@/components/Project/NotSignedIn';
import ProjectPage from '@/components/Project/ProjectPage';
import fire from '../../../utils/firebase';

export default function Project() {
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [signed, setSigned] = useState(false);

	useEffect(() => {
		const unregisterAuthObserver = fire.auth().onAuthStateChanged((user) => {
			setIsSignedIn(!!user);
			setSigned(true);
		});
		return () => unregisterAuthObserver();
	}, []);

	const returnElement = () => {
		if (!isSignedIn && !signed) {
			return <Loading />;
		}
		if (!isSignedIn) {
			return <NotSignedIn />;
		}
		return <ProjectPage />;
	};

	return (
		<div>
			<PageHead />
			{returnElement()}
		</div>
	);
}
