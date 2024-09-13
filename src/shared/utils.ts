import { Product } from "@/services/products/interface";

export const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  } else {
    return text;
  }
};

export const filterProducts = (products: Product[], search: string, selectedCategory: string) => {
  return products
    .filter((item) =>
      item?.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter(
      (item) => selectedCategory === 'Todos' || selectedCategory === item.category
    );
};
