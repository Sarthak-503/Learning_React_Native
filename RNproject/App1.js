// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState([]);
  const goalInputHandler = (enteredtext) => {
    setEnteredGoalText(enteredtext);
  };
  const addGoalHandler = () => {
    // setEnteredGoalText("");
    // fn c/a by react to derive the newer state
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
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center", //by default alignItems is stretch
          marginBottom: 24,
          borderBottomWidth: 1,
          borderBottomColor: "#dadada",
        }}
      >
        <TextInput
          onChangeText={goalInputHandler}
          style={{
            borderWidth: 1,
            borderColor: "#cccccc",
            width: "70%",
            marginRight: 8,
            padding: 8,
            alignItems: "center",
          }}
          value={enteredGoalText}
          placeholder="Your Course Goal"
        />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        {/* <ScrollView // If there are 1000 Text, then ScrollView will load/render 1000 element but only 10 are shown in the screen-> performace issues, used for an Article
          alwaysBounceVertical={false} // IOS property-> remove bouncing effect
        >
          {goals.map((val) => (
            //Added View as parent container for Text as it is borderRadius is not supported in Ios in Text element,
            /// see if we add color property to goalItem then the colour of text in UiI is not white,hence it is concluded that the cascading/inheritance(draw parent characteristics) nature of css is not present here
            <View style={styles.goalItem} key={val.key}>
              <Text style={styles.goaltext}>
                {val.title != "" ? val.title : ""}{" "}
              </Text>
            </View>
          ))}
        </ScrollView> */}
        {/* has snall threshld ->small time taking , Flatlist support all the props scrollview support*/}
        <FlatList
          data={goals}
          // An obj that is wrapped by individual data items
          renderItem={(itemData) => {
            return (
              // We are nolonger mapping this data mannuallly, all the things are done by Flatlist
              <View style={styles.goalItem}>
                <Text style={styles.goaltext}>{itemData.item.title}</Text>
              </View>
            );
          }}
          // called to get a key for every item from goals
          keyExtractor={(item,index)=>{
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
