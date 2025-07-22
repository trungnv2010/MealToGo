import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import {RestaurantsScreen} from "../../features/restaurants/screens/restaurants.screen";
import {Text} from "react-native";
import {RestaurantDetailScreen} from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantsStack = createStackNavigator()

export const RestaurantsNavigator = () => {
    return (
        <RestaurantsStack.Navigator
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.ModalPresentationIOS
            }}
        >
            <RestaurantsStack.Screen
                name={'RestaurantsList'}
                component={RestaurantsScreen}
            />
            <RestaurantsStack.Screen
                name={'RestaurantDetail'}
                component={RestaurantDetailScreen}
            />
        </RestaurantsStack.Navigator>
    )
}