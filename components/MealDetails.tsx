import { View, Text, StyleSheet, TextStyle, ViewStyle } from "react-native";
import Meal from "../models/meal";

interface MealDetailsProps {
  meal: Meal;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const MealDetails = ({ meal, containerStyle, textStyle }: MealDetailsProps) => {
  const { duration, complexity, affordability } = meal;
  return (
    <View style={[styles.details, containerStyle]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    padding: 8,
  },
  detailItem: {
    fontSize: 12,
  },
});
