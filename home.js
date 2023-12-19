import { signOut, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";


const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
  } else {
    window.location = 'login.html'
  }
});



const logout = document.querySelector('#logout-btn');

logout.addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('logout successfully');
        window.location = 'login.html'
    }).catch((error) => {
        console.log(error);
    });
})