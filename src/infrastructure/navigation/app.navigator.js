import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SafeArea} from "../../components/utility/safe-area.component";
import {Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {RestaurantsScreen} from "../../features/restaurants/screens/restaurants.screen";
import {NavigationContainer} from "@react-navigation/native";
import {RestaurantsNavigator} from "./restaurants.navigator";
import {MapScreen} from "../../features/map/screens/map.screen";

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

export const AppNavigator = () => {
    return (
                <Tab.Navigator
            screenOptions={createScreenOptions}
        >
            <Tab.Screen name={'Restaurants'} component={RestaurantsNavigator}/>
            <Tab.Screen name={'Map'} component={MapScreen}/>
            <Tab.Screen name={'Settings'} component={Settings}/>
        </Tab.Navigator>
    )
}