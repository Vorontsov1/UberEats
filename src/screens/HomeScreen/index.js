import { StyleSheet,  FlatList } from "react-native";
import RestaurantItem from "../../components/RestaurantItem";
import restaurants from "../../../assets/data/restaurants.json";

export default function HomeScreen() {
  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem restaurants={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({});

