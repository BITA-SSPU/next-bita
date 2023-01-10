import { createStore, action, computed, persist, thunk } from "easy-peasy";
import firebase from "../firebase/config";
import Router from "next/router";

const model = {};
const store = createStore(
    persist({
      isLoggedIn: false,
      login: action((state, payload) => {
        state.isLoggedIn = true;
      }),
      logout: action((state, payload) => {
        firebase
          .auth()
          .signOut()
          .then()
          .catch((error) => alert(error.message));
        Router.push("/login");
        state.isLoggedIn = false;
      }),
    })
);
export default store;
