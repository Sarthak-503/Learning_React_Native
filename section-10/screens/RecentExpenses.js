import { useContext, useEffect, useState } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function RecentExpenses() {
  const [isfetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);
  // const [fetchedExpenses, setFetchedExpenses] = useState([]);
  const expensesCtx = useContext(ExpensesContext);

  // Sending an http request is an asynchronous task. That means it doesn't complete immediately. That's why post
  // and get return promises. a promise is an object that will eventually give you access to some other data.
  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses(); // returns a Promise
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError("Could not fetch the expenses!");
      }
      setIsFetching(false);
      //  setFetchedExpenses(expenses);
    };

    getExpenses();
  }, []);
  // Not good Approach, as we create a new expenses then this RecentExpenses comp is not removed/destroyed,it is
  // still running in the background as we are using stack.navigator.hence when we close manage-expenses,
  // we don't recreate Recent-Expenses screen as it was already there, hence useEffect not run -> newly created expense not showed

  // const recentExpenses = fetchedExpenses.filter((expense) => {
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });
  const errorHandler = () => {
    setError(null);
  };

  if (error && !isfetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }
  if (isfetching) {
    return <LoadingOverlay />;
  }

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;

// TODO
// Now you might be able to find a workaround to listen to changes in the navigator, React Navigation does give
// you ways of listening to such changes, don't use contextAPI here , call the api
