import React from "react";
import { Text, View } from "react-native";



import { s } from "./styles";

type Props = {
    title: string
    description: string 
}

export function Step({title, description,}: Props){
    return (
        <View style={s.container}>
            
            <View style={s.details}>
                <Text style={s.title}> {title} </Text>
                <Text style={s.subtitle}>{description}</Text>
            </View>
        </View>
    )
}