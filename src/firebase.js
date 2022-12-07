import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyDv6HzyigzyRpukzRUCJ-_72yIH2kc-vJY",
  authDomain: "pushnotify-b015c.firebaseapp.com",
  projectId: "pushnotify-b015c",
  storageBucket: "pushnotify-b015c.appspot.com",
  messagingSenderId: "400227584339",
  appId: "1:400227584339:web:e559deb1be563e4ab839a6",
};
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
