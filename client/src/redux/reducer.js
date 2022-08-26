const initialState = {
  doctors: [],
  patients: [],
  patientDetail: {},
  doctorDetail: {},
  msgError: {},
  msgConfirm: {},
  prepaidHealth: [],
  hoursWorking: [],
  days: [],
  user: {},
  turns: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOCTORS":
      return {
        ...state,
        doctors: action.payload,
      };
    case "GET_DETAIL_DOCTORS":
      return {
        ...state,
        doctorDetail: action.payload,
      };
    case "CLEAN_DOCTOR":
      return {
        ...state,
        detail: {},
      };
    case "FILTER_DOCTORS":
      return {
        ...state,
        doctors: action.payload,
      };
    case "SEARCH_DOCTOR_BY_NAME":
      return {
        ...state,
        doctors: action.payload,
      };

    case "PUT_PATIENT": {
      return {
        ...state,
      };
    }
    case "GET_PATIENTS": {
      return {
        ...state,
        patients: action.payload,
      };
    }
    case "GET_ONE_PATIENT": {
      return {
        ...state,
        patientDetail: action.payload,
      };
    }
    case "GET_HOURS": {
      return {
        ...state,
        hoursWorking: action.payload,
      };
    }
    case "GET_DAYS": {
      return {
        ...state,
        days: action.payload,
      };
    }
    case "GET_TURNS": {
      return {
        ...state,
        turns: action.payload,
      };
    }

    case "GET_PREPAID_HEALTH": {
      return {
        ...state,
        prepaidHealth: action.payload,
      };
    }
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
    case "CLEAN_ERROR": {
      return {
        ...state,
        msgError: {},
      };
    }
    case "CLEAN_MSG": {
      return {
        ...state,
        msgConfirm: {},
      };
    }

    case "CHECK_USER": {
      console.log(action.payload, "reducer check_user");
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
