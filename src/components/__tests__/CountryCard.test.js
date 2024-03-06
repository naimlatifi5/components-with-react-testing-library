import { render } from '@testing-library/react';
import CountryCard from '../CountryCard';

describe('Country card component with snapshot testing', () => {
  it('match the snapshot', () => {
    const countries = {
      name: 'Sweden',
      capital: 'Stockholm',
      population: '10 million',
      currency: 'SEK',
    };
    const { asFragment } = render(<CountryCard country={countries} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
