import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";

import { RootStackParamList } from "../navigation";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealsList from "../components/MealList/MealList";

type MealsOverviewScreenProps = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

const MealsOverviewScreen = ({ route, navigation }: MealsOverviewScreenProps) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === categoryId)?.title || categoryId;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
