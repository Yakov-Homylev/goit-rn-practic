import { EvilIcons, MaterialIcons, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";

export default function CreatePostsScreen() {
    return (
        <View style={style.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={style.imageUploadContainer}>
                    <Image source={require("../../assets/icon.png")} style={style.imageWrapper} />
                    <TouchableOpacity style={style.uploadImageButton}>
                        <MaterialIcons name="photo-camera" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
            <Text style={style.imageInfo}>Загрузите фото</Text>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
                <View style={{ marginTop: 48, marginBottom: 32 }}>
                    <TextInput
                        placeholder="Название..."
                        style={{ ...style.input, paddingLeft: 0 }}
                    />
                </View>
                <View>
                    <EvilIcons
                        style={{ position: "relative", top: 8 }}
                        name="location"
                        size={24}
                        color="#BDBDBD"
                    />
                    <TextInput placeholder="Местность..." style={style.input} />
                </View>
                <TouchableOpacity style={style.btn}>
                    <Text style={style.btnText}>Опубликовать</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            <TouchableOpacity style={style.deleteBtn}>
                <Ionicons name="trash-outline" size={24} color="#BDBDBD" />
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        paddingTop: 32,
        paddingHorizontal: 16,
        backgroundColor: "#FFFFFF",
        flexDirection: "column",
        flex: 1,
    },
    imageUploadContainer: {
        alignSelf: "center",
        position: "relative",
    },
    uploadImageButton: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -20 }, { translateY: -10 }],
        backgroundColor: "#FFFFFF",
        borderRadius: "50%",
    },
    imageWrapper: {
        width: 340,
        height: 240,
        borderRadius: 8,
    },
    imageInfo: {
        color: "#BDBDBD",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 19,
        marginTop: 8,
    },
    inputInfo: {
        color: "#BDBDBD",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 19,
    },
    input: {
        flex: 1,
        paddingBottom: 15,
        paddingLeft: 32,
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 1,
        color: "#000",
    },
    btn: {
        backgroundColor: "#FF6C00",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 16,
        marginTop: 32,
    },
    btnText: {
        color: "#fff",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 19,
    },
    deleteBtn: {
        alignSelf: "center",
        marginTop: "auto",
        marginBottom: 34,
        backgroundColor: "#F6F6F6",
        paddingHorizontal: 26,
        paddingVertical: 14,
        borderRadius: 20,
    },
});
