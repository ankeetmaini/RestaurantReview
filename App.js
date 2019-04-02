import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { HeaderStyle } from "./HeaderStyle";
const restaurants = [
  {
    name: "React Cafe",
    address: "123 Anywhere St"
  },
  {
    name: "Fancy Restaurant",
    address: "799 Main St"
  },
  {
    name: "Taco Place",
    address: "550 Maple Rd"
  }
];
export default class App extends Component {
  state = {
    search: ""
  };
  render() {
    return (
      <View>
        <Text style={HeaderStyle.header}>Restaurant Review</Text>
        <TextInput
          placeholder="Live Search"
          style={styles.search}
          value={this.state.search}
          onChangeText={text => this.setState({ search: text })}
        />
        {restaurants
          .filter(r => r.name.includes(this.state.search))
          .map((restaurant, index) => (
            <View
              key={restaurant.name}
              style={[
                styles.row,
                { backgroundColor: index % 2 === 0 ? "transparent" : "#f3f3f7" }
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
          ))}
      </View>
    );
  }
}

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
  },
  search: {
    marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f5f5f5"
  }
});
