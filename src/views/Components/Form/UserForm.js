import React, { useState } from "react";

import { useDispatch, connect } from "react-redux";
import { userRegistration } from "../../../Redux/actions/registration";

import { useForm } from "react-hook-form";

const UserForm = ({ provinceList, onSubmitState }) => {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const [fullname, setFullname] = useState("");
  const [ktp, setKtp] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [province, setProvince] = useState("");
  const [subdistrict, setSubdistrict] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [address, setAddress] = useState("");

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [location_address, setLocationAddress] = useState(null);

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
            setLocationAddress(data.display_name);
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
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occurred.");
    }
  };

  const redirectMaps = () => {
    window.open(`https://maps.google.com/maps?z=7&q=${latitude},${longitude}`);
    return null;
  };

  const userRegistrationSubmit = async (e) => {
    const data = {
      fullname,
      ktp,
      phone_number,
      email,
      province,
      subdistrict,
      zip_code,
      address,
      latitude,
      longitude,
      location_address,
    };

    dispatch(userRegistration(data))
      .then(onSubmitState)
      .catch((error) => {
        if (location_address === null) {
          alert("Bagikan lokasi anda terlebih dahulu");
        } else {
          console.log(error);
          alert("Sedang terjadi kesalahan pada server, silahkan coba lagi.");
        }
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
                  <p>Nama Lengkap</p>
                </label>
                <div className="form-input">
                  <input
                    ref={register({ required: true })}
                    name="fullname"
                    onChange={(e) => {
                      setFullname(e.target.value);
                    }}
                    type="text"
                  />
                  {errors.fullname && (
                    <p className="error-input-message">
                      Nama tidak boleh kosong
                    </p>
                  )}
                </div>
              </div>
              <div className="form-input-content">
                <label className="form-input-label">
                  <span>
                    <i className="fas fa-id-card"></i>
                  </span>
                  <p>No KTP</p>
                </label>
                <div className="form-input">
                  <input
                    ref={register({ required: true })}
                    name="ktp"
                    onChange={(e) => {
                      setKtp(e.target.value);
                    }}
                    type="number"
                  />
                  {errors.ktp && (
                    <p className="error-input-message">
                      No KTP tidak boleh kosong
                    </p>
                  )}
                </div>
              </div>
              <div className="form-input-content">
                <label className="form-input-label">
                  <span>
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  <p>No Telepon</p>
                </label>
                <div className="form-input">
                  <input
                    ref={register({
                      required: true,
                      pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                    })}
                    name="phone_number"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                    type="text"
                  />
                  {errors.phone_number &&
                    errors.phone_number.type === "required" && (
                      <p className="error-input-message">
                        Nomor telepon tidak boleh kosong
                      </p>
                    )}
                  {errors.phone_number &&
                    errors.phone_number.type === "pattern" && (
                      <p className="error-input-message">
                        Format nomor telepon salah
                      </p>
                    )}
                </div>
              </div>
              <div className="form-input-content">
                <label className="form-input-label">
                  <span>
                    <i className="fas fa-envelope"></i>
                  </span>
                  <p>Email</p>
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
                      Email tidak boleh kosong
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
                  <p>Provinsi</p>
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
                      Provinsi tidak boleh kosong
                    </p>
                  )}
                </div>
              </div>
              <div className="form-input-content">
                <label className="form-input-label">
                  <p>Kelurahan</p>
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
                      Kelurahan tidak boleh kosong
                    </p>
                  )}
                </div>
              </div>
              <div className="form-input-content">
                <label className="form-input-label">
                  <p>Kode POS</p>
                </label>
                <div className="form-input">
                  <input
                    ref={register({ required: true })}
                    name="zip_code"
                    onChange={(e) => {
                      setZipCode(e.target.value);
                    }}
                    type="number"
                  />
                  {errors.zip_code && (
                    <p className="error-input-message">
                      Kode pos tidak boleh kosong
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
                <p>Alamat Lengkap</p>
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
                    Alamat lengkap tidak boleh kosong
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
                        ref={register({ required: true })}
                        name="location_address"
                        onChange={(e) => {
                          e.preventDefault();
                          setLocationAddress(e.target.value);
                        }}
                        value={location_address}
                      >
                        {location_address}
                      </textarea>

                      {/* <div className="message">
                        <p>
                          *Bagikan lokasi kamu supaya tim I-RURAL bisa
                          mengetahui titik koordinat lokasi kamu secara detail
                        </p>
                      </div> */}
                    </div>
                  ) : (
                    <></>
                  )}
                  <button type="button" onClick={() => getLocation()}>
                    Bagikan Lokasi
                  </button>
                </div>
              </div>
              <div className="form-input-info">
                {errors.location_address && (
                  <p className="error-input-message">
                    Alamat lokasi tidak boleh kosong
                  </p>
                )}
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

const mapStateToProps = (registrations) => {
  return {
    registrations,
  };
};

export default connect(mapStateToProps)(UserForm);
