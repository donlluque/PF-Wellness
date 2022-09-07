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
  absents: [],
  payments: {},
  turnsByPatient: [],
  turnsByDoctor: [],
  patientsByDoctor: [],
  reviews: [],
  areas: [],
  stats: [],
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
    case "PUT_DOCTORS": {
      return {
        ...state,
      };
    }
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
    case "SEARCH_PATIENTS_BY_NAME":
      return {
        ...state,
        patients: action.payload,
      };

    case "PUT_PATIENT": {
      return {
        ...state,
      };
    }
    case "DELETE_TURN": {
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
    case "GET_STATS": {
      return {
        ...state,
        stats: action.payload,
      };
    }
    case "GET_ABSENTS": {
      return {
        ...state,
        absents: action.payload,
      };
    }
    case "GET_TURNS_BY_DOCTOR": {
      let turnsDoctor = action.payload.data.filter(
        (e) => e.doctors[0].id == action.payload.idCurrentDoctor
      );

      return {
        ...state,
        turnsByDoctor: turnsDoctor,
      };
    }
    case "GET_TURNS_BY_PATIENT": {
      console.log("action.payload", action.payload);
      console.log(
        action.payload.idCurrentPatient,
        "action.payload.idCurrentPatient"
      );
      let turnsPatient = action.payload.data.filter(
        (e) => e.patients[0]?.id == 4
      );
      console.log(turnsPatient, "turnsPatient");

      return {
        ...state,
        turnsByPatient: turnsPatient,
      };
    }
    case "GET_TURN_BY_ID": {
      let turn = action.payload.data.find(
        (e) => e.id === action.payload.idTurn
      );
      return {
        ...state,
        turnById: turn,
      };
    }
    case "DATA_PAYMENT": {
      console.log(action.payload, "DATA PAYMENNNTTT");
      return {
        ...state,
        dataPayment: action.payload,
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
    case "MAKE_PAYMENT": {
      return {
        ...state,
        payments: action.payload,
      };
    }
    case "GET_REVIEWS": {
      return {
        ...state,
        reviews: action.payload,
      };
    }
    case "GET_AREAS": {
      return {
        ...state,
        areas: action.payload,
      };
    }
    case "CHECK_USER": {
      console.log(action.payload, "soy user de REDUCER");
      return {
        ...state,
        user: action.payload,
      };
    }
    case "SEND_EMAIL_FORM": {
      return {
        ...state,
      };
    }
    case "SEND_EMAIL_PAGO": {
      return {
        ...state,
      };
    }
    case "SEND_EMAIL_SUB": {
      return {
        ...state,
      };
    }
    case "SEND_EMAIL_CANCEL": {
      return {
        ...state,
      };
    }

    default:
      return {
        ...state,
      };
  }
}
