import React, {useState} from 'react';



import { 
  Container,
  Title,
  BoxTitle,
  Icon,

} from './styles';

import { useNavigation } from '@react-navigation/native';
import { FlatList, Text } from 'react-native';
import Itens from '../../Components/Itens';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {

  const navigator = useNavigation();
  const [preco, setPreco] = useState()
  const [products, setProducts] = useState([
    {
      id: '1',
      name: "Coca cola",
      price: 19.90
    },
    {
      id: '2',
      name: "Chocolate",
      price: 6.50
    },
    {
      id: '4',
      name: "Queijo 500g",
      price: 15
    },
    {
      id: '5',
      name: "Batata frita",
      price: 23.90
    },
    {
      id: '6',
      name: "Guarana lata",
      price: 6.00
    },
  ])
  return (
   
    <Container>

      <BoxTitle>
        
        <Title>Minhas compras</Title> 

        <Icon onPress={() => navigator.navigate('Carrinho')}>
         <Ionicons name="cart-outline" size={30} color="black" />
         <Text>0</Text>
        </Icon>
      
      </BoxTitle>

      <FlatList
        data = {products}
        renderItem={({item}) => <Itens data = {item} price = {item.price}/>}
      /> 

    </Container>


    );
}