import Axios from "axios";

export const userRegistration = (userData) => {
  return {
    type: "POST_USER_REGISTRATION",
    payload: Axios.post(`/api/v1/customer/register/Customer`, userData),
  };
};

export const ispRegistration = (ispData) => {
  return {
    type: "POST_ISP_REGISTRATION",
    // payload: Axios.post(`/api/v1/customer/register/ISP`, ispData),
  };
};

export const uploadIspFile = (ispFiles) => {
  return {
    type: "POST_ISP_FILES_UPLOAD",
    payload: Axios.post(`api/v1/customer/upload`, ispFiles),
  };
};
