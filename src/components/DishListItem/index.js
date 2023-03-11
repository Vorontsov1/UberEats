import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DishListItem = ({ dish }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('Dish', {id: dish.id})} style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>$ {dish.price}</Text>
      </View>
      {dish.image && (
        <Image source={{ uri: dish.image }} style={styles.image} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#576319",
    borderBottomWidth: 3,
    marginHorizontal: 23,
    paddingVertical: 13,
    flexDirection: "row",
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
  image: {
    height: 80,
    aspectRatio: 1,
  },
});

export default DishListItem;
