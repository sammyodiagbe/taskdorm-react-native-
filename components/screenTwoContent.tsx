import { StyleSheet, ScrollView, View } from "react-native";
import RequirementLeftComponent from "./screen two/requirementLeft";
import RequirementRightComponent from "./screen two/requirementRight";

const ScreenTwoContentComponent = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingTop: 30 }}
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: "rgba(0,0,200,.1)",
            width: "60%",
            padding: 20,
            borderTopEndRadius: 50,
            borderTopStartRadius: 50,
          }}
        >
          <RequirementLeftComponent />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(200,0,0,.1)",
            flexGrow: 1,
            borderTopEndRadius: 50,
            borderTopStartRadius: 50,
            padding: 20,
          }}
        >
          <RequirementRightComponent />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ScreenTwoContentComponent;
