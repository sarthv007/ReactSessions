import React, { Component } from "react";
import "./FormComponent.scss";

export class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      country: "",
      error: {
        firstNameError: "",
        lasstNameError: "",
        countryError: "",
      },
    };
  }

  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
    //console.log(event.target.value);
  };

  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
    //console.log(event.target.value);
  };

  handleCountryChange = (event) => {
    this.setState({
      country: event.target.value,
    });
    //console.log(event.target.value);
  };

  handleSubmit = (event) => {
    //Api call logic will go here
    event.preventDefault();
    if (this.validate()) {
      const { firstName, lastName, country } = this.state;
      alert(`Form Submited ${firstName} ${lastName} ${country}`);
    }
  };

  validate = () => {
    this.setState({
      error: {
        firstNameError: "",
        lasstNameError: "",
        countryError: "",
      },
    });
    let flag = true;
    let err = {};
    const { firstName, lastName, country, error } = this.state;
    if (firstName === "") {
      flag = false;
      err["firstNameError"] = "Please enter firstName";
    }
    if (lastName === "") {
      flag = false;
      err["lastNameError"] = "Please enter lastName";
    }
    if (country === "") {
      flag = false;
      err["countryError"] = "Please enter country";
    }
    if (flag === false) {
      console.log(err);
      this.setState({
        error: err,
      });
    }
  };

  render() {
    const { firstName, lastName, country, error } = this.state;
    console.log(error);
    return (
      <div className="container">
        <h1>React Form</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            value={firstName}
            onChange={this.handleFirstNameChange}
            placeholder="Your name.."
          />
          <p className="error">
            {error.firstNameError && error.firstNameError}
          </p>

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            value={lastName}
            onChange={this.handleLastNameChange}
            placeholder="Your last name.."
          />
          <p className="error">{error.lastNameError && error.lastNameError}</p>

          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            onChange={this.handleCountryChange}
            value={country}
          >
            <option value="">Please Select</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          <p className="error">{error.countryError && error.countryError}</p>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default FormComponent;
