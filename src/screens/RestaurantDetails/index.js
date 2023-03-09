import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { Fontisto } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import Header from "./header";

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={Header}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />
      <Fontisto
        name="backward"
        size={25}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 15,
  },
  page: {
    flex: 1,
  },

  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    // borderRadius: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
    margin: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#525252",
    margin: 10,
  },
  container: {
    margin: 10,
  },
});

export default RestaurantDetailsPage;
