// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import GoalItems from "./components/GoalItems";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState([]);
  const goalInputHandler = (enteredtext) => {
    setEnteredGoalText(enteredtext);
  };
  const addGoalHandler = () => {
    setGoals((prev) => {
      return [
        ...prev,
        {
          title: enteredGoalText,
          id: Math.random().toString(), // this key is used by Flatlist automatically as key for rendering
        },
      ];
    });
  };
  return (
    <View style={styles.appContainer}>
      <GoalInput
        goalInputHandler={goalInputHandler}
        enteredGoalText={enteredGoalText}
        onAddGoal={addGoalHandler}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItems title={itemData.item.title} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, //For Outer container takes all the height
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goaltext: {
    color: "white",
  },
});
// Executed when entire code files is executed
