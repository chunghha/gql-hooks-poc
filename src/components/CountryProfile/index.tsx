import * as React from 'react';
import { useByNameQuery } from '../../generated/graphql';
import CountryProfile from './CountryProfile';

interface OwnProps {
  name: string;
}

const CountryProfileContainer = ({ name }: OwnProps) => {
  const { data, error, loading, refetch } = useByNameQuery({
    variables: { name: name },
  });
  React.useEffect(() => {
    refetch();
  }, [name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return <CountryProfile data={data} />;
};

export default CountryProfileContainer;
