import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #7db9a9;
`;

export const Title = styled.Text`
    font-size: 25px;
`;

export const Input = styled.TextInput`
    background-color: #C6D0D6;
    margin-top: 20px;
    width: 80%;
    padding: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 80%;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #3c533c;
    margin-top: 20px;
    padding: 10px;
    border-radius: 4px;
`;

export const SubmitText = styled.Text`
    color: #fff;
    font-size: 17px;
`;

export const Result = styled.Text`
    color: #fff;
    font-size: 25px;
    margin-top: 30px;
`;
