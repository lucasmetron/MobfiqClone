import { StyleSheet, View, StatusBar } from "react-native";
import Navbar from "./src/components/Navbar";
import { color } from "./src/styles/pallete";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={color.interface.lightGray2}
        barStyle="light-content"
      />
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: color.interface.lightGray3,
    alignItems: "center",
    justifyContent: "center",
  },
});
