import { NavigationContainer } from "@react-navigation/native";

import { routes } from "@routes/routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navbar from "@components/Navbar";
import HomeApp from "@screens/HomeApp";
import Cart from "@screens/Cart";
import More from "@screens/More";
import Profile from "@screens/Profile";
import Categories from "@screens/Categories";

export default function Navigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.bottomNavigator}
        screenOptions={{ headerShown: false, animation: "flip" }}
      >
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
        {/* 
        <Stack.Screen
          name={routes.bottomNavigator}
          component={BottomNavigation}
          options={{ headerShown: false, animation: "flip" }}
        /> */}
      </Stack.Navigator>
      <Navbar />
    </NavigationContainer>
  );
}
