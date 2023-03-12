import { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";


const BasketDishItem = ({ basketDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={{ fontWeight: "700" }}>{basketDish.name}</Text>
      <Text style={{ marginLeft: "auto" }}>$ {basketDish.price}</Text>
    </View>
  );
};
export default BasketDishItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    marginRight: 15,
    marginLeft: 15,
  },
  quantityContainer: {
    backgroundColor: "#fecf50",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 50,
    marginRight: 10,
  },
});
