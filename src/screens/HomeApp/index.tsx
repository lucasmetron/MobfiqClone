import { useSelector } from "react-redux";

import { Text, TouchableOpacity } from "react-native";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function HomeApp() {
  const navigate: any = useNavigation().navigate;
  const valueRedux = useSelector((state: any) => state.isLogged);

  function teste() {
    let teste: any = "";
    for (var i = 0; i < 20; i++) {
      teste = [...teste, <S.title key={i}>Home {i}</S.title>];
    }
    return teste;
  }

  return (
    <S.container>
      <S.ScroolTest>
        {teste()}
        <Text> {valueRedux.message}</Text>

        <TouchableOpacity onPress={() => navigate("teste")}>
          <Text>tela teste</Text>
        </TouchableOpacity>
      </S.ScroolTest>
    </S.container>
  );
}
