
import { gql } from "@apollo/client";

export const getDestinationsQuery = gql`
{
    destinations{
        id
        name
        description
        star
        price
        destination
        city
        country
    }
}
`