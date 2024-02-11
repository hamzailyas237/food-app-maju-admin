import React, { useState } from "react"
import Input from "../input/Input"
import classes from "./edit-profile-form.module.css"
import AppButton from "../button/AppButton"
import { useLocation, useNavigate } from "react-router-dom"
import AppModal from "../modal/AppModal"
import exclamationCircle from "../../assets/exclamationCircle.png"
import AppPhoneInput from "../phoneInput/AppPhoneInput"
import { useDispatch, useSelector } from "react-redux"
import { UpdateProfileAction } from "../../store/actions/ProfileActions"
import SuccessModal from "../../components/modal/SuccessModal"
import success from "../../assets/success.png"
import { FaRegEdit } from "react-icons/fa"
import { HideSuccessModalAction } from "../../store/actions/ModalActions"
import Loader from "../../components/loader/Loader"
import adminProfile from "../../assets/adminProfile.png"

const EditProfileForm = () => {
  const location = useLocation()
  const [fullname, setFullName] = useState(location.state[0]?.fullname)
  const [email, setEmail] = useState(location.state[0]?.email)
  const [phone, setPhone] = useState(location.state[0]?.phone.toString())
  // const [photo, setPhoto] = useState(location.state[0]?.photo)
  const [photo, setPhoto] = useState(adminProfile)
  const [defaultPhoto, setDefaultPhoto] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")

  const editProfileHandler = async () => {
    dispatch(
      UpdateProfileAction(
        {
          fullname,
          phone,
          email,
          // photo,
        },
        token
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
      <div className={`${classes["edit-profile-container"]}`}>
        <div className={`${classes["edit-public-profile"]}`}>
          <div className={`${classes["edit-profle-image-container"]}`}>
            <img
              src={
                !defaultPhoto ? adminProfile : URL.createObjectURL(defaultPhoto)
              }
              alt="Admin Profile"
            />
            <label htmlFor="add-photo">
              <FaRegEdit />
            </label>
            <input
              id="add-photo"
              type="file"
              name="photo"
              style={{ display: "none" }}
              onChange={(e) => {
                setPhoto(e.target.files[0])
                setDefaultPhoto(e.target.files[0])
              }}
            />
          </div>

          <Input
            onChange={(e) => setFullName(e.target.value)}
            type={"text"}
            placeholder={"Public Name"}
            label={"Profile Name"}
            value={fullname}
            labelStyle={{ color: "#707070" }}
            styles={{
              color: "white",
              boxShadow: "10px 20px 30px #0000003d",
              width: "45vw",
              height: "59px",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px 10px",
              backgroundColor: "#212121",
              marginTop: "10px",
            }}
          />
        </div>

        {/* <div className={`${classes["edit-other-details"]}`}>
        <Input
          type={"text"}
          placeholder={"First Name"}
          label={"First Name"}
          labelStyle={{ color: "#707070" }}
          styles={{
            color: "white",
            boxShadow: "10px 20px 30px #0000003d",
            width: "403px",
            height: "59px",
            border: "1px solid white",
            borderRadius: "5px",
            padding: "5px 10px",
            backgroundColor: "#212121",
            marginTop: "10px",
          }}
        />
        <Input
          type={"text"}
          placeholder={"Last Name"}
          label={"Last Name"}
          labelStyle={{ color: "#707070" }}
          styles={{
            color: "white",
            boxShadow: "10px 20px 30px #0000003d",
            width: "403px",
            height: "59px",
            border: "1px solid white",
            borderRadius: "5px",
            padding: "5px 10px",
            backgroundColor: "#212121",
            marginTop: "10px",
          }}
        />
      </div> */}

        <div className={`${classes["edit-other-details"]}`}>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type={"email"}
            placeholder={"Email Address"}
            label={"Email Address"}
            value={email}
            labelStyle={{ color: "#707070" }}
            styles={{
              color: "white",
              boxShadow: "10px 20px 30px #0000003d",
              width: "403px",
              height: "59px",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px 10px",
              backgroundColor: "#212121",
              marginTop: "10px",
            }}
          />
          <div>
            <label style={{ color: "#707070" }} htmlFor="phone">
              Enter Phone Number
            </label>
            <AppPhoneInput
              onChange={(data) => setPhone(data)}
              value={phone}
              inputStyles={{
                color: "white",
                boxShadow: "10px 20px 30px #0000003d",
                width: "403px",
                height: "59px",
                border: "1px solid white",
                borderRadius: "5px",
                backgroundColor: "#212121",
                marginTop: "10px",
              }}
              dropDownStyles={{
                backgroundColor: "#212121",
              }}
              containerStyles={{ marginTop: "10px" }}
            />
          </div>
        </div>

        <div className={`${classes["edit-button-container"]}`}>
          <AppButton
            onClick={() => navigate("/")}
            text={"Cancel"}
            styles={{
              color: "white",
              borderRadius: "30px",
              width: "300px",
              height: "57px",
              border: "1px solid #00B4D8",
              font: "normal normal normal 18px/27px Poppins",
              opacity: "1",
            }}
          />
          <AppModal
            text={loading ? <Loader /> : "Save"}
            heading={"Are You Sure You Want To Update Profile?"}
            icon={exclamationCircle}
            styles={{
              color: "white",
              backgroundColor: "#00B4D8",
              borderRadius: "30px",
              width: "300px",
              height: "57px",
              font: "normal normal normal 18px/27px Poppins",
              letterSpacing: "0px",
              opacity: "1",
              boxShadow: "10px 20px 30px #00B4D85C",
            }}
            headingStyle={{ width: "294px", textAlign: "center" }}
            onReject={() => navigate("/profile/edit")}
            onAccept={editProfileHandler}
            onRejectBtnText={"Cancel"}
            onAcceptBtnText={"Confirm"}
            rejectBtnStyle={{
              backgroundColor: "#1A1A1A ",
              border: "1px solid #00B4D8",
              width: "152px",
              height: "57px",
              borderRadius: "32px",
              opacity: 1,
            }}
            acceptBtnStyle={{
              backgroundColor: "#00B4D8 ",
              width: "153px",
              height: "57px",
              borderRadius: "32px",
              opacity: 1,
            }}
          />
        </div>
      </div>
    </>
  )
}

export default EditProfileForm
