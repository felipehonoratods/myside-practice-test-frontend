'use client'

import React from 'react';
import Image from "next/image"
import { useRouter } from "next/navigation"

export const Header = () => {
    const router = useRouter()

    return (
        <nav className="relative flex w-full flex-wrap items-center justify-between bg-white border-b py-2 shadow-dark-mild lg:py-4">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <span className="ms-2 text-xl cursor-pointer" onClick={() => router.push('/')}>
                    <Image src={'https://myside.com.br/public-web/assets/logos/myside-logo.svg'} alt="MySide" width={200} height={200} />
                </span>
            </div>
        </nav>
    )
}