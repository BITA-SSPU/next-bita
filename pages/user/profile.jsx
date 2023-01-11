import React, { useState, useEffect } from "react";
import firebase from "../../firebase/config";
import SideNav from "../../components/layout-comps/SideNav";

function profile() {
  const firestore = firebase.firestore();
  let [user, setUser] = useState();
  let [email, setEmail] = useState();
  let [name, setName] = useState();
  let [phone, setPhone] = useState();
  let [uid, setUid] = useState();
  let [password, setPassword] = useState();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("user logged in: ", user);
        setEmail(user.email);
        setName(user.displayName);
        setPhone(user.phoneNumber);
        setUid(user.uid);
      }
    });
  }, []);

  const handleUpdate = async (email, phoneNumber, name, uid) => {
    const currentUser = firebase.auth().currentUser;
    await currentUser.updateEmail(email);

    await currentUser.updateProfile({ displayName: name });
    console.log(
      currentUser.email,
      currentUser.phoneNumber,
      currentUser.displayName
    );
    // firebase
    //   .auth()
    //   .currentUser.updateProfile(uid, {
    //     email: email,
    //     displayName: name,
    //     phoneNumber: phoneNumber,
    //   })
    //   .then((res) => {
    //     alert(res + " updated!");
    //   });
  };

  return (
    <>
      <SideNav>
        <div className="w-[900px] mx-auto">
          <h1 className="text-6xl text-center mt-8">Your Profile</h1>
          <p className="text-lg text-center text-gray-500">
            Here you can edit your profile
          </p>
          <form className="flex flex-col">
            <img
              class="w-32 h-32 mt-7 rounded-full object-cover mx-auto"
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Rounded avatar"
            />
            <label htmlFor="email" className="mt-7">
              Change email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              typeof="email"
              name="email"
              type="email"
              value={email}
            ></input>
            <label htmlFor="name" className="mt-7">
              Change name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              typeof="text"
              name="name"
              type="text"
              value={name}
            ></input>
            <label htmlFor="name" className="mt-7">
              Change Phone Number
            </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              typeof="text"
              name="name"
              type="text"
              value={phone}
            ></input>
            <label htmlFor="pass" className="mt-7">
              Change password
            </label>
            <input typeof="password" name="pass" type="password"></input>
            <button
              type="button"
              class="text-white mt-8 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={(e) => {
                handleUpdate(email, phone, name, uid);
              }}
            >
              Update Changes
            </button>
          </form>
          <p></p>
        </div>
      </SideNav>
    </>
  );
}

export default profile;
