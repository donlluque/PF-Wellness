

export function getDoctors() {
        return function(dispatch) {
            fetch("http://localhost:3001/doctors")
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: "GET_DOCTORS",
                    payload: json.data
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
        fetch(`http://localhost:3001/doctors/${id}`)
        .then(res => res.json())
        .then(json => {
            dispatch({
                type: "GET_DETAIL",
                payload: json.data
            })
        })
        .catch(error => {
            console.log(error)
        }
        )
    }
}    