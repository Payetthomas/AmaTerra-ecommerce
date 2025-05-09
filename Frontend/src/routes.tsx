import { Routes, Route } from "react-router-dom";
import  Home from "./pages/Home/Home.tsx"; 
import About from "./pages/About.tsx"; 
import Contact from "./pages/Contact.tsx"; 
import AdminNewsletter from "./components/Newsletter/AdminNewsletter.tsx";
import AddProduct from "./pages/Admin/AddProduct.tsx";
import Stock from "./pages/Admin/Stock.tsx";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminNewsletter/>} />
            <Route path="/admin/ajout-produit" element={<AddProduct/>} />
            <Route path="/admin/ajout-produit/:id" element={<AddProduct/>} />
            <Route path="/admin/stock-produit" element={<Stock/>} />
        </Routes>
    )
}

export default AppRoutes; 
