const initialState = {
  doctors: [],
  patients: [],
  patientDetail: {},
  detail: {},
  msgError: {},
  msgConfirm: {},
  logInState: false,
  idUserLogIn: "",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOCTORS":
      return {
        ...state,
        doctors: action.payload,
      };
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
    case "CLEAN_DOCTOR":
      return {
        ...state,
        detail: {},
      };
    case "FILTER":
      return {
        ...state,
        doctors: action.payload,
      };
    case "SEARCH_DOCTOR":
      return {
        ...state,
        doctors: action.payload,
      };
    case "HANDLE_ERROR":
      return {
        ...state,
        msgError: action.payload,
      };
    case "CONFIRM_ACTION":
      return {
        ...state,
        msgConfirm: action.payload,
      };
    case "POST_PATIENT": {
      return { ...state };
    }
    case "PUT_PATIENT": {
      return {
        ...state,
      };
    }
    case "GET_ONE_PATIENT": {
      return {
        ...state,
        patientDetail: action.payload,
      };
    }
    case "LOG_IN": {
      return {
        ...state,
        logInState: true,
      };
    }
    case "LOG_OUT": {
      return {
        ...state,
        logInState: false,
      };
    }
    case "ID_USER": {
      return {
        ...state,
        idUserLogIn: action.payload,
      };
    }
    case "CLEAN_ERROR": {
      return {
        ...state,
        msgError: {},
      };
    }

    default:
      return {
        ...state,
      };
  }
}
