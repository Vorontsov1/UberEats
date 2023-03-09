import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { Fontisto } from "@expo/vector-icons";;

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  return (
    <View style={styles.page}>
      <Image
        source={{ uri: restaurant.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <Fontisto
        name="backward"
        size={25}
        color="white"
        style={styles.iconContainer}
      />

      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime} -
          {restaurant.maxDeliveryTime} minutes
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
        position: 'absolute',
        top: 40,
        left: 15,
    borderRadius: 50,
  },
  page: {
    flex: 1,
  },

  image: {
    width: "100%",
    aspectRatio: 5 / 3,
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
