import React, { useContext, useEffect, useRef, useState } from "react";
import AuthCtx from "../../context/auth.context";
import { useLocation, useNavigate } from "react-router";
import { LocalStorage } from "../../services/LocalStorage";
import api from "../../services/api";

function UserLogin() {
  // Auth
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get("page");

  const firstSubmitRef = useRef(true);
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setIsLoggedIn, setLoginData } = useContext(AuthCtx);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isUserNameValid, setIsUserNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  useEffect(() => {
    if (userName) setIsUserNameValid(true);
  }, [userName]);

  useEffect(() => {
    if (email) setIsEmailValid(true);
  }, [email]);

  useEffect(() => {
    if (password) setIsPasswordValid(true);
  }, [password]);

  async function submitHandler() {
    if (isEmailValid && isPasswordValid) {
      try {
        const res = await api.post("AuthenticateAdmin", {
          UserName: email,
          Password: password,
        });

        if (res?.data?.IsAuthenticated) {
          setIsLoggedIn(true);

          setLoginData({
            type: "user",
            email: emailRef.current.value,
          });
          LocalStorage.auth = JSON.stringify({
            isLoggedIn: true,
            type: "user",
            email: emailRef.current.value,
          });

          if (page) navigate(page);
          else navigate("/");
        }
      } catch (error) {}
    }

    firstSubmitRef.current = false;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-8 rounded-lg">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            ref={emailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field w-[20rem] px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={submitHandler}
          className="btn-primary w-full py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default UserLogin;