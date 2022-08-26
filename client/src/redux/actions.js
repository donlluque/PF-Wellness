import { baseURL } from "../index.js";
import axios from "axios";

//DOCTORS
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

export function getDetailDoctors(id) {
  return function (dispatch) {
    fetch(`${baseURL}/doctors/${id}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "GET_DETAIL_DOCTORS",
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
export function filterDoctors(filter) {
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
        dispatch({ type: "FILTER_DOCTORS", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "HANDLE_ERROR", payload: err });
      });
  };
}

//SEARCH BAR
export function searchDoctorByName(input) {
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
        dispatch({ type: "SEARCH_DOCTOR_BY_NAME", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "HANDLE_ERROR", payload: err });
      });
  };
}
//post doctors
export const postDoctors = (form) => {
  console.log("soy form", form);
  return function (dispatch) {
    return fetch(`${baseURL}/doctors`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: `VER ERROR`,
            })
      )
      .then((data) => {
        dispatch({ type: "CONFIRM_ACTION", payload: data });
      })
      .catch((err) => dispatch({ type: "HANDLE_ERROR", payload: err }));
  };
};

//PREPAID HEALTH
export const getPrepaidHealth = () => {
  return function (dispatch) {
    fetch(`${baseURL}/prepaid_health`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_PREPAID_HEALTH",
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//HOURS
export const getHours = () => {
  return function (dispatch) {
    fetch(`${baseURL}/hours_working`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_HOURS",
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
//DAYS
export const getDays = () => {
  return function (dispatch) {
    fetch(`${baseURL}/work_days`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_DAYS",
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
//APPOINTMENT
export const postTurn = (form) => {
  console.log("soy post", form);
  return function (dispatch) {
    return fetch(`${baseURL}/dates`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: `VER ERROR`,
            })
      )
      .then((data) => {
        dispatch({ type: "CONFIRM_ACTION", payload: data });
      })
      .catch((err) => dispatch({ type: "HANDLE_ERROR", payload: err }));
  };
};

export const getTurns = () => {
  return function (dispatch) {
    fetch(`${baseURL}/dates`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_TURNS",
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
//PATIENT
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

export const getAllPatients = () => {
  return function (dispatch) {
    fetch(`${baseURL}/patients`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "GET_PATIENTS",
          payload: json,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//POST PATIENT
export const postPatient = (form) => {
  return function (dispatch) {
    return fetch(`${baseURL}/patients`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: `Ya existe un usuario con el mail ${form.email}`,
            })
      )
      .then((data) => {
        dispatch({ type: "CONFIRM_ACTION", payload: data });
      })
      .catch((err) => dispatch({ type: "HANDLE_ERROR", payload: err }));
  };
};

//PUT PATIENT
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

export const dateUser = (payload) => {
  console.log(payload, "payloaaaaaaaaad");
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
