import React, { useEffect, useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";

const renderMealItem = (itemData,navigation) => {
  const item = itemData.item;
  const mealItemProps = {
    title: item.title,
    imageUrl: item.imageUrl,
    complexity: item.complexity,
    duration: item.duration,
    affordability: item.affordability,
    categoryId:item.id,
    navigation:navigation
  };

  return <MealItem {...mealItemProps} />;
};

// We get navigation and route props if we register this screen in Stack.navigation
const MealsOverview = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  // useLayoutEffect
  // use it in situations like this where you typically have some kind of ongoing animation and you wanna set
  // or execute some side effect whilst this is still happening, and before the component has been rendered.
  // So before this component function has finished execution.Or to be precise, you wanna run this effect
  // simultaneously with the component function execution.// For IOS
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return (
    <>
      <View style={styles.mealsContainer}>
        <FlatList
          data={displayedMeals}
          keyExtractor={(item) => item.id}
          renderItem={(itemData)=>renderMealItem(itemData,navigation)}
        />
      </View>
    </>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  mealsContainer: {
    flex: 1,
    padding: 16,
  },
});

// If we are passing objects to such a component which is not registered as main screen in Stack.Navigator
// , then we can use a useRoute hook
// const route = useRoute();
// route.params.
