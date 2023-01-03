import { useState } from "react";
import firebase from "../firebase/config";
import { useRouter } from "next/router";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  function handleSignup(email, password) {
    console.log(email, password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        router.push("/analytics");
        console.log(res);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  }
  return (
    <main className="bg-indigo-400 container mx-auto p-7 rounded-md shadow-lg flex justify-center flex-col text-center max-w-3xl mt-8">
      <h1 className="text-center text-4xl text-white">Sign up for BITA</h1>
      <form className="text-center flex-col max-w-3xl mx-auto p-7">
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="w-full m-5 p-4"
          type="text"
          placeholder="Username"
        ></input>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="w-full m-5 p-4"
          type="email"
          placeholder="Enter your email"
        ></input>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="w-full m-5 p-4"
          type="password"
          placeholder="Enter your Password"
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSignup(email, password);
          }}
          className="bg-amber-500 p-3 mt-5 shadow-lg rounded-md text-white"
        >
          Submit
        </button>
        {success ? <div>Successfully Signed Up</div> : <div>Not Logged In</div>}
        <p>{username}</p>
        <p>{email}</p>
        <p>{password}</p>
      </form>
    </main>
  );
}
