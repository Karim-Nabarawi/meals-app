import { StyleSheet, Pressable, GestureResponderEvent } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IconButtonProps {
  onPress?: (event: GestureResponderEvent) => void;
  iconName?: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  iconSize?: number;
}

const IconButton = ({ onPress, iconName, iconColor, iconSize }: IconButtonProps) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <Ionicons name={iconName} size={iconSize} color={iconColor} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
