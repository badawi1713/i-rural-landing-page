/* eslint-disable no-useless-escape */
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { userRegistration } from "../../../Redux/actions/registration";

import { useForm } from "react-hook-form";

const UserForm = ({ provinceList, onSubmitState }) => {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [identity_number, setIdentityNumber] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [province, setProvince] = useState("");
  const [subdistrict, setSubdistrict] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [address, setAddress] = useState("");

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [location, setLocation] = useState("");

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        console.log(position);
        await setLatitude(position.coords.latitude);
        await setLongitude(position.coords.longitude);
        await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&zoom=18&addressdetails=1`,
          { mode: "cors" }
        )
          .then((response) => {
            console.log(response);
            let res = response.json();
            return res;
          })
          .then((data) => {
            console.log(data);
            setLocation(data.display_name);
          })
          .catch((error) => alert(error));
      }, handleLocationError);
    } else {
      alert("Geolocation is not supported by this browser");
    }
  };

  const handleLocationError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert(
          "Anda tidak mengizinkan untuk akses lokasi, silahkan untuk mengizinkan kembali."
        );
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Informasi lokasi sedang tidak tersedia, silahkan coba kembali.");
        break;
      case error.TIMEOUT:
        alert(
          "Waktu permintaan akses lokasi telah habis, silahkan coba kembali."
        );
        break;
      case error.UNKNOWN_ERROR:
        alert("Sedang terjadi kesalahan, silahkan coba kembali.");
        break;
      default:
        alert("Sedang terjadi kesalahan, silahkan coba kembali.");
    }
  };

  const redirectMaps = () => {
    window.open(`https://maps.google.com/maps?z=7&q=${latitude},${longitude}`);
    return null;
  };

  const userRegistrationSubmit = async (e) => {
    const data = {
      name,
      identity_number,
      contact_number,
      email,
      province,
      subdistrict,
      zip_code,
      address,
      // location,
    };

    dispatch(userRegistration(data))
      .then(onSubmitState)
      .catch((error) => {
        console.log(error);
        alert("Sedang terjadi kesalahan pada server, silahkan coba lagi.");
      });
  };

  return (
    <form className="form-body" onSubmit={handleSubmit(userRegistrationSubmit)}>
      <div className="form-body-group">
        <div className="form-body-content">
          <div className="form-title">
            <p>Data Diri</p>
          </div>
          <div className="form-input-group">
            <div className="data-group">
              <div className="form-input-content">
                <label className="form-input-label">
                  <span>
                    <i className="fas fa-user"></i>
                  </span>
                  <p>
                    Nama Lengkap{" "}
                    <span title="Harus diisi" className="input-info">
                      *
                    </span>
                  </p>
                </label>
                <div className="form-input">
                  <input
                    ref={register({ required: true })}
                    name="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                  />
                  {errors.name && (
                    <p className="error-input-message">
                      *Nama tidak boleh kosong
                    </p>
                  )}
                </div>
              </div>
              <div className="form-input-content">
                <label className="form-input-label">
                  <span>
                    <i className="fas fa-id-card"></i>
                  </span>
                  <p>
                    No KTP{" "}
                    <span title="Harus diisi" className="input-info">
                      *
                    </span>
                  </p>
                </label>
                <div className="form-input">
                  <input
                    ref={register({ required: true })}
                    name="identity_number"
                    onChange={(e) => {
                      setIdentityNumber(e.target.value);
                    }}
                    type="number"
                  />
                  {errors.identity_number && (
                    <p className="error-input-message">
                      *No KTP tidak boleh kosong
                    </p>
                  )}
                </div>
              </div>
              <div className="form-input-content">
                <label className="form-input-label">
                  <span>
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  <p>
                    No Telepon{" "}
                    <span title="Harus diisi" className="input-info">
                      *
                    </span>
                  </p>
                </label>
                <div className="form-input">
                  <input
                    ref={register({
                      required: true,
                    })}
                    name="contact_number"
                    onChange={(e) => {
                      setContactNumber(e.target.value);
                    }}
                    type="number"
                  />
                  {errors.contact_number && (
                    <p className="error-input-message">
                      *Nomor telepon tidak boleh kosong
                    </p>
                  )}
                </div>
              </div>
              <div className="form-input-content">
                <label className="form-input-label">
                  <span>
                    <i className="fas fa-envelope"></i>
                  </span>
                  <p>
                    Email{" "}
                    <span title="Harus diisi" className="input-info">
                      *
                    </span>
                  </p>
                </label>
                <div className="form-input">
                  <input
                    ref={register({
                      required: true,
                      pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                    })}
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value.toLocaleLowerCase());
                    }}
                    type="email"
                  />
                  {errors.email && errors.email.type === "required" && (
                    <p className="error-input-message">
                      *Email tidak boleh kosong
                    </p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p className="error-input-message">Format email salah</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-body-group">
        <div className="form-body-content">
          <div className="form-title">
            <p>Alamat</p>
          </div>
          <div className="form-input-group">
            <div className="address-group">
              <div className="form-input-content">
                <label className="form-input-label">
                  <p>
                    Provinsi{" "}
                    <span title="Harus diisi" className="input-info">
                      *
                    </span>
                  </p>
                </label>
                <div className="form-input">
                  <select
                    ref={register({ required: true })}
                    onChange={(e) => {
                      setProvince(e.target.value);
                    }}
                    name="province"
                  >
                    <option value="">Pilih Provinsi</option>
                    {provinceList.length < 1 ? (
                      <option value="0">Data Provinsi Kosong</option>
                    ) : (
                      provinceList &&
                      provinceList.map((item) => (
                        <option key={item.id} value={item.name}>
                          {item.name}
                        </option>
                      ))
                    )}
                  </select>
                  {errors.province && (
                    <p className="error-input-message">
                      *Provinsi tidak boleh kosong
                    </p>
                  )}
                </div>
              </div>
              <div className="form-input-content">
                <label className="form-input-label">
                  <p>
                    Kelurahan{" "}
                    <span title="Harus diisi" className="input-info">
                      *
                    </span>
                  </p>
                </label>
                <div className="form-input">
                  <input
                    ref={register({ required: true })}
                    name="subdistrict"
                    onChange={(e) => {
                      setSubdistrict(e.target.value);
                    }}
                    type="text"
                  />
                  {errors.subdistrict && (
                    <p className="error-input-message">
                      *Kelurahan tidak boleh kosong
                    </p>
                  )}
                </div>
              </div>
              <div className="form-input-content">
                <label className="form-input-label">
                  <p>
                    Kode POS{" "}
                    <span title="Harus diisi" className="input-info">
                      *
                    </span>
                  </p>
                </label>
                <div className="form-input">
                  <input
                    ref={register({ required: true })}
                    name="_code"
                    onChange={(e) => {
                      setZipCode(e.target.value);
                    }}
                    type="number"
                  />
                  {errors.zip_code && (
                    <p className="error-input-message">
                      *Kode pos tidak boleh kosong
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="form-body-content">
            <div className="form-input-content">
              <label className="form-input-label">
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <p>
                  Alamat Lengkap{" "}
                  <span title="Harus diisi" className="input-info">
                    *
                  </span>
                </p>
              </label>
              <div className="form-input">
                <textarea
                  ref={register({ required: true })}
                  name="address"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                ></textarea>
                {errors.address && (
                  <p className="error-input-message">
                    *Alamat lengkap tidak boleh kosong
                  </p>
                )}
              </div>
            </div>
            <div className="form-input-content ">
              <label className="form-input-label">
                <span>
                  <div className="label-gps-icon"></div>
                </span>
                <p>Bagikan Lokasi</p>
              </label>

              {latitude ? (
                <div className="location-info">
                  <p
                    name="latitude"
                    onClick={() => redirectMaps()}
                    className="location-text-url"
                  >
                    https://maps.google.com/maps?z=7&q={latitude},{longitude}
                  </p>
                </div>
              ) : null}

              <div className="form-input">
                <div className="share-location-container">
                  {latitude ? (
                    <div className="share-location-info">
                      <textarea
                        onChange={(e) => {
                          e.preventDefault();
                          setLocation(e.target.value);
                        }}
                        value={location}
                      ></textarea>

                      {/* <div className="message">
                        <p>
                          *Bagikan lokasi kamu supaya tim I-RURAL bisa
                          mengetahui titik koordinat lokasi kamu secara detail
                        </p>
                      </div> */}
                    </div>
                  ) : null}
                  <button type="button" onClick={() => getLocation()}>
                    Bagikan Lokasi
                  </button>
                </div>
              </div>
              <div className="form-input-info">
                <p>
                  *Bagikan lokasi kamu supaya tim I-RURAL bisa mengetahui titik
                  koordinat lokasi kamu secara detail
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="submit-button">
        <button type="submit">
          {/* onClick={() => userRegistrationSubmit()} */}
          Daftar Sebagai Pengguna
        </button>
      </div>
    </form>
  );
};

export default UserForm;
