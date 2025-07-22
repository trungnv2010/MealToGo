import {RestaurantsScreen} from "./features/restaurants/screens/restaurants.screen";
import {StatusBar as ExpoStatusBar} from "expo-status-bar";
import {ThemeProvider} from "styled-components";
import {theme} from "./infrastructure/theme";
import {
    useFonts as useOswald,
    Oswald_400Regular
} from '@expo-google-fonts/oswald'
import {
    useFonts as useLato,
    Lato_400Regular
} from '@expo-google-fonts/lato'
import {AppNavigator} from './infrastructure/navigation/app.navigator'
import {RestaurantsContextProvider} from "./services/restaurants/restaurants.context";
import {LocationContextProvider} from "./services/location/location.context";



export default function App() {
    const [oswaldLoaded] = useOswald({
        Oswald_400Regular
    })
    const [latoLoaded] = useLato({
        Lato_400Regular
    })

    if (!oswaldLoaded || !latoLoaded) {
        return null
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <LocationContextProvider>
                    <RestaurantsContextProvider>
                        <AppNavigator />
                    </RestaurantsContextProvider>
                </LocationContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto"/>
        </>

    );
}

