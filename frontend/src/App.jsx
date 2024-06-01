import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import ShopPage from "./pages/ShopPage"
import BlogPage from "./pages/BlogPage"
import ContactPage from "./pages/ContactPage"
import CardPage from "./pages/CardPage"
import AuthPage from "./pages/AuthPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import BlogDetailsPage from "./pages/BlogDetailsPage"
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/shop" element={<ShopPage />}></Route>
      <Route path="/blogs" element={<BlogPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
      <Route path="/card" element={<CardPage />}></Route>
      <Route path="/auth" element={<AuthPage />}></Route>
      <Route path="/product/:id" element={<ProductDetailsPage />}></Route>
      <Route path="/blog/:id" element={<BlogDetailsPage />}></Route>
    </Routes>
  )
}

export default App