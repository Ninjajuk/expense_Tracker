// MoneyContext.js
import React, { createContext, useContext, useReducer } from "react";

// Define an initial state
const initialState = {
  totalIncome: 0,
  totalExpense: 0,
  totalSavings: 0
};

// Define the actions
const actionTypes = {
  ADD_INCOME: "ADD_INCOME",
  ADD_EXPENSE: "ADD_EXPENSE"
};

// Create a reducer function
const moneyReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_INCOME:
      return {
        ...state,
        totalIncome: state.totalIncome + action.payload,
        totalSavings: state.totalSavings + action.payload
      };
    case actionTypes.ADD_EXPENSE:
      return {
        ...state,
        totalExpense: state.totalExpense + action.payload,
        totalSavings: state.totalSavings - action.payload
      };
    default:
      return state;
  }
};

// Create the context
const MoneyContext = createContext();

// Create a provider component
const MoneyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moneyReducer, initialState);

  return (
    <MoneyContext.Provider value={{ state, dispatch }}>
      {children}
    </MoneyContext.Provider>
  );
};

// Create a custom hook for using the context
const useMoney = () => {
  const context = useContext(MoneyContext);
  if (!context) {
    throw new Error("useMoney must be used within a MoneyProvider");
  }
  return context;
};

export { MoneyProvider, useMoney, actionTypes };
