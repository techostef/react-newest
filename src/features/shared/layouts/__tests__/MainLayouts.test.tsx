import { fireEvent, render, screen } from '@testing-library/react';
import MainLayouts from '../MainLayouts';
import { FAVORITE_URL, HOME_URL } from '../../constants';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  const mockModule = jest.requireActual('react-router-dom');
  return {
    ...mockModule,
    useNavigate: () => mockNavigate
  }
})

describe("Testing Layuot MainLayouts", () => {
  it('Should render correctly', () => {
    render(<MainLayouts>Children of layouts</MainLayouts>);

    // check if children is exists
    expect(screen.getByText('Children of layouts')).toBeInTheDocument();

    // check if click home of menu is correct
    fireEvent.click(screen.getByText('Home'));
    expect(mockNavigate).toBeCalledWith(HOME_URL);

    // check if click home of favorites is correct
    fireEvent.click(screen.getByText('Favorites'));
    expect(mockNavigate).toBeCalledWith(FAVORITE_URL);
  })
})