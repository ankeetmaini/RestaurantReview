import React from "react";
import { View, Text, StyleSheet } from "react-native";
export const RestaurantRow = ({ restaurant, index }) => (
  <View
    style={[
      styles.row,
      {
        backgroundColor: index % 2 === 0 ? "transparent" : "#f3f3f7"
      }
    ]}
  >
    <View style={styles.edges}>
      <Text>{index + 1}</Text>
    </View>
    <View style={styles.nameAndAddress}>
      <Text>{restaurant.name}</Text>
      <Text style={styles.quiet}>{restaurant.address}</Text>
    </View>
    <View style={styles.edges}>
      <Text>Info</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  edges: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5
  },
  nameAndAddress: {
    flexDirection: "column",
    flex: 8
  },
  quiet: {
    color: "grey"
  }
});
