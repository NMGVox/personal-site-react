export default function constructConfig() {
    return ({
        apiKey: import.meta.env.VITE_FIREBASE_APIKEY,

        authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,

        projectId: import.meta.env.VITE_FIREBASE_PROJID,

        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE,

        messagingSenderId: import.meta.env.VITE_FIREBASE_MSG_SENDER_ID,

        appId: import.meta.env.VITE_FIREBASE_APPID,

        measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    });
}