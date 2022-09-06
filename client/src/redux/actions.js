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
export const putDoctor = (data) => {
  console.log("data actions", data);

  return function (dispatch) {
    return fetch(`${baseURL}/doctors`, {
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
//POST DOCTORS
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

export const disableDoctor = (doctorId) => {
  return function (dispatch) {
    return fetch(`${baseURL}/doctors`, {
      method: "PATCH",
      body: JSON.stringify({ doctorId }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) =>
        res.ok
          ? Promise.resolve({
              status: res.status || "00",
              statusText: `El doctor fue deshabilitado con exito!`,
            })
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: "No es posible deshabilitar el doctor seleccionado",
            })
      )
      .then((data) => dispatch({ type: "CONFIRM_ACTION", payload: data }))
      .catch((err) => dispatch({ type: "HANDLE_ERROR", payload: err }));
  };
};
export const postAbsentDoctor = (form) => {
  return function (dispatch) {
    return fetch(`${baseURL}/absence`, {
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
export const getAllAbsent = () => {
  return function (dispatch) {
    fetch(`${baseURL}/absence`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "GET_ABSENTS",
          payload: json,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const deleteAbsent = (id) => {
  return function (dispatch) {
    return fetch(`${baseURL}/absence`, {
      method: "DELETE",
      body: JSON.stringify({ absenceId: id }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) =>
        res.ok
          ? Promise.resolve({
              status: 200,
              statusText: `Ausencia eliminada con exito`,
            })
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: "No se ha podido eliminar correctamente el registro",
            })
      )
      .then((data) => dispatch({ type: "CONFIRM_ACTION", payload: data }))
      .catch((err) => console.log(err));
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
//TURNS
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
export const getTurnById = (idTurn) => {
  return function (dispatch) {
    fetch(`${baseURL}/dates`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_TURN_BY_ID",
          payload: { data, idTurn },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getTurnsByDoctor = (idCurrentDoctor) => {
  console.log(idCurrentDoctor, "idCurrentDoctor");
  return function (dispatch) {
    fetch(`${baseURL}/dates`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_TURNS_BY_DOCTOR",
          payload: { data, idCurrentDoctor },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getTurnsByPatient = (idCurrentPatient) => {
  console.log(idCurrentPatient, "idCurrentPatient");
  return function (dispatch) {
    fetch(`${baseURL}/dates`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_TURNS_BY_PATIENT",
          payload: { data, idCurrentPatient },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteTurn = (id) => {
  return function (dispatch) {
    return fetch(`${baseURL}/dates`, {
      method: "DELETE",
      body: JSON.stringify({ dateId: id }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) =>
        res.ok
          ? Promise.resolve({
              status: res.status || "00",
              statusText: `Turno eliminado con exito`,
            })
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: "No se ha podido eliminar correctamente el turno",
            })
      )
      .then((data) => dispatch({ type: "CONFIRM_ACTION", payload: data }))
      .catch((err) => console.log(err));
  };
};

export const dataPayment = (form) => ({ type: "DATA_PAYMENT", payload: form });
//AREAS GENERALES
export const getAllAreas = () => {
  return function (dispatch) {
    fetch(`${baseURL}/general_area`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "GET_AREAS",
          payload: json,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//PATIENT
export const searchPatientByName = (patient) => {
  return function (dispatch) {
    return fetch(`${baseURL}/patients?name=${patient}`)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              type: "search",
              statusText: `No se encuentra ningún usuario con el nombre "${patient.name}" `,
            })
      )
      .then((data) => {
        dispatch({ type: "SEARCH_PATIENTS_BY_NAME", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "HANDLE_ERROR", payload: err });
      });
  };
};

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
export const disablePatient = (patientId) => {
  return function (dispatch) {
    return fetch(`${baseURL}/patient`, {
      method: "PATCH",
      body: JSON.stringify({ patientId }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) =>
        res.ok
          ? Promise.resolve({
              status: res.status || "00",
              statusText: `El paciente fue deshabilitado con exito!`,
            })
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: "No es posible deshabilitar el paciente seleccionado",
            })
      )
      .then((data) => dispatch({ type: "CONFIRM_ACTION", payload: data }))
      .catch((err) => dispatch({ type: "HANDLE_ERROR", payload: err }));
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
export const getPatientsByDoctor = (idCurrentDoctor) => {
  return function (dispatch) {
    fetch(`${baseURL}/dates`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_PATIENTS_BY_DOCTOR",
          payload: { data, idCurrentDoctor },
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
  return function (dispatch) {
    fetch(`${baseURL}/review`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "GET_REVIEWS",
          payload: json,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

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
  return function (dispatch) {
    fetch(`${baseURL}/stats`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "GET_STATS",
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
