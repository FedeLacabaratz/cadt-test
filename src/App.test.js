import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
    it('should render App component with Sidebar', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        // Component is rendering correctly
        const appElement = screen.getByTestId('app');
        expect(appElement).toBeInTheDocument();

        // Verifies existance of Sidebar component within App component
        const sidebarElement = screen.getByTestId('sidebar');
        expect(sidebarElement).toBeInTheDocument();
    });
});
