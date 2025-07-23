import MapView, {Callout, Marker} from 'react-native-maps'
import styled from "styled-components/native";
import {Search} from '../components/search.component'
import {useContext, useEffect, useState} from "react";
import {LocationContext} from "../../../services/location/location.context";
import {RestaurantsContext} from "../../../services/restaurants/restaurants.context";


const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`

export const MapScreen = ({navigation}) => {
    const {location} = useContext(LocationContext)
    const {restaurants=[]} = useContext(RestaurantsContext)
    const [latDelta, setLatDelta] = useState(0)
    const {lat, lng, viewport} = location
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    const handleMarkerPress = (restaurant) => {
        if (selectedRestaurant?.placeId === restaurant.placeId) {
            navigation.navigate("Restaurants", {
                screen: "RestaurantDetail",
                params: { restaurant }
            });
        } else {
            setSelectedRestaurant(restaurant)
        }

    }

    useEffect(() => {
        const northeastLat = viewport.northeast.lat
        const southwestLat = viewport.southwest.lat

        setLatDelta(northeastLat - southwestLat)
    }, [location, viewport])

    return(
    <>
        <Search/>
        <Map
            region={{
                latitude: lat,
                longitude: lng,
                latitudeDelta: latDelta,
                longitudeDelta: 0.02
            }}
        >
            {restaurants.map((restaurant) => {
                return (
                    <Marker
                        key={restaurant.name}
                        title={restaurant.name}
                        coordinate={{
                            latitude: restaurant.geometry.location.lat,
                            longitude: restaurant.geometry.location.lng,
                        }}
                        onPress={() => handleMarkerPress(restaurant)}
                    >
                    </Marker>
                )
            })}
        </Map>
    </>
)
}