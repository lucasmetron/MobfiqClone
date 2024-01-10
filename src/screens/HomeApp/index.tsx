import * as S from "./styles";
import { StatusBar, Platform, SafeAreaView } from "react-native";

export default function HomeApp() {
  console.log("to na home");
  const statusBarHeight =
    StatusBar.currentHeight || (Platform.OS === "ios" ? 20 : 0);
  console.log(`Altura da barra de status em ${Platform.OS}`, statusBarHeight);

  return (
    <S.Container>
      <S.Title>Home</S.Title>
    </S.Container>
  );
}
