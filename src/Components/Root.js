import React, { Suspense } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import FeaturedProduct from "./FeaturedProduct";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import HomeComp from "./Pages/HomeComp";
import NewProducts from "./Pages/NewProducts";
import NotFound from "./Pages/NotFound";
import PlaceOrder from "./Pages/PlaceOrder";
import ProductDetails from "./Pages/ProductDetails";

const Products = React.lazy(() => import("./Pages/Products"));
//import Products from "./Pages/Products";

function Root() {
  return (
    <>
      <nav>
        <NavLink to="">Home</NavLink>|<NavLink to="about">About</NavLink>|
        <Link to="products">Products</Link>|
        <NavLink to="contact">Contact us</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="about" element={<About />} />

        <Route
          path="products"
          element={
            <Suspense fallback={<div> Loading... </div>}>
              <Products />
            </Suspense>
          }
        >
          <Route index element={<FeaturedProduct />} />
          <Route path="featured" element={<FeaturedProduct />} />
          <Route path="new" element={<NewProducts />} />
        </Route>

        <Route path="products/product/:prodId" element={<ProductDetails />} />

        <Route path="contact" element={<Contact />} />
        <Route path="place-order" element={<PlaceOrder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Root;
