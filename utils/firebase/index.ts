import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../../credentials';

if (!firebase.apps.length) {
	try {
		firebase.initializeApp(firebaseConfig);
	} catch (error) {
		console.log(`Firebase admin initialization error`, error.stack);
	}
}

export default firebase;
