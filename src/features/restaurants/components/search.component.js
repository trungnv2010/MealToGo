import styled from "styled-components/native";
import {useContext, useEffect, useState} from "react";
import {LocationContext} from "../../../services/location/location.context";
import {Searchbar} from "react-native-paper";

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]}
`

export const Search = () => {
    const {keyword, search} = useContext(LocationContext)
    const [searchKeyword, setSearchKeyword] = useState(keyword)

    return (
        <SearchContainer>
            <Searchbar
                placeholder={'Search for a location'}
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword)
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text)
                }}
            />
        </SearchContainer>
    )
}
