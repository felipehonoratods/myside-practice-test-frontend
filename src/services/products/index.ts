import api from "../api";
import { ResponseDetail, ResponseList } from "./interface";

const url = "/products";

const list = async () => {
    try {
        const { data } = await api.get<ResponseList>(url);
        return data.products;
    } catch (error) {
        return Promise.reject(error);
    }
}

const detail = async (id: number) => {
    try {
        const { data } = await api.get<ResponseDetail>(`${url}/${id}`);
        return data.product;
    } catch (error) {
        return Promise.reject(error);
    }
}


const productsService = {
    list,
    detail
}

export default productsService;