import React from "react";
import { StudentNameListContainer } from "../containers";

const CampusView = (props) => {
  return (
    <>
      <img src={props.campus.imageUrl} alt={props.campus.name} />
      <h1>{props.campus.name}</h1>
      <h3>{props.campus.address}</h3>

      <p>{props.campus.description}</p>

      <StudentNameListContainer students={props.campus.students} />
    </>
  );
};

export default CampusView;
