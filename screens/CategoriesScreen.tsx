import { FlatList } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";
import { RootDrawerParamList, RootStackParamList } from "../navigation";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";

type CategoriesScreenProps = CompositeScreenProps<
  DrawerScreenProps<RootDrawerParamList, "Categories">,
  NativeStackScreenProps<RootStackParamList>
>;

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  const renderCategoryItem = ({ item }: { item: Category }) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", { categoryId: item.id });
    };
    return <CategoryGridTile title={item.title} color={item.color} onPress={pressHandler} />;
  };

  return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2} />;
};

export default CategoriesScreen;
