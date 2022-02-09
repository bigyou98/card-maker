import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

class AuthService {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  login(providerName) {
    const authProvider = this.getProvider(providerName);

    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  logout() {
    signOut(this.firebaseAuth)
      .then(() => {
        console.log("로그아웃됨");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onAuthChange() {}

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return this.googleProvider;
      case "Github":
        return this.githubProvider;
      default:
        throw new Error("에러발생!");
    }
  }
}

export default AuthService;
