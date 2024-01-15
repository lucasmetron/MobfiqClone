import styled from "styled-components/native";
import { color } from "@styles/pallete";

export const container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
`;

export const btnEnterAcessCode = styled.TouchableOpacity`
  width: 90%;
  position: relative;
  margin-top: 50px;
  border-radius: 20px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${color.interface.darkgray3};
`;

export const textBtnEnterAcessCode = styled.Text`
  color: ${color.interface.white};
  font-size: 15px;
`;

export const dataInput = styled.TextInput`
  width: 90%;
  background-color: ${color.interface.lightGray5};
  padding: 5px;
  opacity: 0.5;
`;

export const btnconfirmAccess = styled.TouchableOpacity`
  width: 90%;
  position: relative;
  border-radius: 20px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${color.interface.darkgray3};
`;

export const forgotPassword = styled.View`
  width: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const textForgotPassword = styled.Text`
  font-size: 15px;
  color: ${color.interface.black};
`;

export const notRegister = styled.View`
  width: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const textNotRegister = styled.Text`
  font-size: 13px;
  opacity: 0.5;
`;

export const btnNotRegister = styled.TouchableOpacity`
  width: 90%;
  border-radius: 20px;
  border: 2px solid ${color.interface.darkgray3};
  padding: 10px;
  align-items: center;
  justify-content: ce;
`;

export const btnNotRegisterText = styled.Text`
  color: ${color.interface.darkgray3};
  font-size: 15px;
`;
