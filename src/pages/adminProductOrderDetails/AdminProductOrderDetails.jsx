import React from "react";
import AdminProductOrderDetailsTable from "../../components/adminProductOrderDetailsTable/AdminProductOrderDetailsTable";
import { useLocation } from "react-router-dom";

const AdminProductOrderDetails = () => {
  const location = useLocation();

  return (
    <div>
      <AdminProductOrderDetailsTable id={location.state} />
    </div>
  );
};

export default AdminProductOrderDetails;
