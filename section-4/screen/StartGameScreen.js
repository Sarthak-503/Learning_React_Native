import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Alert,
  AlertButtons,
} from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../consts/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };
  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredNumber);
    if (isNaN(choosenNumber) || choosenNumber < 1 || choosenNumber > 99) {
      // show alert-> native alert api built built  into android & ios
      Alert.alert(
        "Invalid Number!",
        "Please Enter a Valid Number Between 1 & 99",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: () => setEnteredNumber(""),
          },
        ]
      );
      return;
    }
    onPickNumber(enteredNumber);
    console.log("Valid Number");
  };
  const resetInputHandler = () => {
    setEnteredNumber("");
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>
        Enter a Number
        </InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          value={enteredNumber}
          onChangeText={numberInputHandler}
          keyboardType="number-pad"
          autoCorrect={false} //useful for normal text-input
          autoCapitalize="none" //useful for normal text-input
        />
        {/* every View is a flexbox Container having alignItems sryBuch  */}
        <View style={styles.buttonContainers}>
          {/* Here alignItems stretch is happening but it only takes the height of the element/container */}
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center", // alignItem is stretch by-default
  },
  buttonContainers: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    height: 60,
    width: 50,
    paddingBottom:0,
    fontSize: 25,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginBottom: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
