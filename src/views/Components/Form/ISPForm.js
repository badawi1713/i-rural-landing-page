import React from "react";

const ISPForm = ({ provinceList }) => {
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
              <div className="location-info">
                <a
                  href=" 
          https://maps.google.com/maps?z=7&q=-6.2038519755732,106.76461335272"
                >
                  https://maps.google.com/maps?z=7&q=-6.2038519755732,106.76461335272
                </a>
              </div>
              <div className="form-input">
                <div className="share-location-container">
                  <div className="share-location-info">
                    <textarea></textarea>
                    <div className="message">
                      <p>
                        *Share location kamu supaya tim I-RURAL bisa mengetahui
                        titik koordinat lokasi kamu secara detail
                      </p>
                    </div>
                  </div>

                  <button>Share Location</button>
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
