import { ABOUT_UPDATE, FETCH_USERS_FAILURE } from "../actionTypes.js";

export const updateAbout = (formData) => {
    return (dispatch) => {
      fetch(`http://kheledmahmud.com/api/about/${formData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => {
          dispatch({ type: ABOUT_UPDATE, payload: data });
        })
        .catch(error => {
            dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
          });
    };
  };

  export default updateAbout;