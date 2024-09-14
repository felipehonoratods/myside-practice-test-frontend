'use client'

import React from 'react';
import productsService from "@/services/products";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

export const SearchAndSelect: FC<{
    setSearch: (s: string) => void,
    setSelectedCategory: Dispatch<SetStateAction<string>>,
}> = ({ setSearch, setSelectedCategory }) => {
    const [categories, setcategories] = useState<string[]>([]);

    useEffect(() => {
        productsService.listCategories().then((categories) => {
            setcategories(['Todos', ...categories]);
        });
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-2">
            <div>
                <span className="text-5xl">Produtos</span>
            </div>
            <div className="h-[70%]">
                <div
                    className="w-[100%] flex relative 378:mx-6 mx-2"
                    onClick={(e) => e.stopPropagation()}
                >
                    <input
                        className="pl-12 pr-10 w-full border rounded-xl outline-red-500 h-11"
                        type="search"
                        placeholder="Pesquise o produto"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`w-6 h-6 absolute left-2 top-[10px] transition-transform`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <label htmlFor="Category" className="block text-sm font-medium leading-6 text-gray-900">Filtro por categoria:</label>
                <div className="mt-2 gap-2">
                    <select onChange={(e) => setSelectedCategory(e.target.value)} id="category" name="category" autoComplete="category-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        {categories.map((category, index) => (
                            <option key={index}>{category}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}