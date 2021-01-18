
import firebase from 'firebase'
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGE_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID
} from 'react-native-dotenv'
const firebaseConfig = {
  
    apiKey: "AIzaSyB946Z_pNHDzqbeISy1XDFeLEVFxe59dg4",
    authDomain: "climaterioesaude.firebaseapp.com",
    projectId: "climaterioesaude",
    storageBucket: "climaterioesaude.appspot.com",
    messagingSenderId: "580486005050",
    appId: "1:580486005050:web:9ee4aec1e3f66b8028d003"
  /*
   apiKey: API_KEY,
   authDomain: AUTH_DOMAIN,
   databaseURL: DATABASE_URL,
   projectId: PROJECT_ID,
   storageBucket: STORAGE_BUCKET,
   messagingSenderId: MESSAGE_SENDER_ID,
   appId: APP_ID,
   measurementId:MEASUREMENT_ID
   */
}
firebase.initializeApp(firebaseConfig);
