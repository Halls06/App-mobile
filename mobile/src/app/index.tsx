import { Text, View } from "react-native";
import { router } from "expo-router";


import { Welcome } from "../components/welcome";
import { Steps } from "../components/steps";
import { Button } from "../components/button";

export default function Index(){
    return (
        <View>
            <Welcome />
            <Steps />
            
            <Button onPress={() => router.navigate("/home")} title="Começar"></Button>
        </View>
    )
}