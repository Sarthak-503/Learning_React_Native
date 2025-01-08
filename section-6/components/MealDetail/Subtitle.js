import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({subtitle}) => {
  return (
    <>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{subtitle}</Text>
      </View>
    </>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
    subTitle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
      },
      subTitleContainer: {
        padding: 6,
        marginHorizontal:24,
        marginVertical:2,
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2,
      },
})