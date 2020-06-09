import React from "react";
import "./styles/AllCampusesView.css";
import PropTypes from "prop-types";

const AllCampusesView = (props) => {
  return (
    <div className="all-campuses">
      <h1>{props.hello}</h1>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <h1>{campus.name}</h1>
          <p>{campus.description}</p>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
