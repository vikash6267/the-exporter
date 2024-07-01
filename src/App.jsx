import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Aboutus from "./Pages/Aboutus";
import AllProduct from "./Pages/AllProduct";
import Layout from "./component/Admin/pages/Layout";
import OpenRoute from "./component/Admin/auth/OpenRoute";
import PrivateRoute from "./component/Admin/auth/PrivateRoute";
import AddProduct from "./component/Admin/pages/AddProduct";
import GetProduct from "./component/Admin/pages/GetProduct";
import Login from "./component/Admin/pages/Login";
import Dashboard from "./component/Admin/pages/Dashboard";
import Blog from "./Pages/Blog";
import SingleBlog from "./Pages/SingleBlog";
import Category from "./Pages/Category";
import Whatsapp from "./component/common/Whatsapp";
import AddBlog from "./component/Admin/pages/AddBlog";
import GetBlog from "./component/Admin/pages/GetBlogs";
import AddSlider from "./component/Admin/pages/AddSlider";
import GetSlider from "./component/Admin/pages/GetSlider";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/product" element={<AllProduct />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route path="/category/:cate" element={<Category />} />

        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/addProduct" element={<AddProduct />} />
          <Route path="/admin/getProduct" element={<GetProduct />} />
          <Route path="/admin/addBlog" element={<AddBlog />} />
          <Route path="/admin/getBlog" element={<GetBlog />} />
          <Route path="/admin/addSlider" element={<AddSlider />} />
          <Route path="/admin/getSlider" element={<GetSlider />} />
        </Route>
      </Routes>

      <div className="fixed bottom-8 md:right-10 right-4 z-50">
        <Whatsapp />
      </div>
    </div>
  );
}

export default App;
