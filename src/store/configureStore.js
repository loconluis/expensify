import {createStore, combineReducers} from 'redux';
// reducers import
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // to connect with redux dev tool
  );

  return store;
};
