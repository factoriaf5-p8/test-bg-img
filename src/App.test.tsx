import { render, screen } from '@testing-library/react';

// To Test
import App from './App';

describe('Renders main page correctly', async () => {
    beforeEach(() => {
        render(<App />);
    })
    it('Should render the page correctly', async () => {
        // Setup

        const h1 = screen.queryByText('Hola mundo');

        // Expectations
        expect(h1).not.toBeNull();
    });

    it('should render the bg-image "https://www.w3schools.com/w3images/forestbridge.jpg"', () => {
        screen.debug();
        const bgImage = screen.getByTestId('bg-img');
        expect(bgImage).toHaveStyle("background-image: url('https://www.w3schools.com/w3images/forestbridge.jpg');");

    })
});