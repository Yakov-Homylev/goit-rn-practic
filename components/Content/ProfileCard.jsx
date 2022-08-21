import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ProfileCard({
  title = "Title",
  counter = 0,
  location,
  image,
  lastComponent = false,
  onCommentClick = () => {},
  onLocationClick = () => {},
}) {
  return (
    <View style={{ ...style.card, marginBottom: lastComponent ? 0 : 34 }}>
      <View>
        {image ? (
          <Image source={{ uri: image }} style={style.image} />
        ) : (
          <Image
            source={require("../../assets/img1.png")}
            style={style.image}
          />
        )}
      </View>
      <Text style={style.title}>{title}</Text>
      <View style={style.bottomPanel}>
        <View style={style.iconWrapper}>
          <TouchableOpacity onPress={onCommentClick}>
            <EvilIcons name="comment" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <Text style={style.counter}>{counter}</Text>
        </View>
        <View style={style.iconWrapper}>
          <TouchableOpacity
            onPress={() => onLocationClick({ location, title })}
          >
            <EvilIcons name="location" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <Text style={style.locationText}>{location}</Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    flexDirection: "column",
  },
  image: {
    alignSelf: "center",
    borderRadius: 8,
    flex: 1,
    minWidth: "100%",
    minHeight: 200,
  },
  title: {
    marginTop: 8,
    marginBottom: 10,
    color: "#212121",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
  },
  bottomPanel: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  counter: {
    color: "#BDBDBD",
  },
  locationText: {
    textDecorationLine: "underline",
  },
});
