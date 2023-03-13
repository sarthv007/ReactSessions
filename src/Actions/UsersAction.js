import axios from "axios";
import {
  ADD_USER_REQUEST,
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "../constant";

export const fetchUserSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const getUsers = () => {
  //async action creator
  return (dispatch, getState) => {
    //good place to write a api call
    console.log("getState from action creator", getState());
    dispatch(fetchUserRequest());
    const response = axios
      .get("http://localhost:5000/users")
      .then((response) => {
        dispatch(fetchUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};

//code for delete
export const deleteUserSuccess = (data) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: data,
  };
};

export const deleteUserFailure = (error) => {
  return {
    type: DELETE_USER_FAILURE,
    payload: error,
  };
};

export const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  };
};

export const deleteUserID = (id) => {
  return (dispatch, getState) => {
    //api call code will go here
    dispatch(deleteUserRequest());
    axios
      .delete(`http://localhost:5000/users/${id}`)
      .then((response) => dispatch(getUsers()))
      .catch((error) => dispatch(deleteUserFailure()));
  };
};

//code for adding a user

export const addUserRequst = () => {
  return {
    type: ADD_USER_REQUEST,
  };
};

export const addUserFailure = (error) => {
  return {
    type: ADD_USER_REQUEST,
    payload: error,
  };
};

export const addUser = (user) => {
  return (dispatch, getState) => {
    dispatch(addUserRequst());
    axios
      .post("http://localhost:5000/users", user)
      .then((response) => {
        dispatch(getUsers());
      })
      .catch((error) => {
        dispatch(addUserFailure(error.message));
      });
  };
};
