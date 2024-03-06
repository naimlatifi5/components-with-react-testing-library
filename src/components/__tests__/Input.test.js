import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../Input.js';

describe('Test suit for input', () => {
  it('render the input with empty value', () => {
    render(<Input value="" />);
    let inputText = screen.getByRole('textbox');
    //screen.debug(inputText)
    const inputValue = 'hej';
    expect(inputText).toHaveValue('');
    fireEvent.change(inputText, { target: { value: inputValue } });
    expect(inputText).toHaveValue(inputValue);
  });
});
