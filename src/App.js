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
import {RestaurantsContextProvider} from "./services/restaurants/restaurants.context";
import {LocationContextProvider} from "./services/location/location.context";
import {Navigation} from "./infrastructure/navigation";
import {FavoritesContextProvider} from "./services/favorites/favourites.context";
import {AuthenticationContextProvider} from "./services/authentication/authentication.context";


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
                <AuthenticationContextProvider>
                    <FavoritesContextProvider>
                        <LocationContextProvider>
                            <RestaurantsContextProvider>
                                <Navigation/>
                            </RestaurantsContextProvider>
                        </LocationContextProvider>
                    </FavoritesContextProvider>
                </AuthenticationContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto"/>
        </>

    );
}

