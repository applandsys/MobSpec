import { defineStore } from "pinia";
import {BrandInterface, BrandItem} from "@/types/brand";
import axios from "axios";
import API_URL from '@/config';

export const useBrandStore = defineStore('all-brand', {
    state: (): BrandInterface => ({
        brandList : [],
        searchKeyword: '',
        isLoading: false
    }),
    getters: {
        searchBrand: (state) =>
        {
            if (state.searchKeyword !== '') {
                return state.brandList.filter(item => item?.brand_name.toLowerCase().includes(state?.searchKeyword.toLowerCase()));
            } else {
                return state.brandList;
            }
        }
    },
    actions: {
        async setBrandList() {
            this.isLoading = true;
            const { data } = await axios.get(`${API_URL}/api/brand-list`);
            this.brandList = data.brands;
            this.isLoading = false;
        },
        async setBrandListAll() {
            this.isLoading = true;
            const { data } = await axios.get(`${API_URL}/api/brand-list-all`);
            this.brandList = data.brands;
            this.isLoading = false;
        },
        setKeyword(payload: string){
            this.searchKeyword = payload;
        }
    },
})