export type RootStackParamList = {
  Drawer: undefined;
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
  MealDetails: { mealId: string };
};

export type RootDrawerParamList = {
  Categories: undefined;
  Favorites: undefined;
};
