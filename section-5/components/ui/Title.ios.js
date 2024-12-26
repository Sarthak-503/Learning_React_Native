import { Text, StyleSheet, useWindowDimensions, Platform } from "react-native";

function Title({ children }) {
  const { width, height } = useWindowDimensions();
  const titleWidth = width < 400 ? "80%" : "100%";
  return <Text style={[styles.title, { width: titleWidth }]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: 'bold',
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({ android: 2, ios: 0 }),
    borderWidth: 0,
    borderColor: "white",
    padding: 12,
    maxWidth: "90%",
  },
});

// We don't need to add listener for different Platform
