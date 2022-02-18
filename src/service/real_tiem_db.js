import firebaseApp from "./firebase";
import { getDatabase, ref, remove, set } from "firebase/database";

class RealTimeDB {
  constructor() {
    this.db = getDatabase(firebaseApp);
  }

  saveCard(userId, user) {
    set(ref(this.db, `${userId}/users/${user.userId}`), {
      user,
    });
  }
  removeCard(userId, user) {
    remove(ref(this.db, `${userId}/users/${user.userId}`));
  }
}

export default RealTimeDB;
