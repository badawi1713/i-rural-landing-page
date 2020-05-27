import React from "react";

const UserForm = ({ provinceList }) => {
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
                  <input type="text" />
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
                  <input type="text" />
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
                  <input type="text" />
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
                  <input type="email" />
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

      <div className="submit-button">
        <button>Daftar Sebagai Pengguna</button>
      </div>
    </div>
  );
};

export default UserForm;
