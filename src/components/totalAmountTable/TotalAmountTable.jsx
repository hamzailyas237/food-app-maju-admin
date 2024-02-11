import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AppButton from "../button/AppButton";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import classes from "./total-amount-table.module.css";

const TotalAmountTable = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className={`${classes["total-amount-table-container"]}`}>
      <Tabs variant={"unstyled"}>
        <div className={`${classes["tab-list-container"]}`}>
          <TabList gap={7}>
            <Tab
              className={`${classes["amount-tab-style"]}`}
              _selected={{
                color: "white",
                bg: "#00B4D8",
              }}
            >
              Amount Paid by Buyers in Last 7 days | $400
            </Tab>
            <Tab
              className={`${classes["amount-tab-style"]}`}
              _selected={{
                color: "white",
                bg: "#00B4D8",
              }}
              aria-selected={true}
            >
              Amount Paid by Buyers in Last 30 days | $40K
            </Tab>
          </TabList>
          <div className={`${classes["calendar-icon-container"]}`}>
            <FaCalendarAlt size={30} />
          </div>
        </div>

        <TabPanels>
          <TabPanel>
            <h1 className={`${classes["tab-panel-heading"]}`}>
              Product Orders - Custom Date: From 01-22-2022 To 02-22-2022{" "}
            </h1>

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

                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                  <td>12</td>
                  <td>Active</td>
                  <td>
                    <AppButton
                      onClick={() => navigate("/admin-product-order-details")}
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
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                  <td>12</td>
                  <td>Active</td>
                  <td>
                    <AppButton
                      onClick={() => navigate("/admin-product-order-details")}
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
                <tr>
                  <td>Ernst Handel</td>
                  <td>Roland Mendel</td>
                  <td>Austria</td>
                  <td>12</td>
                  <td>Active</td>
                  <td>
                    <AppButton
                      onClick={() => navigate("/admin-product-order-details")}
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
                <tr>
                  <td>Island Trading</td>
                  <td>Helen Bennett</td>
                  <td>UK</td>
                  <td>12</td>
                  <td>Active</td>
                  <td>
                    <AppButton
                      onClick={() => navigate("/admin-product-order-details")}
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
                <tr>
                  <td>Laughing Bacchus Winecellars</td>
                  <td>Yoshi Tannamuri</td>
                  <td>Canada</td>
                  <td>12</td>
                  <td>Active</td>
                  <td>
                    <AppButton
                      onClick={() => navigate("/admin-product-order-details")}
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
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                  <td>12</td>
                  <td>Active</td>
                  <td>
                    <AppButton
                      onClick={() => navigate("/admin-product-order-details")}
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
              </table>
            </div>
          </TabPanel>
          <TabPanel>
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

                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                  <td>12</td>
                  <td>Active</td>
                  <td>
                    <AppButton
                      onClick={() => navigate("/admin-product-order-details")}
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
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                  <td>12</td>
                  <td>Active</td>
                  <td>
                    <AppButton
                      onClick={() => navigate("/admin-product-order-details")}
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
                <tr>
                  <td>Ernst Handel</td>
                  <td>Roland Mendel</td>
                  <td>Austria</td>
                  <td>12</td>
                  <td>Active</td>
                  <td>
                    <AppButton
                      onClick={() => navigate("/admin-product-order-details")}
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
                <tr>
                  <td>Island Trading</td>
                  <td>Helen Bennett</td>
                  <td>UK</td>
                  <td>12</td>
                  <td>Active</td>
                  <td>
                    <AppButton
                      onClick={() => navigate("/admin-product-order-details")}
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
                <tr>
                  <td>Laughing Bacchus Winecellars</td>
                  <td>Yoshi Tannamuri</td>
                  <td>Canada</td>
                  <td>12</td>
                  <td>Active</td>
                  <td>
                    <AppButton
                      onClick={() => navigate("/admin-product-order-details")}
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
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                  <td>12</td>
                  <td>Active</td>
                  <td>
                    <AppButton
                      onClick={() => navigate("/admin-product-order-details")}
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
              </table>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TotalAmountTable;
