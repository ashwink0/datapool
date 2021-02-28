import { Db, MongoClient } from 'mongodb';
import { mongoUsers } from '../credentials';

const uri = mongoUsers;
const dbName = `Users`;

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

if (!uri) {
	throw new Error(
		`Please define the MONGODB_URI environment variable inside .env.local`,
	);
}

if (!dbName) {
	throw new Error(
		`Please define the MONGODB_DB environment variable inside .env.local`,
	);
}

export async function connectToDatabase() {
	if (cachedClient && cachedDb) {
		return { client: cachedClient, db: cachedDb };
	}

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const client = await MongoClient.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	const db = await client.db(dbName);

	cachedClient = client;
	cachedDb = db;

	return { client, db };
}
