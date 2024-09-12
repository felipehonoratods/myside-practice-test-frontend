'use client'

import productsService from "@/services/products";
import { Product } from "@/services/products/interface";
import { useEffect, useState } from "react";
import { ProductsCard } from "./ProductsCard";

export const Products = () => {
    const [currentProducts, setCurrentProducts] = useState<Product[]>([]);

    useEffect(() => {
        productsService.list().then(products => {
            setCurrentProducts(products);
        });
    }, []);

    return (
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {currentProducts.map(product =>
                <ProductsCard product={product} key={product.id} />
            )}
        </div>
    );
}