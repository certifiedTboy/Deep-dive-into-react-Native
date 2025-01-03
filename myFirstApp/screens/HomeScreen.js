import { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ onToggleShowTodosHandler }) => {
  const toggleShowTodosHandler = () => {
    onToggleShowTodosHandler();
  };

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeText}>Welcome</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Get Started"
          color="#FF5733"
          onPress={toggleShowTodosHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  homeText: {
    color: "#fff",
    fontSize: 24,
  },

  buttonContainer: {
    marginVertical: 12,
  },
});

export default HomeScreen;
