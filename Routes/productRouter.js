const express = require("express");
const { addData, getData, updateData, deleteData } = require("../Controllers/productController");

const prodRouter = express.Router();

prodRouter.post("/add-data",addData)

prodRouter.get("/show-data",getData)

prodRouter.put("/update-data/:id",updateData)

prodRouter.delete("/delete-data/:id",deleteData)


module.exports = prodRouter




