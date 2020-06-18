import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { fetchCampusThunk } from "../../thunks";
import { NavBar } from "../views";
import { WelcomeView } from "../views";
import { AddItemView } from "../views"

class WelcomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['']
        }
    }

    componentDidMount() {
        //this.props.fetchCampus(this.props.match.params.id);
    }

    handleSubmit = (e) => {
        console.log(e)

        const newList = this.state.items
        newList.push('warren')
        this.setState({
            items: newList  
        });
    }
    /*
    addView() {
        return(<AddItemView
              handleSubmit={this.handleSubmit}
             />
        );
    }
    */

    render() {
        return(
            <>
            <NavBar/>
            <WelcomeView/>
            {this.state.items.map(items => {
                return(<AddItemView
                        handleSubmit={this.handleSubmit}
                      /> 
                )
            })}
            <a class="btn btn-primary" href="result.html">Search</a>
            </>
        )
    }
}

/*
// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
  };
};
*/


export default connect(null, null)(WelcomeContainer);