import React, {useContext, useState} from "react";
import {ActivityIndicator, Searchbar, MD3Colors} from "react-native-paper";
import {FlatList, View, TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import {RestaurantInfoCard} from "../components/restaurant-info.component";
import {Spacer} from "../../../components/spacer/spacer.component";
import {SafeArea} from "../../../components/utility/safe-area.component";
import {RestaurantsContext} from "../../../services/restaurants/restaurants.context";
import {Search} from "../components/search.component";
import {FavouritesContext} from "../../../services/favorites/favourites.context";
import {FavouritesBar} from "../../../components/favourites/favourites-bar.component";


const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16
    }
})``

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`

export const RestaurantsScreen = ({navigation}) => {
    const {isLoading, restaurants} = useContext(RestaurantsContext)
    const [isToggled, setIdToggled] = useState(false)
    const {favourites} = useContext(FavouritesContext)

    return (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading size={50} animating={true} color={MD3Colors.blue300}/>
                </LoadingContainer>
            )}
            <Search
                isFavouritesToggle={isToggled}
                onFavoritesToggle={() => setIdToggled(!isToggled)}
            />
            {isToggled && (
                <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />
            )}
            <RestaurantList
                data={restaurants}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {
                            restaurant: item
                        })}>
                            <Spacer position="bottom" size="large">
                                <RestaurantInfoCard restaurant={item}/>
                            </Spacer>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    );
}