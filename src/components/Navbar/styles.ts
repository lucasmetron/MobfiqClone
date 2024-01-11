import styled from "styled-components/native";
import { color } from "@styles/pallete";

export const container = styled.View`
  width: 100%;
  position: relative;
  bottom: 0;
  border-top: 2px solid ${color.interface.blue};
  background-color: ${color.interface.white};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 5;
  padding: 10px 10px 0 10px;
`;

export const option = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5px;
  gap: 2px;
  border-top: 2px solid ${color.interface.blue};
`;

export const titleOption = styled.Text`
  font-size: 10px;
  text-align: center;
  color: black;
`;
