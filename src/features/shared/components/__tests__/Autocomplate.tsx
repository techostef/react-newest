import { fireEvent, render, screen } from "@testing-library/react";
import Autocomplate from "../Autocomplate";
import { IOption } from "../../types";

const mockLabel = 'Search Autocomplate';
const mockOnClick = jest.fn();
const mockOnChange = jest.fn();
const mockOptions: IOption[] = [
  {
    label: 'Label 1',
    value: 'value 1',
  },
  {
    label: 'Label 2',
    value: 'value 2',
  },
]

beforeEach(() => {
  jest.clearAllMocks();
})

describe('Testing component Autocomplate', () => {
  it('Should render correctly', () => {
    render(<Autocomplate label={mockLabel} onChange={mockOnChange} onClick={mockOnClick} options={mockOptions} />);

    // Label should be to render
    expect(screen.getByText(mockLabel)).toBeInTheDocument();

    // autocomplate search label 2 and click it
    fireEvent.focusIn(screen.getByLabelText(mockLabel))

    // searching label 2
    fireEvent.change(screen.getByLabelText(mockLabel), {
      target: {
        value: 'Label 2',
      }
    });
    expect(mockOnChange).toBeCalledTimes(1);
    
    // check if onClick is correct
    fireEvent.click(screen.getByText('Label 2'));
    expect(mockOnClick).toBeCalledWith({
      label: 'Label 2',
      value: 'value 2',
    })
  });

  it('Render loading correctly', () => {
    render(<Autocomplate label={mockLabel} onChange={mockOnChange} onClick={mockOnClick} options={mockOptions} isLoading />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  })

  it('Render not found', () => {
    render(<Autocomplate label={mockLabel} onChange={mockOnChange} onClick={mockOnClick} options={[]} searchKey="label ab" />);

    expect(screen.getByText('Not Found')).toBeInTheDocument();
  })
})