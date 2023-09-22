import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';
import { MemoryRouter } from 'react-router-dom';

describe('Sidebar Component', () => {
    it('should render Sidebar component', () => {
        render(
            <MemoryRouter>
                <Sidebar />
            </MemoryRouter>
        );

        // Component is rendering correctly
        const sidebarElement = screen.getByTestId('sidebar');
        expect(sidebarElement).toBeInTheDocument();
    });
});
