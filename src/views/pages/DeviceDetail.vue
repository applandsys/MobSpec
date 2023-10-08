<script lang="ts" setup>
import PageLayout from "@/views/components/base/PageLayout.vue";
import {IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonImg} from "@ionic/vue";
import API_URL from "@/config";
import { useRoute } from "vue-router";
import NoImage from "@/assets/images/noimage.webp";
import {onMounted, onUnmounted, ref} from "vue";
import axios from "axios";
import {useBrandStore} from "@/store/brand";

const route =  useRoute();
const product_id =  route.params.product_id;

const productDetail =  ref([]);
const isLoading = ref(false);

const brandStore =  useBrandStore();

const brandList = brandStore.brandList;

const selectedBrand =  ref();
const selectedModel =  ref();
const productList = ref([]);
const compareProduct = ref([]);

const handleSelectBrand = async (event) =>{
    isLoading.value = true;
    selectedBrand.value = event.target.value;
    const { data } = await axios.get(`${API_URL}/api/product-list-by-brand`,{ params: { brand_id:  selectedBrand.value } });
    productList.value = data;
    isLoading.value = false;
}

const handleSelectModel = async (event) =>{
    selectedModel.value =  event.target.value;
    isLoading.value = true;
    const { data } = await axios.get(`${API_URL}/api/product-detail`,{ params: { product_id: selectedModel.value } });
    compareProduct.value = data;
    isLoading.value = false;
}

onMounted(async ()=>{
    isLoading.value = true;
    const { data } = await axios.get(`${API_URL}/api/product-detail`,{ params: { product_id: product_id } });
    productDetail.value = data;
    isLoading.value = false;
})

onUnmounted(()=>{
    isLoading.value = false;
})


</script>
<template>
    <PageLayout page-title="Device Detail" :is-loading="isLoading">
        <ion-grid>
            <ion-row>
                <ion-col><div class="find-compare"> Find a  Compare    <span v-if="compareProduct?.product?.length"> with  {{compareProduct?.product?.length}} devices </span></div></ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-select label="Select a Brand" placeholder="Brand" label-placement="stacked" @ionChange="handleSelectBrand($event)">
                        <ion-select-option :value="brand.id" v-for="(brand,index) in brandList" >
                            {{brand.brand_name}}
                        </ion-select-option>
                    </ion-select>
                </ion-col>
                <ion-col>
                    <ion-select v-if="productList?.product?.length" label="Select a Model" placeholder="Model" label-placement="stacked" @ionChange="handleSelectModel($event)">
                        <ion-select-option  :value="product.id" v-for="(product,index) in productList['product']" >
                            {{product?.product_name}}
                        </ion-select-option>
                    </ion-select>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                   <div class="ion-text-center app-title"> {{productDetail?.product_name}} </div>
                    <div class="ion-text-center vs" v-if="compareProduct?.product?.length">vs</div>
                   <div class="ion-text-center vs-app-title" v-if="compareProduct?.product?.length">   {{compareProduct?.product_name}} </div>
                    <ion-grid class="info-grid">
                        <ion-row>
                            <ion-col>
                                <div class="image-wrapper">
                                    <ion-img
                                        :alt="productDetail?.product_name"
                                        :src="productDetail?.image_name?`${API_URL}/product_image/${productDetail?.image_name}.jpg`:NoImage"
                                    ></ion-img>
                                </div>
                            </ion-col>
                        </ion-row>
                        <ion-row v-for="(product,index) in productDetail?.product" :key="index">
                            <ion-col class="type-name">
                                <div>{{product.type}}</div>
                            </ion-col>
                            <ion-col class="type-name" size="8">
                                <div>
                                    {{product.value}}
                                </div>
                                <div  class="compare-value" v-if="compareProduct?.product?.length">
                                    {{compareProduct?.product.find((item=> item.type===product.type))?.value}}
                                </div>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-col>
            </ion-row>
        </ion-grid>
    </PageLayout>
</template>

<style scoped>
.info-grid{
    background-color: rgba(144, 182, 144, 0.4);
    color: #000;
}
.type-name{
    border: dashed 1px #fff;
}

.app-title{
    color: #000;
    padding: 5px;
    text-align: center;
    background: coral;
    font-size: 20px;
    font-weight: bold;
}

.vs-app-title{
    color: #000;
    padding: 5px;
    text-align: center;
    background: #ffe850;
    font-size: 20px;
    font-weight: bold;
}

.vs{
    color: #757575;
    padding: 5px;
    text-align: center;
    background: #eeeeec;
    font-size: 20px;
    font-weight: bold;
}

ion-select{
    color: #0d0d0d;
}

.image-wrapper{
    border: 3px solid #ddd;
    margin: 10px;
}

.find-compare{
    color: #000;
}

.compare-value{
    background-color: #ffd948;
}
</style>