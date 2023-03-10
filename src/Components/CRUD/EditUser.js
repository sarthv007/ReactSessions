import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, FormGroup, Input, Label } from "reactstrap";
import style from "./AddUser.module.scss";
import TitleComp from "./TitleComp";
import FormButtons from "./FormButtons";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.AddUser}>
      <TitleComp text={"Edit user"} />
      <form onSubmit={updateUser}>
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
        <FormButtons btnText={"Edit"} />
      </form>
    </div>
  );
};

export default EditUser;
