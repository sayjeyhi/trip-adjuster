
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
`;

export const getDestinationQuery = gql`

    query Destination($id: ID!) {
        destination(id: $id){
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

`;

export const getNotificationsQuery = gql`
{
    notifications{
        id
        title
        time
        userId
    }
}
`;

export const getLoginMutation = gql`
    mutation Login($username: String!, $password: String! ) {
        login(username: $username, password: $password) {
            name
            token
            id
            loggedIn
        }
    }
`;