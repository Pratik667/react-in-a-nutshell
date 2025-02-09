import { createStore } from "redux";
import { CalculatorReducer } from "../reducers/CalculatorReducer";

export const store = createStore(CalculatorReducer);