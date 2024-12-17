import { StyleSheet, Text, View, ImageBackground } from "react-native";
import StartGameScreen from "./screen/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <>
      {/* Views only take as much space as they need to fit their content into themselves. */}
      {/* <View style={styles.rootScreen}> */}
      <LinearGradient style={styles.rootScreen} colors={["#4e0329", "#ddb52f"]}>
        <ImageBackground
          source={require("./assets/images/background.png")}
          // image takes all the available space not by distorting it,instead just zooming it or out
          resizeMode="cover"
          // so that image takes all the screen, its not enough that the gradient does 
          // this(taking all space), This image will take entire space that its parent have
          style={styles.rootScreen} // ImageBackground=View+Image,  this style add on View, View is transparent (it does not have any bgcolour by default)
          imageStyle={styles.backgroundImage} // This style adds on Image
        >
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>
      {/* </View> */}
    </>
  );
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage:{
    opacity:0.15 // 85% transparent
  }
});
