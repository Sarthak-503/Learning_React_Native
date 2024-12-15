// import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  // This is root component
  // Native elements don't have dom(don't support html elements)
  return (
    // Equivalent to div, build boxes/container that holds other content like text,Textinput, button,image
    //(used to hold & layout other components)
    // Acts like a container component for holding other component
    <View style={styles.container}> 
    <View>
      <Text style={styles.dummyText}>Sa..re..ga..ma..pa..dha</Text>
    </View>
    <Text style={styles.dummyText}>Sarthak</Text>
    {/* Used for display text  */}
      <Text>
      Hello Worldx
      </Text>

      <Button title='Tap Me'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText:{
    color:'black',
    marginBottom:60,
    borderWidth:4,
    padding:'16',
    borderColor:'pink'
  }
});
// Executed when entire code files is executed