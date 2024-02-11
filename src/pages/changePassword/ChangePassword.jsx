import React, { useState } from "react"
import Input from "../../components/input/Input"
import classes from "./change-password.module.css"
import AppButton from "../../components/button/AppButton"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { ResetPasswordAction } from "../../store/actions/AuthActions"
import SuccessModal from "../../components/modal/SuccessModal"
import { HideSuccessModalAction } from "../../store/actions/ModalActions"
import success from "../../assets/success.png"
import Loader from "../../components/loader/Loader"

const ChangePassword = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const { profileData } = useSelector((state) => {
    return state.ProfileReducer
  })

  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")

  const updatePasswordHandler = () => {
    dispatch(
      ResetPasswordAction(
        {
          currentPassword,
          newPassword,
          //  passwordConfirm
          email: profileData[0]?.email,
        },
        token,
        navigate
      )
    )
  }

  const { modalText, showModal } = useSelector((state) => {
    return state.ModalReducer
  })

  const { loading } = useSelector((state) => {
    return state.LoaderReducer
  })

  return (
    <>
      {showModal && (
        <SuccessModal
          open={showModal}
          heading={modalText}
          icon={success}
          closeBtnText={"Close"}
          closeBtnAction={() => {
            dispatch(HideSuccessModalAction())
            navigate("/")
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
      <div className={`${classes["new-passsword-container"]}`}>
        <div>
          <h1>Change Password</h1>
          <Input
            onChange={(e) => setCurrentPassword(e.target.value)}
            type={"password"}
            placeholder={"Current Password"}
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
            onChange={(e) => setNewPassword(e.target.value)}
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
          {/* <Input
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
          /> */}
        </div>
        <AppButton
          onClick={updatePasswordHandler}
          text={loading ? <Loader /> : "Update Password"}
          styles={{
            color: "white",
            backgroundColor: "#00B4D8",
            borderRadius: "30px",
            width: "321px",
            height: "57px",
            padding: "15px 0px",
            font: "normal normal normal 18px/27px Poppins",
            letterSpacing: "0.13px",
            opacity: "1",
            marginTop: "50px",
            boxShadow: "10px 20px 30px #00B4D85C",
          }}
        />
      </div>
    </>
  )
}

export default ChangePassword
