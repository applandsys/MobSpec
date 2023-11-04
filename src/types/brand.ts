import {Nullable} from "vitest";

export interface BrandInterface{
    brandList: BrandItem[] | [];
}

export interface BrandItem {
    brand_name?: string;
    id?: number;
    photo?:string;
}