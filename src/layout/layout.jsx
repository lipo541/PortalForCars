import React from "react";
import "./layout.css";
import Remoute from "../routes/route";
import Head from "../components/head/head";
import Footer from "../components/footer";
import Burgermenu from "../components/burgermenu/burgermenu";

const Layout = () => {
  return (
    <div>
      <div className="layout_box1">
        <Head />
        <Burgermenu />
      </div>
      <main>
        <Remoute />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
