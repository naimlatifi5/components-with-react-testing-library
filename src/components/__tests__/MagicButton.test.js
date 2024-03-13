import { render, screen, fireEvent } from '@testing-library/react';
import MagicButton from '../MagicButton.js';

describe('Test suit for Magic button component', () => {
  it('render and find magic button in the document', () => {
    render(<MagicButton />);
    const magicButton = screen.getByTestId('magic-button');
    expect(magicButton).toBeInTheDocument();
  });

  it('render magic button  with initial text', () => {
    render(<MagicButton />);
    const magicButton = screen.getByRole('button', { name: 'Login' });
    expect(magicButton).toHaveTextContent('Login');
  });

  it('render magic button  with initial background color', () => {
    render(<MagicButton />);
    const magicButton = screen.getByRole('button', { name: 'Login' });
    expect(magicButton).toHaveStyle({ backgroundColor: 'red' });
  });

  test('It should check on button click that background color should change to green', () => {
    render(<MagicButton />);
    const magicButton = screen.getByTestId('magic-button');
    // on button click
    fireEvent.click(magicButton);
    expect(magicButton).toHaveStyle({ backgroundColor: 'green' });
    expect(magicButton).toHaveTextContent('Welcome to the app!');
  });

  it('check if magic button is clicked with handler function as prop and only once', () => {
    const handleOnClickProp = jest.fn();
    render(<MagicButton handleOnClickProp={handleOnClickProp} />);
    const magicButton = screen.getByTestId('magic-button');
    fireEvent.click(magicButton);
    expect(handleOnClickProp).toBeCalledTimes(1);
  });
});
