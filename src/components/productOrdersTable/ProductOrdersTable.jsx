import React from "react";
import AppButton from "../button/AppButton";
import { useNavigate } from "react-router-dom";
import Input from "../input/Input";
import { AiOutlineInfoCircle } from "react-icons/ai";
import AppTooltip from "../tooltip/AppTooltip";
import classes from "./product-orders-table.module.css";
import Loader from "../../components/loader/Loader";
import { useSelector } from "react-redux";

const ProductOrdersTable = ({ title, orders, getSearchTerm }) => {
  const navigate = useNavigate();

  const { loading } = useSelector((state) => {
    return state.LoaderReducer;
  });
  return (
    <div className={`${classes["product-orders-table-container"]}`}>
      <div className={`${classes["product-orders-header"]}`}>
        <h1>{title}</h1>
        <div className={`${classes["product-orders-header-inner"]}`}>
          <Input
            type={"text"}
            placeholder={"You can search orders by Order No"}
            styles={{
              color: "white",
              boxShadow: "10px 20px 30px #0000003d",
              // width: "634px",
              width: "40vw",
              height: "50px",
              border: "1px solid white",
              borderRadius: "30px",
              paddingLeft: "20px",
              backgroundColor: "#212121",
              marginTop: "10px",
            }}
            labelStyle={{ color: "white" }}
            onChange={(e) => getSearchTerm(e.target.value)}
          />
          <AppTooltip
            text={
              <AiOutlineInfoCircle size={30} style={{ color: "#00B4D8" }} />
            }
            label={"You can search orders by Order No"}
          />
        </div>
      </div>
      {loading ? (
        <Loader styles={{ marginTop: "50px" }} />
      ) : (
        <div className={`${classes["table-container"]}`}>
          <table>
            <tr>
              <th>Order No.</th>
              <th>Buyer Id</th>
              <th>Order Date</th>
              <th>Amount Paid</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            {orders &&
              orders.map((order, i) => {
                return (
                  <tr key={i}>
                    <td>{order.orderNumber}</td>
                    <td>{order._id}</td>
                    <td>{order.createdAt.split("T")[0]}</td>
                    <td>{order.totalPrice}</td>
                    <td>{order.status}</td>
                    <td>
                      <AppButton
                        onClick={() =>
                          navigate("/admin-product-order-details", {
                            state: order && order._id,
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
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductOrdersTable;
