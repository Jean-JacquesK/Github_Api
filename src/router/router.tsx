import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/Homepage";
import Navbar from "../Layouts/Navbar/Navbar";
import Footer from "../Layouts/footer/Footer";
import AboutPage from "../pages/AboutPage/AboutPage";
import { UserDetails } from "../pages/UserDetails/UserDetails";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='/user/:login' element={<UserDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default Router;
