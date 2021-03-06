import SignedInAppBar from '@/components/SignedInAppBar';
import { useRouter } from 'next/router';

export default function ProjectPage() {
	const router = useRouter();
	const { project } = router.query;
	return (
		<div>
			<SignedInAppBar />
			<h1>this is a project</h1>
			<h3>Id: {project}</h3>
		</div>
	);
}
