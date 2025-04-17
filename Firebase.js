import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuration Firebase
const firebaseConfig = {
  apiKey: "VOTRE_API_KEY", // Remplacez par votre clé API Firebase
  authDomain: "VOTRE_AUTH_DOMAIN", // Remplacez par votre domaine d'authentification Firebase
  projectId: "VOTRE_PROJECT_ID", // Remplacez par l'ID de votre projet Firebase
  storageBucket: "VOTRE_STORAGE_BUCKET", // Remplacez par votre bucket de stockage Firebase
  messagingSenderId: "VOTRE_MESSAGING_SENDER_ID", // Remplacez par votre ID d'expéditeur Firebase
  appId: "VOTRE_APP_ID" // Remplacez par l'ID de votre application Firebase
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Export des services Firebase
export const auth = getAuth(app);
export const firestore = getFirestore(app);