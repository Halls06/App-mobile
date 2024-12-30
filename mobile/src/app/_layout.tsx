import { Stack } from "expo-router";
import { colors } from "../styles/theme";

import { 
    useFonts,
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
    
} from "@expo-google-fonts/rubik"

import { Loading } from "../components/loading";
export default function Layout() {
    const [fontsLoded] = useFonts ({
      Rubik_600SemiBold,
      Rubik_400Regular,
      Rubik_500Medium,
      Rubik_700Bold,

    })


    if (!fontsLoded) {
        return <Loading />
    }

    return <Stack
     screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: colors.gray[950]}
    }}/>

}