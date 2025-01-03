import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../MealItem";

const MealsList = ({ items }) => {
  const renderMealItem = (mealItem) => {
    const mealItemProps = {
      id: mealItem.item.id,
      title: mealItem.item.title,
      imageUrl: mealItem.item.imageUrl,
      affordability: mealItem.item.affordability,
      complexity: mealItem.item.complexity,
      duration: mealItem.item.duration,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
