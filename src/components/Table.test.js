import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

jest.mock('uuid', () => ({
    v4: jest.fn(() => 'mock-uuid'), // Mock uuidv4
}));

jest.mock('moment', () => () => ({
    format: jest.fn(() => 'mock-date'), // Mock moment().format()
}));

it('renders Table correctly', () => {
    const data = [
        {
            id: 1,
            name: 'Item 1',
            courses: 'Course 1',
            wales: 'Wales 1',
            updated: '2021-09-20T12:00:00Z',
        },
    ];
    const columns = ['Name', 'Courses', 'Wales', 'Last Updated', 'By'];

    render(<Table data={data} columns={columns} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Course 1')).toBeInTheDocument();
    expect(screen.getByText('Wales 1')).toBeInTheDocument();
    expect(screen.getByText('mock-date')).toBeInTheDocument();
});
