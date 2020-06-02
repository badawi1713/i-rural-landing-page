import React, { useState, useRef } from "react";

import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import {
  ispRegistration,
  uploadIspFile,
} from "../../../Redux/actions/registration";

const ISPForm = ({ provinceList, onSubmitState }) => {
  const dispatch = useDispatch();
  const fileInput = useRef();

  const { register, handleSubmit, errors } = useForm();
  const [nama_isp, setNamaIsp] = useState("");
  const [nama, setNama] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [kodepos, setKodepos] = useState("");
  const [alamat, setAlamat] = useState("");
  const [filename, setFilename] = useState(null);
  const [photo, setIspFiles] = useState(null);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

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
            setCurrentLocation(data.display_name);
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

  const ispRegistrationSubmit = async (e) => {
    const data = {
      nama_isp,
      nama,
      phone,
      email,
      provinsi,
      kelurahan,
      kodepos,
      alamat,
      currentLocation,
    };

    dispatch(ispRegistration(data))
      .then(onSubmitState)
      .catch((error) => {
        console.log(error);
        alert("Sedang terjadi kesalahan pada server, silahkan coba lagi.");
      });
  };

  return (
    <form className="form-body" onSubmit={handleSubmit(ispRegistrationSubmit)}>
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
                  <p>
                    Nama ISP{" "}
                    <span title="Harus diisi" className="input-info">
                      *
                    </span>
                  </p>
                </label>
                <div className="form-input">
                  <input
                    ref={register({ required: true })}
                    name="nama_isp"
                    onChange={(e) => {
                      setNamaIsp(e.target.value);
                    }}
                    type="text"
                  />
                  {errors.nama_isp && (
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
                  <p>
                    Email ISP{" "}
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
                      Email tidak boleh kosong
                    </p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p className="error-input-message">Format email salah</p>
                  )}
                </div>
              </div>
              <div className="form-input-content">
                <label className="form-input-label">
                  <span>
                    <i className="fas fa-user"></i>
                  </span>
                  <p>
                    Contact Person{" "}
                    <span title="Harus diisi" className="input-info">
                      *
                    </span>
                  </p>
                </label>
                <div className="form-input">
                  <input
                    ref={register({ required: true })}
                    name="nama"
                    onChange={(e) => {
                      setNama(e.target.value);
                    }}
                    type="text"
                  />
                  {errors.nama && (
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
                  <p>
                    No Telepon CP{" "}
                    <span title="Harus diisi" className="input-info">
                      *
                    </span>
                  </p>
                </label>
                <div className="form-input">
                  <input
                    ref={register({
                      required: true,
                      pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                    })}
                    name="phone"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="text"
                  />
                  {errors.phone && errors.phone.type === "required" && (
                    <p className="error-input-message">
                      Nomor telepon tidak boleh kosong
                    </p>
                  )}
                  {errors.phone && errors.phone.type === "pattern" && (
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
                      setProvinsi(e.target.value);
                    }}
                    name="provinsi"
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
                  {errors.provinsi && (
                    <p className="error-input-message">
                      Provinsi tidak boleh kosong
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
                    name="kelurahan"
                    onChange={(e) => {
                      setKelurahan(e.target.value);
                    }}
                    type="text"
                  />
                  {errors.kelurahan && (
                    <p className="error-input-message">
                      Kelurahan tidak boleh kosong
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
                    name="kodepos"
                    onChange={(e) => {
                      setKodepos(e.target.value);
                    }}
                    type="number"
                  />
                  {errors.kodepos && (
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
                  name="alamat"
                  onChange={(e) => {
                    setAlamat(e.target.value);
                  }}
                ></textarea>
                {errors.alamat && (
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
                        name="currentLocation"
                        onChange={(e) => {
                          e.preventDefault();
                          setCurrentLocation(e.target.value);
                        }}
                        value={currentLocation}
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
                    className="upload-file-input"
                    id="selectedFile"
                    type="file"
                    accept="application/pdf"
                    style={(fileInput, { display: "none" })}
                    ref={register({ required: true })}
                    name="photo"
                    onChange={(e) => {
                      setIspFiles(e.target.files[0]);
                      setFilename(e.target.value);
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
                  {errors.photo && (
                    <p className="error-input-message">
                      *Berkas dokumen surat izin belum dipilih
                    </p>
                  )}

                  {photo && <p>{filename}</p>}
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
