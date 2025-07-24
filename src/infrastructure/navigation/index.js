import {AppNavigator} from "./app.navigator";
import {useContext} from "react";
import {AuthenticationContext} from "../../services/authentication/authentication.context"
import { NavigationContainer } from "@react-navigation/native";
import {AccountNavigator} from "./account.navigator";

export const Navigation = () => {
    const {isAuthenticated} = useContext(AuthenticationContext)
    return (
        <NavigationContainer>
            {isAuthenticated ? <AppNavigator /> : <AccountNavigator/>}
        </NavigationContainer>
    )
}