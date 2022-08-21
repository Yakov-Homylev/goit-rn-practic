import { MaterialIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import CommentsScreen from "./NestedScreens/CommentsScreen";
import DefaultPostsScreen from "./NestedScreens/DefaultPostsScreen";
import MapScreen from "./NestedScreens/MapScreen";

const NestedStack = createStackNavigator();

export default function PostsScreen() {
  return (
    <NestedStack.Navigator>
      <NestedStack.Screen
        component={DefaultPostsScreen}
        name="DefaultPosts"
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
          headerLeft: () => null,
        })}
      />
      <NestedStack.Screen component={MapScreen} name="Map" />
      <NestedStack.Screen component={CommentsScreen} name="Comments" />
    </NestedStack.Navigator>
  );
}
