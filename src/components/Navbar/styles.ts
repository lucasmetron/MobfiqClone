import styled from "styled-components/native";
import { color } from "@styles/pallete";

export const container = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
  border-top: 2px solid ${color.interface.blue};
  background-color: ${color.interface.white};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  padding: 10px 10px 10% 10px;
`;

export const option = styled.TouchableOpacity`
  width: autor;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${color.interface.blue};
`;

export const teste = styled.Text`
  font-size: 30px;
  color: black;
`;
