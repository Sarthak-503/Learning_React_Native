// contains guesses by the phone, we let the phone know if guess is low or high
import React, { useEffect, useMemo, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    console.log(typeof(currentGuess));
    console.log(typeof(userNumber));
    if (currentGuess == userNumber) { // here currentGuess = number and userNumber = string
      console.log("game Over")
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  };
  return (
    <>
      <View style={styles.screen}>
        <Title>Opponent Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
          <Text> Higher or Lower </Text>
          <View>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              -
            </PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              +
            </PrimaryButton>
          </View>
        </View>
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
    padding: 24,
  },
});

export default GameScreen;
