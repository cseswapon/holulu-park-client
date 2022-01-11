import React, { useEffect, useState } from "react";
import "./Add.css";
const Add = () => {
  useEffect(() => {
    document.title = "Holulu Theme Park-Add New";
  }, []);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(image);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("details", details);
    formData.append("image", image);
    formData.append("price", price);
    fetch("http://localhost:4582/service", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      });
  };
  return (
    <div className="container my-5">
      <h1 className="fw-bold text-primary text-center">Add New Service</h1>
      <div>
        <div className="add-form text-center">
          <form onSubmit={handelSubmit}>
            <input
              type="text"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="name"
              required
            />
            <textarea
              type="text"
              onChange={(e) => {
                setDetails(e.target.value);
              }}
              placeholder="details"
              required
            />
            <input
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              type="file"
              placeholder="upload image"
              required
            />
            <input
              type="number"
              name="number"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="price"
              required
            />
            <input className="btn btn-primary" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
