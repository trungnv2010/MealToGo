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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeArea} from "./components/utility/safe-area.component";
import {Text} from 'react-native'
import {NavigationContainer} from "@react-navigation/native";
import {Ionicons} from '@expo/vector-icons'
import {RestaurantsContextProvider} from "./services/restaurants/restaurants.context";
import {LocationContextProvider} from "./services/location/location.context";

const Tab = createBottomTabNavigator()

const TAB_ICON = {
    Restaurants: 'restaurant',
    Map: 'map',
    Settings: 'settings'
}

const Settings = () => (
    <SafeArea>
        <Text>Settings</Text>
    </SafeArea>
)

const Map = () => (
    <SafeArea>
        <Text>Map</Text>
    </SafeArea>
)

const createScreenOptions = ({route}) => {
    const iconName = TAB_ICON[route.name]
    return {
        tabBarIcon: ({size, color}) => (
            <Ionicons name={iconName} size={size} color={color}/>
        ),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
    }
}

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
                        <NavigationContainer>
                            <Tab.Navigator
                                screenOptions={createScreenOptions}
                            >
                                <Tab.Screen name={'Restaurants'} component={RestaurantsScreen}/>
                                <Tab.Screen name={'Map'} component={Map}/>
                                <Tab.Screen name={'Settings'} component={Settings}/>
                            </Tab.Navigator>
                        </NavigationContainer>
                    </RestaurantsContextProvider>
                </LocationContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto"/>
        </>

    );
}

