import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

// firebaseApp은 API키를 넣어서 초기화한 것이다.
// 현재 엘리 강의 10.2에서 사용을 했는데 전버전임.
// 일단 나는 필요가 없음