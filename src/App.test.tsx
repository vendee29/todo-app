import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App rendering tests', () => {
  render(<App />);

  test('renders heading', () => {
    const heading: HTMLHeadingElement = screen.getByText(/ToDo App/i);
    expect(heading).toBeInTheDocument();
  });
})

