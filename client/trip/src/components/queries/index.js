import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    gql
  } from "@apollo/client";

  import { setContext } from '@apollo/client/link/context';

  import {offsetLimitPagination} from '@apollo/client/utilities';  

  const httpLink = createHttpLink({
    uri: 'http://localhost:4001/graphql',
  });  

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
      headers: {
        ...headers,
        authorization: token ? token : "",
      }
    }
  });

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
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