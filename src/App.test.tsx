import React from 'react';
import { render, screen } from '@testing-library/react';
import Solution from './Solution';

test('renders learn react link', () => {
  render(<Solution />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
