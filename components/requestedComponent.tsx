import { textColor } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const RequestedComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.lock}>
        <Ionicons name="lock-closed-outline" size={18} />
      </View>
      <Text style={{ fontSize: 18, fontWeight: "bold", color: textColor }}>
        Requested
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    borderRadius: 100,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "white",
    width,
    gap: 10,
  },
  lock: {
    backgroundColor: "#eee",
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});

export default RequestedComponent;
