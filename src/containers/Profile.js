import React from "react";
import { connect } from "react-redux"; //map state to props

class Profile extends React.PureComponent {
  render() {
    return <div>Hi, {this.props.username}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    username: state.auth.username,
  };
};
//despatch method, RETURNS ASSIGNMENTS
const mapDispatchToProps = (dispatch) => {
  return {
    //
  };
};

export default connect(mapStateToProps)(Profile);
