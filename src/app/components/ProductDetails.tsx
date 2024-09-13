import { Product } from "@/services/products/interface";
import Image from "next/image";
import React, { FC, useContext, useEffect, useState } from "react";
import { CartContext } from "../hooks/cartContext";
import { useRouter } from "next/navigation";

export const ProductDetails: FC<{ product?: Product }> = ({ product }) => {
    const [ifItemExistsOnCart, setIfItemExistsOnCart] = useState(false);
    const router = useRouter();
    const { cart, addProduct } = useContext(CartContext);

    useEffect(() => {
        const item = cart.find(
            (item) => item.id === product?.id
        );
        setIfItemExistsOnCart(!!item);
    }, [cart, cart.length, product?.id]);

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
                <div>
                    {!ifItemExistsOnCart ? (
                        <button
                            className={`p-1 bg-[#3F4E4F] hover:bg-[#2C3639] dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors flex items-center gap-1 text-white px-3 text-sm rounded-full shadow-md inset-0`}
                            onClick={() => {
                                addProduct(product)
                            }}
                        >
                            <div className="inset-0 flex justify-center items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 mb-1"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                    />
                                </svg>
                                <span className="whitespace-nowrap">Adicionar ao Carrinho</span>
                            </div>
                        </button>
                    ) :
                        (
                            <button
                                className={`p-1 bg-rose-500 hover:bg-rose-600 transition-colors flex items-center gap-1 text-white px-3 text-sm rounded-full shadow-md inset-0`}
                                onClick={() => {
                                    router.push('/cart')
                                }}
                            >
                                <div className="inset-0 flex items-center justify-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5 mb-1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                        />
                                    </svg>
                                    <span className="whitespace-nowrap">Ir para o carrinho</span>
                                </div>
                            </button>
                        )}
                </div>
            </div>
        </div>
    );
}