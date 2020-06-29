const express = require("express");

const routes = express.Router();

const ProductControllers = require("./controllers/ProductController");

routes.get("/products", ProductControllers.index);
routes.get("/products/:id", ProductControllers.show);
routes.post("/products", ProductControllers.store);
routes.put("/products/:id", ProductControllers.update);
routes.delete("/products/:id", ProductControllers.destroy);

module.exports = routes;
