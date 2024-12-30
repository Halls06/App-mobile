import { StyleSheet } from "react-native";
import { colors } from "@//styles/colors";
import { fontFamily } from "@//styles/font-family";

export const s = StyleSheet.create({
    container: {
        gap: 22,
        flex: 1,
    },
    title: {
        marginHorizontal: 20,
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: colors.gray[200],
    },
})