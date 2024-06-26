
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_KEY_APP_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL
};


// const firebaseConfig = {
//   apiKey: "AIzaSyABKXaPm8Hr_OrwbDTiRJkGcV-s6K69w2I",
//   authDomain: "learnlingo-10fee.firebaseapp.com",
//   projectId: "learnlingo-10fee",
//   storageBucket: "learnlingo-10fee.appspot.com",
//   messagingSenderId: "147548352137",
//   appId: "1:147548352137:web:ea90240366733a9a0aa058",
//   databaseURL: 'https://learnlingo-10fee-default-rtdb.firebaseio.com'
// };


const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
//  console.log(database);
//  let teachersArr = []
//  onValue(ref(database, '/teachers'), (s) => {
//     if(s.exists()) qwe = s.val();
//     console.log(qwe[0].name)
// })

// export const fireTeacherAll = () => {
//     onValue(ref(database, '/teachers'), (s) => {
//         if(s.exists()) teachersArr = s.val();
//         console.log(teachersArr)
//         return teachersArr
//     })

// }




    