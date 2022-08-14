import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import CreatePostsScreen from "../Main/CreatePostsScreen";
import PostsScreen from "../Main/PostsScreen";
import ProfileScreen from "../Main/ProfileScreen";

const MainTabs = createBottomTabNavigator();

export default function HomeScreen() {
    return (
        <MainTabs.Navigator
            initialRouteName="Posts"
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, size, color }) => {
                    switch (route.name) {
                        case "Posts":
                            return (
                                <Ionicons
                                    name="grid-outline"
                                    size={focused ? 40 : size}
                                    color={focused ? "#FF6C00" : color}
                                />
                            );
                        case "CreatePosts":
                            return (
                                <AntDesign
                                    name="pluscircleo"
                                    size={focused ? 40 : size}
                                    color={focused ? "#FF6C00" : color}
                                />
                            );
                        case "Profile":
                            return (
                                <Ionicons
                                    name="md-person-outline"
                                    size={focused ? 40 : size}
                                    color={focused ? "#FF6C00" : color}
                                />
                            );
                        default:
                            break;
                    }
                },
            })}>
            <MainTabs.Screen
                name="Posts"
                component={PostsScreen}
                options={({ navigation }) => ({
                    title: "Публикации",
                    headerRight: () => (
                        <MaterialIcons
                            onPress={() => navigation.navigate("Login")}
                            name="logout"
                            size={24}
                            color="black"
                            style={{ marginRight: 20 }}
                        />
                    ),
                })}
            />
            <MainTabs.Screen
                name="CreatePosts"
                component={CreatePostsScreen}
                options={({ navigation }) => ({
                    title: "Создать публикацию",
                    headerLeft: () => (
                        <Ionicons
                            onPress={() => navigation.goBack()}
                            name="arrow-back"
                            size={24}
                            color="black"
                            style={{ marginLeft: 20 }}
                        />
                    ),
                    tabBarStyle: { display: "none" },
                })}
            />
            <MainTabs.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: "Профиль",
                    headerShown: false,
                }}
            />
        </MainTabs.Navigator>
    );
}
