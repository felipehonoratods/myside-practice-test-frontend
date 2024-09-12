import React from 'react'
import { render } from '@testing-library/react'
import { Header } from '../components/Header'
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

describe('Header', () => {
    it('renders a heading', () => {
        (useRouter as jest.Mock).mockReturnValue({
            route: '/',
            pathname: '/',
            query: {},
            asPath: '/',
        });

        render(<Header />);
    })
})