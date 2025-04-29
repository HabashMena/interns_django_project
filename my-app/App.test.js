import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tic Tac Toe', () => {
  render(<App />);
  const heading = screen.getByText(/Tic Tac Toe/i);
  expect(heading).toBeInTheDocument();
});
