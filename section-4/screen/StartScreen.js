import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const StartScreen = () => {
  return (
    <>
    <View style={styles.container}>
        <View style={styles.inputContainer}><Text >Guess My Number</Text></View>
        <View style={styles.boxContainer}></View>
    </View>
      
    </>
  )
}
export default StartScreen
const styles = StyleSheet.create({
    container:{
        marginTop:40,
        marginHorizontal:16,
    
        justifyContent:'center',
        backgroundColor:'#d2691e'
    },
    inputContainer:{
        // border:'5px solid white',
        borderWidth:2,
        padding:5
    },
    boxContainer:{
        marginTop:5,
        borderWidth:5,
        width:'80%',
        marginHorizontal:20,
        minHeight:'30%'
    }
})