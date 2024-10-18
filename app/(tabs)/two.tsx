import ProfileComponent from "@/components/profileComponent";
import RequestedComponent from "@/components/requestedComponent";
import ScreenTwoContentComponent from "@/components/screenTwoContent";
import { textColor } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Pressable,
  Image,
  Text,
  Dimensions,
} from "react-native";

const { height } = Dimensions.get("screen");

export default function TabTwoScreen() {
  const [activeIndex, setIndex] = useState(1);
  return (
    <View style={styles.container}>
      <View style={{ height: 50 }} />
      <View
        style={{
          padding: 30,
        }}
      >
        <Pressable
          onPress={() => {
            router.back();
          }}
        >
          <Ionicons name="chevron-back-outline" size={32} color={"white"} />
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 15,
          alignItems: "center",
          paddingVertical: 60,
          paddingHorizontal: 30,
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require("@/assets/images/dice2.png")}
            style={styles.image}
          />
        </View>
        <Text
          style={{
            fontSize: 40,
            flexShrink: 1,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Let's play New Games
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        contentContainerStyle={{ paddingRight: 50 }}
        style={{
          maxHeight: 50,
          marginBottom: 30,
          paddingHorizontal: 30,
          paddingRight: 100,
        }}
      >
        <View style={styles.menuItem}>
          <Pressable
            onPress={() => {
              setIndex(1);
            }}
          >
            <Text style={styles.menuItemText}>Poker</Text>
            {activeIndex === 1 && (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: 5,
                }}
              >
                <View style={styles.indicator}></View>
              </View>
            )}
          </Pressable>
        </View>
        <View style={styles.menuItem}>
          <Pressable onPress={() => setIndex(2)}>
            <Text style={styles.menuItemText}>Blackjact</Text>
            {activeIndex === 2 && (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: 5,
                }}
              >
                <View style={styles.indicator}></View>
              </View>
            )}
          </Pressable>
        </View>
        <View style={styles.menuItem}>
          <Pressable onPress={() => setIndex(3)}>
            <Text style={styles.menuItemText}>Roulette</Text>
            {activeIndex === 3 && (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: 5,
                }}
              >
                <View style={styles.indicator}></View>
              </View>
            )}
          </Pressable>
        </View>
        <View style={styles.menuItem}>
          <Pressable onPress={() => setIndex(4)}>
            <Text style={styles.menuItemText}>Baccanon</Text>
            {activeIndex === 4 && (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: 5,
                }}
              >
                <View style={styles.indicator}></View>
              </View>
            )}
          </Pressable>
        </View>
        <View style={styles.menuItem}>
          <Pressable onPress={() => setIndex(5)}>
            <Text style={styles.menuItemText}>Barracat</Text>
            {activeIndex === 5 && (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: 5,
                }}
              >
                <View style={styles.indicator}></View>
              </View>
            )}
          </Pressable>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: "white",
          position: "relative",
          paddingVertical: 30,
          borderTopStartRadius: 50,
          borderTopEndRadius: 50,
          minHeight: height * 0.4,
          flex: 1,
        }}
      >
        <ProfileComponent />
        <ScreenTwoContentComponent />
        <RequestedComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: textColor,
    height,
    flex: 1,
  },

  imageContainer: {
    height: 80,

    width: 80,
    backgroundColor: "#17A4ED",
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },

  image: {
    height: 40,
    width: 40,
  },

  profileImage: {
    height: 55,
    width: 55,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#eee",
  },

  button: {
    height: 50,
    aspectRatio: 1,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },

  menuItem: {
    padding: 10,
    paddingHorizontal: 20,
  },

  menuItemText: {
    fontSize: 18,
    color: "white",
  },
});
