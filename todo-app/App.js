import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addGoalHandler = (goalData) => {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, goalData]);
    startAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    return setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal._id !== id);
    });
  };

  const startAddGoalHandler = () => {
    return modalIsVisible ? setModalIsVisible(false) : setModalIsVisible(true);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#530acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onEndGoal={startAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem {...itemData.item} onDeleteItem={deleteGoalHandler} />
              );
            }}
            keyExtractor={(item, index) => {
              return item._id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
});

export default App;
