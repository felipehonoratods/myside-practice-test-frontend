'use client'

import React, { useContext } from "react";
import { CartContext } from "../hooks/cartContext";
import Image from "next/image";
import { truncateText } from "@/shared/utils";

export const Cart = () => {
    const { cart, removeProduct } = useContext(CartContext);

    return (
        <div className="flex flex-col items-start m-8">
            <div className="mb-4 flex items-center">
                <svg
                    className="h-6 w-6 outline-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 92 92"
                >
                    <path
                        d="M91.8 27.3 81.1 61c-.8 2.4-2.9 4-5.4 4H34.4c-2.4 0-4.7-1.5-5.5-3.7L13.1 19H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h11.9c1.7 0 3.2 1.1 3.8 2.7L36 57h38l8.5-27H35.4c-2.2 0-4-1.8-4-4s1.8-4 4-4H88c1.3 0 2.5.7 3.2 1.7.8 1 1 2.4.6 3.6zm-55.4 43c-1.7 0-3.4.7-4.6 1.9-1.2 1.2-1.9 2.9-1.9 4.6 0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9c1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6-1.2-1.2-2.9-1.9-4.6-1.9zm35.9 0c-1.7 0-3.4.7-4.6 1.9s-1.9 2.9-1.9 4.6c0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9 1.7 0 3.4-.7 4.6-1.9 1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6s-2.9-1.9-4.6-1.9z"
                        fill="currentColor"
                    />
                </svg>
                <span className="text-5xl ml-2">Carrinho</span>
                {cart.length > 0 && (
                    <span className="ml-4">{cart.length} Produto{cart.length > 1 ? 's' : null}</span>
                )}
            </div>
            <table className="table-auto w-[100%] gap-1">
                <thead className="border-b">
                    <tr>
                        <th>Produto</th>
                        <th>Preço</th>
                        <th>Cor</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product => (
                        <tr key={product.id} className="border-t">
                            <td className="border-r">
                                <div className="flex items-center gap-4 w-[50%]">
                                    <button className="font-2xl text-red-600" onClick={() => removeProduct(product.id)}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Circle_Remove">
                                                <g>
                                                    <path d="M9.525,13.765a.5.5,0,0,0,.71.71c.59-.59,1.175-1.18,1.765-1.76l1.765,1.76a.5.5,0,0,0,.71-.71c-.59-.58-1.18-1.175-1.76-1.765.41-.42.82-.825,1.23-1.235.18-.18.35-.36.53-.53a.5.5,0,0,0-.71-.71L12,11.293,10.235,9.525a.5.5,0,0,0-.71.71L11.293,12Z">
                                                    </path>
                                                    <path d="M12,21.933A9.933,9.933,0,1,1,21.934,12,9.945,9.945,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.934,12,8.944,8.944,0,0,0,12,3.067Z">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                    <Image alt="product-image" loader={() => product.image} src={product.image} width={200} height={200} />
                                    <span className="text-xl pl-1">{truncateText(product.title, 50)}</span>
                                </div>
                            </td>
                            <td className="border-r text-center">
                                <span className="font-semibold">{'R$ '}</span>
                                <span className="text-xl">{product.price}</span>
                            </td>
                            <td className="text-center">
                                <span className="text-xl">{product.color}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}