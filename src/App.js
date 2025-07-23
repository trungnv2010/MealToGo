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
import {initializeApp} from 'firebase/app';
import {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MESUREMENT_ID
} from '@env'

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MESUREMENT_ID,
};

initializeApp(firebaseConfig);

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
                <FavoritesContextProvider>
                    <LocationContextProvider>
                        <RestaurantsContextProvider>
                            <Navigation/>
                        </RestaurantsContextProvider>
                    </LocationContextProvider>
                </FavoritesContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto"/>
        </>

    );
}

