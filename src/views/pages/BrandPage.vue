<script setup lang="ts">
import PageLayout from "@/views/components/base/PageLayout.vue";
import { IonGrid, IonRow, IonCol, IonInput, IonIcon, IonItem, IonImg, IonButton} from "@ionic/vue";
import { searchCircleOutline, arrowForwardOutline, personAddOutline } from "ionicons/icons";

import {useBrandStore} from "@/store/brand";

const brandStore =  useBrandStore();

brandStore.setBrandList();

const seeAllBrand = () =>{
    brandStore.setBrandListAll();
}

</script>
<template>
    <PageLayout page-title="Brands">
        <div id="container">
            <ion-grid>
                <ion-row>
                    <ion-col><h2 class="ion-text-center app-title">Mob Spec</h2></ion-col>
                </ion-row>
                <ion-row>
                    <ion-col class="ion-text-center sub-title">Mobile Specification and Review</ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                            <div class="search-box">
                                <div style="display: flex; align-items: center">
                                    <ion-icon :src="searchCircleOutline" size="large" style=" margin-left: 10px"></ion-icon>
                                </div>
                                <div style=" margin-left: 12px">
                                    <ion-input type="text" name="email" placeholder="Search by Brand" ></ion-input>
                                </div>
                            </div>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <div class="brand-container">
                            <ion-button fill="clear" class="brand-item" v-for="(brand,index) in brandStore.brandList" :key="index" :router-link="`/device-list/${brand.id}`">
                                    <div class="brand-name">
                                        {{brand.brand_name}}
                                    </div>
                                    <!--                                <div class="item-count">-->
                                    <!--                                    (584)-->
                                    <!--                                </div>-->
                            </ion-button>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <div class="see-all">
                            <ion-button fill="clear" @click="seeAllBrand"> See All Brands  <ion-icon  :src="arrowForwardOutline"></ion-icon></ion-button>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col class="ion-text-center">
                        <ion-button shape="round"  size="large" color="tertiary">Sign in / Sign up <ion-icon slot="end" :icon="personAddOutline"></ion-icon></ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </div>
    </PageLayout>
</template>
<style scoped>
#container {
    .app-title{
        color: var(--light-text-color);
        font-weight: bold;
    }

    .sub-title{
        color: var(--regular-black);
    }

    .search-box{
        display: flex;
        flex-direction: row;
        background-color: rgba(181, 220, 181, 0.3);
        color: #000;
        border-radius: 27px;
        &:hover{
            background-color: rgba(181, 220, 181, 0.5);
        }
    }

    ion-icon {
        --ionicon-stroke-width: 30px;
        color: #000;
    }

}

.brand-container {
    display: grid;
    grid-template-columns: auto auto;
    .brand-item{
        padding: 1px;
        background: #FCF6B1;
        margin-right: 5px;
        margin-bottom: 5px;
        color: #0d0d0d;
        text-align: center;
        border-radius: 10px;
        cursor: pointer;
        .brand-name{
            font-weight: bold;
            color: #371E30;
            font-size: 15px;
        }
        .item-count{

        }
    }
}

.see-all{
    color: rgb(5, 168, 170);
    font-weight: 900;
    text-align: end;
    display: block;
    cursor: pointer;
}

.icon-forward{
    margin-top: 1px;
    position: absolute;
}
</style>
