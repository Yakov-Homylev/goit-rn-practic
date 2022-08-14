import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, SafeAreaView } from "react-native";

import ProfileCard from "../../components/Content/ProfileCard";

export default function ProfileScreen({ navigation }) {
    return (
        <ImageBackground source={require("../../assets/background.png")} style={style.container}>
            <View style={style.wrapper}>
                <View style={style.content}>
                    <View style={style.imageWrapper}>
                        <Image style={style.avatar} resizeMode="cover" />
                        <Text style={style.uploadImageBtn}>x</Text>
                    </View>
                    <View style={style.logOutBtn}>
                        <MaterialIcons
                            onPress={() => navigation.navigate("Login")}
                            name="logout"
                            size={24}
                            color="#BDBDBD"
                        />
                    </View>
                    <Text style={style.title}>Name</Text>
                    <SafeAreaView>
                        <ProfileCard />
                    </SafeAreaView>
                </View>
            </View>
        </ImageBackground>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
    },
    wrapper: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        position: "relative",
    },
    content: {
        alignSelf: "center",
    },
    imageWrapper: {
        minHeight: 120,
        minWidth: 120,
        maxHeight: 120,
        maxWidth: 120,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
        position: "relative",
        alignSelf: "center",
        bottom: 50,
    },
    avatar: {
        flex: 1,
        maxWidth: 120,
        maxHeight: 120,
        borderRadius: 16,
    },
    uploadImageBtn: {
        position: "absolute",
        bottom: 20,
        right: -5,
    },
    logOutBtn: {
        position: "absolute",
        top: 24,
        right: 18,
    },
    title: {
        color: "#212121",
        fontWeight: "500",
        fontSize: 30,
        lineHeight: 35,
        alignSelf: "center",
        marginVertical: 32,
    },
});
