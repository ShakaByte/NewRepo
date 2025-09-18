import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


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
 const signUp=document.getElementById('signup');
 signUp.addEventListener('click', (event)=>{
    event.preventDefault();
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    
    const auth=getAuth();
    const db=getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user=userCredential.user;
        const userData={
          name:name,
          email:email
        };
        showMessage('Account Created Successfully', 'signupMessage');
        const docRef=doc(db, "users", user.uid);
        setDoc(docRef,userData)
        .then(()=>{
            window.location.href='login.html';
        })
        .catch((error)=>{
            console.error("error writing document", error);

        });
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode=='auth/email-already-in-use'){
            showMessage('Email Address Already Exists !!!', 'signupMessage');
        }
        else{
            showMessage('unable to create User', 'signupMessage');
        }
    })
 });