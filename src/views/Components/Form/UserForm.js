import React, { useState } from "react";

import { useDispatch, connect } from "react-redux";
import { userRegistration } from "../../../Redux/actions/registration";

const UserForm = ({ provinceList, onSubmitState }) => {
  const dispatch = useDispatch();

  const [fullname, setFullname] = useState("");
  const [ktp, setKtp] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [province, setProvince] = useState("");
  const [subdistrict, setSubdistrict] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [address, setAddress] = useState("");

  const [fullnameInputError, setFullnameInputError] = useState(false);
  const [ktpInputError, setKtpInputError] = useState(false);
  const [phoneNumberInputError, setPhoneNumberInputError] = useState(false);
  const [emailInputError, setEmailInputError] = useState(false);
  const [provinceInputError, setProvinceInputError] = useState(false);
  const [subdistrictInputError, setSubdistrictInputError] = useState(false);
  const [zipCodeInputError, setZipCodeInputError] = useState(false);
  const [addressInputError, setAddressInputError] = useState(false);

  const [validate, setValidate] = useState(false);

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

  const userRegistrationSubmit = (e) => {
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
        console.log(error);
        alert(error);
      });
  };

  return (
    <div className="form-body">
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
                    required
                    name="fullname"
                    onChange={(e) => {
                      setFullname(e.target.value);
                    }}
                    type="text"
                  />
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
                    required
                    name="ktp"
                    onChange={(e) => {
                      setKtp(e.target.value);
                    }}
                    type="text"
                  />
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
                    required
                    name="phone_number"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                    type="text"
                  />
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
                    required
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                  />
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
                    name="province"
                    onChange={(e) => {
                      setProvince(e.target.value);
                    }}
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
                </div>
              </div>
              <div className="form-input-content">
                <label className="form-input-label">
                  <p>Kelurahan</p>
                </label>
                <div className="form-input">
                  <input
                    required
                    name="subdistrict"
                    onChange={(e) => {
                      setSubdistrict(e.target.value);
                    }}
                    type="text"
                  />
                </div>
              </div>
              <div className="form-input-content">
                <label className="form-input-label">
                  <p>Kode POS</p>
                </label>
                <div className="form-input">
                  <input
                    required
                    name="zip_code"
                    onChange={(e) => {
                      setZipCode(e.target.value);
                    }}
                    type="text"
                  />
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
                  required
                  name="address"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
            <div className="form-input-content ">
              <label className="form-input-label">
                <span>
                  <div className="label-gps-icon"></div>
                </span>
                <p>Bagikan Lokasi</p>
              </label>

              {location_address ? (
                <div className="location-info">
                  <p
                    onClick={() => redirectMaps()}
                    className="location-text-url"
                  >
                    https://maps.google.com/maps?z=7&q={latitude},{longitude}
                  </p>
                </div>
              ) : (
                <> </>
              )}

              <div className="form-input">
                <div className="share-location-container">
                  {location_address ? (
                    <div className="share-location-info">
                      <textarea
                        required
                        name="location_address"
                        onChange={(e) => {
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
                  <button onClick={() => getLocation()}>Bagikan Lokasi</button>
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
        <button type="submit" onClick={() => userRegistrationSubmit()}>
          Daftar Sebagai Pengguna
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (registrations) => {
  return {
    registrations,
  };
};

export default connect(mapStateToProps)(UserForm);
