import styled from "styled-components/native";
// import { color } from '@styles/pallete';

export const container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const hello = styled.Text`
  font-size: 20px;
  color: black;
`;

export const btn = styled.TouchableOpacity`
  width: 100%;
  background-color: blue;
  align-items: center;
  padding: 10px;
`;
