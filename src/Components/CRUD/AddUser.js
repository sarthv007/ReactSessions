import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, FormGroup, Input, Label } from "reactstrap";
import style from "./AddUser.module.scss";
import TitleComp from "./TitleComp";
import FormButtons from "./FormButtons";
import { connect } from "react-redux";
import { addUser } from "../../Actions/UsersAction";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();

    // try {
    //   await axios.post("http://localhost:5000/users", {
    //     name,
    //     email,
    //     gender,
    //   });
    //   navigate("/");
    // } catch (error) {
    //   console.log(error);
    // }
    props.addUser({ name, email, gender });
    navigate("/");
  };

  return (
    <div className={style.AddUser}>
      <TitleComp text={"Register new user"} />
      <form onSubmit={saveUser}>
        <FormGroup>
          <Label for="examplePassword">Name</Label>
          <Input
            type="text"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="text"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">Gender</Label>
          <Input
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            type="select"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Input>
        </FormGroup>
        <FormButtons btnText={"Add"} />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(AddUser);
