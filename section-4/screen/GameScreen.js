import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
// contains guesses by the phone, we let the phone know if guess is low or high
const GameScreen = () => {
  return (
    <>
      <View style={styles.screen}>
        <Title >Opponent Guess</Title>
        {/* GUESS */}
        <View>
          <Text>{/* Higher or Lower */}</Text>
        </View>
        {/* + or - */}
        <View>
          <Text>LOGS ROUNDS</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding:24
  },
});

export default GameScreen;
