import { Product } from "@/services/products/interface";
import Image from "next/image";
import React, { FC } from "react";

export const ProductDetails: FC<{ product?: Product }> = ({ product }) => {

    if (!product) return

    return (
        <div className="h-full flex max-[1300px]:flex-col items-center min-[1300px]:justify-center p-20 gap-2">
            <div>
                <Image alt="product-image" loader={() => product.image} src={product.image} width={500} height={500} />
            </div>
            <div className="flex flex-col gap-4">
                <span className="text-2xl font-semibold line-clamp-3">
                    {product.title}
                </span>
                <div className="text-3xl font-medium">
                    <span className="text-red-500">{'R$ '}</span>
                    {product.price}
                </div>
                <div className="text-sm">
                    <div className="flex gap-5">
                        <div className="flex flex-col">
                            <span className="font-semibold">Marca:</span>
                            <span className="font-semibold">Modelo:</span>
                            <span className="font-semibold">Categoria:</span>
                            {product.color && (
                                <span className="font-semibold">Cor:</span>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <span>{product.brand.toUpperCase()}</span>
                            <span>{product.model.toUpperCase()}</span>
                            <span>{product.category.toUpperCase()}</span>
                            {product.color && (
                                <span>{product.color.toUpperCase()}</span>
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-1 text-sm">
                        Descrição do produto:
                    </h3>
                    <span className="whitespace-break-spaces text-sm">
                        {product.description}
                    </span>
                </div>
            </div>
        </div>
    );
}