import { ADD, SUB, DIVIDE, MUTP } from "../action/CalculatorActions";

const initialState = {
  result: 0,
};

export const CalculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        result: Number(action.fname) + Number(action.sname),
      };
    case SUB:
      return {
        ...state,
        result: Number(action.fname) - Number(action.sname),
      };
    case DIVIDE:
      return {
        ...state,
        result: Number(action.fname) / Number(action.sname),
      };
    case MUTP:
      return {
        ...state,
        result: Number(action.fname) * Number(action.sname),
      };
    default:
      return state;
  }
}