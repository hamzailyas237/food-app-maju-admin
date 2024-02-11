import React, { useState } from "react";
import Input from "../../components/input/Input";
import classes from "./new-password.module.css";
import AppButton from "../../components/button/AppButton";
import { useNavigate } from "react-router-dom";
import GoBack from "../../components/goBack/GoBack";
import { useDispatch, useSelector } from "react-redux";
import SuccessModal from "../../components/modal/SuccessModal";
import { HideSuccessModalAction } from "../../store/actions/ModalActions";
import success from "../../assets/success.png";

const NewPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // const updatePasswordHandler = () => {
  //   dispatch(
  //     ResetPasswordAction({ password, passwordConfirm }, token, navigate)
  //   );
  // };

  const { modalText, showModal } = useSelector((state) => {
    return state.ModalReducer;
  });

  return (
    <>
      {showModal && (
        <SuccessModal
          open={showModal}
          heading={modalText}
          icon={success}
          closeBtnText={"Close"}
          closeBtnAction={() => {
            dispatch(HideSuccessModalAction());
            navigate("/login");
            localStorage.clear();
          }}
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
      <div>
        <GoBack
          styles={{ position: "absolute" }}
          onClick={() => navigate("/login")}
        />
        <div className={`${classes["new-passsword-container"]}`}>
          <div>
            <h1>Create New Password</h1>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type={"password"}
              placeholder={"New Password"}
              styles={{
                boxShadow: "10px 20px 30px #0000003d",
                width: "350px",
                height: "55px",
                borderRadius: "5px",
                padding: "5px 10px",
                backgroundColor: "#212121",
                marginTop: "10px",
                paddingLeft: "20px",
              }}
            />
            <Input
              onChange={(e) => setPasswordConfirm(e.target.value)}
              type={"password"}
              placeholder={"Confirm Password"}
              styles={{
                boxShadow: "10px 20px 30px #0000003d",
                width: "350px",
                height: "55px",
                borderRadius: "5px",
                padding: "5px 10px",
                backgroundColor: "#212121",
                marginTop: "10px",
                paddingLeft: "20px",
              }}
            />
          </div>
          <AppButton
            // onClick={updatePasswordHandler}
            text={"Update Password"}
            styles={{
              color: "white",
              backgroundColor: "#00B4D8",
              borderRadius: "30px",
              width: "321px",
              height: "57px",
              font: "normal normal normal 18px/27px Poppins",
              letterSpacing: "0.13px",
              opacity: "1",
              marginTop: "50px",
              boxShadow: "10px 20px 30px #00B4D85C",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default NewPassword;
