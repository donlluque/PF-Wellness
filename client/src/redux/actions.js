

import {baseURL} from "../index.js"


export function getDoctors() {
        return function(dispatch) {
            fetch(`${baseURL}/doctors`)
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: "GET_DOCTORS",
                    payload: json
                })
            })
            .catch(error => {
                console.log(error)
            }
            )
        }
    }
export function getDetail(id){
    return function(dispatch){
        fetch(`${baseURL}/doctors/${id}`)
        .then(res => res.json())
        .then(json => {
            dispatch({
                type: "GET_DETAIL",
                payload: json
            })
        })
        .catch(error => {
            console.log(error)
        }
        )
    }
}   
export function cleanDoctor(){
  return{
      type: "CLEAN_DOCTOR"
  }
}

export function filter(filter){
  const {especialidad, obrasocial} = filter;
  return function(dispatch){
    return fetch(`${baseURL}/filter?general_area=${especialidad}&prepaid_health=${obrasocial}`)
    .then((res) =>
    res.ok
    ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: `No se encuentra ningún`,
            })
      )
      .then((data) => {
        dispatch({ type: "FILTER", payload: data });
      })
      .catch((err) => {
        
        dispatch({ type: "HANDLE_ERROR", payload: err });
      });
  };
};

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
              statusText: `No se encuentra ningún ${input} `,
            })
      )
      .then((data) => {
        dispatch({ type: "SEARCH_DOCTOR", payload: data });
      })
      .catch((err) => {
        
        dispatch({ type: "HANDLE_ERROR", payload: err });
      });
  };
};

//POST
/*export const postActivity = (activity) => {
  return function (dispatch) {
    return fetch(`${urlBase}/activities`, {
      method: "POST",
      body: JSON.stringify(activity),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: `Already exists an activity with the name ${activity.name}`,
            })
      )
      .then((data) => dispatch({ type: CONFIRM_ACTION, payload: data }))
      .catch((err) => dispatch({ type: HANDLE_ERROR, payload: err }));
  };
};*/





/////////////
//PUT
/*export const putActivity = (data) => {
  console.log(data);
  return function (dispatch) {
    return fetch(`${urlBase}/activities/put`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) =>
        res.ok
          ? Promise.resolve({
              name: data.name,
              status: res.status || "00",
              statusText: `The activity was modified`,
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



/////DELETE
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