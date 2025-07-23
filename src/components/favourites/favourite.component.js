import styled from "styled-components/native";
import {TouchableOpacity} from "react-native";
import {useContext} from "react";
import {FavouritesContext} from "../../services/favorites/favourites.context";
import {AntDesign} from '@expo/vector-icons'

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`

export const Favourite = ({restaurant}) => {
    const {favourites, addToFavourites, removeFromFavourites} = useContext(FavouritesContext)
    const isFavorite = favourites.find((r) => r.placeId === restaurant.placeId)

    return (
        <FavouriteButton
            onPress={() => !isFavorite ? addToFavourites(restaurant) : removeFromFavourites(restaurant)}
        >
            <AntDesign
                name={isFavorite? 'heart' : 'hearto'}
                size={24}
                color={isFavorite ? 'red' : 'white'} />
        </FavouriteButton>
    )
}