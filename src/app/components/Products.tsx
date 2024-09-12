'use client'

import productsService from "@/services/products";
import { Product } from "@/services/products/interface";
import React, { FC, useEffect, useState } from "react";
import { ProductsCard } from "./ProductsCard";

export const Products: FC<{
    search: string,
    selectedCategories: string[]
}> = ({ search, selectedCategories }) => {
    const [currentProducts, setCurrentProducts] = useState<Product[]>([]);

    useEffect(() => {
        productsService.list().then(products => {
            setCurrentProducts(products);
        });
    }, []);

    return (
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {currentProducts
                .filter((item) => item?.title.toLowerCase().includes(search.toLowerCase()))
                .filter((item) => selectedCategories.length === 0 ||
                    selectedCategories.includes(item.category))
                .map(product =>
                    <ProductsCard product={product} key={product.id} />
                )}
        </div>
    );
}