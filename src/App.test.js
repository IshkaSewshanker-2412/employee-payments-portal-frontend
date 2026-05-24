import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Employee Payments Portal heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Employee Payments Portal/i);
  expect(headingElement).toBeInTheDocument();
});

