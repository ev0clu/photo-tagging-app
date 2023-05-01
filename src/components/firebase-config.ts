import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA_VFDUDHHEogDcJTUb0GvrTGbu0ziPp40',
  authDomain: 'waldoapp-cf5cd.firebaseapp.com',
  projectId: 'waldoapp-cf5cd',
  storageBucket: 'waldoapp-cf5cd.appspot.com',
  messagingSenderId: '361802133371',
  appId: '1:361802133371:web:e3ef926d29dea932ee57de'
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;
