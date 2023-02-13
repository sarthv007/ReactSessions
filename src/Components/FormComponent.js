import React, { Component } from "react";
import "./FormComponent.scss";

export class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      country: "usa",
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
    let flag = true;
    let err = {
      firstName: "",
      lastName: "",
      country: "",
    };
    const { firstName, lastName, country, error } = this.state;
    if (firstName === "") {
      flag = false;
      err = {
        ...err,
        firstName: "Please enter firstName",
      };
    }
    if (lastName === "") {
      flag = false;
      err = {
        ...err,
        lastName: "Please enter lastName",
      };
    }
    if (country === "") {
      flag = false;
      err = {
        ...err,
        country: "Please enter country",
      };
    }
    if (flag === false) {
      this.setState({
        error: err,
      });
    }
  };

  render() {
    const { firstName, lastName, country, error } = this.state;
    return (
      <>
        <h3>Using CSS to style an HTML Form</h3>

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
          <p className="error">{error.firstName && error.firstName}</p>

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            value={lastName}
            onChange={this.handleLastNameChange}
            placeholder="Your last name.."
          />
          <p className="error">{error.lastName && error.lastName}</p>

          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            onChange={this.handleCountryChange}
            value={country}
          >
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          <p className="error">{error.country && error.country}</p>

          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default FormComponent;
