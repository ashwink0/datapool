import database from '../middlewares/database';
import fire from '../utils/firebase';

export async function createProject(
	colName: string | string[],
	projectName: string | string[],
): Promise<number> {
	return new Promise((resolve) => {
		database().then((client) => {
			if (colName != null) {
				client.db().collection(colName).insertOne({ projectName });
			}
			resolve(200);
		});
	});
}
