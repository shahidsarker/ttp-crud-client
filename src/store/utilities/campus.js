import axios from "axios";

// Action Types
const FETCH_CAMPUS = "FETCH_CAMPUS";

// Action Creators

const fetchCampus = (campus) => {
  return {
    type: FETCH_CAMPUS,
    payload: campus,
  };
};

// Thunk Creators
export const fetchCampusThunk = (id) => (dispatch) => {
  return axios
    .get(`/api/campuses/${id}`)
    .then((res) => res.data)
    .then((campus) => dispatch(fetchCampus(campus)))
    .catch((err) => console.log(err));

  // const campus = allcampus.find((c) => c.id === id);

  // return dispatch(fetchCampus(campus));
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CAMPUS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
