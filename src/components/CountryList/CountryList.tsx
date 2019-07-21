import * as React from 'react';
import { CountryListQuery } from '../../generated/graphql';
import './styles.css';

export interface OwnProps {
  handleNameChange: (newCountry: string) => void;
}

interface Props extends OwnProps {
  data: CountryListQuery;
}

const className = 'CountryList';

const CountryList: React.FC<Props> = ({ data, handleNameChange }) => (
  <div className={className}>
    <h3>Countries</h3>
    <ol className={`${className}__list`}>
      {!!data.countries &&
        data.countries.map(
          (country, i) =>
            !!country && (
              <li
                key={i}
                className={`${className}__item`}
                onClick={() => handleNameChange(country.name!)}
              >
                {country.name} ({country.capital})
              </li>
            ),
        )}
    </ol>
  </div>
);

export default CountryList;
