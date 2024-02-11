import React, { useState } from "react"
import classes from "./featured-table.module.css"
import GoBack from "../goBack/GoBack"
import AppCheckbox from "../checkbox/AppCheckbox"
import AppModal from "../modal/AppModal"
import exclamationCircle from "../../assets/exclamationCircle.png"
import { useNavigate } from "react-router-dom"
import { EditProductAction } from "../../store/actions/RestaurantActions"
import { useDispatch, useSelector } from "react-redux"
import { HideSuccessModalAction } from "../../store/actions/ModalActions"
import SuccessModal from "../modal/SuccessModal"
import success from "../../assets/success.png"
import Loader from "../../components/loader/Loader"

const FeaturedTable = ({ id }) => {
  const navigate = useNavigate()
  const [isFeatured, setIsFeatured] = useState("")
  const [duration, setDuration] = useState("")
  const dispatch = useDispatch()

  const makeProductFeatured = () => {
    const token = localStorage.getItem("token")
    dispatch(
      EditProductAction(
        {
          isFeatured,
          duration,
        },
        token,
        id
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
            navigate("/admin-product-details")
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
      <div className={`${classes["featured-container"]}`}>
        <div className={`${classes["featured-container-header"]}`}>
          <div>
            <h1>Make it Featured</h1>
            <p className={`${classes["para"]}`}>
              Your post will appear in featured post section for the number of
              week you will select below
            </p>
          </div>
          <GoBack
            onClick={() => navigate("/admin-product-details")}
            styles={{ position: "static" }}
          />
        </div>

        <div>
          <div className={`${classes["featured-time"]}`}>
            <p>1 Week</p>
            <AppCheckbox
              onChange={(e) => {
                setDuration(e.target.value)
                setIsFeatured(true)
              }}
              value={"1-week"}
              styles={{
                color: "#00B4D8 !important",
                border: "1px solid #00B4D8",
                borderRadius: "5px",
              }}
            />
          </div>

          <div className={`${classes["featured-time"]}`}>
            <p>2 Weeks</p>
            <AppCheckbox
              onChange={(e) => {
                setDuration(e.target.value)
                setIsFeatured(true)
              }}
              value={"2-weeks"}
              styles={{
                color: "#00B4D8 !important",
                border: "1px solid #00B4D8",
                borderRadius: "5px",
              }}
            />
          </div>

          <div className={`${classes["featured-time"]}`}>
            <p>3 Weeks</p>
            <AppCheckbox
              onChange={(e) => {
                setDuration(e.target.value)
                setIsFeatured(true)
              }}
              value={"3-weeks"}
              styles={{
                color: "#00B4D8 !important",
                border: "1px solid #00B4D8",
                borderRadius: "5px",
              }}
            />
          </div>

          <div className={`${classes["featured-time"]}`}>
            <p>4 Weeks</p>
            <AppCheckbox
              onChange={(e) => {
                setDuration(e.target.value)
                setIsFeatured(true)
              }}
              value={"4-weeks"}
              styles={{
                color: "#00B4D8 !important",
                border: "1px solid #00B4D8",
                borderRadius: "5px",
              }}
            />
          </div>

          <div className={`${classes["featured-time"]}`}>
            <p>Indefinite Weeks</p>
            <AppCheckbox
              onChange={(e) => {
                setDuration(e.target.value)
                setIsFeatured(true)
              }}
              value={"Indefinite Weeks"}
              styles={{
                color: "#00B4D8 !important",
                border: "1px solid #00B4D8",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>

        <AppModal
          text={loading ? <Loader /> : "Apply"}
          heading={"Are You Sure You Want To Apply Changes?"}
          icon={exclamationCircle}
          styles={{
            color: "white",
            backgroundColor: "#00B4D8",
            borderRadius: "5px",
            width: "184px",
            height: "57px",
            font: "normal normal 300 16px/25px Poppins",
            letterSpacing: "0px",
            opacity: "1",
            marginTop: "15px",
          }}
          headingStyle={{ width: "294px", textAlign: "center" }}
          onReject={() => navigate("/product/featured")}
          onAccept={makeProductFeatured}
          onRejectBtnText={"Cancel"}
          onAcceptBtnText={"Confirm"}
          rejectBtnStyle={{
            backgroundColor: "#1A1A1A ",
            border: "1px solid #00B4D8",
            width: "152px",
            height: "64px",
            borderRadius: "10px",
            opacity: 1,
          }}
          acceptBtnStyle={{
            backgroundColor: "#00B4D8 ",
            width: "152px",
            height: "64px",
            borderRadius: "10px",
            opacity: 1,
          }}
        />
      </div>
    </>
  )
}

export default FeaturedTable
