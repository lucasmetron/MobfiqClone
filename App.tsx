import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";

import { color } from "@styles/pallete";
import Categories from "@screens/Categories";
import HomeApp from "@screens/HomeApp";
import { routes } from "@routes/routes";
import Navbar from "@components/Navbar";
import Cart from "@screens/Cart";
import More from "@screens/More";
import Profile from "@screens/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./src/store/index";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={routes.homeApp}>
          <Stack.Screen
            name={routes.homeApp}
            component={HomeApp}
            options={{ headerShown: false, animation: "flip" }}
          />
          <Stack.Screen
            name={routes.categories}
            component={Categories}
            options={{ headerShown: false, animation: "flip" }}
          />
          <Stack.Screen
            name={routes.cart}
            component={Cart}
            options={{ headerShown: false, animation: "flip" }}
          />
          <Stack.Screen
            name={routes.more}
            component={More}
            options={{ headerShown: false, animation: "flip" }}
          />
          <Stack.Screen
            name={routes.profile}
            component={Profile}
            options={{ headerShown: false, animation: "flip" }}
          />
        </Stack.Navigator>
        <Navbar />
        <StatusBar
          backgroundColor={color.interface.lightGray2}
          barStyle="light-content"
        />
      </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     height: "100%",
//     position: "relative",
//     // backgroundColor: color.interface.lightGray3,
//     backgroundColor: color.interface.blue,
//     display: "flex",
//     alignItems: "flex-start",
//     justifyContent: "flex-start",
//     gap: 15,
//   },
// });
