import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen({ route }) {
  const { location, title } = route.params;
  const [placeLocation, setPlaceLocation] = useState({
    longitude: 0,
    latitude: 0,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });
  const [userLocation, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const [place] = await Location.geocodeAsync(location);
      setPlaceLocation(place);

      await Location.requestForegroundPermissionsAsync();

      const { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
    })();
  }, []);

  return (
    <View style={style.container}>
      <MapView
        style={style.mapStyle}
        region={{
          ...placeLocation,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {userLocation && (
          <Marker
            title="Вы"
            coordinate={{
              ...userLocation,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        )}
        {placeLocation && (
          <Marker
            title={title}
            coordinate={{
              ...placeLocation,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        )}
      </MapView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
