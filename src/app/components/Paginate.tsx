'use client'

import React, { FC } from "react"

export const Paginate: FC<{
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    currentPage: number;
    productsPerPage: number;
    totalProducts: number | undefined;
}> = ({ currentPage, setCurrentPage, productsPerPage, totalProducts }) => {
    const pageNumbers = [];

    if (totalProducts) {
        for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
            pageNumbers.push(i);
        }
    }

    const pagination = (num: number) => {
        setCurrentPage(num);
    };

    return (
        <div
            className="col-span-full text-center py-10 mt-5 border-red relative"
        >
            <span className="absolute h-[1px] w-full top-0 left-0 from-transparent via-black/20 to-transparent bg-gradient-to-r"></span>
            <button
                className={`${currentPage === 1 && "opacity-0"
                    } text-sm font-medium mr-8 max-[578px]:mr-4 px-3 py-1 outline outline-[1px] outline-black/20 hover:outline-black rounded-[4px] group relative`}
                disabled={currentPage === 1}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 inline mb-[1.5px] group-hover:-translate-x-[2px] transition-transform pointer-events-none"
                >
                    <path
                        fillRule="evenodd"
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                        clipRule="evenodd"
                    />
                </svg>
                <span className="max-[578px]:hidden">Anterior</span>
                <button
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className='absolute inset-0'
                >
                </button>
            </button>
            {pageNumbers.map((number, i) => (
                <button
                    onClick={() => pagination(number)}
                    className={`hover:outline outline-black/20 outline-[1px] -outline-offset-1 rounded-[4px] p-2 mx-1 cursor-pointer bg-${currentPage === ++i ? "black text-red-500" : "none"
                        }`}
                    key={number}
                >
                    {number}
                </button>
            ))}
            <button
                className={`${currentPage === pageNumbers.length && "opacity-0"
                    } text-sm font-medium ml-8 max-[578px]:ml-4 px-5 py-1 outline outline-[1px] outline-black/20 hover:outline-black rounded-[4px] group relative`}
                disabled={currentPage === pageNumbers.length}
            >
                <span className="max-[578px]:hidden">Próxima</span>
                <button
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className='absolute inset-0'
                >
                </button>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 inline group-hover:translate-x-[2px] transition-transform pointer-events-none"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </div>
    );
}