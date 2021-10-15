import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  RegularText,
  Temperature,
  Country,
  InfoBox,
} from './WeatherCard.styles';

const WeatherCard = ({ weather }) => (
  <Card>
    {Object.entries(weather).length !== 0 ? (
      <>
        <InfoBox>
          <RegularText>{weather?.location?.name}</RegularText>
          <Country>{weather?.location?.country}</Country>
        </InfoBox>
        <Temperature>{weather?.current?.temp_c}°C</Temperature>
        <img src={weather?.current?.condition?.icon} alt="actual weather" />
        <RegularText description>
          {weather?.current?.condition?.text}
        </RegularText>
      </>
    ) : (
      <RegularText>Pick a city</RegularText>
    )}
  </Card>
);

WeatherCard.propTypes = {
  weather: PropTypes.shape({
    location: PropTypes.shape({
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }),
    current: PropTypes.shape({
      temp_c: PropTypes.number.isRequired,
      condition: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    }),
  }),
};

WeatherCard.defaultProps = {
  weather: {
    location: {
      name: 'Warsaw',
      country: 'Poland',
    },
    current: {
      temp_c: 0,
      condition: {
        icon: '',
        text: '',
      },
    },
  },
};

export default WeatherCard;
