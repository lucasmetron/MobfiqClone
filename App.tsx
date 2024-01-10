import { StyleSheet, View, StatusBar } from "react-native";

import { color } from "@styles/pallete";
import Navigate from "./src/routes";
import Categories from "@screens/Categories";

export default function App() {
  return (
    <View style={styles.container}>
      <Navigate />
      <StatusBar
        backgroundColor={color.interface.lightGray2}
        barStyle="light-content"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    // backgroundColor: color.interface.lightGray3,
    backgroundColor: color.interface.blue,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
