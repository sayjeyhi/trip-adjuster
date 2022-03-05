import {
    ApolloClient,
    InMemoryCache,
    gql
  } from "@apollo/client";

  import {offsetLimitPagination} from '@apollo/client/utilities';  

export const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql/',
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            discounts: offsetLimitPagination()
          }
        }
      }
    })
  });

  export const getDiscountsQuery = gql`
  query Discounts($offset: Int!, $limit: Int!) {
    discounts(
      offset: $offset
      limit: $limit
      sort: "launch_date_utc"
      order: "desc"
    ) {
        id
        code
        active
        discount
        validUntil
        locationTitle
    }
  }
`;


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