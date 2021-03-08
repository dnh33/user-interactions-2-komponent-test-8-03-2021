import { render, screen, fireEvent } from '@testing-library/react';
import App from './App'

describe('Router', function () {
  it("shows page 1 when page 1 link is clicked", function () {
    render(<App />)

    fireEvent.click(screen.getByText('1'));

      render(<App />);

      var text = screen.queryByText(/page 1/i);
      expect(text).toBeInTheDocument();
  });

  it("shows page 2 when page 2 link is clicked", function () {
    render(<App />)

    fireEvent.click(screen.getByText('2'));

      render(<App />);

      var text = screen.queryByText(/This is the 2nd component/i);
      expect(text).toBeInTheDocument();
  });
});