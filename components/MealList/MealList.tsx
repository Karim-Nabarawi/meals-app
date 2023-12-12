import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";
import Meal from "../../models/meal";

const MealsList = ({ items }: { items: Meal[] }) => {
  const renderMealItem = ({ item }: { item: Meal }) => {
    return <MealItem meal={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
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
