import React, { useState } from "react";

import "./Register.css";

import ISPForm from "../../Components/Form/ISPForm";
import UserForm from "../../Components/Form/UserForm";
import NavBar from "../../Components/NavBar/NavBar";
import SideBar from "../../Components/SideBar/SideBar";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

const RegisterPage = () => {
  const [showUserForm, setShowUserForm] = useState(true);

  const registerAsUser = () => {
    setShowUserForm(true);
  };

  const registerAsISP = () => {
    setShowUserForm(false);
  };

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };
  return (
    <div>
      <SideBar />
      <NavBar openNav={() => openNav()} />
      <div onClick={() => closeNav()}>
        <section className="form-section">
          <div className="form-section-container">
            <div className="form-header">
              <div className="form-title">
                <p>Daftar I-RURAL</p>
              </div>
              {showUserForm ? (
                <div className="form-header-button">
                  <button onClick={() => registerAsUser()}>
                    Daftar Sebagai Pengguna
                  </button>
                  <button
                    style={{ opacity: 0.3 }}
                    onClick={() => registerAsISP()}
                  >
                    Daftar Sebagai ISP
                  </button>
                </div>
              ) : (
                <div className="form-header-button">
                  <button
                    style={{ opacity: 0.3 }}
                    onClick={() => registerAsUser()}
                  >
                    Daftar Sebagai Pengguna
                  </button>
                  <button onClick={() => registerAsISP()}>
                    Daftar Sebagai ISP
                  </button>
                </div>
              )}
            </div>
            {showUserForm ? <UserForm /> : <ISPForm />}
          </div>
        </section>
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default RegisterPage;
