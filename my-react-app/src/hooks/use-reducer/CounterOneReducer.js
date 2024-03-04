import React, { useReducer } from "react";
import { DECREMENT, INCREMENT } from "../context-with-reducer/constants";

export const initialState = {
  count: 0,
};
export const counterOneReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
