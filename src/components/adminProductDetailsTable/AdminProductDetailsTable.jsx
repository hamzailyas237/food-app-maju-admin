import React, { useEffect } from "react"
import GoBack from "../goBack/GoBack"
import AppButton from "../button/AppButton"
import classes from "./admin-product-details-table.module.css"
import AppModal from "../modal/AppModal"
import { useNavigate } from "react-router-dom"
import exclamationCircle from "../../assets/exclamationCircle.png"
import StatusModal from "../modal/StatusModal"
import { useDispatch, useSelector } from "react-redux"
import success from "../../assets/success.png"
import Loader from "../../components/loader/Loader"

import {
  DeleteProductAction,
  EditProductAction,
  GetSingleProductAction,
} from "../../store/actions/RestaurantActions"
import { HideSuccessModalAction } from "../../store/actions/ModalActions"
import SuccessModal from "../modal/SuccessModal"

const AdminProductDetailsTable = ({ id }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")

  useEffect(() => {
    dispatch(GetSingleProductAction({ id, token }))
  }, [])

  const { currentRestaurant } = useSelector((state) => {
    return state.RestuarantReducer
  })

  const deleteProductHandler = () => {
    dispatch(DeleteProductAction({ token, id }))
  }

  const updateStatusHandler = (status) => {
    dispatch(
      EditProductAction(
        {
          isActive: status == "Active" ? true : false,
        },
        token,
        id,
        true
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
      <div className={`${classes["admin-product-details-container"]}`}>
        <div style={{ display: "flex", justifyContent: "end", gap: "20px" }}>
          <AppButton
            text={"View Product Page"}
            styles={{
              color: "white",
              backgroundColor: "#00B4D8",
              borderRadius: "5px",
              width: "202px",
              height: "40px",
              fontSize: "13px",
              font: "normal normal medium 13px/20px Poppins",
              letterSpacing: "0px",
              opacity: "1",
            }}
          />
          <GoBack
            styles={{ position: "static" }}
            onClick={() => navigate("/admin-products")}
          />
        </div>

        {loading ? (
          <Loader styles={{ marginTop: "50px" }} />
        ) : (
          <>
            <div className={`${classes["product-details-table-header"]}`}>
              <h1>Products Code: 1234</h1>
              <div className={`${classes["product-details-btn-container"]}`}>
                <AppButton
                  onClick={() =>
                    navigate("/product/edit", {
                      state: currentRestaurant[0] && currentRestaurant[0],
                    })
                  }
                  text={"Edit"}
                  styles={{
                    color: "white",
                    backgroundColor: "#00B4D8",
                    borderRadius: "5px",
                    width: "80px",
                    height: "45px",
                    fontSize: "16px",
                    letterSpacing: "0px",
                    opacity: "1",
                  }}
                />
                <AppModal
                  text={"Delete"}
                  heading={"Are You Sure You Want To Delete This Product?"}
                  icon={exclamationCircle}
                  styles={{
                    color: "white",
                    backgroundColor: "#CE0000",
                    borderRadius: "5px",
                    width: "80px",
                    height: "45px",
                    fontSize: "16px",
                    letterSpacing: "0px",
                    opacity: "1",
                  }}
                  headingStyle={{ width: "294px", textAlign: "center" }}
                  onReject={() => navigate("/admin-product-details")}
                  onAccept={deleteProductHandler}
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
                <AppButton
                  onClick={() =>
                    navigate("/product/featured", {
                      state: id && id,
                    })
                  }
                  text={"Make it Featured"}
                  styles={{
                    color: "white",
                    backgroundColor: "#C4704F",
                    borderRadius: "5px",
                    width: "146px",
                    height: "45px",
                    fontSize: "16px",
                    letterSpacing: "0px",
                    opacity: "1",
                  }}
                />
              </div>
            </div>

            <div className={`${classes["product-status-container"]}`}>
              <div>
                <h1>Status: </h1>
                <p>
                  {currentRestaurant[0] && currentRestaurant[0].isActive
                    ? "Active"
                    : "InActive"}
                </p>
              </div>

              <StatusModal
                text={"Update Status"}
                heading={"Update Status"}
                styles={{
                  color: "white",
                  backgroundColor: "#00B4D8",
                  borderRadius: "5px",
                  width: "164px",
                  height: "40px",
                  letterSpacing: "0px",
                  opacity: "1",
                  font: "normal normal medium 16px/25px Poppins",
                }}
                headingStyle={{ width: "294px", textAlign: "center" }}
                onReject={() => navigate("/admin-product-details")}
                onAccept={updateStatusHandler}
                onRejectBtnText={"Cancel"}
                onAcceptBtnText={"Update"}
                rejectBtnStyle={{
                  backgroundColor: "#1A1A1A ",
                  border: "1px solid #00B4D8",
                  width: "122px",
                  height: "51px",
                  borderRadius: "10px",
                  opacity: 1,
                }}
                acceptBtnStyle={{
                  backgroundColor: "#00B4D8 ",
                  width: "122px",
                  height: "51px",
                  borderRadius: "10px",
                  opacity: 1,
                }}
                options={["Active", "Inactive"]}
              />
            </div>

            <div className={`${classes["product-details-table"]}`}>
              <div className={`${classes["spacing"]}`}>
                <h1>Products Name:</h1>
                <p>{currentRestaurant[0] && currentRestaurant[0].name}</p>
              </div>
              <div className={`${classes["spacing"]}`}>
                <h1>Price:</h1>
                <p>${currentRestaurant[0] && currentRestaurant[0].price}</p>
              </div>
              <div className={`${classes["spacing"]}`}>
                <h1>In Stock:</h1>
                <p>
                  {currentRestaurant[0] && currentRestaurant[0].stockQuantity}
                </p>
              </div>
              <div className={`${classes["spacing"]}`}>
                <h1>Uploaded Picture: </h1>
                <div className={`${classes["uploaded-photo-container"]}`}>
                  {currentRestaurant[0] &&
                    currentRestaurant[0].images.map((image, i) => {
                      return (
                        <img
                          key={i}
                          className={`${classes["uploaded-photo"]}`}
                          src={`https://ultra-fitness-development.s3.ap-south-1.amazonaws.com/${image}`}
                          alt="product image"
                        />
                      )
                    })}
                </div>
              </div>
              {currentRestaurant[0]?.shippingDetails && (
                <>
                  <div className={`${classes["spacing"]}`}>
                    <h1>Item Location:</h1>
                    <p>
                      {currentRestaurant[0].shippingDetails
                        ? currentRestaurant[0]?.shippingDetails.itemLocation
                        : ""}
                    </p>
                  </div>
                  <div className={`${classes["spacing"]}`}>
                    <h1>Shipping To:</h1>
                    <p>
                      {currentRestaurant[0].shippingDetails
                        ? currentRestaurant[0].shippingDetails.shippingTo
                        : ""}
                    </p>
                  </div>
                  <div className={`${classes["spacing"]}`}>
                    <h1>Delivery:</h1>
                    <p>
                      {currentRestaurant[0].shippingDetails
                        ? currentRestaurant[0].shippingDetails.delivery
                        : ""}
                    </p>
                  </div>
                  <div className={`${classes["spacing"]}`}>
                    <h1>Return:</h1>
                    <p>
                      {currentRestaurant[0].shippingDetails
                        ? currentRestaurant[0].shippingDetails.returnDuration
                        : ""}
                    </p>
                  </div>
                  <div className={`${classes["spacing"]}`}>
                    <h1>Shipping And Handling:</h1>
                    <p>
                      {currentRestaurant[0].shippingDetails
                        ? currentRestaurant[0].shippingDetails
                            .shippingAndHandling
                        : ""}
                    </p>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default AdminProductDetailsTable
