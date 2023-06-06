import Header from "../components/header";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function NewOrder() {
  const [orderDescription, setOrderDescription] = useState("");
  const [countOfItemTypes, setCountOfItemTypes] = useState({
    apparel: "",
    grocery: "",
  });
  const [createdBy, setCreatedBy] = useState("");
  const navigate = useNavigate();

  const handleCreateOrder = async (event) => {
    event.preventDefault();

    try {
      const orderData = {
        orderDescription,
        countOfItemTypes,
        createdBy,
        createdAt: Date.now(),
      };

      const response = await axios.post(
        "https://631945908e51a64d2be10770.mockapi.io/api/v1/allOrders",
        orderData
      );
      const data = response.data;
      console.log("Order created successfully:", data);

      // Reset the form fields
      setOrderDescription("");
      setCountOfItemTypes({ apparel: "", grocery: "" });
      setCreatedBy("");
      navigate(ROUTES.ORDERLIST);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div>
      <Header />
      <form className="order-form">
        <input
          name="order-des"
          type="text"
          placeholder="Order Description"
          value={orderDescription}
          onChange={(event) => setOrderDescription(event.target.value)}
        ></input>
        <input
          name="apparel-items"
          type="number"
          placeholder="No. of Apparel Items"
          value={countOfItemTypes.apparel}
          onChange={(event) =>
            setCountOfItemTypes({
              ...countOfItemTypes,
              apparel: event.target.value,
            })
          }
        ></input>
        <input
          name="grocery-tiems"
          type="number"
          placeholder="No. of Grocery Items"
          onChange={(event) =>
            setCountOfItemTypes({
              ...countOfItemTypes,
              grocery: event.target.value,
            })
          }
        ></input>
        <input
          name="creater"
          type="text"
          placeholder="Created By"
          value={createdBy}
          onChange={(event) => setCreatedBy(event.target.value)}
        ></input>

        <button
          type="submit"
          className="new-order-btn"
          onClick={handleCreateOrder}
        >
          Create Order
        </button>
      </form>
    </div>
  );
}
