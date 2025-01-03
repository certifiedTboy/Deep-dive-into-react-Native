import { FlatList } from "react-native";
import CategoryGridTiles from "../components/CategoryGridTiles";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  const renderCatogoryItems = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealOverview", {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTiles
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCatogoryItems}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
