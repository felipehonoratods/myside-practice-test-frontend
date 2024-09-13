import { Product } from "@/services/products/interface";
import React, { createContext, ReactNode, useState } from "react";
import { CartContextType } from "../types/cartType";

export const CartContext = createContext<CartContextType>({
    cart: [],
    addProduct: function (): void {
        throw new Error("Function not implemented.");
    },
    removeProduct: function (): void {
        throw new Error("Function not implemented.");
    },
    clearCart: function (): void {
        throw new Error("Function not implemented.");
    }
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addProduct = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeProduct = (productId: number) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addProduct, removeProduct, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}