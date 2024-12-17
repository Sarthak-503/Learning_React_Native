import { StyleSheet, Text } from "react-native";
import Colors from "../../consts/colors";

const Title = ({ children }) => {
  return (
    <>
      <Text style={styles.title}>{children}</Text>
    </>
  );
};

export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily:'open-sans-bold',
    // fontWeight: "bold",
    color: 'white',
    textAlign: "center",
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});
