import Axios from "axios";

export const userRegistration = (userData) => {
  return {
    type: "POST_USER_REGISTRATION",
    payload: Axios.post(`/api/v1/user/register/Customer`, userData),
  };
};

export const ispRegistration = (ispData) => {
  return {
    type: "POST_ISP_REGISTRATION",
    payload: Axios.post(`/api/v1/user/register/ISP`, ispData),
  };
};

export const uploadIspFile = (ispFile) => {
  return {
    type: "POST_ISP_FILE",
    payload: Axios.post(`api/v1/user/upload/`, ispFile),
  };
};
