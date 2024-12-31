import { useState, useEffect } from "react";

import { Image, TouchableOpacity, View, FlatList, Modal, Text, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";


import { categories } from "../../utils/categories";
import { Categories } from "../components/categories";
import { Link } from "../components/link";
import { linkStorage, LinkStorage } from "../storage/link-storage";


import { Option } from "../components/option";
import {colors} from "@//styles/theme"
import { s } from "./styles";




export default function Home(){
    const [links, setLinks] = useState<LinkStorage[]>([])
    const [category, setCategory] = useState(categories[0].name)

    async function getLinks() {

        try {
            const response = await linkStorage.get()
            setLinks(response)

        } catch (error) {
            Alert.alert("Erro", "Não foi possivel listar os links")
        }
        
    }

    useEffect(() => {
        getLinks()
    }, [])

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
                onDetails={() => console.log("Clicou!")} />
             )}
             style={s.links}
             contentContainerStyle={s.linksContent}
             showsVerticalScrollIndicator={false}
            />


            <Modal transparent visible={false}>
             <View style={s.Modal}>
                <View style={s.modalContent}>
                    <View style={s.modalHeader}>
                            <Text style={s.modalCategory}>Curso</Text>
                        <TouchableOpacity>
                            <MaterialIcons name="close" color={colors.gray[400]} size={20} />
                        </TouchableOpacity>
                     </View>

                    <Text style={s.modalLinkName}> RocketSeat</Text>

                    <Text style={s.modalUrl}>https://www.facebook.com/tonybrabo013</Text>

                    <View style={s.modalFooter}>
                        <Option name="Excluir" icon="delete" variant="secondary" />
                        <Option name="Abrir" icon="language" />
                        
                    </View>

                </View>
             </View>
            
            </Modal>
        </View>
    )
}