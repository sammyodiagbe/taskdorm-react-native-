import { StyleSheet, ScrollView, View } from "react-native";

const ScreenTwoContentComponent = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingTop: 15, paddingHorizontal: 20 }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ backgroundColor: "red", width: "60%" }}></View>
        <View style={{ flex: 1, height: 100, backgroundColor: "blue" }}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ScreenTwoContentComponent;
