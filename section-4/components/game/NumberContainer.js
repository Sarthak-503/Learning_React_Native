import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../../consts/colors";

const NumberContainer = ({ children }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
      </View>
    </>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor: Colors.accent500,
        padding:24,
        margin:24,
        borderRadius:8, // not possible to add in Text in IOS
        alignItems:'center',
        justifyContent:'center'
    },
    numberText:{
        color:Colors.accent500,
        fontSize:32,
        fontFamily:'open-sans-bold'
        // fontWeight:'bold'
    }
})