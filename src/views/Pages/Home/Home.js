import React from "react";

import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import Header from "../../Components/Header/Header";
import Information from "../../Components/Information/Information";
// import Configure from "../../Components/Configure/Configure";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <div>
      <SideBar />
      <div className="container">
        <NavBar openNav={() => openNav()} />
        <div onClick={() => closeNav()}>
          <Header />
          <main>
            <Information />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
