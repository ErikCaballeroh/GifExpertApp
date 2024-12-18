import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem/>', () => {

    const image = {
        title: 'Titulo de imagen',
        url: 'https://one-punch.com/saitama.jgp',
        id: 'aorechu134',
    }

    test('debe de hacer match con el snapshoot', () => {
        const { container } = render(<GifItem {...image} />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem {...image} />);
        const { title, url } = image;
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(image.url);
        // expect(screen.getByRole('img').alt).toBe(image.title);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe de mostrar el titulo en el componente', () => {
        render(<GifItem {...image} />);
        expect(screen.getByText(image.title)).toBeTruthy();
    })

})