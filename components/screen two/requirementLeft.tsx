import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Text } from "react-native";

const RequirementLeftComponent = () => {
  return (
    <View style={{ gap: 10 }}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <View style={styles.content}>
          <View style={styles.iconWrapper}>
            <Ionicons name="star" size={18} />
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionText}>450</Text>
            <Ionicons name="trending-up-outline" size={18} />
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.iconWrapper}>
            <Ionicons name="flash" size={18} />
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionText}>200</Text>
            <Ionicons name="trending-up-outline" size={18} />
          </View>
        </View>
      </View>
      <View>
        <Text style={{ textAlign: "center" }}>Starting requirements</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  content: {
    flex: 1,
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingVertical: 20,
    borderRadius: 30,
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

export default RequirementLeftComponent;
