<script setup lang="ts">
import PageLayout from "@/views/components/base/PageLayout.vue";
import { IonGrid, IonRow, IonCol, IonInput, IonIcon, IonList, IonItem, IonImg, IonButton} from "@ionic/vue";
import {useProductStore} from "@/store/product";
import API_URL from "@/config";
import {useRoute} from "vue-router";
import NoImage from "@/assets/images/noimage.webp";

const route =  useRoute();
const brand_id =  route.params.id;
const productStore = useProductStore();
productStore.setProductList(brand_id);

</script>
<template>
    <PageLayout page-title="Brands Page">
            <ion-grid>
                <ion-row>
                    <ion-col><h2 class="ion-text-center app-title">Device List of  {{productStore.brandInfo?.brand_name}}</h2></ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-list lines="full" class="device-list">
                            <ion-item v-for="(item,index) in productStore.productByBrand" :key="index" :router-link="`/device-detail/${item.id}`">
                                <div class="product-wrapper">
                                    <div class="image-wrapper">
                                        <ion-img
                                            :alt="item?.image_name"
                                            :src="item?.image_name?`${API_URL}/product_image/${item?.image_name}.jpg`:NoImage"
                                        ></ion-img>
                                    </div>
                                    <div class="text-wrapper">
                                        <div class="device-name">
                                            {{item?.product_name}}
                                        </div>
                                        <div class="description">
                                            {{ item?.spotlight_feature.replace(/[^a-zA-Z0-9 , - . ]/g, "")}}
                                        </div>
                                    </div>
                                </div>
                            </ion-item>
                        </ion-list>
                    </ion-col>
                </ion-row>
            </ion-grid>
    </PageLayout>
</template>
<style scoped>
.device-list{
    border-radius: 20px;
    color: #0d0d0d;
}

.device-name{
    color: var(--regular-black);
    font-weight: 800;
}

.description{
    font-size: 11px;
    color: var( --regular-black);
}

.image-wrapper{
    width: 117px;
    height: 64px;
    margin-right: 5px;
    margin-top: 6px;
}

ion-item{
    background-color: #2dd36f;
}

.product-wrapper{
    display: flex; flex-direction: row; margin-top: 10px;
}
</style>
