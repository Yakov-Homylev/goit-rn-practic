import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

import ProfileCard from "../../../components/Content/ProfileCard";
import SmallProfile from "../../../components/User/SmallProfile";

export default function DefaultPostsScreen({ route, navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    return () => setPosts([]);
  }, []);

  useEffect(() => {
    if (!route.params) {
      return;
    }
    setPosts([...posts, route.params]);
  }, [route.params]);

  const onCommentClick = () => {
    navigation.navigate("Comments");
  };
  const onLocationClick = params => {
    navigation.navigate("Map", params);
  };

  return (
    <View style={style.container}>
      <SmallProfile />
      <ScrollView style={style.contentWrapper}>
        {posts.length > 0 ? (
          posts.map(
            (
              { title = "", counter = "", location = "", image = "" },
              idx,
              arr
            ) => (
              <ProfileCard
                key={idx + title}
                title={title}
                counter={counter}
                location={location}
                image={image}
                lastComponent={!!(arr.length - 1 === idx)}
                onCommentClick={onCommentClick}
                onLocationClick={onLocationClick}
              />
            )
          )
        ) : (
          <Text>Вы еще ничего не опубликовали</Text>
        )}
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
