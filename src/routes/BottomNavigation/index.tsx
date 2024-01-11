import { Text } from "react-native";

import Categories from "@screens/Categories";
import HomeApp from "@screens/HomeApp";
import { routes } from "@routes/routes";
import Cart from "@screens/Cart";
import More from "@screens/More";
import Profile from "@screens/Profile";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Ionicons, Feather, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { color } from "@styles/pallete";

export default function BottomNavigation() {
  const Bottom = createBottomTabNavigator();
  return (
    <Bottom.Navigator initialRouteName={routes.homeApp}>
      <Bottom.Screen
        name={routes.homeApp}
        component={HomeApp}
        initialParams={{ appScreen: "home" }}
        options={
          {
            headerShown: false,
            tabBarIcon: (props) => (
              <Ionicons
                name="home-outline"
                size={26}
                color={
                  props.focused
                    ? color.interface.darkgray
                    : color.interface.darkgray2
                }
              />
            ),
            tabBarLabel: (props) => (
              <Text
                style={{
                  color: props.focused
                    ? color.interface.darkgray
                    : color.interface.darkgray2,
                }}
              >
                Home
              </Text>
            ),
          } as BottomTabNavigationOptions
        }
      />

      <Bottom.Screen
        name={routes.categories}
        component={Categories}
        options={
          {
            headerShown: false,
            tabBarIcon: (props) => (
              <Feather
                name="list"
                size={26}
                color={
                  props.focused
                    ? color.interface.darkgray
                    : color.interface.darkgray2
                }
              />
            ),

            tabBarLabel: (props) => (
              <Text
                style={{
                  color: props.focused
                    ? color.interface.darkgray
                    : color.interface.darkgray2,
                }}
              >
                Categorias
              </Text>
            ),
          } as BottomTabNavigationOptions
        }
      />

      <Bottom.Screen
        name={routes.profile}
        component={Profile}
        options={
          {
            headerShown: false,
            tabBarIcon: (props) => (
              <FontAwesome5
                name="user-circle"
                size={26}
                color={
                  props.focused
                    ? color.interface.darkgray
                    : color.interface.darkgray2
                }
              />
            ),

            tabBarLabel: (props) => (
              <Text
                style={{
                  color: props.focused
                    ? color.interface.darkgray
                    : color.interface.darkgray2,
                }}
              >
                Perfil
              </Text>
            ),
          } as BottomTabNavigationOptions
        }
      />

      <Bottom.Screen
        name={routes.cart}
        component={Cart}
        options={
          {
            headerShown: false,
            tabBarIcon: (props) => (
              <AntDesign
                name="shoppingcart"
                size={26}
                color={
                  props.focused
                    ? color.interface.darkgray
                    : color.interface.darkgray2
                }
              />
            ),

            tabBarLabel: (props) => (
              <Text
                style={{
                  color: props.focused
                    ? color.interface.darkgray
                    : color.interface.darkgray2,
                }}
              >
                Carrinho
              </Text>
            ),
          } as BottomTabNavigationOptions
        }
      />

      <Bottom.Screen
        name={routes.more}
        component={More}
        options={
          {
            headerShown: false,
            tabBarIcon: (props) => (
              <Feather
                name="more-horizontal"
                size={26}
                color={
                  props.focused
                    ? color.interface.darkgray
                    : color.interface.darkgray2
                }
              />
            ),

            tabBarLabel: (props) => (
              <Text
                style={{
                  color: props.focused
                    ? color.interface.darkgray
                    : color.interface.darkgray2,
                }}
              >
                Mais
              </Text>
            ),
          } as BottomTabNavigationOptions
        }
      />

      <Bottom.Screen
        name={"teste"}
        options={{
          headerShown: false,
          // tabBarStyle: { display: "none" }, //esconde a tabBottom
          tabBarItemStyle: { display: "none" }, //esconde o item na tabBottom, pra não aparecer como uma rota disponível
        }}
        children={() => <Text>teste</Text>}
      />
    </Bottom.Navigator>
  );
}
