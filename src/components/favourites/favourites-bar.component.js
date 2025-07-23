import styled from "styled-components/native";
import {Spacer} from '../spacer/spacer.component'
import {Text} from "../typography/text.component";
import {ScrollView, TouchableOpacity} from 'react-native'
import {CompactRestaurantInfo} from "../restaurants/compact-restaurant-info.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`

export const FavouritesBar = ({favourites, onNavigate}) => {
    if (!favourites.length) {
        return null
    }

    return (
        <FavouritesWrapper>
            <Spacer variant={'left.large'}>
                <Text variant={'caption'}>Favorites</Text>
            </Spacer>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favourites.map((restaurant) => {
                    const key = restaurant.name
                    return (
                        <Spacer key={key} position={'left'} size={'medium'}>
                            <TouchableOpacity
                                onPress={() => {
                                    onNavigate('RestaurantDetail', {
                                        restaurant
                                    })
                                }}>
                                <CompactRestaurantInfo restaurant={restaurant} />
                            </TouchableOpacity>
                        </Spacer>
                    )
                })}
            </ScrollView>
        </FavouritesWrapper>
    )
}