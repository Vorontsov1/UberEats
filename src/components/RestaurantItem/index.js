import { StyleSheet, Text, View, Image } from "react-native";

const RestaurantItem = ({ restaurants }) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurants.image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{restaurants.name}</Text>
      <Text style={styles.subtitle}>
              $ {restaurants.deliveryFee} {restaurants.minDeliveryTime}-
              {restaurants.maxDeliveryTime}
      </Text>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  restaurantContainer: {
    width: "100%",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
  },
});
