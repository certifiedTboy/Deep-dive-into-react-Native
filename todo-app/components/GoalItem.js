import { View, StyleSheet, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable
      android_ripple={{ color: "#210644" }}
      onPress={() => props.onDeleteItem(props._id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#530acc",
  },

  pressedItem: {
    opacity: 0.5,
  },

  goalText: {
    color: "white",
    padding: 8,
  },
});

export default GoalItem;
