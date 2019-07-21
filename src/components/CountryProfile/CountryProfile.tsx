import * as React from 'react';
import { ByNameQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: ByNameQuery;
}

const className = 'CountryProfile';

const CountryProfile: React.FC<Props> = ({ data }) => {
  if (!data.byName || data.byName.length === 0) {
    return <div>No country available</div>;
  }

  return (
    <div className={className}>
      <div className={`${className}__status`}>
        {data.byName.map(
          (country) => !!country && (
            <div>
              <div>{country.name}</div>
              <div>{country.capital}</div>
              <div>{country.cioc}</div>
              <div>{country.flag}</div>
              <div>{country.population}</div>
              <div>{country.timezones}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CountryProfile;
