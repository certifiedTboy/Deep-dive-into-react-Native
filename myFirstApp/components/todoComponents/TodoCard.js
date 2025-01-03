import { View, Text, StyleSheet, Pressable } from "react-native";

const TodoCard = () => {
  return (
    <Pressable style={styles.todoContainer} android_ripple={{ color: "grey" }}>
      <View>
        <Text>Todo Title</Text>
      </View>

      <View>
        <Text>Todo Description</Text>
      </View>
    </Pressable>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: "#fff",
    margin: 12,
    borderRadius: 16,
    padding: 12,
    height: 200,
  },
});
