import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import constructConfig from '../data/constructConfig';

async function retrieveSkills() {
    const firebaseConfig = constructConfig();
    initializeApp(firebaseConfig);

    const db = getFirestore();

    const colRef = collection(db, 'skills');

    try {
        const snapshot = await getDocs(colRef);
        if(snapshot.empty) {
            console.log("There is nothing here.");
            return null;
        }
        const skills = [];
        snapshot.docs.forEach((doc) => {
            skills.push({ ...doc.data() });
        });
        return skills;
    } catch(error) {
        console.log(`There was an issue querying the firestore database : ${error}`);
        throw error;
    }
}

async function retrieveProjects() {
    const firebaseConfig = constructConfig();
    initializeApp(firebaseConfig);

    const db = getFirestore();

    const colRef = collection(db, 'projects');

    try {
        const snapshot = await getDocs(colRef);
        if(snapshot.empty) {
            console.log("This should not be empty. Contact the developer.");
            return null;
        }
        const projects = [];
        snapshot.docs.forEach((doc) => {
            projects.push({...doc.data() })
        });
        return projects;
    } catch(error) {
        console.log(`There was an issue querying the firestore database : ${error}`);
        throw error;
    }
}

export { retrieveSkills, retrieveProjects };