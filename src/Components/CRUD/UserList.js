import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";
import NavBarComp from "./NavBarComp";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserID, getUsers } from "../../Actions/UsersAction";

const UserList = () => {
  //const [users, setUser] = useState([]);
  const { loading, users, error } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  // const getUsers = async () => {
  //   const response = await axios.get("http://localhost:5000/users");
  //   setUser(response.data);
  // };

  const deleteUser = async (id) => {
    dispatch(deleteUserID(id));
    // try {
    //   await axios.delete(`http://localhost:5000/users/${id}`);
    //   getUsers();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <NavBarComp />
        <Link to="add" className="button is-success">
          <Button>Add New</Button>
        </Link>

        <Table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <Link
                    to={`edit/${user._id}`}
                    className="button is-info is-small mr-1"
                  >
                    <Button>Edit</Button>
                  </Link>
                  &nbsp;
                  <Button
                    onClick={() => deleteUser(user._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserList;
