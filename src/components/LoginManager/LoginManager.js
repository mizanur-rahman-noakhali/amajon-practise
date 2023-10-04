import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from '../Login/firebase.config';

  export   const initializationLoginFramework = () => {
    if(firebase.apps.length === 0 ){
      firebase.initializeApp(firebaseConfig);
    }
  
 }

  export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
  return   firebase.auth().signInWithPopup(googleProvider)
  .then(res => {
    const {displayName, photoURL, email} = res.user;
    const signedInUser = {
      isSignedIn: true,
      name: displayName,
      email: email,
      photo: photoURL
    };
    return signedInUser;
  })
  .catch(err => {
    console.log(err);
    console.log(err.message);
  })
}

export  const handleFbSignIn = () => {
  const fbProvider = new firebase.auth.FacebookAuthProvider();
   return firebase.auth().signInWithPopup(fbProvider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    return user;
    console.log('fb user after sign in', user);
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });
}


 export const handleSignOut = () => {
    return firebase.auth().signOut()
  .then(res => {
    const signedOutUser = {
      isSignedIn: false,
      name: '',
      email: '',
      photo: '',
      error: '',
      success: false
    }
    return signedOutUser;
  }).catch(err => {
    // An error happened.
  });
}


// export const createUserWithEmailAndPassword = () =>{
//   firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//       .then( res => {
//         const newUserInfo = {...user};
//         newUserInfo.error = '';
//         newUserInfo.success = true;
//         setUser(newUserInfo);
//         setLoggedInUser(newUserInfo);
//         history.replace(from);
//         updateUserName(user.name);
//       })
//       .catch( error => {
//         const newUserInfo = {...user};
//         newUserInfo.error = error.message;
//         newUserInfo.success = false;
//         setUser(newUserInfo);
//       });
// }

// export const SignInWithEmailAndPassword = () => {
//   firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//   .then(res => {
//     const newUserInfo = {...user};
//     newUserInfo.error = '';
//     newUserInfo.success = true;
//     setUser(newUserInfo);
//     console.log('sign in user info', res.user);
//   })
//   .catch(function(error) {
//     const newUserInfo = {...user};
//     newUserInfo.error = error.message;
//     newUserInfo.success = false;
//     setUser(newUserInfo);
//   });
// }


// const updateUserName = name =>{
//   const user = firebase.auth().currentUser;

//   user.updateProfile({
//     displayName: name
//   }).then(function() {
//     console.log('user name updated successfully')
//   }).catch(function(error) {
//     console.log(error)
//   });
// }