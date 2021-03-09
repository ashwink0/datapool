import SignedInAppBar from '@/components/SignedInAppBar';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { ObjectId } from 'bson';
import fire from '../../../utils/firebase';

export default function ProjectPage() {
	const router = useRouter();
	const { project } = router.query;

	const [projectObj, setProjectObj] = useState({
		projectName: ``,
		description: ``,
		_id: ObjectId,
		databases: [],
	});
	const [status, setStatus] = useState(<CircularProgress />);

	useEffect(() => {
		fire
			.auth()
			.currentUser?.getIdToken(true)
			.then((idToken) => {
				fetch(`/api/getProject/${fire.auth().currentUser?.uid}`, {
					method: `POST`,
					headers: {
						Authorization: idToken,
					},
					body: JSON.stringify({
						id: project,
					}),
				})
					.then((r) => r.json())
					.then((data) => {
						if (!data.projectName) {
							setStatus(<h1>Project does not exist</h1>);
						} else {
							setProjectObj(data);
							setStatus(<></>);
						}
					});
			})
			.catch((error) => {
				setStatus(<h1>An error occured</h1>);
			});
	}, []);
	return (
		<div>
			<SignedInAppBar />
			<h1>this is a project</h1>
			{status}
			<h3>name: {projectObj.projectName}</h3>
			<h3>description: {projectObj.description}</h3>
			<h3>Id: {project}</h3>
		</div>
	);
}
