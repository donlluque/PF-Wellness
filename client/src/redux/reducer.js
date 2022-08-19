const initialState = {
  doctors: [],
  patients: [],
  patientDetail: {},
  detail: {},
  msgError: {},
  msgConfirm: {},
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

    default:
      return {
        ...state,
      };
  }
}
