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
      name: "Gorontalo",
    },
    {
      id: 6,
      name: "Jakarta",
    },
    {
      id: 7,
      name: "Jambi",
    },
    {
      id: 8,
      name: "Jawa Barat",
    },
    {
      id: 9,
      name: "Jawa Tengah",
    },
    {
      id: 10,
      name: "Jawa Timur",
    },
    {
      id: 11,
      name: "Kalimantan Barat",
    },
    {
      id: 12,
      name: "Kalimantan Selatan",
    },
    {
      id: 13,
      name: "Kalimantan Tengah",
    },
    {
      id: 14,
      name: "Kalimantan Timur",
    },
    {
      id: 15,
      name: "Kalimantan Utara",
    },
    {
      id: 16,
      name: "Kepulauan Bangka Belitung",
    },
    {
      id: 17,
      name: "Kepulauan Riau",
    },
    {
      id: 18,
      name: "Lampung",
    },
    {
      id: 19,
      name: "Maluku",
    },
    {
      id: 20,
      name: "Maluku Utara",
    },
    {
      id: 21,
      name: "Nusa Tenggara Barat",
    },
    {
      id: 22,
      name: "Nusa Tenggara Timur",
    },
    {
      id: 23,
      name: "Papua",
    },
    {
      id: 24,
      name: "Papua Barat",
    },
    {
      id: 25,
      name: "Riau",
    },
    {
      id: 26,
      name: "Sulawesi Barat",
    },
    {
      id: 27,
      name: "Sulawesi Selatan",
    },
    {
      id: 28,
      name: "Sulawesi Tengah",
    },
    {
      id: 29,
      name: "Sulawesi Tenggara",
    },
    {
      id: 30,
      name: " Sulawesi Utara",
    },
    {
      id: 31,
      name: "Sumatra Barat",
    },
    {
      id: 32,
      name: "Sumatra Selatan",
    },
    {
      id: 33,
      name: "Sumatra Utara",
    },
    {
      id: 34,
      name: "Yogyakarta",
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
                <ISPForm provinceList={provinceData} />
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
