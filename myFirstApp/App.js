import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import TodosScreen from "./screens/TodosScreen";

const App = () => {
  const [showTodos, setShowTodos] = useState(false);

  const onToggleShowTodosHandler = () => {
    if (showTodos) {
      return setShowTodos(false);
    }

    return setShowTodos(true);
  };

  let screen = (
    <HomeScreen
      onToggleShowTodosHandler={onToggleShowTodosHandler}
      showTodos={showTodos}
    />
  );

  if (showTodos) {
    screen = <TodosScreen />;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {screen}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: "#301934",
  },
});
