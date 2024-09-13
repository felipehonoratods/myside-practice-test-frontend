'use client'

import productsService from "@/services/products";
import { Product } from "@/services/products/interface";
import React, { FC, useEffect, useState } from "react";
import { ProductsCard } from "./ProductsCard";
import { Paginate } from "./Paginate";
import { filterProducts } from "@/shared/utils";

export const Products: FC<{
    search: string,
    selectedCategory: string
}> = ({ search, selectedCategory }) => {
    const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [productsPerPage,] = useState(12);
    const indexOfLastPost = currentPage * productsPerPage;
    const indexOfFirstPost = indexOfLastPost - productsPerPage;
    const filteredProducts = filterProducts(currentProducts, search, selectedCategory);

    useEffect(() => {
        productsService.list().then(products => {
            setCurrentProducts(products);
        });
    }, []);

    return (
        <div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {filteredProducts
                    .slice(
                        indexOfFirstPost,
                        indexOfLastPost
                    )
                    .map(product =>
                        <ProductsCard product={product} key={product.id} />
                    )}
            </div>
            {filteredProducts.length > 12 && (
                    <Paginate
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        productsPerPage={productsPerPage}
                        totalProducts={filteredProducts.length}
                    />
                )}
        </div>
    );
}