import React from 'react';
import {
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import WeatherApp from './WeatherApp';

describe('Weather App', () => {
  it('Renders the component', () => {
    render(<WeatherApp />);
  });

  it('Changes input value', () => {
    render(<WeatherApp />);
    const input = screen.getByPlaceholderText('Search for a city');
    fireEvent.change(input, { target: { value: 'Paris' } });
    expect(input).toHaveValue('Paris');
  });

  it('Displays picked city in a card', async () => {
    render(<WeatherApp />);
    const button = screen.getByText('SUBMIT');
    const input = screen.getByPlaceholderText('Search for a city');
    fireEvent.change(input, { target: { value: 'Paris' } });
    fireEvent.click(button);
    await waitFor(() => {
      expect(getByText('Paris')).toBeInTheDocument();
    });
  });
});
