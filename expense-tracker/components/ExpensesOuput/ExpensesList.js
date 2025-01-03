import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  const renderExpensesItems = (itemData) => {
    return <ExpenseItem {...itemData.item} />;
  };

  return (
    <FlatList
      data={expenses}
      renderItem={renderExpensesItems}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
