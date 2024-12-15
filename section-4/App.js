import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from './screen/StartScreen';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello World!!!!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <StartScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
