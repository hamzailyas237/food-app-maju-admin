import React, { useEffect } from "react"
import classes from "./profile.module.css"
import AppButton from "../../components/button/AppButton"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { GetProfileDataAction } from "../../store/actions/ProfileActions"
import { FaRegEdit } from "react-icons/fa"
import Loader from "../../components/loader/Loader"
import adminProfile from "../../assets/adminProfile.png"

const AdminProfle = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { token } = useSelector((state) => {
    return state.LoginReducer
  })
  useEffect(() => {
    // const token = localStorage.getItem("token");
    dispatch(GetProfileDataAction(token))
  }, [])

  const { profileData } = useSelector((state) => {
    return state.ProfileReducer
  })

  const { loading } = useSelector((state) => {
    return state.LoaderReducer
  })

  return loading ? (
    <Loader styles={{ marginTop: "50px" }} />
  ) : (
    <div className={`${classes["admin-profile-container"]}`}>
      {profileData &&
        profileData.map((data, index) => {
          return (
            <div key={index}>
              <div className={`${classes["admin-profle-inner-container"]}`}>
                <div className={`${classes["edit-profle-image-container"]}`}>
                  {/* <img
                    src={`https://ultra-fitness-development.s3.ap-south-1.amazonaws.com/${data.user.photo}`}
                    alt="Admin Profile"
                  /> */}
                  <img
                    src={`${data?.photo ? data?.photo : adminProfile}`}
                    alt="Admin Profile"
                  />
                  <p
                    onClick={() =>
                      navigate("/profile/edit", {
                        state: profileData && profileData,
                      })
                    }
                  >
                    <FaRegEdit />
                  </p>
                </div>
                <div className={`${classes["public-profile-container"]}`}>
                  <p className={`${classes["font-gray"]}`}>
                    Public Profile Name
                  </p>
                  <p className={`${classes["font-white"]}`}>{data?.fullname}</p>
                </div>
              </div>
              <div className={`${classes["profile-detail-container"]}`}>
                <div className={`${classes["profile-detail-inner-container"]}`}>
                  {/* <div>
                    <p className={`${classes["font-gray"]}`}>First Name</p>
                    <p className={`${classes["font-white"]}`}>Mark</p>
                  </div> */}
                  <div>
                    <p className={`${classes["font-gray"]}`}>Email Address</p>
                    <p className={`${classes["font-white"]}`}>{data?.email}</p>
                  </div>
                </div>

                <div className={`${classes["profile-detail-inner-container"]}`}>
                  {/* <div>
                    <p className={`${classes["font-gray"]}`}>Last Name</p>
                    <p className={`${classes["font-white"]}`}>Henry</p>
                  </div> */}
                  <div>
                    <p className={`${classes["font-gray"]}`}>Contact No.</p>
                    <p className={`${classes["font-white"]}`}>{data?.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      <AppButton
        onClick={() =>
          navigate("/profile/edit", { state: profileData && profileData })
        }
        text={"Edit"}
        styles={{
          color: "white",
          backgroundColor: "#00B4D8",
          borderRadius: "30px",
          width: "321px",
          height: "57px",
          font: "normal normal normal 18px/27px Poppins",
          letterSpacing: "0px",
          opacity: "1",
          marginTop: "25px",
          boxShadow: "10px 20px 30px #00B4D85C",
        }}
      />
      <hr
        style={{
          color: "#707070",
          width: "95%",
          marginTop: "50px",
        }}
      />
    </div>
  )
}

const Profile = () => {
  return (
    <div>
      <AdminProfle />
    </div>
  )
}

export default Profile
