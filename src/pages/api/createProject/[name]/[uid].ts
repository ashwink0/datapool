import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../../../middlewares/database';
import fire from '../../../../../utils/firebase';
import 'firebase/auth';
import { withAuth } from '../../../../../middlewares/withAuth';

const handler= async (req: NextApiRequest, res: NextApiResponse) => {
	const {
		query: { name, uid },
	} = req;
	console.log(fire.auth().currentUser?.displayName);
	const { db } = await connectToDatabase();
	const response = await db.collection(uid as string).insertOne({ name });

	res.status(200).end(`this is a res`);
};

export default withAuth(handler);
