import React from "react";
import {
  Text,
  View,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import MealDetails from "./MealDetails";

const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  categoryId,
  navigation,
}) => {
  const pressHandler = (navigation) => {
    navigation.navigate("MealDetails", {
      mealId: categoryId,
    });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={() => {
          pressHandler(navigation);
        }}
      >
        <View>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS == "android" ? "hidden" : "visible", // ripple effect goes beyond border-radius
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    backgroundColor: "white", //In IOS, for shadow to have an effect, add bgcolor
    shadowOpacity: "0.35",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%", // 100% of surrounding container
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
