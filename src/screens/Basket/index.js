import { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";

const restaurant = restaurants[0];

const BasketDishItem = ({ basketDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={{ fontWeight: "700" }}>{basketDish.name}</Text>
      <Text style={{ marginLeft: "auto" }}>${basketDish.price}</Text>
    </View>
  );
};

const Basket = () => {

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>

      <Text style={styles.textItems}>Your items</Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />

      <View style={styles.separator} />

      <View style={styles.button}>
        <Text style={styles.buttonText}>Create Order</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40, //temp fix
    padding: 13,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 10,
  },
  description: {
    color: "#686868",
  },
  separator: {
    height: 1,
    borderBottomColor: "#576319",
    borderBottomWidth: 3,
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
    color: "#BC0000",
  },
  button: {
    backgroundColor: "#68904D",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
    letterSpacing: 0.7,
  },
  quantityContainer: {
    backgroundColor: "#DA6A00",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    marginRight: 10,
  },
  textItems: {
    fontWeight: "bold",
    marginTop: 20,
    letterSpacing: 0.8,
    fontSize: 19,
  },
});

export default Basket;
