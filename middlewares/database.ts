import { Db, MongoClient } from 'mongodb';
import { mongoUsers } from '../credentials';

const client = new MongoClient(mongoUsers, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

export default async function database() {
	if (!client.isConnected()) {
		await client.connect();
	}
	return client;
}
