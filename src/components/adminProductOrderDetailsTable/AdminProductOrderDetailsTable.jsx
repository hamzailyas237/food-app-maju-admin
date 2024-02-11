import React, { useEffect } from "react";
import GoBack from "../goBack/GoBack";
import classes from "./admin-product-order-details-table.module.css";
import { useNavigate } from "react-router-dom";
import StatusModal from "../modal/StatusModal";
import { useDispatch, useSelector } from "react-redux";
import {
  EditOrderAction,
  GetSingleOrderAction,
} from "../../store/actions/OrderActions";
import SuccessModal from "../modal/SuccessModal";
import { HideSuccessModalAction } from "../../store/actions/ModalActions";
import success from "../../assets/success.png";
import Loader from "../loader/Loader";

const AdminProductOrderDetailsTable = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(GetSingleOrderAction({ id, token }));
  }, []);

  const { currentOrder } = useSelector((state) => {
    return state.OrderReducer;
  });

  const { loading } = useSelector((state) => {
    return state.LoaderReducer;
  });

  const updateStatusHandler = (status) => {
    dispatch(
      EditOrderAction(
        {
          status:
            status == "Cancelled"
              ? "cancelled"
              : status == "Pending"
              ? "pending"
              : status == "On The Way"
              ? "on-the-way"
              : status == "Delivered"
              ? "delivered"
              : currentOrder[0].status,
        },
        token,
        id
      )
    );
  };

  const { modalText, showModal } = useSelector((state) => {
    return state.ModalReducer;
  });

  return currentOrder?.map((order, i) => {
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
          <Loader styles={{ marginTop: "50px" }} />
        ) : (
          <div
            key={i}
            className={`${classes["admin-product-order-details-container"]}`}
          >
            <div className={`${classes["product-order-status-container"]}`}>
              <div>
                <h1>Order No. {order.orderNumber} </h1>
              </div>
              <div>
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
                  onReject={() => navigate("/admin-product-order-details")}
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
                  options={["Cancelled", "Pending", "On The Way", "Delivered"]}
                />
                <div>
                  <GoBack
                    onClick={() => navigate("/product-orders")}
                    styles={{ position: "static" }}
                  />
                </div>
              </div>
            </div>

            <div className={`${classes["product-order-details-table"]}`}>
              <div className={`${classes["product-quantity-spacing"]}`}>
                <div
                  className={`${classes["blue-text"]}`}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h1>Buyers Id: {order.userId}</h1>
                  <p>Order Date: {order.createdAt.split("T")[0]}</p>
                </div>
                <div className={`${classes["products-quantity"]}`}>
                  <div>
                    <h1 className={`${classes["blue-heading"]}`}>Products</h1>
                    <p>Lorem</p>
                    <p>Lorem</p>
                  </div>
                  <div>
                    <h1 className={`${classes["blue-heading"]}`}>Qty</h1>
                    {order.items.map((item, i) => {
                      return <p key={i}>{item.quantity}</p>;
                    })}
                  </div>
                  <div>
                    {order.items.map((item, i) => {
                      return <p key={i}>${item.price}</p>;
                    })}
                  </div>
                </div>
              </div>
              <div className={`${classes["spacing"]}`}>
                <h1>Shipping Charges:</h1>
                <p>500</p>
              </div>
              {/* <div className={`${classes["spacing"]}`}>
            <h1>Card Used: </h1>
            <p>**** **** **** 1234</p>
          </div> */}
              <div className={`${classes["spacing"]}`}>
                <h1>Total Amount Paid:</h1>
                <p>${currentOrder[0]?.totalPrice}</p>
              </div>
              <div className={`${classes["spacing"]}`}>
                <h1>Order Status:</h1>
                <p>{currentOrder[0]?.status}</p>
              </div>
              <div className={`${classes["order-shipping-details"]}`}>
                <h1 className={`${classes["blue-heading"]}`}>
                  Shipping Details
                </h1>
                <div className={`${classes["order-ship-spacing"]}`}>
                  <h1>First Name</h1>
                  <p>{currentOrder[0].fullName.split(" ")[0]}</p>
                </div>
              </div>
              <div className={`${classes["spacing"]}`}>
                <h1>Last Name</h1>
                <p>{currentOrder[0].fullName.split(" ")[1]}</p>
              </div>
              <div className={`${classes["spacing"]}`}>
                <h1>Shipping And Handling:</h1>
                <p>Free Shipping</p>
              </div>
              <div className={`${classes["spacing"]}`}>
                <h1>Street</h1>
                <p>{currentOrder[0]?.address}</p>
              </div>
              <div className={`${classes["spacing"]}`}>
                <h1>City</h1>
                <p>{currentOrder[0]?.city}</p>
              </div>
              <div className={`${classes["spacing"]}`}>
                <h1>State</h1>
                <p>{currentOrder[0]?.state}</p>
              </div>
              <div className={`${classes["spacing"]}`}>
                <h1>Contact Number</h1>
                <p>{currentOrder[0]?.phoneNumber}</p>
              </div>
              {/* <div className={`${classes["spacing"]}`}>
            <h1>Country</h1>
            <p>United States</p>
          </div> */}
              <div className={`${classes["spacing"]}`}>
                <h1>Zip Code</h1>
                <p>{currentOrder[0]?.zipCode}</p>
              </div>
              {/* <div className={`${classes["order-note-container"]}`}>
            <h1>Order Note</h1>
            <p className={`${classes["order-note-text"]}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              voluptas numquam magnam neque sapiente enim, veritatis eius quod
              perspiciatis veniam repellendus laboriosam beatae saepe ipsam
              aliquam delectus iusto, minima rerum.
            </p>
          </div> */}
            </div>
          </div>
        )}
      </>
    );
  });
};

export default AdminProductOrderDetailsTable;
