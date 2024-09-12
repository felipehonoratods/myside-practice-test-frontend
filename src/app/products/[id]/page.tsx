'use client'

import { ProductDetails } from "@/app/components/ProductDetails";
import productsService from "@/services/products";
import { Product } from "@/services/products/interface";
import { useEffect, useState } from "react";

export default function Home({ params }: { params: { id: string } }) {
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        productsService.detail(params.id).then(product => setProduct(product))
    }, [params.id]);

    return (
        <ProductDetails product={product} />
    );
}