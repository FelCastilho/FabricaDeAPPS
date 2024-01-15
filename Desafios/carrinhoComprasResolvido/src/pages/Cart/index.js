import { useContext } from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { CartContext } from '../../Contexts/CartContexts';
import CardItem from '../../components/CardItem';

export default function Cart(){

    const {cart, addItemCart, removeItemCart, total} = useContext(CartContext);

    return(
        <View style = {styles.container}>
            <FlatList
            data={cart}
            showsVerticalScrollIndicator = {false}
            keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={()=> <Text style={{textAlign: 'center'}}>Nenhum item no carrinho...</Text>}
            renderItem={ ({ item }) => (
                <CardItem 
                data ={item}
                addAmount = {() => addItemCart(item)}
                removeAmount = {() => removeItemCart(item)}
                />
            )}
            ListFooterComponent={() => <Text style={styles.total}>Total: {total}</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#cccc',
        paddingStart: 14,
        paddingTop: 14,
        paddingEnd: 14,
    },
    total:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 24,
    }
})