import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, signOut} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBW1LmHJEv0--cx7juRSkXjqsvQZFp5hvM",
    authDomain: "myproject-4cc8e.firebaseapp.com",
    projectId: "myproject-4cc8e",
    storageBucket: "myproject-4cc8e.firebasestorage.app",
    messagingSenderId: "963491494592",
    appId: "1:963491494592:web:54c8336f45da9df98e8b25"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth= getAuth(app);

const logoutbtn=document.getElementById('logout-btn');

logoutbtn.addEventListener('click', (event)=>{
    event.preventDefault();
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='/auth/login.html';
    })
    .catch((error)=>{
        console.error('error in logging out',error);
    })
})