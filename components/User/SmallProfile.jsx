import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function SmallProfile({ name = "Name", email = "Email" }) {
  return (
    <View style={style.profileContainer}>
      <View style={{ marginRight: 8 }}>
        <Image
          source={require("../../assets/background.png")}
          style={style.avatar}
        />
      </View>
      <View style={style.textWrapper}>
        <Text style={style.name}>{name}</Text>
        <Text style={style.email}>{email}</Text>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  textWrapper: {
    justifyContent: "center",
  },
  name: {
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  email: {
    fontWeight: "400",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
