import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Title = styled.Text`
    font-size: 25px;
    font-weight: bold;
`;

export const BoxTitle = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
    margin-left: 25px;
`;

export const Icon = styled.TouchableOpacity`
    margin-right: 30px;
`;

export const ContainerItens = styled.View`
    margin-top: 40px; 
    background-color: red;
`;

export const Item = styled.View`
    margin-left: 25px;

`;

export const Texto = styled.Text`
    font-size: 20px;
`;

export const Price = styled.Text`
    font-size: 15px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #141414;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: white;
`;



