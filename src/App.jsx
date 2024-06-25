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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/product" element={<AllProduct />} />

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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
