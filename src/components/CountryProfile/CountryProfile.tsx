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
          (country, i) => !!country && !!country.flag && (
            <div key={i}>
              <div className={`${className}__country`}>{country.name}</div>
              <div>{country.capital}</div>
              <div>{country.subregion}</div>
              <div>{country.cioc}</div>
              <div>{!!country.population ? country.population.toLocaleString(): ''}</div>
              <div>{!!country.timezones ? country.timezones.join(', ') : ''}</div>
              <div>{country.flag}</div>
              <div className={`${className}__flag`}>
                <img src={country.flag} width='600px' height='400px' />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CountryProfile;
