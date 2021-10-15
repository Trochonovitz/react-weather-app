import React, { useState, useEffect } from 'react';
import { useCombobox } from 'downshift';
import { useWeather } from 'hooks/useWeather';
import WeatherCard from 'components/WeatherCard/WeatherCard';
import {
  Wrapper,
  Input,
  Button,
  SearchResults,
  SearchResultsItem,
  SearchWrapper,
} from './WeatherApp.styles';

const WeatherApp = () => {
  const cities1 = [
    'Paris',
    'Berlin',
    'Warsaw',
    'London',
    'Cracow',
    'Brasilia',
    'Lyon',
  ];
  const [cities, setCities] = useState(cities1);
  const [weather, setWeather] = useState({});
  const [searching, isSearching] = useState(false);

  const { fetchWeather } = useWeather();

  const handleSearchPermission = () => {
    isSearching(true);
    setTimeout(() => {
      isSearching(false);
    }, 100);
  };

  useEffect(() => {
    searching &&
      (async () => {
        const weather = await fetchWeather(cities);
        setWeather(weather);
      })();
  }, [cities, searching, fetchWeather]);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: cities,
    onInputValueChange: ({ inputValue }) => {
      setCities(
        cities1.filter((item) =>
          item.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      );
    },
  });

  return (
    <Wrapper>
      <SearchWrapper {...getComboboxProps()}>
        <Input {...getInputProps()} placeholder="Search for a city" />
        <SearchResults
          isVisible={isOpen && cities.length > 0}
          {...getMenuProps()}
          aria-label="results"
        >
          {isOpen &&
            cities.map((item, index) => (
              <SearchResultsItem
                isHighlighted={highlightedIndex === index}
                {...getItemProps({ item, index })}
                key={`${index}${item}`}
              >
                {item}
              </SearchResultsItem>
            ))}
        </SearchResults>

        <Button onClick={handleSearchPermission}>SUBMIT</Button>
      </SearchWrapper>

      <WeatherCard weather={weather} />
    </Wrapper>
  );
};

export default WeatherApp;
