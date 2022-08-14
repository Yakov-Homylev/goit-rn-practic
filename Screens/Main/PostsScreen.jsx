import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import ProfileCard from "../../components/Content/ProfileCard";
import SmallProfile from "../../components/User/SmallProfile";

const mockData = [
    {
        title: "Forest",
        counter: "1",
        location: "Deutschland",
        image: require("../../assets/img1.png"),
    },
    {
        title: "Sunset",
        counter: "2",
        location: "Deutschland",
        image: require("../../assets/img2.png"),
    },
    {
        title: "Door",
        counter: "3",
        location: "Italy",
        image: require("../../assets/img3.png"),
    },
];

export default function PostsScreen() {
    return (
        <View style={style.container}>
            <SmallProfile />
            <ScrollView style={style.contentWrapper}>
                {mockData.length > 0
                    ? mockData.map(({ title, counter, location, image }, idx, arr) => (
                          <ProfileCard
                              key={title}
                              title={title}
                              counter={counter}
                              location={location}
                              image={image}
                              lastComponent={!!(arr.length - 1 === idx)}
                          />
                      ))
                    : null}
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 32,
        paddingBottom: 10,
        backgroundColor: "#FFFFFF",
    },
    contentWrapper: {
        marginTop: 32,
        flexDirection: "column",
    },
});
