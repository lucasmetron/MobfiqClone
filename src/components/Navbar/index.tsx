import * as S from "./styles";
import { Ionicons, Feather, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { color } from "@styles/pallete";

export default function Navbar() {
  return (
    <S.container>
      <S.option>
        <Ionicons
          name="home-outline"
          size={26}
          color={color.interface.darkgray}
        />
      </S.option>

      <S.option>
        <Feather name="list" size={26} color={color.interface.darkgray} />
      </S.option>

      <S.option>
        <FontAwesome5
          name="user-circle"
          size={26}
          color={color.interface.darkgray}
        />
      </S.option>

      <S.option>
        <AntDesign
          name="shoppingcart"
          size={26}
          color={color.interface.darkgray}
        />
      </S.option>

      <S.option>
        <Feather
          name="more-horizontal"
          size={26}
          color={color.interface.darkgray}
        />
      </S.option>
    </S.container>
  );
}
