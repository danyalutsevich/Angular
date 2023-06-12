import { Outlet } from "react-router-dom";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
import BackButton from "./partials/BackBtn";

function Layout() {
  return (
    <>
      <Navbar />
      <BackButton />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
