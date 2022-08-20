import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Platform,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen({ navigation }) {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [isHidePassword, setisHidePassword] = useState(true);
  const [data, setData] = useState(initialState);
  const [photo] = useState(null);

  const onFormSubmit = () => {
    console.log(data);
    setData(initialState);
    navigation.navigate("Home");
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.container}
      >
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
          <View style={{ ...styles.contentWrapper }}>
            <View style={styles.imageWrapper}>
              <Image style={styles.avatar} resizeMode="cover" />
              <TouchableOpacity style={styles.uploadImageBtn}>
                {photo ? (
                  <MaterialIcons name="cancel" size={24} color="black" />
                ) : (
                  <AntDesign name="pluscircleo" size={24} color="black" />
                )}
              </TouchableOpacity>
            </View>
            <Text style={styles.header}>Регистрация</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Логин"
                style={styles.input}
                value={data.login}
                onChangeText={value => setData({ ...data, login: value })}
              />
              <TextInput
                placeholder="Адрес электронной почты"
                style={styles.input}
                value={data.email}
                onChangeText={value => setData({ ...data, email: value })}
              />
              <View>
                <Text
                  style={styles.passwordBtn}
                  onPress={() => setisHidePassword(!isHidePassword)}
                >
                  Показать
                </Text>
                <TextInput
                  placeholder="Пароль"
                  style={{
                    ...styles.input,
                    ...styles.passwordInput,
                    marginBottom: 0,
                  }}
                  secureTextEntry={isHidePassword}
                  autoCorrect={false}
                  maxLength={16}
                  value={data.password}
                  onChangeText={value => setData({ ...data, password: value })}
                />
              </View>
            </View>
            <View style={{ display: isKeyboardVisible ? "none" : "flex" }}>
              <TouchableOpacity
                style={styles.submitBtn}
                activeOpacity="0.5"
                onPress={onFormSubmit}
              >
                <Text style={styles.submitBtnText}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.navigate}
                onPress={() => navigation.navigate("Login")}
              >
                <Text>Уже есть аккаунт? Войти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  contentWrapper: {
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: "relative",
    flexDirection: "column",
    paddingBottom: 20,
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
  header: {
    alignSelf: "center",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
  },
  inputWrapper: {
    marginTop: 32,
    marginHorizontal: 16,
    alignSelf: "stretch",
  },
  input: {
    backgroundColor: "#F6F6F6",
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    paddingVertical: 16,
    paddingLeft: 16,
    marginBottom: 16,
  },
  passwordWrapper: {
    position: "relative",
  },
  passwordBtn: {
    position: "absolute",
    zIndex: 5,
    right: 26,
    top: 18,
  },
  passwordInput: {
    position: "relative",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  submitBtn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 42,
  },
  submitBtnText: {
    color: "#fff",
  },
  navigate: {
    alignSelf: "center",
    marginTop: 16,
  },
});
