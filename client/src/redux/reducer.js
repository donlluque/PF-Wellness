

const initialState = {
  doctors: [],
  patients: [],
  detail: [],
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
    default:
      return {
        ...state,
      };
  }
}
