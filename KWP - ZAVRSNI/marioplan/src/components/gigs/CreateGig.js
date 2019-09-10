import React, { Component } from "react";
import { connect } from "react-redux";
import { createGig } from "../../store/actions/gigActions";
import { Redirect } from "react-router-dom";

class CreateGig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      band: "",
      profit: 0,
      date: new Date()
    };
    this.handleDate = this.handleDate.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleDate(date, e) {
    this.setState({
      date
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createGig(this.state);
    this.props.history.push("/home");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">

        {/* <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Gig</h5>
          <div className="input-field">
            <input type="text" id="band" onChange={this.handleChange} />
            <label htmlFor="band">Band name</label>
          </div>
          <div className="input-field">
            <input
              id="profit"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
            <label htmlFor="profit">Profit</label>
          </div>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={this.state.date}
            onChange={this.handleDate}
            id="datePicker"
          />
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createGig: gig => dispatch(createGig(gig))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGig);
