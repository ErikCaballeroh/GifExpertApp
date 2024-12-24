import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp/>', () => {

    const inputValue = 'One Piece';

    test('debe de mostrar en pantalla la categoria agregada', () => {
        render(<GifExpertApp />);
        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form);

        expect(screen.getByText(inputValue)).toBeTruthy();
    });

    test('no debe de mostrar en pantalla categoria repetida', () => {
        render(<GifExpertApp />);
        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form);

        expect(screen.getAllByText(inputValue).length).toBe(1);
    });
});