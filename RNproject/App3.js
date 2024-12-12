import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItems from "./components/GoalItems";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };
  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  } 
  const addGoalHandler = (enteredGoalText) => {
    setGoals((prev) => {
      return [
        ...prev,
        {
          title: enteredGoalText,
          id: Math.random().toString(), // this key is used by Flatlist automatically as key for rendering
        },
      ];
    });
    endAddGoalHandler();
  };
  const handleDeleteGoalItems = (id) => {
    setGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#a065ec"
        onPress={startAddGoalHandler}
      />
      {modalIsVisible && (
        <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler} />
      )}

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItems
                title={itemData.item.title}
                deleteGoalItem={handleDeleteGoalItems}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>

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
});
// Executed when entire code files is executed
