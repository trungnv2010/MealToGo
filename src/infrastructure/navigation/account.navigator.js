import {createStackNavigator} from "@react-navigation/stack";
import {Text, View} from 'react-native'

const Stack = createStackNavigator()

export const AccountNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={"Main"}
                component={() => (
                    <View>
                        <Text>Account Screen</Text>
                    </View>
                )}
            />
            <Stack.Screen
                name={'Login'}
                component={() => (
                    <View>
                        <Text>Login Screen</Text>
                    </View>
                )}
            />
        </Stack.Navigator>
    )
}