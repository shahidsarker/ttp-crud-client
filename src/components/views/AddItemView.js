import React from "react";
import PropTypes from "prop-types";

const AddItemView = (props) => {
    return (
      <>
      <form>
        <div class="input-group mb-3">
          <div class="input-group-append">
            <input type="text" class="form-control" placeholder="Insert an Ingredient" aria-label="Insert an Ingredient" aria-describedby="button-addon2"></input>
            <button onClick={props.handleSubmit}  class="btn btn-outline-secondary" type="button" id="button-addon2">+</button>
          </div>
        </div>
      </form>
      </>
    );
  };
  
export default AddItemView;