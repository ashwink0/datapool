import { useEffect, useState } from 'react';
import fire from '../../../../utils/firebase';
import { project } from '../../../../utils/types';
import styles from '../../../styles/ProjectGrid.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function AllProjects() {
	const [projects, setProjects] = useState([]);
	const [status, setStatus] = useState(<CircularProgress/>);

	useEffect(() => {
		fire
			.auth()
			.currentUser?.getIdToken(true)
			.then((idToken) => {
				fetch(`/api/getProjects/${fire.auth().currentUser?.uid}`, {
					headers: {
						Authorization: idToken,
					},
				})
					.then((r) => r.json())
					.then((data) => {
						setProjects(data.projects);
						setStatus(<></>)

					});
			})
			.catch((error) => {
				setStatus(<h1>Error</h1>)
			});
	}, []);

	return (
		<div className={styles.grid}>
			{status}
			{projects.map((item: project) => (
				<a href="https://nextjs.org/learn" className={styles.card}>
					<h3>{item.projectName}</h3>
					<p>{item.description}</p>
				</a>
			))}
		</div>
	);
}
