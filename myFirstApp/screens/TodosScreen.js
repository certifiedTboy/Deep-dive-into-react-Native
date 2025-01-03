import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Todos from "../components/todoComponents/Todos";

const TodosScreen = () => {
  return (
    <SafeAreaView style={styles.todosContainer}>
      <View>
        <Text style={styles.todoText}>Todo List</Text>

        <Todos />
      </View>
    </SafeAreaView>
  );
};

export default TodosScreen;

const styles = StyleSheet.create({
  todosContainer: {
    flex: 1,
    marginTop: 70,
  },

  todoText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
  },
});
