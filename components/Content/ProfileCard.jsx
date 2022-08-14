import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ProfileCard({
    title = "Title",
    counter = 0,
    location,
    image,
    lastComponent = false,
}) {
    return (
        <View style={{ ...style.card, marginBottom: lastComponent ? 0 : 34 }}>
            <View>
                {image ? (
                    <Image source={image} style={style.image} />
                ) : (
                    <Image source={require("../../assets/img1.png")} style={style.image} />
                )}
            </View>
            <Text style={style.title}>{title}</Text>
            <View style={style.bottomPanel}>
                <View style={style.iconWrapper}>
                    <EvilIcons name="comment" size={24} color="#BDBDBD" />
                    <Text style={style.counter}>{counter}</Text>
                </View>
                <View style={style.iconWrapper}>
                    <EvilIcons name="location" size={24} color="#BDBDBD" />
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
