import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from 'styled-components/native'
import {SvgXml} from 'react-native-svg'
import star from '../../../../assets/star'

const Address = styled(Text)`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
`

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${props => props.theme.fontSizes.body};
`

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
`

const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Some Restaurant",
        icon,
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;

    const raringArray = Array.from(new Array(Math.floor(rating)))

    return (
        <RestaurantCard elevation={5} >
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Rating>
                    {raringArray.map(() => (
                        <SvgXml xml={star} width={20} height={20} />
                    ))}
                </Rating>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};
