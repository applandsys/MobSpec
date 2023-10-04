<script lang="ts" setup>
import PageLayout from "@/views/components/base/PageLayout.vue";
import { IonGrid, IonRow, IonCol } from "@ionic/vue";
import API_URL from "@/config";
import { useRoute } from "vue-router";
import NoImage from "@/assets/images/noimage.webp";
import {onMounted, ref} from "vue";
import axios from "axios";

const route =  useRoute();
const product_id =  route.params.product_id;

const productDetail =  ref([]);
const isLoading = ref(true);

onMounted(async ()=>{
    const { data } = await axios.get(`${API_URL}/api/product-detail`,{ params: { product_id: product_id } });
    productDetail.value = data;
    isLoading.value = false;

    console.log(productDetail.value);
})

</script>
<template>
    <PageLayout page-title="Device Detail" :is-loading="isLoading">
        <ion-grid>
            <ion-row>
                <ion-col><div class=""> Find a  Compare   </div></ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-select label="Select a Brand" placeholder="Brand" label-placement="stacked">
                        <ion-select-option value="apple">Apple</ion-select-option>
                        <ion-select-option value="banana">Banana</ion-select-option>
                        <ion-select-option value="orange">Orange</ion-select-option>
                    </ion-select>
                </ion-col>
                <ion-col>
                    <ion-select label="Select a Model" placeholder="Model" label-placement="stacked">

                    </ion-select>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                  <div class="ion-text-center app-title"> Device Detail  </div>
                    <ion-grid class="info-grid">
                        <ion-row v-for="(product,index) in productDetail?.product" :key="index">
                            <ion-col class="type-name"> <div>{{product.type}}</div> </ion-col>
                            <ion-col class="type-name" size="8">{{product.value}}</ion-col>
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
ion-select{
    color: #0d0d0d;
}
</style>