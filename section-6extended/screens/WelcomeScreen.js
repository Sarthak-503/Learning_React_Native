import { View, Text, StyleSheet, Button } from 'react-native';

function WelcomeScreen({route,navigation}) {
  const handleOpenNavigation = () => {
    navigation.toggleDrawer();
  }
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"Welcome"</Text> screen!
      </Text>
      <Button title='Open Drawer' onPress={handleOpenNavigation}/>

    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});
