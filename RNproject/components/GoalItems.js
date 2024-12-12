import { StyleSheet, View ,Text} from "react-native";

const GoalItems = (props) => {
  return (
    <>
      <View style={styles.goalItem}>
        <Text style={styles.goaltext}>{props.title}</Text>
      </View>
    </>
  );
};

export default GoalItems;


const styles = StyleSheet.create({
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
  