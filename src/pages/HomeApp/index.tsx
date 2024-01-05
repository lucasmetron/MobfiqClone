import { StatusBar } from "expo-status-bar";

import styled from "styled-components/native";
import * as S from "./styles";

export default function Home() {
  return (
    <S.Container>
      <StatusBar style="auto" />
      <S.Title>Lais</S.Title>
    </S.Container>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
