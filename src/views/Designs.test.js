import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Designs from './Designs';

const server = setupServer(
    rest.get('/designs', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    id: 1,
                    name: '20th Tenacious',
                    courses: 'Course 1',
                    wales: 'Wales 1',
                    updated: '2023-09-20',
                },
                {
                    id: 2,
                    name: '19th Design',
                    courses: 'Course 2',
                    wales: 'Wales 2',
                    updated: '2023-09-21',
                },
            ])
        );
    }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Designs component', () => {
    it('renders Designs component correctly with fetched data', async () => {
        render(<Designs />);

        // Wait for the data to load
        await waitFor(() => screen.getByText('20th Tenacious'));

        expect(screen.getByText('20th Tenacious')).toBeInTheDocument();
        expect(screen.getByText('19th Design')).toBeInTheDocument();
    });
});
