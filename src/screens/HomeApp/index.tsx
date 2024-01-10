import * as S from "./styles";
import { StatusBar, Platform, ScrollView } from "react-native";

export default function HomeApp() {
  console.log("to na home");
  const statusBarHeight =
    StatusBar.currentHeight || (Platform.OS === "ios" ? 20 : 0);
  console.log(`Altura da barra de status em ${Platform.OS}`, statusBarHeight);

  function teste() {
    let teste: any = "";
    for (var i = 0; i < 20; i++) {
      teste = [...teste, <S.title>Home {i}</S.title>];
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
      </ScrollView>
    </S.container>
  );
}
