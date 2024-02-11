import React from "react"
import classes from "./products-table.module.css"
import AppButton from "../button/AppButton"
import AppModal from "../modal/AppModal"
import { useNavigate } from "react-router-dom"
import exclamationCircle from "../../assets/exclamationCircle.png"
import { useDispatch, useSelector } from "react-redux"
import { DeleteProductAction } from "../../store/actions/RestaurantActions"
import SuccessModal from "../modal/SuccessModal"
import success from "../../assets/success.png"
import { HideSuccessModalAction } from "../../store/actions/ModalActions"
import Loader from "../loader/Loader"

const ProductsTable = ({ title, products }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")

  const deleteProductHandler = (id) => {
    dispatch(DeleteProductAction({ token, id }))
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
      {loading ? (
        <Loader styles={{ marginTop: "80px" }} />
      ) : (
        <div className={`${classes["products-table-component-container"]}`}>
          <div className={`${classes["add-product-container"]}`}>
            <h1>{title}</h1>
            <AppButton
              onClick={() => navigate("/product/add")}
              text={"Add Restaurant"}
              styles={{
                color: "white",
                backgroundColor: "#00B4D8",
                width: "197px",
                height: "50px",
                opacity: "1",
                boxShadow: "5px 15px 25px #00B4D85C",
                borderRadius: "32px",
              }}
            />
          </div>

          <div className={`${classes["table-container"]}`}>
            <table>
              <tr>
                <th>ID</th>
                {/* <th>Joined Date</th> */}
                <th>Restuarant Name</th>
                <th>Location</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              {products &&
                products.map((product, i) => {
                  return (
                    <tr key={i}>
                      <td>{product?._id.slice(0, 8)}</td>
                      {/* <td>
                        {product.createdAt && product.createdAt.split("T")[0]}
                      </td> */}
                      <td>{product.name}</td>
                      <td>{product.location}</td>
                      <td>{product.phone}</td>
                      <td>{product.isActive ? "Active" : "Inactive"}</td>
                      <td>
                        <div className={`${classes["action-container"]}`}>
                          <AppButton
                            onClick={() =>
                              navigate("/admin-product-details", {
                                state: product && product._id,
                              })
                            }
                            text={"View"}
                            styles={{
                              color: "white",
                              backgroundColor: "#00B4D8",
                              borderRadius: "5px",
                              width: "74px",
                              height: "33px",
                              opacity: "1",
                              fontSize: "14px",
                            }}
                          />
                          <AppModal
                            text={"Delete"}
                            heading={
                              "Are You Sure You Want To Delete This Product?"
                            }
                            icon={exclamationCircle}
                            styles={{
                              color: "white",
                              backgroundColor: "#CE0000",
                              borderRadius: "5px",
                              width: "74px",
                              height: "33px",
                              opacity: "1",
                              fontSize: "14px",
                            }}
                            headingStyle={{
                              width: "294px",
                              textAlign: "center",
                            }}
                            onReject={() => navigate("/admin-products")}
                            onAccept={() => deleteProductHandler(product._id)}
                            onRejectBtnText={"Cancel"}
                            onAcceptBtnText={"Confirm"}
                            rejectBtnStyle={{
                              backgroundColor: "#1A1A1A ",
                              border: "1px solid #00B4D8",
                              width: "152px",
                              height: "57px",
                              borderRadius: "10px",
                              opacity: 1,
                            }}
                            acceptBtnStyle={{
                              backgroundColor: "#00B4D8 ",
                              width: "153px",
                              height: "57px",
                              borderRadius: "10px",
                              opacity: 1,
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  )
                })}
            </table>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductsTable
