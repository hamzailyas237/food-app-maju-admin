import React, { useState } from "react"
import classes from "./edit-product-form.module.css"
import Input from "../input/Input"
import TextArea from "../textArea/TextArea"
import UploadPhoto from "../uploadPhoto/UploadPhoto"
import AppButton from "../button/AppButton"
import AppModal from "../modal/AppModal"
import { useNavigate } from "react-router-dom"
import exclamationCircle from "../../assets/exclamationCircle.png"
import { useDispatch, useSelector } from "react-redux"
import { EditProductAction } from "../../store/actions/RestaurantActions"
import SuccessModal from "../modal/SuccessModal"
import { HideSuccessModalAction } from "../../store/actions/ModalActions"
import success from "../../assets/success.png"
import Loader from "../loader/Loader"

const EditProductForm = ({ title, currentProduct }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [name, setName] = useState(currentProduct && currentProduct.name)
  const [price, setPrice] = useState(currentProduct && currentProduct.price)
  const [description, setDescription] = useState(
    currentProduct && currentProduct.description
  )
  const [stockQuantity, setStockQuantity] = useState(
    currentProduct && currentProduct.stockQuantity
  )

  const [delivery, setDelivery] = useState(
    currentProduct && currentProduct?.shippingDetails?.delivery
  )
  const [itemLocation, setItemLocation] = useState(
    currentProduct && currentProduct?.shippingDetails?.itemLocation
  )
  const [returnDuration, setReturnDuration] = useState(
    currentProduct && currentProduct?.shippingDetails?.returnDuration
  )
  const [shippingAndHandling, setShippingAndHandling] = useState(
    currentProduct && currentProduct?.shippingDetails?.shippingAndHandling
  )
  const [shippingTo, setShippingTo] = useState(
    currentProduct && currentProduct?.shippingDetails?.shippingTo
  )
  const [images, setImages] = useState(currentProduct && currentProduct.images)
  const [defaultImages, setDefaultImages] = useState([])

  const [shippingDetails, setShippingDetails] = useState({
    delivery,
    itemLocation,
    returnDuration,
    shippingAndHandling,
    shippingTo,
  })
  const editProductHandler = () => {
    const token = localStorage.getItem("token")
    dispatch(
      EditProductAction(
        {
          name,
          price,
          description,
          stockQuantity,
          images,
          shippingDetails,
        },
        token,
        currentProduct._id
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
      <div className={`${classes["add-product-form"]}`}>
        <div style={{ color: "white" }}></div>
        <Input
          onChange={(e) => setName(e.target.value)}
          value={currentProduct && currentProduct.name}
          type={"text"}
          placeholder={"Product Name"}
          label={"Product Name"}
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
          value={currentProduct && currentProduct.price}
          type={"text"}
          placeholder={"Price"}
          label={"Price"}
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

        <TextArea
          onChange={(e) => setDescription(e.target.value)}
          value={currentProduct && currentProduct.description}
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
        />

        <Input
          onChange={(e) => setStockQuantity(e.target.value)}
          value={currentProduct && currentProduct.stockQuantity}
          type={"text"}
          placeholder={"In Stock"}
          label={"In Stock"}
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
            <p>Upload Up to 12 Photos</p>
            <small>
              (Preferred Image Size: 1234 pixel x 1234 pixels. Should not be
              more than xyz MB)
            </small>
          </div>
          <UploadPhoto
            getImages={getImages}
            images={defaultImages.length ? defaultImages : images}
          />
        </div>

        <div className={`${classes["shipping-details-container"]}`}>
          <div className={`${classes["shipping-details-header"]}`}>
            <h1>Enter Shipping Details: </h1>
            <div className={`${classes["shipping-details-header-inner"]}`}>
              <input type="checkbox" />
              <p>Use saved shipping details</p>
            </div>
          </div>

          <div className={`${classes["shipping-details-container"]}`}>
            <div className={`${classes["shipping-form"]}`}>
              <Input
                onChange={(e) => {
                  setItemLocation(e.target.value)
                  setShippingDetails({
                    ...shippingDetails,
                    itemLocation: e.target.value,
                  })
                }}
                value={
                  currentProduct &&
                  currentProduct?.shippingDetails?.itemLocation
                }
                type={"text"}
                placeholder={"Item location"}
                label={"Item location"}
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
                onChange={(e) => {
                  setShippingTo(e.target.value)
                  setShippingDetails({
                    ...shippingDetails,
                    shippingTo: e.target.value,
                  })
                }}
                value={
                  currentProduct && currentProduct?.shippingDetails?.shippingTo
                }
                type={"text"}
                placeholder={"Shipping to"}
                label={"Shipping to"}
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
                onChange={(e) => {
                  setDelivery(e.target.value)
                  setShippingDetails({
                    ...shippingDetails,
                    delivery: e.target.value,
                  })
                }}
                value={
                  currentProduct && currentProduct?.shippingDetails?.delivery
                }
                type={"text"}
                placeholder={"Delivery"}
                label={"Delivery"}
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
                onChange={(e) => {
                  setReturnDuration(e.target.value)
                  setShippingDetails({
                    ...shippingDetails,
                    returnDuration: e.target.value,
                  })
                }}
                value={
                  currentProduct &&
                  currentProduct?.shippingDetails?.returnDuration
                }
                type={"text"}
                placeholder={"Return"}
                label={"Return"}
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
                onChange={(e) => {
                  setShippingAndHandling(e.target.value)
                  setShippingDetails({
                    ...shippingDetails,
                    shippingAndHandling: e.target.value,
                  })
                }}
                value={
                  currentProduct &&
                  currentProduct?.shippingDetails?.shippingAndHandling
                }
                type={"text"}
                placeholder={"Shipping and handling"}
                label={"Shipping and handling"}
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
            </div>
          </div>
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
            onAccept={editProductHandler}
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

export default EditProductForm
