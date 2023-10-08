import {Nullable} from "vitest";

export interface BrandInterface{
    brandList: BrandItem[] | [];
    searchKeyword:  Nullable<string>;
    isLoading: boolean;
}

export interface BrandItem {
    brand_name?: string;
    id?: number;
    photo?:string;
}