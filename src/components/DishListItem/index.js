import { View, Text, StyleSheet, Image } from "react-native";

const DishListItem = ({ dish }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <Text style={styles.price}>$ {dish.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
        borderBottomColor: 'lighgrey',
        borderBottomWidth: 1,
        marginHorizontal: 23,
        paddingVertical: 13,
  },
    name: {
      letterSpacing: 0.5,
    fontWeight: "600",
    fontSize: 16,
  },
  description: {
      color: "grey",
      marginVertical: 10,
  },
  price: {
    fontSize: 16,
  },
});

export default DishListItem;
