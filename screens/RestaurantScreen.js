import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";

import yelp from "../api/yelp";

const RestaurantScreen = ({ route }) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const getRestaurant = async () => {
      try {
        const response = await yelp.get(`/${route.params.id}`);
        if (isMounted) {
          setResult(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getRestaurant();
    return () => {
      isMounted = false;
    };
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image}></Image>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
});

export default RestaurantScreen;
