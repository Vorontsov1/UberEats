import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetailsPage from "./src/screens/RestaurantDetails";
import DishDetailsScreen from "./src/screens/DishDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsPage /> */}
      <DishDetailsScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3caac",
    alignItems: "center",
    justifyContent: "center",
  },
});
