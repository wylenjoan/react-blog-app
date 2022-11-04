import React from 'react';
import { render } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

test('renders learn react link', () => {
  render(<RouterProvider router={router} />);
});
