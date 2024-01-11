import { StatusBar, SafeAreaView, StyleSheet } from "react-native";
import { Provider } from "react-redux";

import { color } from "@styles/pallete";
import store from "./src/store/index";
import Navigator from "@routes/index";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Navigator />
        <StatusBar
          backgroundColor={color.interface.lightGray2}
          barStyle="dark-content"
        />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
