import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";


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

function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
 }

const logIn=document.getElementById('login');
 logIn.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const auth=getAuth();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        showMessage('login is successful', 'loginMessage');
        const user=userCredential.user;
        localStorage.setItem('loggedInUserId', user.uid);
        window.location.href='/user/home.html';
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode==='auth/invalid-credential'){
            showMessage('Incorrect Email or Password', 'loginMessage');
        }
        else{
            showMessage('Account does not Exist', 'loginMessage');
        }
    })
 })