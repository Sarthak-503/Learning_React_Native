import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import StartGameScreen from "./screen/StartGameScreen";
import GameOverScreen from "./screen/GameOverScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screen/GameScreen";
import Colors from "./consts/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
 
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };
  const gameOverHandler = () => {
    setGameIsOver(true);
  };
  
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <>
      {/* Views only take as much space as they need to fit their content into themselves. */}
      <>
        {/* <View style={styles.rootScreen}> */}
        <LinearGradient
          style={styles.rootScreen}
          colors={[Colors.primary700, Colors.accent500]}
        >
          <ImageBackground
            source={require("./assets/images/background.png")}
            // image takes all the available space not by distorting it,instead just zooming it or out
            resizeMode="cover"
            // so that image takes all the screen, its not enough that the gradient does
            // this(taking all space), This image will take entire space that its parent have
            style={styles.rootScreen} // ImageBackground=View+Image,  this style add on View, View is transparent (it does not have any bgcolour by default)
            imageStyle={styles.backgroundImage} // This style adds on Image
          >
            {/* I want the Background Image and Linear Gradient Below the noch-> top of mobile and don't
             want my screen/main content not to go under the notch */}
            <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            {/* Added styles bcz all the available space,minus the area that is reserved for the notch,
        which will be taken care of automatically, */}
          </ImageBackground>
        </LinearGradient>
        {/* </View> */}
      </>
    </>
  );
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15, // 85% transparent
  },
});
