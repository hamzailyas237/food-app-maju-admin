import React from "react";
import { FaCamera } from "react-icons/fa";
import classes from "./upload-photo.module.css";

const UploadPhoto = ({ getImages, images }) => {
  return (
    <div
      className={`${classes["upload-photo-container"]}`}
      style={{ color: "white" }}
    >
      <div className={`${(classes["photo"], classes["add-photo"])}`}>
        <FaCamera size={28} />
        <label htmlFor="add-photo">Add Photos</label>
        <input
          id="add-photo"
          type="file"
          name="photo"
          style={{ display: "none" }}
          multiple
          onChange={(e) => getImages(e.target.files)}
        />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        {images?.map((image, i) => {
          const imageURL =
            image instanceof File
              ? URL.createObjectURL(image)
              : `https://ultra-fitness-development.s3.ap-south-1.amazonaws.com/${image}`;

          return (
            <img
              className={`${classes["photo"]}`}
              key={i}
              src={imageURL}
              alt="product image"
            />
          );
        })}
      </div>
    </div>
  );
};

export default UploadPhoto;
