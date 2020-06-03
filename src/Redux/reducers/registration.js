const initialValue = {
  userRegistrationData: [],
  ispRegistrationData: [],
  ispFilesData: [],
  errorMessage: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const registrationReducers = (state = initialValue, action) => {
  switch (action.type) {
    case "POST_USER_REGISTRATION_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };

    case "POST_USER_REGISTRATION_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errorMessage: action.payload.data,
      };

    case "POST_USER_REGISTRATION_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        userRegistrationData: action.payload,
      };
    case "POST_ISP_REGISTRATION_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case "POST_ISP_REGISTRATION_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errorMessage: action.payload.data,
      };
    case "POST_ISP_REGISTRATION_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        ispRegistrationData: action.payload,
      };
    case "POST_ISP_FILES_UPLOAD_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case "POST_ISP_FILES_UPLOAD_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errorMessage: action.payload.data,
      };
    case "POST_ISP_FILES_UPLOAD_FULFILLED":
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        ispFilesData: action.payload,
      };
    default:
      return state;
  }
};

export default registrationReducers;
