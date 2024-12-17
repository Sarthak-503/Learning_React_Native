import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../../consts/colors';

const Card = ({children}) => {
  return (
    <>
      <View style={styles.inputContainer}>
        {children}
      </View>
    </>
  )
}

export default Card
const styles = StyleSheet.create({
    inputContainer: {// or named as card
      marginTop: 36,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 24,
      padding: 16,
      backgroundColor: Colors.primary800,
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
    }
})