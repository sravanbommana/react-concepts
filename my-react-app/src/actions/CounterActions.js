import { DECREMENT, INCREMENT } from "../constants";

export const incrementCount = () => {
  return {
    type: INCREMENT,
  }
}

export const decrementCount = () => {
  return {
    type: DECREMENT,
  }
}