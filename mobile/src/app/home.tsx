import { useState, useCallback } from "react";

import { Image, TouchableOpacity, View, FlatList, Modal, Text, Alert, Linking } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";


import { categories } from "../../utils/categories";
import { Categories } from "../components/categories";
import { Link } from "../components/link";
import { linkStorage, LinkStorage } from "../storage/link-storage";


import { Option } from "../components/option";
import {colors} from "@//styles/theme"
import { s } from "./styles";




export default function Home(){
    const [showModal, setModal] = useState(false)
    const [link, setLink] = useState<LinkStorage>({} as LinkStorage)
    const [links, setLinks] = useState<LinkStorage[]>([])
    const [category, setCategory] = useState(categories[0].name)

    async function getLinks() {

        try {
            const response = await linkStorage.get()
            
            const filtered = response.filter((link) => link.category === category)

            setLinks(filtered)

        } catch (error) {
            Alert.alert("Erro", "Não foi possivel listar os links")
        }
        
    }


    function handleDatails(selected: LinkStorage){
        setModal(true)
        setLink(selected)
    }

    async function linkRemove(){
        try {
            await linkStorage.remove(link.id)
            getLinks()
            setModal(false)
        } catch (error) {
            Alert.alert("Erro", "Não foi possivel excluir")
        }
    }


 function handleRemove(){
        
            Alert.alert("Excluir", "Deseja realmente excluir"), [
                { style: "cancel", text: "Não" },
                { text: "Sim", onPress: linkRemove}
            ]}


 async function handleOpen(){
    try {
        await Linking.openURL(link.url)
    } catch (error) {
        Alert.alert("Link", "Não foi possivel abrir o link")
    }
 }           
    useFocusEffect(useCallback(() => {
        getLinks()
    },[category]))

    return (
        <View style={s.container}>
            <View style={s.header}>

                <Image source={require("@//assets/logo.png")} style={s.logo} />

                <TouchableOpacity activeOpacity={.8} onPress={() => router.navigate("/add")}>
                    <MaterialIcons name="add" size={32} color={colors.green[300]}></MaterialIcons>
                </TouchableOpacity>
                
            </View>
            < Categories onChange={setCategory} selected={category} />
            
            <FlatList
             data={links}
             keyExtractor={item => item.id}
             renderItem={({item}) => (
                <Link name={item.name}
                url={item.url} 
                onDetails={() => handleDatails(item)} />
             )}
             style={s.links}
             contentContainerStyle={s.linksContent}
             showsVerticalScrollIndicator={false}
            />


            <Modal transparent visible={showModal} animationType="slide">
             <View style={s.Modal}>
                <View style={s.modalContent}>
                    <View style={s.modalHeader}>
                            <Text style={s.modalCategory}> {link.category} </Text>
                        <TouchableOpacity onPress={() => setModal(false)}>
                            <MaterialIcons name="close" color={colors.gray[400]} size={20} />
                        </TouchableOpacity>
                     </View>

                    <Text style={s.modalLinkName}> {link.name} </Text>

                    <Text style={s.modalUrl}> {link.url} </Text>

                    <View style={s.modalFooter}>
                        <Option name="Excluir" icon="delete" variant="secondary" onPress={handleRemove}/>
                        <Option name="Abrir" icon="language" onPress={handleOpen}/>
                        
                    </View>

                </View>
             </View>
            
            </Modal>
        </View>
    )
}