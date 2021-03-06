import { ObjectId } from 'bson';

export type project = {
	projectName: string;
	description: string;
	_id: ObjectId;
	databases: Array<Database>;
};

export type Database = {
	name: string;
	type: string;
	url: string;
};
