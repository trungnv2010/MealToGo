import {createContext, useEffect, useState} from "react";
import {locationRequest, locationTransform} from "./location.service";

export const LocationContext = createContext()

export const LocationContextProvider = ({children}) => {
    const [keyword, setKeyword] = useState('San Francisco')
    const [location, setLocation] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const onSearch = (searchKeyword) => {
        setIsLoading(true)
        setKeyword(searchKeyword)
    }
        useEffect(() => {
            if (!keyword.length) {
                return;
            }
            locationRequest(keyword.toLowerCase().trim())
                .then(locationTransform)
                .then((result) => {
                    setIsLoading(false)
                    setLocation(result)
                })
                .catch((error) => {
                    setIsLoading(false)
                    setError(error)
                })
        }, [keyword])

    return (
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                location,
                search: onSearch,
                keyword
            }}
        >
            {children}
        </LocationContext.Provider>
    )
}
