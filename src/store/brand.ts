import { defineStore } from "pinia";
import {BrandInterface, BrandItem} from "@/types/brand";

export const useBrandStore = defineStore('all-brand', {
    state: (): BrandInterface => ({
        brandList : []
    }),
    actions: {
        async setBrandList(payload: BrandItem[]) {
            this.brandList = payload;
        }
    },
})