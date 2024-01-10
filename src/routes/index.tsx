import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { routes } from "../routes/routes";
import Navbar from "@components/Navbar";
import HomeApp from "@screens/HomeApp";
import Categories from "@screens/Categories";
import Cart from "@screens/Cart";
import More from "@screens/More";
import Profile from "@screens/Profile";

export default function Navigate() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={routes.homeApp} component={HomeApp} />
          <Stack.Screen name={routes.categories} component={Categories} />
          <Stack.Screen name={routes.cart} component={Cart} />
          <Stack.Screen name={routes.more} component={More} />
          <Stack.Screen name={routes.profile} component={Profile} />
        </Stack.Navigator>
        <Navbar />
      </NavigationContainer>
    </>
  );
}
