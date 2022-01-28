import React from "react";
import { useNavigate } from "react-router-dom";
import css from "./login.module.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  GithubAuthProvider,
} from "firebase/auth";

const Login = () => {
  const navigation = useNavigate();
  const firebaseConfig = {
    apiKey: "AIzaSyBb71mkpUGzjcrKEViTKoV_NxBxOdUe6v8",
    authDomain: "ellie-card-maker.firebaseapp.com",
    databaseURL: "https://ellie-card-maker-default-rtdb.firebaseio.com",
    projectId: "ellie-card-maker",
    storageBucket: "ellie-card-maker.appspot.com",
    messagingSenderId: "190507871648",
    appId: "1:190507871648:web:2d31934116b6db82cf48c5",
    measurementId: "G-3GPCGWW4JX",
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();

  const googleLogoin = () => {
    const provider = new GoogleAuthProvider();

    // 로그인 창 띄우기
    signInWithRedirect(auth, provider);

    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        navigation("/main");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  const githubLogin = () => {
    const provider = new GithubAuthProvider();
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
        }
        const user = result.user;
        navigation("/main");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GithubAuthProvider.credentialFromError(error);
      });
  };

  // 로그인한 유저 정보
  const user = auth.currentUser;
  console.log(user);

  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <img src="images/logo.png" alt="로고" className={css.img} />
        <p className={css.title}>Business Card Maker</p>
        <div className={css.whiteBack}>
          <p>Login</p>
          <button className={css.button} onClick={googleLogoin} id="google">
            Google
          </button>
          <button className={css.button} onClick={githubLogin} id="github">
            Github
          </button>
        </div>
        <p>Dreams Come True</p>
      </div>
    </div>
  );
};

export default Login;
