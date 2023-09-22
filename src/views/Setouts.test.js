import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Setouts from './Setouts';

const server = setupServer(
    rest.get('/setouts', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    id: 1,
                    name: '1st Setout',
                    machineName: 'Machine 1',
                    machineWidth: 'Width 1',
                    courses: 'Course 1',
                    updated: '2023-09-20',
                },
                {
                    id: 2,
                    name: '2nd Setout',
                    machineName: 'Machine 2',
                    machineWidth: 'Width 2',
                    courses: 'Course 2',
                    updated: '2023-09-21',
                },
            ])
        );
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Setouts component', () => {
    it('renders Setouts component correctly with fetched data', async () => {
        render(<Setouts />);

        // Wait for the data to load
        await waitFor(() => screen.getByText('1st Setout'));

        expect(screen.getByText('1st Setout')).toBeInTheDocument();
        expect(screen.getByText('2nd Setout')).toBeInTheDocument();
    });
});
