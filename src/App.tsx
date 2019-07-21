import React from 'react';
import CountryList from './components/CountryList';
import CountryProfile from './components/CountryProfile';

import './App.css';

const App = () => {
  const [name, setName] = React.useState('Afghanistan');
  const handleNameChange = React.useCallback(newName => {
    setName(newName);
  }, []);

  return (
    <div className="App">
      <CountryList handleNameChange={handleNameChange} />
      <CountryProfile name={name} />
    </div>
  );
};

export default App;