'use client'

import React, { useContext } from 'react';
import Image from "next/image"
import { useRouter } from "next/navigation"
import { CartContext } from '../hooks/cartContext';

export const Header = () => {
    const router = useRouter();
    const { cart } = useContext(CartContext);

    return (
        <nav className="relative flex w-full flex-wrap items-center justify-between bg-white border-b py-2 shadow-dark-mild lg:py-4">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <span className="ms-2 text-xl cursor-pointer ml-3" onClick={() => router.push('/')}>
                    <Image src={'https://myside.com.br/public-web/assets/logos/myside-logo.svg'} alt="MySide" width={200} height={200} />
                </span>
                <span className="ms-2 text-xl mr-3" onClick={() => router.push('/cart')}>
                    <svg
                        className="h-6 w-6 cursor-pointer outline-none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 92 92"
                    >
                        <path
                            d="M91.8 27.3 81.1 61c-.8 2.4-2.9 4-5.4 4H34.4c-2.4 0-4.7-1.5-5.5-3.7L13.1 19H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h11.9c1.7 0 3.2 1.1 3.8 2.7L36 57h38l8.5-27H35.4c-2.2 0-4-1.8-4-4s1.8-4 4-4H88c1.3 0 2.5.7 3.2 1.7.8 1 1 2.4.6 3.6zm-55.4 43c-1.7 0-3.4.7-4.6 1.9-1.2 1.2-1.9 2.9-1.9 4.6 0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9c1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6-1.2-1.2-2.9-1.9-4.6-1.9zm35.9 0c-1.7 0-3.4.7-4.6 1.9s-1.9 2.9-1.9 4.6c0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9 1.7 0 3.4-.7 4.6-1.9 1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6s-2.9-1.9-4.6-1.9z"
                            fill="currentColor"
                        />
                    </svg>
                    {cart.length > 0 && (
                        <span
                            style={{ aspectRatio: 1 }}
                            className="bg-red-400 w-5 rounded-full text-white text-xs flex items-center justify-center absolute top-6 right-3 pointer-events-none"
                        >
                            <span className="absolute">
                                {cart.length}
                            </span>
                        </span>
                    )}
                </span>
            </div>
        </nav>
    )
}