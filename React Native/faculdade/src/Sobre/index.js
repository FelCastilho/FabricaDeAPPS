import React from "react";
import { SafeAreaView, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Sobre(){

    const navigation = useNavigation();

    return(
        <SafeAreaView>

            <Text>Area sobre</Text>

            <Button
            title="Voltar para Home"
            onPress={() => navigation.goBack()}
            />

        </SafeAreaView>
    )
}