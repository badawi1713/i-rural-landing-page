import React, { useState, useRef } from "react";

import { useForm } from "react-hook-form";

const ISPForm = ({ provinceList, ...rest }) => {
  const onSubmit = (data) => {
    console.log(data);
  };

  const fileInput = useRef();

  const { register, handleSubmit, errors } = useForm();
  const [ispName, setIspName] = useState("");
  const [ispEmail, setIspEmail] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [cpTelephone, setCpTelephone] = useState("");
  const [province, setProvince] = useState("");
  const [subdistrict, setSubdistrict] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [ispFiles, setIspFiles] = useState(null);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [ispAddress, setIspAddress] = useState(null);

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
            setIspAddress(data.display_name);
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

  return (
    <form className="form-body" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-body-group">
        <div className="form-body-content">
          <div className="form-title">
            <p>Data ISP</p>
          </div>
          <div className="form-input-group">
            <div className="data-group">
              <div className="form-input-content">
                <label className="form-input-label">
                  <span>
                    <div className="label-router-icon"></div>
                  </span>
                  <p>Nama ISP</p>
                </label>
                <div className="form-input">
                  <input
                    ref={register({ required: true })}
                    name="ispName"
                    onChange={(e) => {
                      setIspName(e.target.value);
                    }}
                    type="text"
                  />
                  {errors.ispName && (
                    <p className="error-input-message">
                      Nama ISP tidak boleh kosong
                    </p>
                  )}
                </div>
              </div>
              <div className="form-input-content">
                <label className="form-input-label">
                  <span>
                    <i className="fas fa-envelope"></i>
                  </span>
                  <p>Email ISP</p>
                </label>
                <div className="form-input">
                  <input
                    ref={register({
                      required: true,
                      pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                    })}
                    name="ispEmail"
                    onChange={(e) => {
                      setIspEmail(e.target.value.toLocaleLowerCase());
                    }}
                    type="email"
                  />
                  {errors.ispEmail && errors.ispEmail.type === "required" && (
                    <p className="error-input-message">
                      Email tidak boleh kosong
                    </p>
                  )}
                  {errors.ispEmail && errors.ispEmail.type === "pattern" && (
                    <p className="error-input-message">Format email salah</p>
                  )}
                </div>
              </div>
              <div className="form-input-content">
                <label className="form-input-label">
                  <span>
                    <i className="fas fa-user"></i>
                  </span>
                  <p>Contact Person</p>
                </label>
                <div className="form-input">
                  <input
                    ref={register({ required: true })}
                    name="contactPerson"
                    onChange={(e) => {
                      setContactPerson(e.target.value);
                    }}
                    type="text"
                  />
                  {errors.contactPerson && (
                    <p className="error-input-message">
                      Contact person tidak boleh kosong
                    </p>
                  )}
                </div>
              </div>
              <div className="form-input-content">
                <label className="form-input-label">
                  <span>
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  <p>No Telepon CP</p>
                </label>
                <div className="form-input">
                  <input
                    ref={register({
                      required: true,
                      pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                    })}
                    name="cpTelephone"
                    onChange={(e) => {
                      setCpTelephone(e.target.value);
                    }}
                    type="text"
                  />
                  {errors.cpTelephone &&
                    errors.cpTelephone.type === "required" && (
                      <p className="error-input-message">
                        Nomor telepon tidak boleh kosong
                      </p>
                    )}
                  {errors.cpTelephone &&
                    errors.cpTelephone.type === "pattern" && (
                      <p className="error-input-message">
                        Format nomor telepon salah
                      </p>
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
              {latitude && longitude ? (
                <div className="location-info">
                  <p
                    onClick={() => redirectMaps()}
                    className="location-text-url"
                  >
                    https://maps.google.com/maps?z=7&q={latitude},{longitude}
                  </p>
                </div>
              ) : null}

              <div className="form-input">
                <div className="share-location-container">
                  {latitude && longitude ? (
                    <div className="share-location-info">
                      <textarea
                        ref={register({ required: true })}
                        name="ispAddress"
                        onChange={(e) => {
                          e.preventDefault();
                          setIspAddress(e.target.value);
                        }}
                        value={ispAddress}
                      ></textarea>
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
                {errors.ispAddress && (
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

      <div className="form-body-group">
        <div className="form-body-content">
          <div className="form-title">
            <p>Berkas</p>
          </div>
          <div className="form-input-group">
            <div className="form-input-content ">
              <label className="form-input-label">
                <span>
                  <i className="fas fa-file-alt"></i>
                </span>
                <p>Dokumen Surat Izin</p>
              </label>

              <div className="form-input">
                <div className="upload-file-container">
                  <input
                    {...rest}
                    className="upload-file-input"
                    id="selectedFile"
                    type="file"
                    accept="application/pdf"
                    style={{ display: "none" }}
                    ref={(fileInput, register({ required: true }))}
                    name="ispFiles"
                    onChange={(e) => {
                      e.preventDefault();
                      setIspFiles(e.target.value);
                    }}
                  />
                  <input
                    className="upload-file-input"
                    type="button"
                    value="Upload Berkas"
                    onClick={() =>
                      document.getElementById("selectedFile").click()
                    }
                  />
                  {errors.ispFiles && (
                    <p className="error-input-message">
                      Berkas dokumen surat izin belum diupload
                    </p>
                  )}
                  {ispFiles && <p>{ispFiles}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="submit-button">
        <button type="submit">Daftar Sebagai ISP</button>
      </div>
    </form>
  );
};

export default ISPForm;
