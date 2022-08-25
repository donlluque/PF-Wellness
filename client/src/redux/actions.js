import { baseURL } from "../index.js";
import axios from "axios";

export function getDoctors() {
  return function (dispatch) {
    fetch(`${baseURL}/doctors`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "GET_DOCTORS",
          payload: json,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function getDetail(id) {
  return function (dispatch) {
    fetch(`${baseURL}/doctors/${id}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "GET_DETAIL",
          payload: json,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
export function cleanDoctor() {
  return {
    type: "CLEAN_DOCTOR",
  };
}

export function filter(filter) {
  const { especialidad, obrasocial } = filter;
  return function (dispatch) {
    return fetch(
      `${baseURL}/filter?general_area=${especialidad}&prepaid_health=${obrasocial}`
    )
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              especialidad: especialidad,
              obrasocial: obrasocial,
              type: "filter",
            })
      )
      .then((data) => {
        dispatch({ type: "FILTER", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "HANDLE_ERROR", payload: err });
      });
  };
}

//SEARCH BAR
export function searchByName(input) {
  return function (dispatch) {
    return fetch(`${baseURL}/doctors/?name=${input}`)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              type: "search",
              statusText: `No se encuentra ningún profesional con el nombre "${input}" `,
            })
      )
      .then((data) => {
        dispatch({ type: "SEARCH_DOCTOR", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "HANDLE_ERROR", payload: err });
      });
  };
}

export const getOnePatient = (id) => {
  return function (dispatch) {
    fetch(`${baseURL}/patients/${id}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "GET_ONE_PATIENT",
          payload: json,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//POST
// export const postPatient = (form) => {
//   return function (dispatch) {
//     return fetch(`${baseURL}/patients`, {
//       method: "POST",
//       body: JSON.stringify(form),
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((res) =>
//         res.ok
//           ? res.json()
//           : Promise.reject({
//               err: true,
//               status: res.status || "00",
//               statusText: `Ya existe un usuario con el mail ${form.email}`,
//             })
//       )
//       .then((data) => {
//         dispatch({ type: "CONFIRM_ACTION", payload: data });
//         dispatch({ type: "LOG_IN" });
//         dispatch({ type: "ID_USER", payload: data.id });
//       })
//       .catch((err) => dispatch({ type: "HANDLE_ERROR", payload: err }));
//   };
// };

//PUT
export const putPatient = (data) => {
  console.log("data actions", data);
  return function (dispatch) {
    return fetch(`${baseURL}/patients/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) =>
        res.ok
          ? Promise.resolve({
              name: data.name,
              status: res.status || "00",
              statusText: `Datos guardados con exito`,
            })
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText,
            })
      )
      .then((data) => dispatch({ type: "CONFIRM_ACTION", payload: data }))
      .catch((err) => dispatch({ type: "HANDLE_ERROR", payload: err }));
  };
};

export const logOut = () => ({ type: "LOG_OUT" });

export const logIn = () => ({ type: "LOG_IN" });

export const getByUserName = (userName) => {
  return function (dispatch) {
    fetch(`${baseURL}/patients/user?userName=${userName}`)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: `El nombre de usuario ${userName} no se encuentra registrado`,
            })
      )
      .then((json) => {
        dispatch({
          type: "ID_USER",
          payload: json.id,
        });
        dispatch({ type: "LOG_IN" });

        dispatch({ type: "CONFIRM_ACTION", payload: json });
      })
      .catch((error) => {
        dispatch({ type: "HANDLE_ERROR", payload: error });
      });
  };
};

export const dateUser = (payload) => {
  return async (dispatch) => {
    try {
      let response = await axios.post(`${baseURL}/checkuser`, payload);
      console.log(response.data, "action date user");
      return dispatch({
        type: "CHECK_USER",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const dateUser = (payload) => {
//   return function (dispatch) {
//     return fetch(`${baseURL}/checkuser`, {
//       method: "POST",
//       body: JSON.stringify(payload),
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((res) =>
//         res.ok
//           ? res.json()
//           : Promise.reject({
//               err: true,
//               status: res.status || "00",
//               statusText: `Ya existe un usuario con el mail ${payload.email}`,
//             })
//       )
//       .then((data) => {
//         console.log(data, "soy data");
//         dispatch({ type: "CHECK_USER", payload: data });
//         dispatch({ type: "CONFIRM_ACTION", payload: data });
//         dispatch({ type: "LOG_IN" });
//         dispatch({ type: "ID_USER", payload: data.id });
//       })
//       .catch((err) => dispatch({ type: "HANDLE_ERROR", payload: err }));
//   };
// };

export const cleanError = () => ({ type: "CLEAN_ERROR" });
export const cleanConfirm = () => ({ type: "CLEAN_MSG" });

/////DELETE
/*
export const deleteActivity = (data) => {
  return function (dispatch) {
    return fetch(`${urlBase}/activities/delete/${data.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) =>
        res.ok
          ? Promise.resolve({
              name: data.name,
              status: res.status || "00",
              statusText: `The activity was deleted`,
            })
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: "Error404",
            })
      )
      .then((data) => dispatch({ type: CONFIRM_ACTION, payload: data }))
      .catch((err) => console.log(err));
  };
};
*/
