import React, { useState } from "react";
import classes from "./login.module.css";
import Input from "../../components/input/Input";
import AppButton from "../../components/button/AppButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../store/actions/AuthActions";
import SuccessModal from "../../components/modal/SuccessModal";
import exclamationCircle from "../../assets/exclamationCircle.png";
import { HideSuccessModalAction } from "../../store/actions/ModalActions";
import Loader from "../../components/loader/Loader";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(LoginAction({ email, password }, navigate));
  };

  const { modalText, showModal } = useSelector((state) => {
    return state.ModalReducer;
  });

  const { loading } = useSelector((state) => {
    return state.LoaderReducer;
  });

  return (
    <>
      {showModal && (
        <SuccessModal
          open={showModal}
          heading={modalText}
          icon={exclamationCircle}
          closeBtnText={"Close"}
          closeBtnAction={() => dispatch(HideSuccessModalAction())}
          closeBtnStyle={{
            backgroundColor: "#00b4d8",
            boxShadow: "0px 16px 30px #14A3844D",
            width: "130px",
            height: "48px",
            borderRadius: "30px",
            opacity: 1,
          }}
          headingStyle={{
            textAlign: "center",
          }}
        />
      )}

      <div className={`${classes["login-container"]}`}>
        <div className={`${classes["login-inner-container"]}`}>
          <div>
            <h1>Admin / Manager Login</h1>
          </div>
          <div>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type={"text"}
              placeholder={"Email or Phone"}
              styles={{
                boxShadow: "10px 20px 30px #0000003d",
                width: "350px",
                height: "55px",
                borderRadius: "5px",
                padding: "5px 10px",
                backgroundColor: "#212121",
                marginTop: "10px",
              }}
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type={"password"}
              placeholder={"Enter Password"}
              styles={{
                boxShadow: "10px 20px 30px #0000003d",
                width: "350px",
                height: "55px",
                borderRadius: "5px",
                padding: "5px 10px",
                backgroundColor: "#212121",
                marginTop: "10px",
              }}
            />
          </div>
          <div className={`${classes["login-remember"]}`}>
            {/* <div>
              <input type="checkbox" />
              <small>Remember Me</small>
            </div>
            <div>
              <AppModal
                text={"Forgot Password?"}
                heading={"Forgot Password?"}
                body={"Are you sure you want to forgot password?"}
                icon={awesomeQuestionCircle}
                styles={{ color: "#00B4D8", cursor: "pointer" }}
                headingStyle={{ width: "233px" }}
                onReject={() => navigate("/login")}
                onAccept={() => navigate("/reset-password")}
                onRejectBtnText={"No"}
                onAcceptBtnText={"Yes"}
                rejectBtnStyle={{
                  backgroundColor: "#00b4d8",
                  boxShadow: "0px 10px 20px #00b4d8",
                  width: "130px",
                  height: "48px",
                  borderRadius: "30px",
                  opacity: 1,
                }}
                acceptBtnStyle={{
                  backgroundColor: "#e4201e",
                  boxShadow: "0px 10px 20px #e4201e29",
                  width: "130px",
                  height: "48px",
                  borderRadius: "30px",
                  opacity: 1,
                }}
              />
            </div> */}
          </div>
          <div className={`${classes["login-button-container"]}`}>
            <AppButton
              onClick={loginHandler}
              text={loading ? <Loader /> : "Login"}
              styles={{
                color: "white",
                backgroundColor: "#00B4D8",
                borderRadius: "30px",
                width: "321px",
                height: "57px",
                font: "normal normal normal 18px/27px Poppins",
                letterSpacing: "0px",
                opacity: "1",
                marginTop: "10px",
                boxShadow: "10px 20px 30px #00B4D85C",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
