

const initialState = {
  doctors: [],
  patients: [],
  detail: {},
  msgError: {},
  msgConfirm: {}
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOCTORS":
      return{
        ...state,
        doctors: action.payload
      };
    case "GET_DETAIL":
      return{
        ...state,
        detail: action.payload
      };
    case "CLEAN_DOCTOR":
      return {
          ...state,
          detail: {},
     };
    case "SEARCH_DOCTOR":
      return{
       ...state,
       doctors: action.payload
      };  
    case "HANDLE_ERROR":
      return{
        ...state,
        msgError: action.payload
      };
      case "CONFIRM_ACTION":
      return{
        ...state,
        msgConfirm: action.payload
      };
      case "POST_USER": {
      return { ...state };
    }
    default:
      return {
        ...state,
      };
  }
}
