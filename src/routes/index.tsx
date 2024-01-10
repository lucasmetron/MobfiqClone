import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as S from "./styles";
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
    <S.Container>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={routes.homeApp}>
          <Stack.Screen
            name={routes.homeApp}
            component={HomeApp}
            options={{ title: "teste" }}
          />
          <Stack.Screen
            name={routes.categories}
            component={Categories}
            options={{ title: "Categorias", animation: "fade" }}
          />
          <Stack.Screen
            name={routes.cart}
            component={Cart}
            options={{ title: "Carrinho", animation: "fade" }}
          />
          <Stack.Screen name={routes.more} component={More} />
          <Stack.Screen name={routes.profile} component={Profile} />
        </Stack.Navigator>
        {/* <Navbar /> */}
      </NavigationContainer>
    </S.Container>
  );
}
