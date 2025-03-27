// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7FSCBZi2D8gaDJV40SNXyGTJtATAXHmo",
  authDomain: "smartmall-f2cda.firebaseapp.com",
  projectId: "smartmall-f2cda",
  storageBucket: "smartmall-f2cda.firebasestorage.app",
  messagingSenderId: "1028241216649",
  appId: "1:1028241216649:web:ea80a50719084459bc2258",
  measurementId: "G-7VH2JLN6X9",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Analytics if in browser environment
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null

export default app

