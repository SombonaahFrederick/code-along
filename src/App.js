// import Header from "./components/Header";
// import Button from"./components/Button";
// import { Image } from "./components/Image";
import Navbar from "./components/Navbar";
// import Practice from "./components/Practice"
// import TaskItem from "./components/TaskItem";
import TaskManager from "./components/TaskManager";
// import Form from "./components/Form";
// import Product from "./components/Product";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/task-manager" element={<TaskManager />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
