import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const confing = {
	apiKey: "AIzaSyC8_xdyh9WqPlvIgusmkjDziD4smo9Seuw",
	authDomain: "crwn-db-832ad.firebaseapp.com",
	projectId: "crwn-db-832ad",
	storageBucket: "crwn-db-832ad.appspot.com",
	messagingSenderId: "27472790865",
	appId: "1:27472790865:web:af76bcc49dd17154e03f70",
	measurementId: "G-MVHDTJMPZL",
};

firebase.initializeApp(confing);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const createUserProfileDocument = async (userAuth, userRef, additionalData) => {
	const { displayName, email } = userAuth;
	const createdAt = new Date();
	try {
		await userRef.set({
			displayName,
			email,
			createdAt,
			...additionalData,
		});
	} catch (error) {
		return error;
	}
};

export const enterCustomerIntoThePlatformThroughGoogle = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();
	console.log(snapShot);
	if (!userRef.exists) {
		createUserProfileDocument(userAuth, userRef, additionalData);
	}
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
