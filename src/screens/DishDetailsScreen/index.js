import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const dish = restaurants[0].dishes[0];

const DishDetailsScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
  };
    const getTotal = () => {
        return (dish.price * quantity).toFixed(2);
    }

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={onMinus}
          activeOpacity={0.5}
        >
          <AntDesign
            name="minuscircleo"
            size={60}
            color="#EC9704"
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={onPlus}
          activeOpacity={0.5}
        >
          <AntDesign
            name="pluscircleo"
            size={60}
            color="#EC9704"
            style={styles.icon}
          />
        </TouchableOpacity>
          </View>
          <Pressable onPress={() => navigation.navigate('Basket')} style={styles.button}>
              <Text style={styles.buttonText}>
                  Add {quantity} to basket &#8226; ${getTotal()}
              </Text>
          </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40, //temp fix
    padding: 13,
    backgroundColor: "#fecf50",
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

export default DishDetailsScreen;
