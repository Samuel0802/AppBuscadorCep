import styled from 'styled-components/native';
//Container: Formato de uma tag no App.js

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #121212;

`;

export const ContainerView = styled.View`
align-items: center;

`;

export const Titulo = styled.Text`
font-size: ${props => props.tamanho}px;
color: ${props => props.cor};
margin: 25px;
font-weight: bold;
`;


export const  InputCep = styled.TextInput`
 background-color: #fff;
 border-width: 1;
 border-color: #dddd;
 border-radius: 10;
 width: 90%;
 padding: 10px;
 font-size: 18px;
`;

export const ContainerBtn = styled.View`
align-items: center;
flex-direction: row;
justify-content: space-around;
margin-top: 15px;
`;

export const Botao = styled.TouchableOpacity`
 height: 50px;
 justify-content: center;
 align-items: center;
 padding: 10px;
 border-radius: 10px;
background-color: yellow;
`;

export const TextBotao = styled.Text`
color: black;
font-size: 20px;
font-weight: bold;
`;

export const ContainerCep = styled.View`

flex: 1;
justify-content: center;
align-items: center;

`;

export const ItemCep = styled.Text`
 color: white;
 font-size: 22px;
`;

