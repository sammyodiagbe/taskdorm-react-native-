import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { textColor } from "@/constants/Colors";

const RequirementRightComponent = () => {
  return (
    <View style={{ gap: 10 }}>
      <View
        style={{
          flexDirection: "row",
          gap: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.content}>
          <View style={styles.iconWrapper}>
            <Ionicons name="cash" size={18} color={textColor} />
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionText}>200</Text>
            <Ionicons name="trending-down-outline" size={18} />
          </View>
        </View>
      </View>
      <View>
        <Text style={{ textAlign: "center" }}>You'll earn</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingVertical: 20,
    borderRadius: 30,
    padding: 20,
  },
  iconWrapper: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
    borderRadius: 40,
  },
  description: {
    flexDirection: "row",
    gap: 5,
  },
  descriptionText: {
    fontWeight: "bold",
  },
});

export default RequirementRightComponent;
