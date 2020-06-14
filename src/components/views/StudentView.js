import React from "react";
import "./styles/CampusView.css";
import { Link } from "react-router-dom";
import {} from "../containers";

const CampusView = (props) => {
  return (
    <>
      <img src={props.student.imageUrl} alt={props.student.firstName} />
      <h1>
        {props.student.firstName} {props.student.lastName}
      </h1>
      <Link className="edit-link" to={`/students/${props.student.id}/edit`}>
        Edit
      </Link>
      <button onClick={() => props.handleDelete(props.student.id)}>
        Delete
      </button>
    </>
  );
};

export default CampusView;
