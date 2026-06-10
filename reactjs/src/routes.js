import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/main";
import Product from "./pages/product";

const RoutesApp = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" component={Main} />
      <Route path="/products/:id" component={Product} />
    </Routes>
  </BrowserRouter>
);

export default RoutesApp;
