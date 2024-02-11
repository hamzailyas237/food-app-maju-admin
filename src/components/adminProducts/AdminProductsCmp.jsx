import React, { useEffect, useState } from "react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import ProductsTable from "./ProductsTable"
import AppMenu from "../appMenu/AppMenu"
import classes from "./admin-products-cmp.module.css"
import { useDispatch, useSelector } from "react-redux"
import { GetRestuarantsAction } from "../../store/actions/RestaurantActions"

const AdminProductsCmp = () => {
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const [filterOption, setFilterOption] = useState("")
  const [productType, setProductType] = useState("all")

  // useEffect(() => {
  //   dispatch(GetProductsAction(token, productType, filterOption));
  // }, [productType, filterOption]);

  useEffect(() => {
    dispatch(GetRestuarantsAction(token, productType, filterOption))
  }, [productType, filterOption])

  const { restaurants } = useSelector((state) => {
    return state.RestuarantReducer
  })

  const getOption = (data) => {
    setFilterOption(data)
  }

  return (
    <div style={{ color: "white" }}>
      <Tabs variant="unstyled">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TabList gap={5} flexWrap={"wrap"}>
            <Tab
              className={`${classes["tab-style"]}`}
              _selected={{ border: "1px solid #00B4D8" }}
              onClick={() => setProductType("all")}
            >
              <div className={`${classes["tab-inner-style"]}`}>
                <p>All Resturants</p>
                <hr
                  style={{
                    borderColor: "#00B4D85C",
                    width: "100%",
                  }}
                />
                <p>{restaurants?.data?.length}</p>
              </div>
            </Tab>
            <Tab
              className={`${classes["tab-style"]}`}
              _selected={{ border: "1px solid #00B4D8" }}
              onClick={() => setProductType(true)}
            >
              <div className={`${classes["tab-inner-style"]}`}>
                <p>Active Resturants</p>
                <hr
                  style={{
                    borderColor: "#00B4D85C",
                    width: "100%",
                  }}
                />
                <p>{restaurants?.data?.length}</p>
              </div>
            </Tab>
            <Tab
              className={`${classes["tab-style"]}`}
              _selected={{ border: "1px solid #00B4D8" }}
              onClick={() => setProductType(false)}
            >
              <div className={`${classes["tab-inner-style"]}`}>
                <p>Inactive Resturants</p>
                <hr
                  style={{
                    borderColor: "#00B4D85C",
                    width: "100%",
                  }}
                />
                <p>{restaurants?.data?.length}</p>
              </div>
            </Tab>
          </TabList>

          <AppMenu
            getOption={getOption}
            options={[
              "New to Old",
              "Old to New",
              "Price Low to High",
              "Price High to Low",
            ]}
          />
        </div>

        <TabPanels>
          <TabPanel>
            <ProductsTable
              title={"All Resturants"}
              filterOption={filterOption}
              products={restaurants.data}
            />
          </TabPanel>
          <TabPanel>
            <ProductsTable
              title={"Active Products"}
              products={restaurants.data}
            />
          </TabPanel>
          <TabPanel>
            <ProductsTable
              title={"Inactive Products"}
              products={restaurants.data}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default AdminProductsCmp
