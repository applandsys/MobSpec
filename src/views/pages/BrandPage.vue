<script setup lang="ts">
import PageLayout from "@/views/components/base/PageLayout.vue";
import { IonGrid, IonRow, IonCol, IonInput, IonIcon, IonButton} from "@ionic/vue";
import { searchCircleOutline, arrowForwardOutline } from "ionicons/icons";
import {computed, ref, watch} from "vue";
import axios from "axios";
import API_URL from "@/config";
import {BrandItem} from "@/types/brand";
import {useAuth} from "@/store/auth";

const isLoading =  ref(false);
const searchKeyword = ref('');
const allBrand =  ref<BrandItem[]>([]);

const searchBrand = computed(()=>{
    let list = [];
    if (searchKeyword.value !== '') {
        list =  allBrand.value.filter(item => item?.brand_name?.toLowerCase().includes(searchKeyword.value.toLowerCase()));
    } else {
        list = allBrand.value;
    }
    return list || [];
});

const loadBrand = async () =>{
    isLoading.value = true;
    const { data } = await axios.get(`${API_URL}/api/brand-list-all`);
    allBrand.value = data.brands;
    isLoading.value = false;
}

const seeAllBrand = () =>{
    console.log("fuck hima");
}

allBrand.value.length===0 && loadBrand();

const authStore = useAuth();

console.log("authsote", authStore.userInfo);

</script>
<template>
    <PageLayout page-title="Brands" :is-loading="isLoading">
        <div id="container">
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <h2 class="ion-text-center app-title">Mob Spec</h2>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col class="ion-text-center sub-title">Mobile Specification and Review </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                            <div class="search-box">
                                <div style="display: flex; align-items: center">
                                    <ion-icon :src="searchCircleOutline" size="large" style=" margin-left: 10px"></ion-icon>
                                </div>
                                <div style=" margin-left: 12px">
                                    <ion-input v-model="searchKeyword" type="text" name="email" placeholder="Search by Brand"  ></ion-input>
                                </div>
                            </div>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <div class="brand-container">
                            <ion-button fill="clear" class="brand-item" v-for="(brand,index) in searchBrand" :key="index" :router-link="`/device-list/${brand.id}`">
                                    <div class="brand-name">
                                        {{brand.brand_name}}
                                    </div>
                            </ion-button>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <div class="see-all">
                            <ion-button fill="clear" @click="seeAllBrand" v-if="searchBrand.length < 15"> See All Brands  <ion-icon  :src="arrowForwardOutline"></ion-icon></ion-button>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </div>
    </PageLayout>
</template>
<style scoped>
#container {
    margin-top: 10px;
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
    }
}

.see-all{
    color: rgb(5, 168, 170);
    font-weight: 900;
    text-align: end;
    display: block;
    cursor: pointer;
}

ion-icon {
    --ionicon-stroke-width: 30px;
    color: #000;
}
</style>
