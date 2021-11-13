import React, { useState, useEffect } from "react";
import { Table, Spinner } from "react-bootstrap";
import Allorder from "../Allorder/Allorder";

const Manage = () => {
  useEffect(() => {
    document.title = "Holulu Theme Park-Manage Order";
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://blooming-temple-57474.herokuapp.com/add")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <div className="text-center my-5 py-5">
        <div className="my-3">
          <Spinner animation="grow" variant="danger" />
        </div>
      </div>
    );
  }
  return (
    <div className="container mb-4">
      <h1 className="fw-bold text-center my-4 text-muted service-product">
        Manage All Order
      </h1>
      <Table striped bordered hover responsive="md">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>ID</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Orders</th>
            <th style={{ textAlign: "center" }}>Cancel Orders</th>
            <th style={{ textAlign: "center" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {user.map((use, index) => (
            <Allorder
              key={use._id}
              use={use}
              index={index}
              user={user}
              set={setUser}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Manage;
