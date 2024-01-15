import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as S from "./styles";
import { color } from "@styles/pallete";

export default function Profile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <S.container>
      <S.btnEnterAcessCode>
        <AntDesign
          name="unlock"
          size={24}
          style={{
            position: "absolute",
            left: 10,
            color: color.interface.white,
          }}
        />
        <S.textBtnEnterAcessCode>
          Entrar com código de acesso
        </S.textBtnEnterAcessCode>
      </S.btnEnterAcessCode>

      <S.dataInput
        placeholder="Email"
        value={email}
        onChangeText={(value) => setEmail(value)}
      ></S.dataInput>
      <S.dataInput
        placeholder="Senha"
        value={password}
        secureTextEntry
        onChangeText={(value) => setPassword(value)}
      ></S.dataInput>

      <S.btnconfirmAccess>
        <MaterialCommunityIcons
          name="email-open"
          size={24}
          color="black"
          style={{
            position: "absolute",
            left: 10,
            color: color.interface.white,
          }}
        />
        <S.textBtnEnterAcessCode>Entrar com e-mail</S.textBtnEnterAcessCode>
      </S.btnconfirmAccess>

      <S.forgotPassword>
        <S.textForgotPassword>Esqueceu a senha?</S.textForgotPassword>
        <S.textForgotPassword>Clique aqui</S.textForgotPassword>
      </S.forgotPassword>

      <S.notRegister>
        <S.textNotRegister>Ainda não é registrado?</S.textNotRegister>
      </S.notRegister>

      <S.btnNotRegister>
        <S.btnNotRegisterText>Criar nova conta</S.btnNotRegisterText>
      </S.btnNotRegister>
    </S.container>
  );
}
