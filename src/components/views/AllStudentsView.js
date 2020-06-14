import React from "react";
// import "./styles/AllStudentsView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <div className="all-students">There are no students</div>;
  }

  return (
    <div className="all-students">
      {/* <Link to="/students/new" className="add-student">
        New Campus
      </Link> */}
      <div>
        {props.allStudents.map((student) => (
          <div key={student.id}>
            <Link to={`/students`}>
              <h1>{student.name}</h1>
            </Link>
            <img src={student.imageUrl} width="200px" alt={student.name} />
            <p>{student.students.length} students</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// AllStudentsView.propTypes = {
//   allStudents: PropTypes.array.isRequired,
// };

export default AllStudentsView;
