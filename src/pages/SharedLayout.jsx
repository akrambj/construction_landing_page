import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const SharedLayout = () => {
  return (
    <main className="w-screen min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default SharedLayout;
