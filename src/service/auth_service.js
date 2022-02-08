import { getAuth, signInWithPopup } from "firebase/auth";
import firebase from "firebase";

class AuthService {
  login(providerName) {
    // const authProvider = new `${providerName}AuthProvider`();
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    const auth = getAuth();

    return signInWithPopup(auth, authProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = `${providerName}AuthProvider`.credentialFromResult(
          result
        );
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = `${providerName}AuthProvider`.credentialFromError(
          error
        );
      });
  }
}

// 로그인 관련 역할을 한다.

// 로그인한 유저 정보
// const user = auth.currentUser;
// console.log(user);
