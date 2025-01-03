import { useEffect } from "react";
import { FlatList, View } from "react-native";
import TodoCard from "./TodoCard";
import useHttp from "../../hooks/useHttp";

const Todos = () => {
  const [fetAllTodos, todos] = useHttp();
  useEffect(() => {
    fetAllTodos("todos", "GET");
  }, []);

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={(itemData) => {
          return <TodoCard {...itemData.item} />;
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

export default Todos;
