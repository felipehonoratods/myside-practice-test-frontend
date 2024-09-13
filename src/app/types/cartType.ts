import { Product } from "@/services/products/interface";

export type CartContextType = {
    cart: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (productId: number) => void;
    clearCart: () => void;
}