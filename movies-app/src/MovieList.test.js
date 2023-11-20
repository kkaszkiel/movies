
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieList from './MovieList';

test('renders movie list with multiple movies', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, title: 'My film 1', director: 'Joe Doe', year: 2021 },
          { id: 2, title: 'My film 2', director: 'Doe Joe', year: 2022 }
        ]),
    })
  );

  render(<MovieList />);

  await waitFor(() => {
    expect(screen.getByText('Movies List')).toBeInTheDocument();
    expect(screen.getByText('My film 1')).toBeInTheDocument();
    expect(screen.getByText('My film 2')).toBeInTheDocument();
  });
});
