import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvHW2EnNFlj6dmWo6AuIMQXCAFwhaGkDE",
  authDomain: "autheticacao-2b459.firebaseapp.com",
  projectId: "autheticacao-2b459",
  storageBucket: "autheticacao-2b459.appspot.com",
  messagingSenderId: "1023384596712",
  appId: "1:1023384596712:web:a1649dc07b3b7ec940595d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

/* Exportabdi is recursos de autenticação da biblioteca */
export const auth = getAuth(app);

/* 
  apiKey: "AIzaSyDtde0LSo4CJcvqO6NQmEjBrlHYbaHRVZ0",
  authDomain: "app-autenticacao-16f03.firebaseapp.com",
  projectId: "app-autenticacao-16f03",
  storageBucket: "app-autenticacao-16f03.appspot.com",
  messagingSenderId: "824041320989",
  appId: "1:824041320989:web:e723b7d44bba9adf630cf4",
*/
