import firebaseApp from "./firebase";
import { getDatabase, ref, set, onValue } from "firebase/database";

class realTimeDB {
  constructor() {
    this.db = getDatabase(firebaseApp);
  }
  // 기본 쓰기 작업
  writeUserData(userId, name, company, theme, title, email, message, imageUrl) {
    set(ref(this.db, "users/" + userId), {
      name,
      company,
      theme,
      title,
      email,
      message,
      imageUrl,
    });
  }
  // 하나의 데이터 읽기
  readUserData(userId) {
    const currentRef = ref(this.db, "posts/" + userId);

    onValue(currentRef, (snapshot) => {
      const data = snapshot.val();
    });
  }
}
