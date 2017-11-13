import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = ({ expensesCount, total }) => {
  return (
    <div>
      <h1>Viewing { expensesCount } totalling { numeral(total / 100).format('$0,0.00')  } </h1> 
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expensesCount: visibleExpenses.length,
    total: expensesTotal(visibleExpenses)
  }
}



export default connect(mapStateToProps)(ExpensesSummary)