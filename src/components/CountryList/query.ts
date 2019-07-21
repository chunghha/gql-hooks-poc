import gql from 'graphql-tag';

export const QUERY_COUNTRY_LIST = gql`
  query CountryList {
    countries {
      name
      capital
    }
  }
`;
