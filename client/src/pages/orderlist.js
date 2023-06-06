import Header from "../components/header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import * as ROUTES from "../constants/routes";

export default function OrderList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://631945908e51a64d2be10770.mockapi.io/api/v1/allOrders"
        );
        const data = response.data;
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://631945908e51a64d2be10770.mockapi.io/api/v1/allOrders/${id}`
      );
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
      console.log("Order deleted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <div>
      <Header />
      <section className="order-page">
        <div className="top">
          <h1 className="title">Order Managment System</h1>
          <div className="input-container">
            <input
              type="text"
              name="search"
              className="searchbar"
              placeholder="Search By Order Description"
            />
            <i className="bx bx-search"></i>
          </div>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Order Description</th>
                <th>Count of Item Types Included in Order</th>
                <th>% of itmes in apparel</th>
                <th>Created By</th>
                <th>Created Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.orderDescription}</td>
                  <td>
                    Apparel <span>{item.countOfItemTypes.apparel}</span> &emsp;
                    Grocery <span>{item.countOfItemTypes.grocery}</span>
                  </td>
                  <td>%</td>
                  <td>{item.createdBy}</td>
                  <td>{item.createdAt}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <a className="order-btn" href={ROUTES.NEWORDER}>
          Create New Order
        </a>
      </section>
    </div>
  );
}
