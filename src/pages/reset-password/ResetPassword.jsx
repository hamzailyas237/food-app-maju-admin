import React, { useState } from "react";
import OtpInput from "react-otp-input";
import classes from "./reset-password.module.css";
import AppButton from "../../components/button/AppButton";
import { useNavigate } from "react-router-dom";
import { BsSend } from "react-icons/bs";
import GoBack from "../../components/goBack/GoBack";

export default function ResetPassword() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div>
        <GoBack
          styles={{ position: "absolute" }}
          onClick={() => navigate("/login")}
        />

        <div className={`${classes["reset-password-container"]}`}>
          <h1>Reset password</h1>
          <p>
            Please enter the 6 digits code sent to you registered email address
            ab***@gmail.com
          </p>
          <OtpInput
            inputStyle={{
              backgroundColor: "#A3A3A3",
              color: "white",
              border: "0.25px solid #707070",
              width: "49px",
              height: "48px",
              margin: "10px",
              borderRadius: "5px",
              opacity: 1,
            }}
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderInput={(props) => <input {...props} />}
          />
          <div className={`${classes["send-sms-container"]}`}>
            <BsSend />
            <p>Send Code By SMS</p>
          </div>
          <AppButton
            text={"NEXT"}
            onClick={() => navigate("/new-password")}
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
    </>
  );
}
