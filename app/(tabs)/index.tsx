import { Image, StyleSheet, Dimensions, Pressable } from "react-native";

import { Text, View } from "@/components/Themed";
import { textColor } from "@/constants/Colors";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const width = Dimensions.get("screen").width;

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Casino Room</Text>
      <Image
        source={require("../../assets/images/dice.png")}
        alt="Casino roulette"
        style={{ width, height: 400 }}
      />
      <BlurView style={styles.ctaTextContainer} experimentalBlurMethod="none">
        <View style={styles.iconContainer}>
          <Ionicons name="trophy" size={24} color={textColor} />
        </View>
        <Text style={styles.ctaText}>
          There are a wide variety of games to play
        </Text>
      </BlurView>
      <View style={styles.ctaContainer}>
        <Pressable onPress={null}>
          <Text style={{ fontSize: 16 }}>Signup</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            router.push("/two");
          }}
        >
          <View
            style={{
              padding: 25,
              backgroundColor: textColor,
              flexDirection: "row",
              gap: 8,
              borderRadius: 18,
            }}
          >
            <Ionicons name="exit-outline" size={18} color={"white"} />
            <Text style={{ color: "white", fontSize: 16 }}>Login</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ctaContainer: {
    marginTop: 30,
    width: width,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
  },
  iconContainer: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  ctaTextContainer: {
    backgroundColor: "#eeeeee",
    padding: 25,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 50,
    maxWidth: width * 0.9,
    marginLeft: width * 0.1,
  },
  ctaText: {
    fontSize: 16,
    flexShrink: 1,
  },
  welcomeText: {
    fontSize: width * 0.1,
    fontWeight: "600",
    width: width * 0.6,
    textAlign: "center",
    color: textColor,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
