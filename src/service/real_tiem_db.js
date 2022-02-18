import firebaseApp from "./firebase";
import { getDatabase, ref, remove, set, onValue, off } from "firebase/database";

class RealTimeDB {
  constructor() {
    this.db = getDatabase(firebaseApp);
  }

  saveCard(userId, user) {
    set(ref(this.db, `${userId}/users/${user.userId}`), user);
  }
  removeCard(userId, user) {
    remove(ref(this.db, `${userId}/users/${user.userId}`));
  }

  syncCards(userId, onUpdate) {
    const dbRef = ref(this.db, `${userId}/users`);
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return () => off(dbRef);
  }
}

export default RealTimeDB;
