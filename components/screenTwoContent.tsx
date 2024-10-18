import { StyleSheet, ScrollView } from "react-native";

const ScreenTwoContentComponent = () => {
  return <ScrollView style={styles.container}></ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
  },
});

export default ScreenTwoContentComponent;
