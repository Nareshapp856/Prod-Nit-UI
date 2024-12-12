import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { loginDispatch } from "../../../redux/actions/auth";
import {
  setPassword,
  setUserName,
} from "../../../redux/slices/user/loginSlice";
import AuthMessageHandler from "./loginForm/AuthMessageHandler";
import { SER_AO_INSTANCE } from "../../../services/auth/LoginObservers";

function LoginFormComponent({
  _isAuthenticated,
  userName,
  password,
  isFormValid,
  formState,
  login,
  onNameChange,
  onPwdChange,
}) {
  const SER_AO_loginListener = (res) => {
    const role = res?.data?.role;

    if (
      res?.data?.UserName === "murthy@nareshit.com" ||
      res?.data?.UserName === "satyanarayanakrv111@gmail.com" ||
      res?.data?.UserName === "rudrarajubarathsaivyaas@gmail.com" ||
      res?.data?.UserName === "gangadharpola9182@gmail.com" ||
      res?.data?.UserName === "asd@gmail.com"
    ) {
      navigate("/test");
    } else if (role === "student") navigate("/");
    else if (role === "faculty") navigate("/attendance-tracker");
    else console.log("un authorized");
  };

  SER_AO_INSTANCE.SER_AO_subescribe(SER_AO_loginListener);
  const navigate = useNavigate();

  const [pwdVisibility, setPwdVisibility] = useState(false);

  const mouseUpHandler = () => {
    setPwdVisibility(true);
  };

  const mouseDownHandler = () => {
    setPwdVisibility(false);
  };

  const submitHandler = () => {
    login({ userName: userName.value?.trim() || "", Password: password.value });
  };

  return (
    <div className="py-12 px-5 flex flex-col text-[#070707] montserrat-md">
      <h1 className="w-full text-center text-[2rem]">Sign In</h1>

      <div
        style={{ marginTop: formState === "reject" ? "1.2rem" : "2rem" }}
        className="text-base"
      >
        {formState === "reject" && <AuthMessageHandler />}
        <div className="space-y-6">
          <div className="w-full flex flex-col">
            <label htmlFor="uname">
              <span>User name</span>
              <span className="ms-[.1rem]">*</span>
            </label>
            <input
              id="uname"
              type="uname"
              name="uname"
              placeholder="john Doe"
              value={userName.value}
              onChange={(e) => onNameChange({ value: e.target.value })}
              style={{
                borderBlockEnd:
                  userName.isDirty && userName.isValid
                    ? "2px solid #070707"
                    : userName.isDirty
                    ? "2px solid #ed2224"
                    : "2px solid #070707",
              }}
              className="p-2 mt-1 bg-blue-800 bg-opacity-[.07] rounded-t outline-none"
            />
          </div>

          <div className="w-full flex flex-col relative">
            <label htmlFor="pwd">
              <span>Password</span>
              <span className="ms-[.1rem]">*</span>
            </label>
            <input
              id="pwd"
              type={pwdVisibility ? "text" : "password"}
              name="pwd"
              placeholder="OyujiWrSN"
              value={password.value}
              onChange={(e) => onPwdChange({ value: e.target.value })}
              style={{
                borderBlockEnd:
                  password.isDirty && password.isValid
                    ? "2px solid #070707"
                    : password.isDirty
                    ? "2px solid #ed2224"
                    : "2px solid #070707",
              }}
              className="p-2 mt-1 bg-blue-800 bg-opacity-[.07] rounded-t border-b-[#070707] border-b-2 outline-none"
            />
            <span
              className="absolute bottom-2 right-2 cursor-pointer z-10"
              onMouseDown={mouseUpHandler}
              onMouseUp={mouseDownHandler}
            >
              {pwdVisibility ? (
                <VisibilityIcon sx={{ color: "#070707", opacity: ".90" }} />
              ) : (
                <VisibilityOffIcon sx={{ color: "#070707", opacity: ".70" }} />
              )}
            </span>
          </div>
        </div>

        <div className="w-full flex justify-center my-14">
          <button
            disabled={!isFormValid}
            onClick={submitHandler}
            className="text-lg w-40 h-[2.6rem] bg-blue-800 bg-opacity-[.14] hover:bg-opacity-[.18] rounded border-b-[#070707] border-b-2 cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  _userName: state.user.userName,
  _isAuthenticated: state.user.isAuthenticated,

  userName: state.login.userName,
  password: state.login.password,
  formState: state.user.state,
  isFormValid: state.login.isFormValid,
});

const mapDispatch = {
  login: loginDispatch,
  onNameChange: setUserName,
  onPwdChange: setPassword,
};

const LoginForm = connect(mapState, mapDispatch)(LoginFormComponent);

export default LoginForm;
