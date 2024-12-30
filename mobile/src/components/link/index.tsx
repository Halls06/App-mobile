import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { s } from "./styles";
import { colors } from "@//styles/theme";

type Props = {
    name: string
    url: string
    onDetails: () => void
}

export function Link({name, url, onDetails}: Props){
    return (
        <View style={s.container}>
            <View style={s.details}>
                <Text style={s.name} numberOfLines={1}>
                    {name}
                </Text>
                <Text style={s.url} numberOfLines={1}>
                    {url}
                </Text>
            </View>
            <TouchableOpacity onPress={onDetails}>
                <MaterialIcons name="more-horiz" size={20} color={colors.gray[200]} />
            </TouchableOpacity>
        </View>
    )
}