import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { textColor } from "@/constants/Colors";

const ProfileComponent = () => {
  return (
    <View style={{ gap: 5 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{ uri: "https://i.pravatar.cc/65?u=user_1" }}
            style={styles.profileImage}
          />
          <Image
            source={{ uri: "https://i.pravatar.cc/65" }}
            style={[styles.profileImage, { marginLeft: -20 }]}
          />
          <Image
            source={{ uri: "https://i.pravatar.cc/65" }}
            style={[styles.profileImage, { marginLeft: -20 }]}
          />
          <View style={styles.button}>
            <Text style={{ marginLeft: 2, fontWeight: "bold" }}>9+</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Pressable>
            <View style={styles.button}>
              <Ionicons name="heart" size={20} color={"red"} />
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.button}>
              <Ionicons name="bookmark" size={20} color={"#bbb"} />
            </View>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16, color: textColor, fontWeight: "bold" }}>
          4 Mutual Friends
        </Text>

        <View>
          <Text>Starting in 4:23min</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default ProfileComponent;
