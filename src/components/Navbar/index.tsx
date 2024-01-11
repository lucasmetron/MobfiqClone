import { Dimensions, Platform, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather, FontAwesome5, AntDesign } from "@expo/vector-icons";

import * as S from "./styles";
import { color } from "@styles/pallete";
import { routes } from "@routes/routes";

export default function Navbar() {
  const { height } = Dimensions.get("window");
  console.log(`${Platform.OS} HEIGHT`, height);
  const navigation: any = useNavigation();

  const calc = Platform.OS === "ios" ? 1 * height : 0.99 * height;

  return (
    <S.container
      style={{
        paddingBottom: height - calc,
      }}
    >
      <S.option onPress={() => navigation.navigate(routes.homeApp)}>
        <Ionicons
          name="home-outline"
          size={27}
          color={color.interface.darkgray}
        />
        <S.titleOption>Home</S.titleOption>
      </S.option>

      <S.option onPress={() => navigation.navigate(routes.categories)}>
        <Feather name="list" size={27} color={color.interface.darkgray} />
        <S.titleOption>Categorias</S.titleOption>
      </S.option>

      <S.option onPress={() => navigation.navigate(routes.profile)}>
        <FontAwesome5
          name="user-circle"
          size={27}
          color={color.interface.darkgray}
        />
        <S.titleOption>Perfil</S.titleOption>
      </S.option>

      <S.option onPress={() => navigation.navigate(routes.cart)}>
        <AntDesign
          name="shoppingcart"
          size={27}
          color={color.interface.darkgray}
        />
        <S.titleOption>Carrinho</S.titleOption>
      </S.option>

      <S.option onPress={() => navigation.navigate(routes.more)}>
        <Feather
          name="more-horizontal"
          size={27}
          color={color.interface.darkgray}
        />
        <S.titleOption>Mais</S.titleOption>
      </S.option>
    </S.container>
  );
}
