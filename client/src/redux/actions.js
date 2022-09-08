import { baseURL } from "../index.js";
import axios from "axios";

//DOCTORS
export function getDoctors() {
  return async (dispatch) => {
    try {
      let response = await axios.get(`${baseURL}/doctors`);
      return dispatch({
        type: "GET_DOCTORS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return function (dispatch) {
  //   fetch(`${baseURL}/doctors`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       dispatch({
  //         type: "GET_DOCTORS",
  //         payload: json,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
}
export function getDetailDoctors(id) {
  return async (dispatch) => {
    try {
      let response = await axios.get(`${baseURL}/doctors/${id}`);
      return dispatch({
        type: "GET_DETAIL_DOCTORS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return function (dispatch) {
  //   fetch(`${baseURL}/doctors/${id}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       dispatch({
  //         type: "GET_DETAIL_DOCTORS",
  //         payload: json,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
}
export function cleanDoctor() {
  return {
    type: "CLEAN_DOCTOR",
  };
}
export function filterDoctors(filter) {
  const { especialidad, obrasocial } = filter;

  return async (dispatch) => {
    try {
      let response = await axios.get(
        `${baseURL}/filter?general_area=${especialidad}&prepaid_health=${obrasocial}`
      );
      return dispatch({
        type: "FILTER_DOCTORS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return async function (dispatch) {
  //   return await fetch(
  //     `${baseURL}/filter?general_area=${especialidad}&prepaid_health=${obrasocial}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       mode: "cors",
  //     }
  //   )
  //     .then((res) =>
  //       res.ok
  //         ? res.json()
  //         : Promise.reject({
  //             err: true,
  //             status: res.status || "00",
  //             especialidad: especialidad,
  //             obrasocial: obrasocial,
  //             type: "filter",
  //           })
  //     )
  //     .then((data) => {
  //       dispatch({ type: "FILTER_DOCTORS", payload: data });
  //     })
  //     .catch((err) => {
  //       dispatch({ type: "HANDLE_ERROR", payload: err });
  //     });
  // };
}
export const putDoctor = (data) => {
  console.log("data actions", data);

  return async (dispatch) => {
    try {
      let response = await axios.put(`${baseURL}/doctors`, data);
      return dispatch({
        type: "CONFIRM_ACTION",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // return async function (dispatch) {
  //   return await fetch(`${baseURL}/doctors`, {
  //     method: "PUT",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) =>
  //       res.ok
  //         ? Promise.resolve({
  //             name: data.name,
  //             status: res.status || "00",
  //             statusText: `Datos guardados con exito`,
  //           })
  //         : Promise.reject({
  //             err: true,
  //             status: res.status || "00",
  //             statusText: res.statusText,
  //           })
  //     )
  //     .then((data) => dispatch({ type: "CONFIRM_ACTION", payload: data }))
  //     .catch((err) => dispatch({ type: "HANDLE_ERROR", payload: err }));
  // };
};

//SEARCH BAR
export function searchDoctorByName(input) {
  return async (dispatch) => {
    try {
      let response = await axios.get(`${baseURL}/doctors/?name=${input}`);
      return dispatch({
        type: "SEARCH_DOCTOR_BY_NAME",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // return async function (dispatch) {
  //   return await fetch(`${baseURL}/doctors/?name=${input}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) =>
  //       res.ok
  //         ? res.json()
  //         : Promise.reject({
  //             err: true,
  //             status: res.status || "00",
  //             type: "search",
  //             statusText: `No se encuentra ningún profesional con el nombre "${input}" `,
  //           })
  //     )
  //     .then((data) => {
  //       dispatch({ type: "SEARCH_DOCTOR_BY_NAME", payload: data });
  //     })
  //     .catch((err) => {
  //       dispatch({ type: "HANDLE_ERROR", payload: err });
  //     });
  // };
}
//POST DOCTORS
export const postDoctors = (form) => {
  console.log("soy form", form);

  return async (dispatch) => {
    try {
      let response = await axios.post(`${baseURL}/doctors`, form);
      return dispatch({
        type: "CONFIRM_ACTION",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // return async function (dispatch) {
  //   return await fetch(`${baseURL}/doctors`, {
  //     method: "POST",
  //     body: JSON.stringify(form),
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) =>
  //       res.ok
  //         ? res.json()
  //         : Promise.reject({
  //             err: true,
  //             status: res.status || "00",
  //             statusText: `VER ERROR`,
  //           })
  //     )
  //     .then((data) => {
  //       dispatch({ type: "CONFIRM_ACTION", payload: data });
  //     })
  //     .catch((err) => dispatch({ type: "HANDLE_ERROR", payload: err }));
  // };
};

export const disableDoctor = (doctorId) => {
  return async (dispatch) => {
    try {
      let response = await axios.patch(`${baseURL}/doctors`, doctorId);
      return dispatch({
        type: "CONFIRM_ACTION",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // return async function (dispatch) {
  //   return await fetch(`${baseURL}/doctors`, {
  //     method: "PATCH",
  //     body: JSON.stringify({ doctorId }),
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) =>
  //       res.ok
  //         ? Promise.resolve({
  //             status: res.status || "00",
  //             statusText: `El doctor fue deshabilitado con exito!`,
  //           })
  //         : Promise.reject({
  //             err: true,
  //             status: res.status || "00",
  //             statusText: "No es posible deshabilitar el doctor seleccionado",
  //           })
  //     )
  //     .then((data) => dispatch({ type: "CONFIRM_ACTION", payload: data }))
  //     .catch((err) => dispatch({ type: "HANDLE_ERROR", payload: err }));
  // };
};
export const postAbsentDoctor = (form) => {
  return async (dispatch) => {
    try {
      let response = await axios.post(`${baseURL}/absence`, form);
      return dispatch({
        type: "CONFIRM_ACTION",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return async function (dispatch) {
  //   return await fetch(`${baseURL}/absence`, {
  //     method: "POST",
  //     body: JSON.stringify(form),
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) =>
  //       res.ok
  //         ? res.json()
  //         : Promise.reject({
  //             err: true,
  //             status: res.status || "00",
  //             statusText: `VER ERROR`,
  //           })
  //     )
  //     .then((data) => {
  //       dispatch({ type: "CONFIRM_ACTION", payload: data });
  //     })
  //     .catch((err) => dispatch({ type: "HANDLE_ERROR", payload: err }));
  // };
};
export const getAllAbsent = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`${baseURL}/absence`);
      return dispatch({
        type: "GET_ABSENTS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return async function (dispatch) {
  //   return await fetch(`${baseURL}/absence`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       dispatch({
  //         type: "GET_ABSENTS",
  //         payload: json,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
};
export const deleteAbsent = (id) => {
  return async (dispatch) => {
    try {
      let response = await axios.delete(`${baseURL}/absence`, {
        absenceId: id,
      });
      return dispatch({
        type: "CONFIRM_ACTION",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return async function (dispatch) {
  //   return await fetch(`${baseURL}/absence`, {
  //     method: "DELETE",
  //     body: JSON.stringify({ absenceId: id }),
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) =>
  //       res.ok
  //         ? Promise.resolve({
  //             status: 200,
  //             statusText: `Ausencia eliminada con exito`,
  //           })
  //         : Promise.reject({
  //             err: true,
  //             status: res.status || "00",
  //             statusText: "No se ha podido eliminar correctamente el registro",
  //           })
  //     )
  //     .then((data) => dispatch({ type: "CONFIRM_ACTION", payload: data }))
  //     .catch((err) => console.log(err));
  // };
};
//PREPAID HEALTH
export const getPrepaidHealth = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`${baseURL}/prepaid_health`);
      return dispatch({
        type: "GET_PREPAID_HEALTH",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return async function (dispatch) {
  //   return await fetch(`${baseURL}/prepaid_health`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       dispatch({
  //         type: "GET_PREPAID_HEALTH",
  //         payload: data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
};

//HOURS
export const getHours = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`${baseURL}/hours_working`);
      return dispatch({
        type: "GET_HOURS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return function (dispatch) {
  //   fetch(`${baseURL}/hours_working`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       dispatch({
  //         type: "GET_HOURS",
  //         payload: data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
};
//DAYS
export const getDays = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`${baseURL}/work_days`);
      return dispatch({
        type: "GET_DAYS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return function (dispatch) {
  //   fetch(`${baseURL}/work_days`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       dispatch({
  //         type: "GET_DAYS",
  //         payload: data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
};
//TURNS
export const postTurn = (form) => {
  return async (dispatch) => {
    try {
      let response = await axios.post(`${baseURL}/dates`, form);
      return dispatch({
        type: "CONFIRM_ACTION",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // console.log("soy post", form);
  // return async function (dispatch) {
  //   return await fetch(`${baseURL}/dates`, {
  //     method: "POST",
  //     body: JSON.stringify(form),
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) =>
  //       res.ok
  //         ? res.json()
  //         : Promise.reject({
  //             err: true,
  //             status: res.status || "00",
  //             statusText: `VER ERROR`,
  //           })
  //     )
  //     .then((data) => {
  //       dispatch({ type: "CONFIRM_ACTION", payload: data });
  //     })
  //     .catch((err) => dispatch({ type: "HANDLE_ERROR", payload: err }));
  // };
};
export const getTurns = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`${baseURL}/dates`);
      return dispatch({
        type: "GET_TURNS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return function (dispatch) {
  //   fetch(`${baseURL}/dates`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       dispatch({
  //         type: "GET_TURNS",
  //         payload: data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
};
export const getTurnById = (idTurn) => {
  return async (dispatch) => {
    try {
      let data = (await axios.get(`${baseURL}/dates`)).data;

      return dispatch({
        type: "GET_TURN_BY_ID",
        payload: { data, idTurn },
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return function (dispatch) {
  //   fetch(`${baseURL}/dates`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       dispatch({
  //         type: "GET_TURN_BY_ID",
  //         payload: { data, idTurn },
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
};

export const getTurnsByDoctor = (idCurrentDoctor) => {
  console.log(idCurrentDoctor, "idCurrentDoctor");
  return async (dispatch) => {
    try {
      let data = await axios.get(`${baseURL}/dates`).data;
      return dispatch({
        type: "GET_TURNS_BY_DOCTOR",
        payload: { data, idCurrentDoctor },
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return function (dispatch) {
  //   fetch(`${baseURL}/dates`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       dispatch({
  //         type: "GET_TURNS_BY_DOCTOR",
  //         payload: { data, idCurrentDoctor },
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
};

export const getTurnsByPatient = (idCurrentPatient) => {
  return async (dispatch) => {
    try {
      let data = (await axios.get(`${baseURL}/dates`)).data;
      return dispatch({
        type: "GET_TURNS_BY_PATIENT",
        payload: { data, idCurrentPatient },
      });
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(idCurrentPatient, "idCurrentPatient");
  // return function (dispatch) {
  //   fetch(`${baseURL}/dates`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       dispatch({
  //         type: "GET_TURNS_BY_PATIENT",
  //         payload: { data, idCurrentPatient },
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
};

export const deleteTurn = (id) => {
  return async (dispatch) => {
    try {
      let data = await axios.delete(`${baseURL}/dates`, { dateId: id }).data;
      return dispatch({
        type: "GET_TURNS_BY_PATIENT",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return async function (dispatch) {
  //   return await fetch(`${baseURL}/dates`, {
  //     method: "DELETE",
  //     body: JSON.stringify({ dateId: id }),
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) =>
  //       res.ok
  //         ? Promise.resolve({
  //             status: res.status || "00",
  //             statusText: `Turno eliminado con exito`,
  //           })
  //         : Promise.reject({
  //             err: true,
  //             status: res.status || "00",
  //             statusText: "No se ha podido eliminar correctamente el turno",
  //           })
  //     )
  //     .then((data) => dispatch({ type: "CONFIRM_ACTION", payload: data }))
  //     .catch((err) => console.log(err));
  // };
};

export const dataPayment = (form) => ({ type: "DATA_PAYMENT", payload: form });
//AREAS GENERALES

export const getAllAreas = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`${baseURL}/general_area`);
      return dispatch({
        type: "GET_AREAS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return function (dispatch) {
  //   fetch(`${baseURL}/general_area`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       dispatch({
  //         type: "GET_AREAS",
  //         payload: json,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
};

//PATIENT
export const searchPatientByName = (patient) => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`${baseURL}/patients?name=${patient}`);
      return dispatch({
        type: "SEARCH_PATIENTS_BY_NAME",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return async function (dispatch) {
  //   return await fetch(`${baseURL}/patients?name=${patient}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) =>
  //       res.ok
  //         ? res.json()
  //         : Promise.reject({
  //             err: true,
  //             status: res.status || "00",
  //             type: "search",
  //             statusText: `No se encuentra ningún usuario con el nombre "${patient.name}" `,
  //           })
  //     )
  //     .then((data) => {
  //       dispatch({ type: "SEARCH_PATIENTS_BY_NAME", payload: data });
  //     })
  //     .catch((err) => {
  //       dispatch({ type: "HANDLE_ERROR", payload: err });
  //     });
  // };
};

export const getOnePatient = (id) => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`${baseURL}/patients/${id}`);
      return dispatch({
        type: "GET_ONE_PATIENT",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return function (dispatch) {
  //   fetch(`${baseURL}/patients/${id}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       dispatch({
  //         type: "GET_ONE_PATIENT",
  //         payload: json,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
};
export const disablePatient = (patientId) => {
  return async (dispatch) => {
    try {
      let response = await axios.patch(`${baseURL}/patients`, patientId);
      return dispatch({
        type: "CONFIRM_ACTION",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return async function (dispatch) {
  //   return await fetch(`${baseURL}/patients`, {
  //     method: "PATCH",
  //     body: JSON.stringify({ patientId }),
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) =>
  //       res.ok
  //         ? Promise.resolve({
  //             status: res.status || "00",
  //             statusText: `El paciente fue deshabilitado con exito!`,
  //           })
  //         : Promise.reject({
  //             err: true,
  //             status: res.status || "00",
  //             statusText: "No es posible deshabilitar el paciente seleccionado",
  //           })
  //     )
  //     .then((data) => dispatch({ type: "CONFIRM_ACTION", payload: data }))
  //     .catch((err) => dispatch({ type: "HANDLE_ERROR", payload: err }));
  // };
};

export const getAllPatients = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`${baseURL}/patients`);
      return dispatch({
        type: "GET_PATIENTS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return function (dispatch) {
  //   fetch(`${baseURL}/patients`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       dispatch({
  //         type: "GET_PATIENTS",
  //         payload: json,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
};
export const getPatientsByDoctor = (idCurrentDoctor) => {
  return async (dispatch) => {
    try {
      let data = (await axios.get(`${baseURL}/dates`)).data;

      return dispatch({
        type: "GET_PATIENTS_BY_DOCTOR",
        payload: { data, idCurrentDoctor },
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return function (dispatch) {
  //   fetch(`${baseURL}/dates`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       dispatch({
  //         type: "GET_PATIENTS_BY_DOCTOR",
  //         payload: { data, idCurrentDoctor },
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
};
//POST PATIENT
export const postPatient = (form) => {
  return async (dispatch) => {
    try {
      let response = await axios.post(`${baseURL}/patients`, form);

      return dispatch({
        type: "CONFIRM_ACTION",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return async function (dispatch) {
  //   return await fetch(`${baseURL}/patients`, {
  //     method: "POST",
  //     body: JSON.stringify(form),
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) =>
  //       res.ok
  //         ? res.json()
  //         : Promise.reject({
  //             err: true,
  //             status: res.status || "00",
  //             statusText: `Ya existe un usuario con el mail ${form.email}`,
  //           })
  //     )
  //     .then((data) => {
  //       dispatch({ type: "CONFIRM_ACTION", payload: data });
  //     })
  //     .catch((err) => dispatch({ type: "HANDLE_ERROR", payload: err }));
  // };
};

//PUT PATIENT
export const putPatient = (data) => {
  return async (dispatch) => {
    try {
      let response = await axios.put(`${baseURL}/patients/${data.id}`, data);

      return dispatch({
        type: "CONFIRM_ACTION",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // console.log("data actions", data);
  // return async function (dispatch) {
  //   return await fetch(`${baseURL}/patients/${data.id}`, {
  //     method: "PUT",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) =>
  //       res.ok
  //         ? Promise.resolve({
  //             name: data.name,
  //             status: res.status || "00",
  //             statusText: `Datos guardados con exito`,
  //           })
  //         : Promise.reject({
  //             err: true,
  //             status: res.status || "00",
  //             statusText: res.statusText,
  //           })
  //     )
  //     .then((data) => dispatch({ type: "CONFIRM_ACTION", payload: data }))
  //     .catch((err) => dispatch({ type: "HANDLE_ERROR", payload: err }));
  // };
};

export const dateUser = (payload) => {
  console.log(payload, "payloaaaaaaaaad");
  return async (dispatch) => {
    try {
      let response = await axios.post(`${baseURL}/checkuser`, payload);
      console.log(response.data.length, "action date user");
      return dispatch({
        type: "CHECK_USER",
        payload: response.data.length ? response.data[0] : response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const makePayment = (payload) => {
  return async (dispatch) => {
    try {
      let response = await axios.post(`${baseURL}/pagos`, payload);
      return dispatch({
        type: "MAKE_PAYMENT",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addReview = (payload) => {
  console.log(payload, "SOY LA FUCKING REVIEW");
  return async (dispatch) => {
    try {
      let response = await axios.post(`${baseURL}/review`, payload);
      return dispatch({
        type: "ADD_REVIEW",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getReviews = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`${baseURL}/review`);
      return dispatch({
        type: "GET_REVIEWS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const getReviews = () => {
//   return function (dispatch) {
//     fetch(`${baseURL}/review`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       mode: "cors",
//     })
//       .then((res) => res.json())
//       .then((json) => {
//         dispatch({
//           type: "GET_REVIEWS",
//           payload: json,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };

export const sendEmailForm = (payload) => {
  return async (dispatch) => {
    try {
      let response = await axios.post(`${baseURL}/mail_form`, payload);
      return dispatch({
        type: "SEND_EMAIL_FORM",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//estadisticas
export const getStats = () => {
  return async (dispatch) => {
    let response = await axios.get(`${baseURL}/stats`);

    return dispatch({
      type: "GET_STATS",
      payload: response.data,
    });
  };
  // return function (dispatch) {
  //   fetch(`${baseURL}/stats`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       dispatch({
  //         type: "GET_STATS",
  //         payload: data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
};

export const sendEmailPago = (payload) => {
  console.log(payload, "PAYLOAD");
  return async (dispatch) => {
    try {
      let response = await axios.post(`${baseURL}/mail_pago`, payload);
      return dispatch({
        type: "SEND_EMAIL_PAGO",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendEmailWellness = (payload) => {
  console.log(payload, "PAYLOAD");
  return async (dispatch) => {
    try {
      let response = await axios.post(`${baseURL}/mail_sub`, payload);
      return dispatch({
        type: "SEND_EMAIL_SUB",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendEmailCancelacion = (payload) => {
  console.log(payload, "PAYLOAD");
  return async (dispatch) => {
    try {
      let response = await axios.post(`${baseURL}/mail_cancel`, payload);
      return dispatch({
        type: "SEND_EMAIL_CANCEL",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const putWellness = (patientId) => {
  return async (dispatch) => {
    try {
      let response = await axios.patch(`${baseURL}/patients/wellness`, {
        patientId,
        prepaid: "Wellness",
      });
      return dispatch({
        type: "SEND_EMAIL_CANCEL",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // return async function (dispatch) {
  //   return await fetch(`${baseURL}/patients/wellness`, {
  //     method: "PATCH",
  //     body: JSON.stringify({ patientId, prepaid: "Wellness" }),
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     mode: "cors",
  //   })
  //     .then((res) =>
  //       res.ok
  //         ? Promise.resolve({
  //             status: res.status || "00",
  //             statusText: `La obra social fue actualizada con exito`,
  //           })
  //         : Promise.reject({
  //             err: true,
  //             status: res.status || "00",
  //             statusText: "No es posible actualizar la obra social",
  //           })
  //     )
  //     .then((data) => dispatch({ type: "CONFIRM_ACTION", payload: data }))
  //     .catch((err) => dispatch({ type: "HANDLE_ERROR", payload: err }));
  // };
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

//CLEAN MSG
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
