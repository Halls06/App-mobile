import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@//styles/theme";

export const s = StyleSheet.create({
    logo: {
        width: 48,
        height: 48,
        margin: 20,
        marginTop: 62,
        marginBottom: 28,
    },
    title: {
        marginHorizontal: 20,
        fontSize: 24,
        fontFamily: fontFamily.bold,
        color: colors.gray[200],
    },
    subtitle: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: colors.gray[400],
        marginTop: 12,
    }
})