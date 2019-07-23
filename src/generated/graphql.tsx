import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
import * as ReactApolloHooks from "react-apollo-hooks";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Bloc type */
export type Bloc = {
  __typename?: "Bloc";
  acronym?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  otherAcronyms?: Maybe<Array<Maybe<Scalars["String"]>>>;
  otherNames?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** This "Country" type can be used in other type declarations. */
export type Country = {
  __typename?: "Country";
  name?: Maybe<Scalars["String"]>;
  topLevelDomain?: Maybe<Array<Maybe<Scalars["String"]>>>;
  alpha2Code?: Maybe<Scalars["String"]>;
  alpha3Code?: Maybe<Scalars["String"]>;
  callingCodes?: Maybe<Array<Maybe<Scalars["String"]>>>;
  capital?: Maybe<Scalars["String"]>;
  altSpellings?: Maybe<Array<Maybe<Scalars["String"]>>>;
  region?: Maybe<Scalars["String"]>;
  subregion?: Maybe<Scalars["String"]>;
  population?: Maybe<Scalars["Int"]>;
  latlng?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  demonym?: Maybe<Scalars["String"]>;
  area?: Maybe<Scalars["Float"]>;
  gini?: Maybe<Scalars["Float"]>;
  timezones?: Maybe<Array<Maybe<Scalars["String"]>>>;
  borders?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nativeName?: Maybe<Scalars["String"]>;
  numericCode?: Maybe<Scalars["String"]>;
  currencies?: Maybe<Array<Maybe<Currency>>>;
  languages?: Maybe<Array<Maybe<Language>>>;
  translations?: Maybe<Translation>;
  reginalBlocs?: Maybe<Array<Maybe<Bloc>>>;
  flag?: Maybe<Scalars["String"]>;
  cioc?: Maybe<Scalars["String"]>;
};

/** Currency type */
export type Currency = {
  __typename?: "Currency";
  code?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  symbol?: Maybe<Scalars["String"]>;
};

/** ExchangeRate type */
export type ExchangeRate = {
  __typename?: "ExchangeRate";
  date?: Maybe<Scalars["String"]>;
  /** rates: badly designed type from the service  */
  base: Scalars["String"];
};

/** Language type */
export type Language = {
  __typename?: "Language";
  iso639_1?: Maybe<Scalars["String"]>;
  iso639_2?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  nativeName?: Maybe<Scalars["String"]>;
};

/** The "Query" type is the root of all GraphQL queries.
 * (A "Mutation" type will be covered later on.)
 */
export type Query = {
  __typename?: "Query";
  byName?: Maybe<Array<Maybe<Country>>>;
  countries: Array<Country>;
  exchangeRate?: Maybe<ExchangeRate>;
};

/** The "Query" type is the root of all GraphQL queries.
 * (A "Mutation" type will be covered later on.)
 */
export type QueryByNameArgs = {
  name: Scalars["String"];
};

/** The "Query" type is the root of all GraphQL queries.
 * (A "Mutation" type will be covered later on.)
 */
export type QueryExchangeRateArgs = {
  base: Scalars["String"];
};

/** Translation type */
export type Translation = {
  __typename?: "Translation";
  de?: Maybe<Scalars["String"]>;
  es?: Maybe<Scalars["String"]>;
  fr?: Maybe<Scalars["String"]>;
  ja?: Maybe<Scalars["String"]>;
  it?: Maybe<Scalars["String"]>;
  br?: Maybe<Scalars["String"]>;
  pt?: Maybe<Scalars["String"]>;
  nl?: Maybe<Scalars["String"]>;
  hr?: Maybe<Scalars["String"]>;
  fa?: Maybe<Scalars["String"]>;
};
export type CountryListQueryVariables = {};

export type CountryListQuery = { __typename?: "Query" } & {
  countries: Array<
    { __typename?: "Country" } & Pick<Country, "name" | "capital">
  >;
};

export type ByNameQueryVariables = {
  name: Scalars["String"];
};

export type ByNameQuery = { __typename?: "Query" } & {
  byName: Maybe<
    Array<
      Maybe<
        { __typename?: "Country" } & Pick<
          Country,
          | "name"
          | "capital"
          | "cioc"
          | "flag"
          | "population"
          | "subregion"
          | "timezones"
        >
      >
    >
  >;
};

export const CountryListDocument = gql`
  query CountryList {
    countries {
      name
      capital
    }
  }
`;
export type CountryListComponentProps = Omit<
  ReactApollo.QueryProps<CountryListQuery, CountryListQueryVariables>,
  "query"
>;

export const CountryListComponent = (props: CountryListComponentProps) => (
  <ReactApollo.Query<CountryListQuery, CountryListQueryVariables>
    query={CountryListDocument}
    {...props}
  />
);

export type CountryListProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<CountryListQuery, CountryListQueryVariables>
> &
  TChildProps;
export function withCountryList<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    CountryListQuery,
    CountryListQueryVariables,
    CountryListProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    CountryListQuery,
    CountryListQueryVariables,
    CountryListProps<TChildProps>
  >(CountryListDocument, {
    alias: "withCountryList",
    ...operationOptions
  });
}

export function useCountryListQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<CountryListQueryVariables>
) {
  return ReactApolloHooks.useQuery<CountryListQuery, CountryListQueryVariables>(
    CountryListDocument,
    baseOptions
  );
}
export type CountryListQueryHookResult = ReturnType<typeof useCountryListQuery>;
export const ByNameDocument = gql`
  query byName($name: String!) {
    byName(name: $name) {
      name
      capital
      cioc
      flag
      population
      subregion
      timezones
    }
  }
`;
export type ByNameComponentProps = Omit<
  ReactApollo.QueryProps<ByNameQuery, ByNameQueryVariables>,
  "query"
> &
  ({ variables: ByNameQueryVariables; skip?: false } | { skip: true });

export const ByNameComponent = (props: ByNameComponentProps) => (
  <ReactApollo.Query<ByNameQuery, ByNameQueryVariables>
    query={ByNameDocument}
    {...props}
  />
);

export type ByNameProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<ByNameQuery, ByNameQueryVariables>
> &
  TChildProps;
export function withByName<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    ByNameQuery,
    ByNameQueryVariables,
    ByNameProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    ByNameQuery,
    ByNameQueryVariables,
    ByNameProps<TChildProps>
  >(ByNameDocument, {
    alias: "withByName",
    ...operationOptions
  });
}

export function useByNameQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<ByNameQueryVariables>
) {
  return ReactApolloHooks.useQuery<ByNameQuery, ByNameQueryVariables>(
    ByNameDocument,
    baseOptions
  );
}
export type ByNameQueryHookResult = ReturnType<typeof useByNameQuery>;
