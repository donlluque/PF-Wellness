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
  payments: {},
  activeDate: "",
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
    case "ACTIVE_DATE": {
      let fecha = new Date();
      let fechita = fecha.setDate(fecha.getDate() + 2);
      console.log("fechita", fechita);
      return {
        ...state,
        doctorDetail: action.payload,
        activeDate: new Date(fechita),
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
    case "MAKE_PAYMENT": {
      return {
        ...state,
        payments: action.payload,
      };
    }
    case "CHECK_USER": {
      console.log(action.payload, "soy user de REDUCER");
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
