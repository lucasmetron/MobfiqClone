import { useSelector } from "react-redux";

import { StatusBar, Platform, ScrollView, Text } from "react-native";
import * as S from "./styles";

export default function HomeApp() {
  console.log("to na home");
  const valueRedux = useSelector((state: any) => state.isLogged);
  console.log("valueRedux: ", valueRedux);
  const statusBarHeight =
    StatusBar.currentHeight || (Platform.OS === "ios" ? 20 : 0);
  console.log(`Altura da barra de status em ${Platform.OS}`, statusBarHeight);

  function teste() {
    let teste: any = "";
    for (var i = 0; i < 20; i++) {
      teste = [...teste, <S.title key={i}>Home {i}</S.title>];
    }
    return teste;
  }

  return (
    <S.container>
      <ScrollView
        contentContainerStyle={{
          minWidth: "100%",
          display: "flex",
          gap: 15,
          backgroundColor: "red",
        }}
      >
        {teste()}
        <Text> {valueRedux.message}</Text>
      </ScrollView>
    </S.container>
  );
}
