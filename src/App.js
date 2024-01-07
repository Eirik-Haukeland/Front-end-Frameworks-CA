import './App.css';
import Layout from "./compontents/Layout/index.jsx";
import {Route, Routes} from "react-router-dom";
import Cart from "./pages/cart/Cart.jsx";
import Home from "./pages/home/Home.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Product from "./pages/product/Product.jsx";
import CheckoutSuccessPage from "./pages/checkoutSuccessPage/CheckoutSuccessPage.jsx";

export default function App() {
  window.addEventListener('resize', function(event){
    console.log("window width: " , window.innerWidth);
    console.log("window height: " , window.innerHeight);
  });

  return (
    <Layout>
        <Routes>
          <Route index Component={Home} />
          <Route path="cart" Component={Cart} />
          <Route path="checkout/success" Component={CheckoutSuccessPage} />
          <Route path="contact" Component={Contact} />
          <Route path="product/:productId" Component={Product} />
        </Routes>
    </Layout>
  );
}
