import { useEffect, useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import ExpensesOutput from "../components/ExpensesOuput/ExpensesOutput";
import { getExpenses } from "../util/http";
import { getDateMinusDays } from "../util/date";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    const onGetExpneses = async () => {
      const expenses = await getExpenses();
      expensesCtx.setExpenses(expenses);
    };

    onGetExpneses();
  }, []);

  const recentExpense = expensesCtx.expenses.filter((expense) => {
    const today = new Date();

    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });
  return (
    <ExpensesOutput
      expenses={recentExpense}
      expensesPeriod="Last 7 Days"
      fallbackText="No Expense registered for the last 7 days"
    />
  );
};

export default RecentExpenses;
