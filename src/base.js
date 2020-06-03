import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.inicializeApp({
  apiKey: "AIzaSyCbJGMdOd0F63I3vkU2LUBE-FvQczNKfXM",
  authDomain: "stands-61e4c.firebaseapp.com",
  databaseURL: "https://stands-61e4c.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
