import { defineStore } from "pinia";
import axios from "axios";
import API_URL from '@/config';

export const useProductStore = defineStore('all-product',{
    state: () =>({
        brandInfo: [],
        productByBrand: []
    }),
    getters: {

    },
    actions: {
        async setProductList(brandId: number | string) {
            const { data } = await axios.get(`${API_URL}/api/product-list-by-brand`,{ params: { brand_id: brandId } });
            this.productByBrand = data.product;
            this.brandInfo = data.brand;
            console.log(data);
        },
    }
});