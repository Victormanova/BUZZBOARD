const express = require("express");
const router = express.Router();
const orderController = require("../controllers/buzz_controller");

router.post("/create", orderController.createOrder);
router.post("/update", orderController.updateOrder);
router.get("/list", orderController.allList);
router.post("/search", orderController.orderById);
router.delete('/delete/:order_id', orderController.deleteOrder);


module.exports = router;
