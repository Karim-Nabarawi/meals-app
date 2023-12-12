import { ReactNode } from "react";
import { Text, View, StyleSheet } from "react-native";

const SubTitle = ({ children }: { children: ReactNode }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  subTitleContainer: {
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
