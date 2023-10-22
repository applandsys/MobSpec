<script lang="ts" setup>
import {
    IonContent,
    IonPage,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonButton,
    IonBackButton,
    IonButtons,
    IonLoading
} from "@ionic/vue";

interface Props{
    pageTitle: string;
    isLoading?: boolean
}
const {pageTitle, isLoading} =  defineProps<Props>();
</script>
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar  translucent>
                <ion-buttons slot="start">
                    <ion-button> <ion-back-button></ion-back-button> </ion-button>
                </ion-buttons>
                <ion-title>{{pageTitle}}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" >
            <div class="main-content  xc">
                <slot></slot>
            </div>
        </ion-content>
        <ion-loading :isOpen="isLoading" message="Loading..." spinner="circles"></ion-loading>
    </ion-page>
</template>

<style scoped>
ion-content {
    --background: var(--theme-background-color);
}
ion-button{
    --background: transparent;
    --color: #fff;
}


.main-content{
    margin-left: 24px;
    margin-right: 24px;
}


.xc {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>