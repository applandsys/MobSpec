import { defineStore } from "pinia";
import axios from "axios";
import API_URL from '@/config';

export const useProductStore = defineStore('all-product',{
    state: () =>({
        brandInfo: [],
        productByBrand: [],
        searchKeyword: '',
        isLoading: false
    }),
    getters: {
        searchModel: (state) =>
        {
            if (state.searchKeyword !== '') {
                return state.productByBrand.filter(item => item?.product_name.toLowerCase().includes(state?.searchKeyword.toLowerCase()));
            } else {
                return state.productByBrand;
            }
        }
    },
    actions: {
        async setProductList(brandId: number | string) {
            this.isLoading = true;
            const { data } = await axios.get(`${API_URL}/api/product-list-by-brand`,{ params: { brand_id: brandId } });
            this.productByBrand = data.product;
            this.brandInfo = data.brand;
            this.isLoading = false;
        },
        setKeyword(payload: string){
            this.searchKeyword = payload;
        }
    }
});