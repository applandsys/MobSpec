import { defineStore } from "pinia";
import { BrandInterface } from "@/types/brand";
import axios from "axios";
import API_URL from '@/config';

export const useBrandStore = defineStore('all-brand', {
    state: (): BrandInterface => ({
        brandList : []
    }),
    getters: {
        //favbrand: (state) => state.brandList.filter(item=>)
    },
    actions: {
        async setBrandList() {
            const { data } = await axios.get(`${API_URL}/api/brand-list`);
            this.brandList = data.brands;
            console.log(data.brands);
        },
        async setBrandListAll() {
            const { data } = await axios.get(`${API_URL}/api/brand-list-all`);
            this.brandList = data.brands;
        },
    },
})