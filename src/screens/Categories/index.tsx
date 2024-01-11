import React from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
  const navigate: any = useNavigation().navigate;
  console.log("to em categorias");
  return (
    <S.container>
      <S.hello>Categories</S.hello>
      <S.btn onPress={() => navigate("categories1")}>
        <S.hello>categorias 1</S.hello>
      </S.btn>
    </S.container>
  );
}
