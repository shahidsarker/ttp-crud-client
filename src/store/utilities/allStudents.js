import axios from "axios";

// ACTION TYPES;
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT"
const ENROLL_STUDENT = "ENROLL_STUDENT";

// ACTION CREATORS

const fetchAllStudents = (students) => {
  return {
    type: FETCH_ALL_STUDENTS,
    payload: students,
  };
};

const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
  }
}
  
const enrollStudent = (student) => {
  return {
    type: ENROLL_STUDENT,
    payload: student,
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

export const addStudentThunk = (student, ownProps) => (dispatch) => {
  return axios
    .post("/api/students", student)
    .then((res) => res.data)
    .then((newStudent) => {
      const tweakedStudent = { ...newStudent, students: [] };
      dispatch(addStudent(tweakedStudent));
      ownProps.history.push(`/students/${newStudent.id}`);
    })
    .catch((err) => console.log(err));
};

// REDUCER;
export const enrollStudentThunk = (campusId, studentId) => (dispatch) => {
  return axios
    .put(`/api/students/${studentId}`, { campusId: campusId })
    .then((res) => res.data)
    .then((student) => dispatch(enrollStudent(student)))
    .catch((err) => console.log(err));
};

// REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_STUDENTS:
      return action.payload;
    case ADD_STUDENT:
      return [...state, action.payload];
    case ENROLL_STUDENT:
      return state.map((student) =>
        student.id === action.payload.id ? action.payload : student
      );
    default:
      return state;
  }
};

export default reducer;
