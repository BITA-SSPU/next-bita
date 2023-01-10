import React, { useState } from "react";
import firebase from "../../firebase/config";

function profile() {
  const firestore = firebase.firestore();
  let [user, setUser] = useState();
  let uid;
  let username;
  let email;
  let photoURL;
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("user logged in: ", user);
      user = user;
      uid = user.uid;
      username = user.displayName;
      email = user.email;
      photoURL = user.photoURL;
    }
  });

  return (
    <>
      <div className="w-[900px] mx-auto">
        <h1 className="text-6xl text-center mt-8">Your Profile</h1>
        <p className="text-lg text-center text-gray-500">
          Here you can edit your profile
        </p>
        <form className="flex flex-col">
          <label htmlFor="email" className="mt-7">
            Change email
          </label>
          <input typeof="email" name="email" type="email"></input>
          <label htmlFor="name" className="mt-7">
            Change name
          </label>
          <input typeof="text" name="name" type="text"></input>
          <label htmlFor="pass" className="mt-7">
            Change password
          </label>
          <input typeof="password" name="pass" type="password"></input>
        </form>
        <p></p>
      </div>
    </>
  );
}

export default profile;
