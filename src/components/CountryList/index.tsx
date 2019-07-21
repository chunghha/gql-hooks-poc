import * as React from 'react';
import { useCountryListQuery } from '../../generated/graphql';
import CountryList, { OwnProps } from './CountryList';

const CountryListContainer = (props: OwnProps) => {
  const { data, error, loading } = useCountryListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <CountryList data={data} {...props} />;
};

export default CountryListContainer;
