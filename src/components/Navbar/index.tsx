import { Dimensions, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather, FontAwesome5, AntDesign } from "@expo/vector-icons";

import * as S from "./styles";
import { color } from "@styles/pallete";
import { routes } from "@routes/routes";

export default function Navbar() {
  const { height } = Dimensions.get("window");
  const navigation: any = useNavigation();

  const calc = Platform.OS === "ios" ? 0.95 * height : 0.97 * height;

  return (
    <S.container
      style={{
        paddingBottom: height - calc,
        elevation: 9,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      }}
    >
      <S.option onPress={() => navigation.navigate(routes.homeApp)}>
        <Ionicons
          name="home-outline"
          size={26}
          color={color.interface.darkgray}
        />
      </S.option>

      <S.option onPress={() => navigation.navigate(routes.categories)}>
        <Feather name="list" size={26} color={color.interface.darkgray} />
      </S.option>

      <S.option onPress={() => navigation.navigate(routes.profile)}>
        <FontAwesome5
          name="user-circle"
          size={26}
          color={color.interface.darkgray}
        />
      </S.option>

      <S.option onPress={() => navigation.navigate(routes.cart)}>
        <AntDesign
          name="shoppingcart"
          size={26}
          color={color.interface.darkgray}
        />
      </S.option>

      <S.option onPress={() => navigation.navigate(routes.more)}>
        <Feather
          name="more-horizontal"
          size={26}
          color={color.interface.darkgray}
        />
      </S.option>
    </S.container>
  );
}
