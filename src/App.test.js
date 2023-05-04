import { render, screen } from '@testing-library/react';
import Pay from './App';

test('renders learn react link', () => {
  render(<Pay />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
