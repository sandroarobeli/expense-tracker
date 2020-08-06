import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push("/"); // method to automatically(programmatically) redirect
      }}
    />
  </div>
);

export default connect()(AddExpensePage);

// connecting a component gives that component
// ability to use dispatch via
// props.dispatch
