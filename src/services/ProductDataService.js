import firebase from "../firebase";

const db = firebase.ref("/products");

class ProductDataService {
  getAll() {
    return db;
  }

  create(product) {
    return db.push(product);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new ProductDataService();