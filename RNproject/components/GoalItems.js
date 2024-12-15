import { StyleSheet, View, Text, Pressable } from "react-native";
// we can use like this also ->onPress={ () => props.deleteGoalItem(props.id)}
const GoalItems = (props) => {
  return (
    <>
      <View style={styles.goalItem}>
        <Pressable
          android_ripple={{ color: "#dddddd" }}
          onPress={props.deleteGoalItem.bind(this, props.id)}
          style={({pressed})=>{pressed && styles.pressedItem}}  // For IOS
        >
          <Text style={styles.goaltext}>{props.title}</Text>
        </Pressable>
      </View>
    </>
  );
};

export default GoalItems;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goaltext: {
    padding: 8,
    color: "white",
    textAlign:'center'
  },
  pressedItem:{
    opacity:'0.5'
  }
});
