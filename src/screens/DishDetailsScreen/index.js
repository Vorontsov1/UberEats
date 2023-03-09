import { View, Text, StyleSheet } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { AntDesign } from "@expo/vector-icons"; 


const dish = restaurants[0].dishes[0];

const DishDetailsScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />
      <View style={styles.row}>
              <AntDesign name="minuscircle" size={50} color="#EC9704" />
              <Text style={styles.quantity}>1</Text>
        <AntDesign name="pluscircle" size={50} color="#EC9704" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 30, //temp fix
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
});

export default DishDetailsScreen;
