import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as listActions from "../actions/list";

const styles = {
  default: {
    fontFamily: "Helvetica",
    fontSize: 18,
    color: "#333333",
    cursor: "pointer"
  }
};

class ListItem extends Component {
  handleOnClick = event => {
    this.props.actions.select(this.props.index);
  };

  render() {
    const { selected } = this.props;
    console.log(this.props.name)
    return (
      <li
        onClick={this.handleOnClick}
        style={{
          ...styles.default,
          color: selected !== -1 ? "steelblue" : "#333333"
        }}
      >
        {this.props.name}
      </li>
    );
  }
}



const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(listActions, dispatch) };
};

export default connect(
  null,
  mapDispatchToProps
)(ListItem);
