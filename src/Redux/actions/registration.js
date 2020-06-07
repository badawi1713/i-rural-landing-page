import Axios from "axios";

export const customerRegistration = (customerData) => {
  return {
    type: "POST_CUSTOMER_REGISTRATION",
    payload: Axios.post(`/api/v1/customer/register/Customer`, customerData),
  };
};

export const ispRegistration = (formData) => {
  return {
    type: "POST_ISP_REGISTRATION",
    payload: Axios.post(`/api/v1/customer/register/ISP`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  };
};
