import { Routes, Route } from "react-router-dom";
import  Home from "./pages/Home/Home.tsx"; 
import About from "./pages/About.tsx"; 
import Contact from "./pages/Contact.tsx"; 
import AdminNewsletter from "./components/Newsletter/AdminNewsletter.tsx";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminNewsletter/>} />
        </Routes>
    )
}

export default AppRoutes; 
