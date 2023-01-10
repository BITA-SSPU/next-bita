import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useStoreActions, useStoreState } from "easy-peasy";

import firebase from "../../firebase/config";

function Login() {
  let [user, setUser] = useState(null);
  let [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const logged = useStoreState((state) => state.isLoggedIn);
  const login = useStoreActions((actions) => actions.login);

  function handleLogin(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        user = userCredential.user;
        console.log(user);
        router.push("/user/welcome");

        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        console.log(error);
        setError(error);
      });
  }

  return (
    <>
      {user && (
        <div
          class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span class="font-medium">
            Successfully registed {user.user.email}
          </span>
        </div>
      )}
      {error && (
        <div
          class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span class="font-medium">{error.message}</span>
        </div>
      )}
      <div className="mx-auto w-screen md:w-[800px] my-32">
        <h1 className="text-6xl mb-7">Login to BITA</h1>

        <label
          for="input-group-1"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Email
        </label>
        <div class="relative mb-6">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="input-group-1"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@example.com"
          />
        </div>
        <label
          for="website-admin"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Enter your password
        </label>
        <div class="flex">
          <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            *
          </span>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
          />
        </div>
        <button
          type="button"
          class="text-white mt-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={(e) => {
            e.preventDefault();
            handleLogin(email, password);
            login();
          }}
        >
          Submit
          <svg
            aria-hidden="true"
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
}

export default Login;
