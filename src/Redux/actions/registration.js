import Axios from "axios";

export const userRegistration = (userData) => {
  return {
    type: "POST_USER_REGISTRATION",
    payload: Axios.post(`/api/v1/user/register`, userData),
  };
};
