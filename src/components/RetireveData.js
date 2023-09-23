import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import constructConfig from '../data/constructConfig';

async function retrieveData() {
    const firebaseConfig = constructConfig();
    initializeApp(firebaseConfig);

    const db = getFirestore();

    const colRef = collection(db, 'skills');

    try {
        const snapshot = await getDocs(colRef);
        const skills = [];
        snapshot.docs.forEach((doc) => {
            skills.push({ ...doc.data() });
        });
        console.log(skills);
    } catch(error) {
        console.log(error.message);
    }
}

export default retrieveData;