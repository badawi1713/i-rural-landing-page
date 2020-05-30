const initialValue = {
  userRegistrationData: [],
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
    default:
      return state;
  }
};

export default registrationReducers;
