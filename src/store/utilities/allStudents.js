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