import React, { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import ProductOrdersTable from "../productOrdersTable/ProductOrdersTable";
import AppMenu from "../appMenu/AppMenu";
import classes from "./admin-product-orders-cmp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { GetOrdersAction } from "../../store/actions/OrderActions";

const AdminProductOrdersCmp = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [filterOption, setFilterOption] = useState("");
  const [productType, setProductType] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(GetOrdersAction(token, productType, filterOption, search));
  }, [productType, filterOption, search]);

  const { orders } = useSelector((state) => {
    return state.OrderReducer;
  });

  const getOption = (data) => {
    setFilterOption(data);
  };

  const getSearchTerm = (data) => {
    setSearch(data);
  };

  return (
    <div style={{ color: "white" }}>
      <Tabs variant="unstyled">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <TabList gap={5} flexWrap={"wrap"}>
            <Tab
              className={`${classes["tab-style"]}`}
              _selected={{ border: "1px solid #00B4D8" }}
              onClick={() => setProductType("all")}
            >
              <div className={`${classes["tab-inner-style"]}`}>
                <p>Total Orders</p>
                <hr
                  style={{
                    borderColor: "#00B4D85C",
                    width: "100%",
                  }}
                />
                <p>{orders.totalOrders}</p>
              </div>
            </Tab>
            <Tab
              className={`${classes["tab-style"]}`}
              _selected={{ border: "1px solid #00B4D8" }}
              onClick={() => setProductType("pending")}
            >
              <div className={`${classes["tab-inner-style"]}`}>
                <p>Pending Orders</p>
                <hr
                  style={{
                    borderColor: "#00B4D85C",
                    width: "100%",
                  }}
                />
                <p>{orders.pendingOrders}</p>
              </div>
            </Tab>
            <Tab
              className={`${classes["tab-style"]}`}
              _selected={{ border: "1px solid #00B4D8" }}
              onClick={() => setProductType("on-the-way")}
            >
              <div className={`${classes["tab-inner-style"]}`}>
                <p>Orders On The Way</p>
                <hr
                  style={{
                    borderColor: "#00B4D85C",
                    width: "100%",
                  }}
                />
                <p>{orders.ordersOnTheWay}</p>
              </div>
            </Tab>

            <Tab
              className={`${classes["tab-style"]}`}
              _selected={{ border: "1px solid #00B4D8" }}
              onClick={() => setProductType("delivered")}
            >
              <div className={`${classes["tab-inner-style"]}`}>
                <p>Delivered Orders</p>
                <hr
                  style={{
                    borderColor: "#00B4D85C",
                    width: "100%",
                  }}
                />
                <p>{orders.deliveredOrders}</p>
              </div>
            </Tab>

            <Tab
              className={`${classes["tab-style"]}`}
              _selected={{ border: "1px solid #00B4D8" }}
              onClick={() => setProductType("cancelled")}
            >
              <div className={`${classes["tab-inner-style"]}`}>
                <p>Cancelled Orders</p>
                <hr
                  style={{
                    borderColor: "#00B4D85C",
                    width: "100%",
                  }}
                />
                <p>{orders.cancelledOrders}</p>
              </div>
            </Tab>

            {/* <Tab
              className={`${classes["tab-style"]}`}
              _selected={{ border: "1px solid #00B4D8" }}
            >
              <div className={`${classes["tab-inner-style"]}`}>
                <p>Total Amount</p>
                <hr
                  style={{
                    borderColor: "#00B4D85C",
                    width: "100%",
                  }}
                />
                <p>${orders.totalAmount}</p>
              </div>
            </Tab> */}
          </TabList>

          <AppMenu
            getOption={getOption}
            options={[
              "New to Old",
              "Old to New",
              "Amount Low to High",
              "Amount High to Low",
            ]}
          />
        </div>

        <TabPanels>
          <TabPanel>
            <ProductOrdersTable
              title={"Total Orders"}
              orders={orders.data}
              getSearchTerm={getSearchTerm}
            />
          </TabPanel>
          <TabPanel>
            <ProductOrdersTable
              title={"Pending Orders"}
              orders={orders.data}
              getSearchTerm={getSearchTerm}
            />
          </TabPanel>
          <TabPanel>
            <ProductOrdersTable
              title={"Orders On The Way"}
              orders={orders.data}
              getSearchTerm={getSearchTerm}
            />
          </TabPanel>
          <TabPanel>
            <ProductOrdersTable
              title={"Delivered Orders"}
              orders={orders.data}
              getSearchTerm={getSearchTerm}
            />
          </TabPanel>
          <TabPanel>
            <ProductOrdersTable
              title={"Cancelled Orders"}
              orders={orders.data}
              getSearchTerm={getSearchTerm}
            />
          </TabPanel>
          {/* <TabPanel>
            <TotalAmountTable title={"Total Amount"} />
          </TabPanel> */}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default AdminProductOrdersCmp;
