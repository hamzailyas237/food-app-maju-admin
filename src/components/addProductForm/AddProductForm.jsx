import React, { useState } from "react"
import classes from "./add-product-form.module.css"
import Input from "../input/Input"
import TextArea from "../textArea/TextArea"
import UploadPhoto from "../uploadPhoto/UploadPhoto"
import AppButton from "../button/AppButton"
import AppModal from "../modal/AppModal"
import { useNavigate } from "react-router-dom"
import exclamationCircle from "../../assets/exclamationCircle.png"
import { useDispatch, useSelector } from "react-redux"
import { AddProductAction } from "../../store/actions/RestaurantActions"
import { HideSuccessModalAction } from "../../store/actions/ModalActions"
import SuccessModal from "../modal/SuccessModal"
import success from "../../assets/success.png"
import Loader from "../loader/Loader"

const AddProductForm = ({ title }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [stockQuantity, setStockQuantity] = useState("")
  const [isFeatured, setIsFeatured] = useState(false)
  const [delivery, setDelivery] = useState("")
  const [itemLocation, setItemLocation] = useState("")
  const [returnDuration, setReturnDuration] = useState("")
  const [shippingAndHandling, setShippingAndHandling] = useState("")
  const [shippingTo, setShippingTo] = useState("")
  const [images, setImages] = useState()
  const [shippingDetails, setShippingDetails] = useState({})
  const [defaultImages, setDefaultImages] = useState([])

  const addProductHandler = () => {
    const token = localStorage.getItem("token")
    dispatch(
      AddProductAction(
        {
          name,
          price,
          description,
          stockQuantity,
          images,
          shippingDetails,
          isFeatured,
        },
        token
      )
    )
  }

  const getImages = (data) => {
    setImages(data)
    setDefaultImages(Array.from(data))
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
            navigate("/admin-products")
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
      <div className={`${classes["add-product-form"]}`}>
        <div style={{ color: "white" }}></div>
        <Input
          onChange={(e) => setName(e.target.value)}
          type={"text"}
          placeholder={"Restaurant Name"}
          label={"Restaurant Name"}
          styles={{
            color: "white",
            boxShadow: "10px 20px 30px #0000003d",
            width: "421px",
            height: "59px",
            border: "1px solid white",
            borderRadius: "5px",
            padding: "5px 10px",
            backgroundColor: "#212121",
            marginTop: "10px",
          }}
          labelStyle={{ color: "white" }}
        />
        <Input
          onChange={(e) => setName(e.target.value)}
          type={"text"}
          placeholder={"Location/Address"}
          label={"Restaurant Location"}
          styles={{
            color: "white",
            boxShadow: "10px 20px 30px #0000003d",
            width: "421px",
            height: "59px",
            border: "1px solid white",
            borderRadius: "5px",
            padding: "5px 10px",
            backgroundColor: "#212121",
            marginTop: "10px",
          }}
          labelStyle={{ color: "white" }}
        />
        <Input
          onChange={(e) => setPrice(e.target.value)}
          type={"text"}
          placeholder={"Phone"}
          label={"Phone"}
          styles={{
            color: "white",
            boxShadow: "10px 20px 30px #0000003d",
            width: "421px",
            height: "59px",
            border: "1px solid white",
            borderRadius: "5px",
            padding: "5px 10px",
            backgroundColor: "#212121",
            marginTop: "10px",
          }}
          labelStyle={{ color: "white" }}
        />
        <Input
          onChange={(e) => setPrice(e.target.value)}
          type={"text"}
          placeholder={"Total Dining Seats"}
          label={"Total Seats"}
          styles={{
            color: "white",
            boxShadow: "10px 20px 30px #0000003d",
            width: "421px",
            height: "59px",
            border: "1px solid white",
            borderRadius: "5px",
            padding: "5px 10px",
            backgroundColor: "#212121",
            marginTop: "10px",
          }}
          labelStyle={{ color: "white" }}
        />

        <div className={`${classes["upload-photo"]}`}>
          <div className={`${classes["upload-photo-inner"]}`}>
            <p>Restaurant Image</p>
            <small>
              (Preferred Image Size: 1234 pixel x 1234 pixels. Should not be
              more than xyz MB)
            </small>
          </div>
          <UploadPhoto
            getImages={getImages}
            images={Array.isArray(defaultImages) ? defaultImages : undefined}
          />
        </div>
        {/* <TextArea
          onChange={(e) => setDescription(e.target.value)}
          styles={{
            color: "white",
            boxShadow: "10px 20px 30px #0000003d",
            width: "421px",
            height: "129px",
            border: "1px solid white",
            borderRadius: "5px",
            backgroundColor: "#212121",
            padding: "5px 10px",
          }}
          label={"Description"}
          labelStyle={{ color: "white" }}
        /> */}

        <div className={`${classes["upload-photo"]}`}>
          <div className={`${classes["upload-photo-inner"]}`}>
            <p>Upload Up to 12 Photos</p>
            <small>
              (Preferred Image Size: 1234 pixel x 1234 pixels. Should not be
              more than xyz MB)
            </small>
          </div>
          <UploadPhoto
            getImages={getImages}
            images={Array.isArray(defaultImages) ? defaultImages : undefined}
          />
        </div>

        <div className={`${classes["add-product-button-container"]}`}>
          <AppModal
            text={loading ? <Loader /> : title}
            heading={"Are You Sure You Want To Add Your Product?"}
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
            }}
            headingStyle={{ width: "294px", textAlign: "center" }}
            onReject={() => navigate("/product/add")}
            onAccept={addProductHandler}
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

          <AppButton
            onClick={() => navigate("/admin-products")}
            text={"Cancel"}
            styles={{
              color: "white",
              backgroundColor: "#1A1A1A ",
              border: "1px solid #00B4D8",
              borderRadius: "30px",
              width: "300px",
              height: "57px",
              font: "normal normal normal 18px/27px Poppins",
              letterSpacing: "0px",
              opacity: "1",
            }}
          />
        </div>
      </div>
    </>
  )
}

export default AddProductForm
