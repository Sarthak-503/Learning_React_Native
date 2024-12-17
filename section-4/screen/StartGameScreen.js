import { TextInput, View, StyleSheet, Text } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.text}>
        <Text
          style={{
            fontSize: 25,
          }}
        >
          Enter A Number
        </Text>
      </View>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false} //useful for normal text-input
        autoCapitalize="none" //useful for normal text-input
      />
      {/* every View is a flexbox Container having alignItems stretch  */}
      <View style={styles.buttonContainers}>
        {/* Here alignItems stretch is happening but it only takes the height of the element/container */}
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    // all these core Components(Views) which we're using, are compiled to native Components for the different
    // platforms. And we have different native Components for Android and iOS. And these native Components
    // support different style properties in their native languages.

    // And the style properties we said here(In Stylesheet), are in the end also translated to
    // native style instructions by a React Native and many style properties can be translated into
    // fitting instructions for both operating systems,iOS and Android.
    elevation: 8, // For Box Shadow, It is an Android specific property

    // shadow -> IOS property
    shadowColor: "green",
    shadowOffset: { width: 10, height: 20 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
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
    fontSize: 25,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
