// Nesting Navigators

import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screen/CategoriesScreen";
import MealsOverview from "./screen/MealsOverview";
import MealDetailScreen from "./screen/MealDetailScreen";
import FavoriteScreen from "./screen/FavoriteScreen";
import {Ionicons} from '@expo/vector-icons'
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle:{backgroundColor:"#351401"},
        drawerInactiveTintColor:'white',
        drawerActiveTintColor:"#e4baa1"
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon:({color,size})=> <Ionicons color={color} size={size} name="list"/> 
        }}
      />
      <Drawer.Screen name="Favorite" component={FavoriteScreen} 
       options={{
        title: "All Categories",
        drawerIcon:({color,size})=> <Ionicons color={color} size={size} name="star"/> 
      }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverview} />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailScreen}
            options={{
              title: "About The Meal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
});
