import gql from 'graphql-tag';

export const QUERY_COUNTRY_PROFILE = gql`
  query byName($name: String!) {
    byName(name: $name) {
      name
      capital
      cioc
      population
      flag
      timezones
    }
  }
`;
