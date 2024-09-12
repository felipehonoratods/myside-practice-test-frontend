import { Product } from "@/services/products/interface";
import { truncateText } from "@/shared/utils";
import Image from "next/image";
import { FC } from "react";

export const ProductsCard: FC<{ product: Product }> = ({ product }) => {
    return (
        <div className="p-4 shadow-xl rounded-2xl hover:scale-105 duration-700 flex flex-col gap-3 items-center" key={product.id}>
            <div>
                <Image alt="product-image" loader={() => product.image} src={product.image} width={200} height={200} />
            </div>
            <div>
                <span className="font-bold">{product.title}</span>
            </div>
            <div>
                <span className="font-semibold">{'R$ '}</span>
                <span className="text-xl">{product.price}</span>
            </div>
            <div>
                <span>{truncateText(product.description, 250)}</span>
            </div>
        </div>
    );
}