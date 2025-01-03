import { useState, useEffect } from "react";
import { ScrollView, Image, View, Text, StyleSheet } from "react-native";
import OutlineButton from "../components/UI/OutlineButton";
import { fetchPlaceDetails } from "../util/database";

const PlaceDetails = ({ route, navigation }) => {
  const [fetchedPlace, setFetchedPlace] = useState("");

  const showOnMapHandler = () => {
    navigation.navigate("Map", {
      initialLat: fetchedPlace?.location.lat,
      initialLng: fetchedPlace?.location.lng,
    });
  };

  const placeId = route.params.placeId;

  useEffect(() => {
    const loadPlaceData = async () => {
      const place = await fetchPlaceDetails(placeId);

      setFetchedPlace(place);
      navigation.setOptions({ title: place.title });
    };

    loadPlaceData();
  }, [placeId]);

  if (!fetchedPlace) {
    return (
      <View style={styles.fallback}>
        <Text>Loading place data</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={fetchedPlace.imageUri} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fetchedPlace.address}</Text>
        </View>

        <OutlineButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlineButton>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  fallback: { flex: 1, justifyContent: "center", alignItems: "center" },
  screen: {
    alignItems: "center",
  },

  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },

  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  addressContainer: {
    padding: 20,
  },

  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
