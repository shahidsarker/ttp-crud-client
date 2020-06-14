import axios from "axios";

// ACTION TYPES;
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";

// ACTION CREATORS;
const fetchAllStudents = (students) => {
  return {
    type: FETCH_ALL_STUDENTS,
    payload: students,
  };
};

// THUNK CREATORS;
export const fetchAllStudentsThunk = () => (dispatch) => {
  return axios
    .get("/api/students")
    .then((res) => res.data)
    .then((students) => dispatch(fetchAllStudents(students)))
    .catch((err) => console.log(err));
};

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_STUDENTS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
