import styled from "styled-components/native";

export const container = styled.SafeAreaView`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: blue;
`;

export const title = styled.Text`
  width: auto;
  font-size: 30px;
  text-align: center;
  color: black;
  background-color: yellow;
`;

export const ScroolTest = styled.ScrollView`
  width: 100%;
  display: flex;
  gap: 15px;
  background-color: "red";
`;
