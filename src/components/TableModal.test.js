import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TableModal from './TableModal';

it('renders TableModal correctly', () => {
    const handleCloseEditModal = jest.fn();
    const handleChange = jest.fn();

    render(
        <TableModal
            editModalOpen={true}
            handleCloseEditModal={handleCloseEditModal}
            handleChange={handleChange}
        />
    );

    expect(screen.getByText('Edit Design')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(handleCloseEditModal).toHaveBeenCalled();
});
