import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

const GoalInput = (props) => {
  return (
    <>
       <View
        style={styles.inputContainer}
      >

       <TextInput
          onChangeText={props.goalInputHandler}
          style={styles.textInput}
          value={props.enteredGoalText}
          placeholder="Your Course Goal"
        />
        <Button onPress={props.onAddGoal} title="Add Goal" /> 
      </View>
    </>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
    textInput:{
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
        alignItems: "center",
      },
      inputContainer:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#dadada",
      }
  });
  