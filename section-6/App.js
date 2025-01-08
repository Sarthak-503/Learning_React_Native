import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native"; // Already present while setting up a project,don't install it
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screen/CategoriesScreen";
import MealsOverview from "./screen/MealsOverview";
import { CATEGORIES, MEALS } from "./data/dummy-data";
import MealDetailScreen from "./screen/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <CategoriesScreen/> */}
      <NavigationContainer>
        {/* the default screen at start is the first child,however you can set props 
      initialRouteName="MealsOverview" to Stack.Navigator  */}
        <Stack.Navigator
          // default screen options
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          {/* It pass a navigation props to the screen component registered here  */}
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
              // headerStyle: {
              //   backgroundColor: "#351401",
              // },
              // headerTintColor: "white",
              // contentStyle: { backgroundColor: "#3f2f25" },
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverview}
            
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   const category = CATEGORIES.find(category => category.id === catId);
            //   const title = category ? category.title : 'Category not found';// for dynamic routes, set in that screen
            //   return {
            //     title,  
            //   };
            // }}
          />
          <Stack.Screen name="MealDetails"
          component={MealDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 20,
    marginBottom: 20,
  },
});

// Using Navigation Package, Our bgColor is gone, nice Header is there,also adds a safe area so that it don't
// collide with notch or statusbar, we have a nice wrapper layout

// NativeStack and Stack are same, but NativeStack uses Native platform elements for animation
// ,just emulates the native-elements,it is faster.

// If you want to navigate from inside a component(which is not registered as screen) to other ,then you can use
// useNavigation hook
