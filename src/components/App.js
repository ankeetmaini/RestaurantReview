import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { HeaderStyle } from "styles/HeaderStyle";
const restaurants = [
  { name: "React Cafe", address: "123 Anywhere St" },
  { name: "Fancy Restaurant", address: "799 Main St" },
  { name: "Taco Place", address: "550 Maple Rd" },
  { name: "Tony's Diner", address: "4101 College St" },
  { name: "Pasta Central", address: "706 Harper St" },
  { name: "Burger Builder", address: "4869 Hamilton Dr" },
  { name: "Pizza Express", address: "1049 Bird St" },
  { name: "Teriyaki To Go", address: "1885 Tea Berry Lane" },
  { name: "Maroon Deli", address: "1082 Stuart St" },
  { name: "Prime Bar and Grill", address: "1848 Fairfax Dr" },
  { name: "Dumpling House", address: "747 Kelly Dr" },
  { name: "Hot Chicken", address: "1816 Olive St" },
  { name: "Luna's Tap Room", address: "3256 Spirit Dr" },
  { name: "Quick Sandwich Shop", address: "2587 Cherry Ridge Dr" },
  { name: "Bobby's Burgers", address: "4152 Berkley St" },
  { name: "Turnpike Diner", address: "4571 Central Ave" },
  { name: "Bombay Express", address: "65 Queens Lane" },
  { name: "Coffee Central", address: "3228 Oakwood Circle" },
  { name: "King's Garden", address: "2935 Victoria Ct" },
  { name: "Salads and More", address: "2454 Preston St" }
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
        <ScrollView>
          {restaurants
            .filter(r => r.name.includes(this.state.search))
            .map((restaurant, index) => (
              <View
                key={restaurant.name}
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
            ))}
        </ScrollView>
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
