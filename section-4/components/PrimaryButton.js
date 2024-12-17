import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../consts/colors";

function PrimaryButton({ children, onPress }) {
  // When Pressable is outside the view, then the ripple effect is outside the btn, when Pressable
  // is outside, then there is ripple effect inside the button
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{
          color: Colors.primary600,
        }}
      >
        {/* You can also pass an array of objects to styles(all the object styles will be applied)  */}
        <Text style={[styles.buttonText]}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden", // any style from inside the container, it will be cliped and will not go outside the container,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 3,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75, // makes 75% opaque means 25% transparent
  },
});
