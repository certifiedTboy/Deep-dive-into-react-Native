import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
// import { FavoriteContext } from "../store/context/favorite-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
const FavoriteScreen = () => {
  // const favoriteMealCtx = useContext(FavoriteContext);
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter(
    (meal) => meal.id === favoriteMealsIds.includes(meal.id)
  );

  if (favoriteMeals.length < 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meal </Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
