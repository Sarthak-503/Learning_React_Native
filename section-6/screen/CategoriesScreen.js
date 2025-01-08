import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const pressHandler = (navigation,itemData) => {
  navigation.navigate('MealsOverview',{
    categoryId:itemData.item.id
  })
};

// It don't recreated when component re-renders
const RenderCategoryItem = (itemData,navigation) => {
  return (
    <CategoryGridTile
      onPress={()=>pressHandler(navigation,itemData)}
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );
};
const CategoriesScreen = ({ navigation }) => {
  return (
    <>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(itemData)=>RenderCategoryItem(itemData,navigation)}
        numColumns={2}
      />
    </>
  );
};

export default CategoriesScreen;
