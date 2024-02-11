import React from "react";
import EditProductForm from "../../components/editProductForm/EditProductForm";
import { useLocation } from "react-router-dom";

const EditProduct = () => {
  const location = useLocation();

  return (
    <div>
      <EditProductForm title="Edit Product" currentProduct={location.state} />
    </div>
  );
};

export default EditProduct;
