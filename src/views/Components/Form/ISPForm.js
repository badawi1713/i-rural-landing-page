import React, { useState } from "react";

const ISPForm = ({ provinceList }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [userAdress, setUserAddress] = useState(null);

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
            setUserAddress(data.display_name);
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
    <div className="form-body">
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
                  <input type="text" />
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
                  <input type="email" />
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
                  <input type="text" />
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
                  <input type="text" />
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
                  <select>
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
                  <input type="text" />
                </div>
              </div>
              <div className="form-input-content">
                <label className="form-input-label">
                  <p>Kode POS</p>
                </label>
                <div className="form-input">
                  <input type="text" />
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
                <textarea></textarea>
              </div>
            </div>
            <div className="form-input-content ">
              <label className="form-input-label">
                <span>
                  <div className="label-gps-icon"></div>
                </span>
                <p>Share Location</p>
              </label>
              {userAdress ? (
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
                  {userAdress ? (
                    <div className="share-location-info">
                      <textarea defaultValue={userAdress}></textarea>
                      {/* <div className="message">
                        <p>
                          *Share location kamu supaya tim I-RURAL bisa
                          mengetahui titik koordinat lokasi kamu secara detail
                        </p>
                      </div> */}
                    </div>
                  ) : (
                    <></>
                  )}
                  <button onClick={() => getLocation()}>Share Location</button>
                </div>
              </div>
              <div className="form-input-info">
                <p>
                  *Share location kamu supaya tim I-RURAL bisa mengetahui titik
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
                    type="file"
                    className="upload-file-input"
                    id="selectedFile"
                    accept="application/pdf"
                    style={{ display: "none" }}
                  />
                  <input
                    className="upload-file-input"
                    type="button"
                    value="Upload Berkas"
                    onClick={() =>
                      document.getElementById("selectedFile").click()
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="submit-button">
        <button>Daftar Sebagai ISP</button>
      </div>
    </div>
  );
};

export default ISPForm;
