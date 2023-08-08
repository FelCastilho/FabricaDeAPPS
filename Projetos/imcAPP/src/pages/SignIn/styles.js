import styled from "styled-components/native";

export const Background = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #3C533C;

`;

export const Input = styled.TextInput`
    background-color: #C6D0D6;
    margin-top: 20px;
    width: 80%;
    padding: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 70%;
    align-items: center;
    justify-content: center;
    background-color: #7db9a9;
    margin-top: 20px;
    padding: 10px;
    border-radius: 4px;
`;

export const SubmitText = styled.Text`
    color: #fff;
`;