import React from "react";
import AdminProductDetailsTable from "../../components/adminProductDetailsTable/AdminProductDetailsTable";
import { useLocation } from "react-router-dom";

const AdminProductDetails = () => {
  const location = useLocation();
  const productId = location.state;
  return (
    <div>
      <AdminProductDetailsTable id={productId} />
    </div>
  );
};

export default AdminProductDetails;
