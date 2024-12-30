import { Text, View } from "react-native";


import { s } from "./styles";
import { Step } from "../step";;


export function Steps(){
    return (
        <View style={s.container}>
            <Text style={s.title}>Veja Como Funciona</Text>

        
            <Step 
            
            title="Salve varios links"
            description="Aqui você salvas o seus links favoritos e acesse sempre que  quiser"/> 
        </View>
    )
}