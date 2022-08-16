import {} from "./types";

const initialState = {
  doctors: [],
  patients: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
}
