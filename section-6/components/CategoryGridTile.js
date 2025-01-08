import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <>
      <View style={[styles.gridItem]}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
            // pressed && styles.buttonPressed,
          ]}
          onPress={onPress}
        >
          <View style={[styles.innerContainer, { backgroundColor: color }]}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    backgroundColor: "white", //In IOS, for shadow to have an effect, add bgcolor
    shadowOpacity: "0.25",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS == "android" ? "hidden" : "visible", // ripple effect goes beyond border-radius
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.4,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    borderRadius: 8, // For Inner Container
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
