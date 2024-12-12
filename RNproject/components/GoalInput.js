import React, { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const goalInputHandler = (enteredtext) => {
    setEnteredGoalText(enteredtext);
  };
  return (
    <>
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require("../assets/goal.png")} />
          <TextInput
            onChangeText={goalInputHandler}
            style={styles.textInput}
            value={enteredGoalText}
            placeholder="Your Course Goal"
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                onPress={() => props.onAddGoal(enteredGoalText)}
                title="Add Goal"
                color='#b180f0'
              />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={props.onCancel} color='#f31282'/>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:16,
    backgroundColor:'#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
    alignItems: "center",
  },
  buttonContainer: {
    marginTop:16,
    flexDirection: "row",
  },
  button:{
    width:'30%',
    marginHorizontal:8
  },
  image:{
    height:100,
    width:100,
    margin:20
  }
});
