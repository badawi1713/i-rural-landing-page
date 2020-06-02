import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./Register.css";

import ISPForm from "../../Components/Form/ISPForm";
import UserForm from "../../Components/Form/UserForm";
import Message from "../../Components/Message/Message";
import NavBar from "../../Components/NavBar/NavBar";
import SideBar from "../../Components/SideBar/SideBar";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

const RegisterPage = (props) => {
  const [showUserForm, setShowUserForm] = useState(
    props.location.userFormActive || true
  );

  const [onSubmit, setOnSubmit] = useState(false);

  const provinceData = [
    {
      id: 1,
      name: "Aceh",
    },
    {
      id: 2,
      name: "Bali",
    },
    {
      id: 3,
      name: "Banten",
    },
    {
      id: 4,
      name: "Bengkulu",
    },
    {
      id: 5,
      name: "D.I Yogyakarta",
    },
    {
      id: 6,
      name: "Gorontalo",
    },
    {
      id: 7,
      name: "Jakarta",
    },
    {
      id: 8,
      name: "Jambi",
    },
    {
      id: 9,
      name: "Jawa Barat",
    },
    {
      id: 10,
      name: "Jawa Tengah",
    },
    {
      id: 11,
      name: "Jawa Timur",
    },
    {
      id: 12,
      name: "Kalimantan Barat",
    },
    {
      id: 13,
      name: "Kalimantan Selatan",
    },
    {
      id: 14,
      name: "Kalimantan Tengah",
    },
    {
      id: 15,
      name: "Kalimantan Timur",
    },
    {
      id: 16,
      name: "Kalimantan Utara",
    },
    {
      id: 17,
      name: "Kep. Bangka Belitung",
    },
    {
      id: 18,
      name: "Kepulauan Riau",
    },
    {
      id: 19,
      name: "Lampung",
    },
    {
      id: 20,
      name: "Maluku",
    },
    {
      id: 21,
      name: "Maluku Utara",
    },
    {
      id: 22,
      name: "Nusa Tenggara Barat",
    },
    {
      id: 23,
      name: "Nusa Tenggara Timur",
    },
    {
      id: 24,
      name: "Papua",
    },
    {
      id: 25,
      name: "Papua Barat",
    },
    {
      id: 26,
      name: "Riau",
    },
    {
      id: 27,
      name: "Sulawesi Barat",
    },
    {
      id: 28,
      name: "Sulawesi Selatan",
    },
    {
      id: 29,
      name: "Sulawesi Tengah",
    },
    {
      id: 30,
      name: "Sulawesi Tenggara",
    },
    {
      id: 31,
      name: " Sulawesi Utara",
    },
    {
      id: 32,
      name: "Sumatra Barat",
    },
    {
      id: 33,
      name: "Sumatra Selatan",
    },
    {
      id: 34,
      name: "Sumatra Utara",
    },
  ];

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

  const onSubmitForm = () => {
    setOnSubmit(true);
  };

  return (
    <div>
      <SideBar contactScroll="home" />
      <NavBar contactScroll="home" openNav={() => openNav()} />
      <div onClick={() => closeNav()}>
        {!onSubmit ? (
          <section id="registration" className="form-section">
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
              {showUserForm ? (
                <UserForm
                  onSubmitState={() => onSubmitForm()}
                  provinceList={provinceData}
                />
              ) : (
                <ISPForm
                  onSubmitState={() => onSubmitForm()}
                  provinceList={provinceData}
                />
              )}
            </div>
          </section>
        ) : (
          <Message />
        )}
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default withRouter(RegisterPage);
