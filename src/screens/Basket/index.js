import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";


const restaurant = restaurants[0];

const Basket = () => {
  const [quantity, setQuantity] = useState(1);




  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <View style={styles.separator} />
     
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          Create Order
        </Text>
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
    fontSize: 30,
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
    justifyContent: "center",
    marginTop: 50,
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
});

export default Basket;
