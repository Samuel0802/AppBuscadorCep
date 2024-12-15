import React, { useState, useRef } from "react";
import { Container, Titulo, InputCep, ContainerView, ContainerBtn, Botao, TextBotao, ContainerCep, ItemCep } from "./src/styles";
import api from "./src/Services/api";
import { Alert , Keyboard} from "react-native";


export default function App() {
  const [cep, setCep] = useState('');
  const inputRef =  useRef(null);
  const [cepUser, setCepUser] = useState(null); //objeto de retorno



  async function buscar(){
    if(cep == ''){
      Alert.alert('Digite um CEP válido')
      setCep('');
      return;
    }

    try{//Vai tentar da certo

    const response = await api.get(`/${cep}/json/`);
      console.log(response.data) 
      Keyboard.dismiss(); //Garantir que o teclado sera fechado
      setCepUser(response.data); //quando faz requisição recupera o retorno

    }catch(error){ //senão da error
      console.log('Error:' + error);
    }


    
  }

  function limpar(){
     setCep('');
     inputRef.current.focus();
     setCepUser(null);// limpar as informação de retorno
  }


  return (
    <Container>
      <ContainerView>
        <Titulo cor="#FFFF" tamanho="20" >Digite o CEP: desejado!</Titulo>
 
  {/* input para digitar o cep */}
        <InputCep
          placeholder="Ex: 01001000"
          value={cep}// cep do meu useState
          onChangeText={(texto) => setCep(texto)} //setCep: Passa esse cep para mim
          keyboardType="numeric" //Deixar o teclado numerico
          ref={inputRef} //Deixar animação de focos como rferencia
        />

      </ContainerView>

     {/* View do 2 botão = Buscar e Limpar */}
      <ContainerBtn>
        <Botao onPress={ buscar }>
          <TextBotao>Buscar</TextBotao>
        </Botao>

        <Botao style={{ backgroundColor: 'red' }} onPress={ limpar } >
          <TextBotao >Limpar</TextBotao>
        </Botao>

      </ContainerBtn>

      {/* View dados ser carregado do CEP */}
       
       {cepUser &&  //Caso tiver algo no cepUser seja renderizado
       <ContainerCep>
      <ItemCep>CEP: {cepUser.cep}</ItemCep>
        <ItemCep>Logradouro: Rua {cepUser.logradouro}</ItemCep>
        <ItemCep>Bairro: {cepUser.bairro}</ItemCep>
        <ItemCep>Cidade: {cepUser.localidade}</ItemCep>
        <ItemCep>Estado: {cepUser.uf}</ItemCep>
        
      </ContainerCep>
}
     


    </Container>
  );
}


