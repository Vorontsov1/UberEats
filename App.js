import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import RestaurantItem from "./src/components/RestaurantItem";
import restaurants from "./assets/data/restaurants.json";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurants={item} />}
        showsVerticalScrollIndicator={false}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3caac",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingVertical: 30, //temporary solution
  },
});
