/* eslint-disable no-useless-escape */
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
  const [isp_name, setIspName] = useState("");
  const [isp_contact_person_name, setContactPersonName] = useState("");
  const [isp_contact_number, setIspContactNumber] = useState("");
  const [isp_email, setIspEmail] = useState("");
  const [province, setProvince] = useState("");
  const [subdistrict, setSubdistrict] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [isp_address, setIspAddress] = useState("");
  // const [filename, setFilename] = useState(null);
  const [files, setFiles] = useState("");
  const [filename, setFilename] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [locationAddress, setLocationAddress] = useState("");

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
      alert("Fitur Geolocation tidak didukung oleh browser anda");
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

  const inputFileHandler = (e) => {
    setFiles(e.target.files);
    setFilename(e.target.files.length);

    fileUploadHandler();
  };

  const fileUploadHandler = (e) => {
    // e.preventDefault();
    const filesData = new FormData();

    for (const key of Object.keys(files)) {
      filesData.append("file", files[key]);
    }

    dispatch(uploadIspFile(filesData))
      // .then(onSubmitState)
      .then((res) => {
        console.log(res);
        console.log("file", filesData);
      })
      .catch((error) => {
        console.log(error);
        alert("Sedang terjadi kesalahan pada server, silahkan coba lagi.");
      });
  };

  const ispRegistrationSubmit = (e) => {
    const name = isp_contact_person_name;
    const address = isp_address;
    const location = `[${latitude},${longitude}]`;
    const ispData = {
      name,
      address,
      isp_name,
      isp_contact_person_name,
      isp_contact_number,
      isp_email,
      province,
      subdistrict,
      zip_code,
      isp_address,
      location,
    };

    dispatch(ispRegistration(ispData))
      .then(onSubmitState)
      .then((res) => console.log(res))
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
                    name="isp_name"
                    onChange={(e) => {
                      setIspName(e.target.value);
                    }}
                    type="text"
                  />
                  {errors.isp_name && (
                    <p className="error-input-message">
                      *Nama ISP tidak boleh kosong
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
                    name="isp_email"
                    onChange={(e) => {
                      setIspEmail(e.target.value.toLocaleLowerCase());
                    }}
                    type="email"
                  />
                  {errors.isp_email && errors.isp_email.type === "required" && (
                    <p className="error-input-message">
                      *Email tidak boleh kosong
                    </p>
                  )}
                  {errors.isp_email && errors.isp_email.type === "pattern" && (
                    <p className="error-input-message">*Format email salah</p>
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
                    name="isp_contact_person_name"
                    onChange={(e) => {
                      setContactPersonName(e.target.value);
                    }}
                    type="text"
                  />
                  {errors.isp_contact_person_name && (
                    <p className="error-input-message">
                      *Contact person tidak boleh kosong
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
                    })}
                    name="isp_contact_number"
                    onChange={(e) => {
                      setIspContactNumber(e.target.value);
                    }}
                    type="number"
                  />
                  {errors.isp_contact_number && (
                    <p className="error-input-message">
                      *Nomor telepon tidak boleh kosong
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
                    name="zip_code"
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
                  name="isp_address"
                  onChange={(e) => {
                    setIspAddress(e.target.value);
                  }}
                ></textarea>
                {errors.isp_address && (
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
                          setLocationAddress(e.target.value);
                        }}
                        value={locationAddress}
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
                <p>
                  Dokumen Surat Izin{" "}
                  <span title="Harus diisi" className="input-info">
                    *
                  </span>
                </p>
              </label>

              <div className="form-input">
                <div className="upload-file-container">
                  <input
                    className="upload-file-input"
                    id="selectedFile"
                    type="file"
                    accept="application/pdf"
                    style={{ display: "none" }}
                    ref={(fileInput, register({ required: true }))}
                    name="files"
                    onChange={(e) => {
                      inputFileHandler(e);
                      // setIspFiles(e.target.files[0]);
                      // setFilename(e.target.value);
                      // console.log(files[0].name);
                    }}
                    multiple
                  />
                  <input
                    className="upload-file-input"
                    type="button"
                    value="Upload Berkas"
                    onClick={() =>
                      document.getElementById("selectedFile").click()
                    }
                  />
                  {errors.files && (
                    <p className="error-input-file-message">
                      *Berkas dokumen surat izin belum dipilih
                    </p>
                  )}

                  {files && filename !== 0 && (
                    <p className="files-label">{filename} berkas terpilih</p>
                  )}
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
