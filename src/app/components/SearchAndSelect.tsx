'use client'

import productsService from "@/services/products";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

export const SearchAndSelect: FC<{
    setSearch: (s: string) => void,
    setSelectedCategories: Dispatch<SetStateAction<string[]>>,
    selectedCategories: string[]
}> = ({ setSearch, setSelectedCategories, selectedCategories }) => {
    const [categories, setcategories] = useState<string[]>([]);

    const handleCategoryChange = (category: string) => {
        setSelectedCategories((prevCategories: string[]) =>
            prevCategories.includes(category)
                ? prevCategories.filter((c) => c !== category)
                : [...prevCategories, category]
        );
    };

    useEffect(() => {
        productsService.listCategories().then((categories) => {
            setcategories(categories);
        });
    }, []);

    return (
        <div className="flex justify-around items-center p-2">
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
            <div className="gap-2">
                {categories.map((category, index) => (
                    <div key={index}>
                        <input
                            type="checkbox"
                            className="accent-red-500"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                        />
                        <span className="font-semibold p-2 capitalize">{category}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}