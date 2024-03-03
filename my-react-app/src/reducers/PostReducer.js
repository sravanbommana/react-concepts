import { FETCH_REQUEST, FETCH_REQUEST_FAILURE, FETCH_REQUEST_SUCCESS } from "../constants";

const initialStore = {
  data: [],
  error: '',
  isLoading: true
}

export const PostReducer = (state=initialStore, action) => {
  switch(action.type) {
    case FETCH_REQUEST:
      return{
        ...state,
        data: [],
        isLoading: true,
        error: ''
      }
    case FETCH_REQUEST_SUCCESS:
      return{
        ...state,
        data: action.payload,
        isLoading: false,
        error: ''
      }
    case FETCH_REQUEST_FAILURE:
      return{
        ...state,
        data: [],
        isLoading: true,
        error: action.payload
      }
    default:
      return state
  }
}