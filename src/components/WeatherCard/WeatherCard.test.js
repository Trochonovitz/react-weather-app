import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherCard from './WeatherCard';

describe('Weather Card displays fetched informations', () => {
  it('Renders the component', () => {
    render(<WeatherCard />);
  });
});
