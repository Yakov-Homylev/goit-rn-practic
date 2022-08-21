import { EvilIcons, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const initialPostsState = {
  image: "",
  title: "",
  location: "",
  locationObj: {},
  counter: "0",
};

export default function CreatePostsScreen({ navigation }) {
  const [cameraRef, setCameraRef] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [post, setPost] = useState(initialPostsState);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");

      const locationAccess = await Location.requestForegroundPermissionsAsync();

      if (locationAccess.status !== "granted") {
        console.log("Access denied");
      }

      const { coords } = await Location.getCurrentPositionAsync({});
      setPost({ ...post, locationObj: coords });
    })();
  }, []);

  const photoSnap = async () => {
    const { uri } = await cameraRef.takePictureAsync();
    setPost({ ...post, image: uri });
  };

  const publicPhoto = () => {
    navigation.navigate("DefaultPosts", post);
    setPost(initialPostsState);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={style.container}>
        {hasPermission ? (
          <Camera
            style={style.imageUploadContainer}
            ref={ref => setCameraRef(ref)}
          >
            <TouchableOpacity
              style={style.uploadImageButton}
              onPress={photoSnap}
            >
              <MaterialIcons name="photo-camera" size={24} color="black" />
            </TouchableOpacity>
          </Camera>
        ) : (
          <View />
        )}
        {post.image ? (
          <Text style={style.imageInfo}>Опубликуйте фото</Text>
        ) : (
          <Text style={style.imageInfo}>Загрузите фото</Text>
        )}
        <KeyboardAvoidingView
          behavior={Platform.select({ android: undefined, ios: "padding" })}
        >
          <View style={{ marginTop: 48, marginBottom: 32 }}>
            <TextInput
              placeholder="Название..."
              style={{ ...style.input, paddingLeft: 0 }}
              value={post.title}
              onChangeText={value => setPost({ ...post, title: value })}
            />
          </View>
          <View>
            <EvilIcons
              style={{ position: "relative", top: 8 }}
              name="location"
              size={24}
              color="#BDBDBD"
            />
            <TextInput
              placeholder="Местность..."
              style={style.input}
              value={post.location}
              onChangeText={value => setPost({ ...post, location: value })}
            />
          </View>
          <TouchableOpacity style={style.btn} onPress={publicPhoto}>
            <Text style={style.btnText}>Опубликовать</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <TouchableOpacity style={style.deleteBtn}>
          <Ionicons name="trash-outline" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
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
    width: 340,
    height: 240,
    borderRadius: 8,
  },
  uploadImageButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    padding: 20,
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
