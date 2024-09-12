import api from "../api";
import { ResponseDetail, ResponseList, ResponseListCategories } from "./interface";

const url = "/products";

const list = async () => {
    try {
        const { data } = await api.get<ResponseList>(url + '?limit=150');
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

const listCategories = async () => {
    try {
        const { data } = await api.get<ResponseListCategories>(`${url}/category`);
        return data.categories;
    } catch (error) {
        return Promise.reject(error);
    }
}


const productsService = {
    list,
    detail,
    listCategories
}

export default productsService;