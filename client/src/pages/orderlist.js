import Header from "../components/header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import * as ROUTES from "../constants/routes";

export default function OrderList() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [apparelTotal, setApparelTotal] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://631945908e51a64d2be10770.mockapi.io/api/v1/allOrders"
      );
      const data = response.data;

      const apparelTotal = data.reduce((total, item) => {
        return total + (item.countOfItemTypes.apparel || 0);
      }, 0);
      setApparelTotal(apparelTotal);

      if (searchQuery) {
        const filteredData = data.filter((item) =>
          item.orderDescription
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        );
        setFilteredData(filteredData);
      } else {
        setFilteredData(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery, filteredData]);

  const handleSearch = () => {
    fetchData();
  };

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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <i className="bx bx-search" onClick={handleSearch}></i>
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
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.orderDescription}</td>
                  <td>
                    Apparel <span>{item.countOfItemTypes.apparel}</span> &emsp;
                    Grocery <span>{item.countOfItemTypes.grocery}</span>
                  </td>
                  <td>
                    {((item.countOfItemTypes.apparel || 0) / apparelTotal) *
                      100}
                    %
                  </td>
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
