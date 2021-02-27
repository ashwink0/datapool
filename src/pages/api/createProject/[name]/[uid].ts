import type { NextApiRequest, NextApiResponse } from 'next';
import { createProject } from '../../../../../db/createProject';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const {
		query: { name, uid },
	} = req;

	createProject(uid, name).then((r) => {
		console.log(`complete`);
		res.status(r).end(`a`);
	});
};
