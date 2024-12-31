import { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { linkStorage } from "@//storage/link-storage";
import { Button } from "@//components/button";
import { Categories } from "@//components/categories";
import { Input } from "@//components/input";

import { s } from "./styles"
import { colors } from "@//styles/colors";







export default function Add(){

    const [category, setCategory] = useState("")
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")

    async function handleAdd(){
        try {
            
        if (!category) {
            return Alert.alert("Categoria", "Selecione a categoria ")
        }

       if(!name.trim()){
        return Alert.alert("Nome", "Informe o nome")
       }

       if(!url.trim()){
        return Alert.alert("url", "Informe a url")
       }

       await linkStorage.save({
        id: new Date().getTime().toString(),
        name,
        url,
        category,
       })
    Alert.alert("Sucesso", "Novo link adicionado", [
        { text: "Ok", onPress: () => router.back()}
    ])
    } catch (error) {
        Alert.alert("Erro", "Não foi possivel salvar o link")
    }

    }

    return (
        <View style={s.container}>
            <View style={s.header}>
                <TouchableOpacity onPress={() => router.navigate("/home")}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                </TouchableOpacity>

            <Text style={s.title}>Novo</Text>
            </View>
            <Text style={s.label}>Selecione um Categoria</Text>

            <Categories onChange={setCategory} selected={category} />

            <View style={s.form}>
                <Input placeholder="Name" onChangeText={setName} autoCorrect={false} />
                <Input placeholder="URL" onChangeText={setUrl} autoCorrect={false}  autoCapitalize="none"/>
                <Button title="Adicionar" onPress={handleAdd}/>
            </View>


        </View>
    )
}