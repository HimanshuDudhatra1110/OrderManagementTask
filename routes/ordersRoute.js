import express from "express";

// router object from express
const router = express.Router();

// get all order - GET
router.get("/all-orders", getAllOrdersController);

// create order - POST
router.post("/create-order", createOrderController);

// update order - PUT
router.put("/update-order/:id", updateOrderController);

// delete order - DELETE
router.delete("/delete-order/:id", deleteOrderController);

export default router;
