import axios from "axios";
import { FETCH_REQUEST, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_FAILURE } from "../constants";

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST
  }
}

export const fetchRequestSuccess = (data) => {
  return {
    type: FETCH_REQUEST_SUCCESS,
    payload: data
  }
}

export const fetchRequestFailure = (error) => {
  return {
    type: FETCH_REQUEST_FAILURE,
    payload:error
  }
}

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      const data = response.data.filter(post => post.id < 4);
      console.log("Data", data)
      dispatch(fetchRequestSuccess(data));
    })
    .catch((error) => {
      dispatch(fetchRequestSuccess(error));
    })
  }
}