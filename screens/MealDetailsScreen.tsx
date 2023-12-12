import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { RootStackParamList } from "../navigation";
import { MEALS } from "../data/dummy-data";
import { useContext, useLayoutEffect } from "react";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../context/FavouritesContext";

type MealsDetailsScreenProps = NativeStackScreenProps<RootStackParamList, "MealDetails">;

const MealDetailsScreen = ({ route, navigation }: MealsDetailsScreenProps) => {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealId = route.params.mealId;

  const displayedMeal = MEALS.find((meal) => meal.id === mealId) || MEALS[0];

  const { title, imageUrl, ingredients, steps } = displayedMeal;

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          iconName={mealIsFavorite ? "star" : "star-outline"}
          iconColor="white"
          iconSize={24}
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails meal={displayedMeal} textStyle={styles.detailText} />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={ingredients} />

          <SubTitle>Steps</SubTitle>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    fontSize: 24,
    margin: 8,
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
