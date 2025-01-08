import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <>
      <ScrollView style={styles.rootContainer}> 
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.textStyle}
        />
        {/* // Text can't receive borders therefore we have added a View in React-Native  */}
        <View style={styles.outerContainer}>
          <View style={styles.listContainer}>
            <Subtitle subtitle={"Ingredients"} />
            <List data={selectedMeal.ingredients} />
            <Subtitle subtitle={"Steps"} />
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer:{
    marginBottom:10,
  },
  image: {
    width: "100%",
    height: 230,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#dadada",
  },
  textStyle: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  outerContainer:{
    alignItems:'center'
  }
});
