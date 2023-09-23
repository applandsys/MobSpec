<script lang="ts" setup>
import {IonContent, IonPage, IonToolbar, IonHeader, IonTitle, IonButton, IonBackButton , IonButtons, IonMenuButton } from "@ionic/vue";

interface Props{
    pageTitle: string;
}
const {pageTitle} =  defineProps<Props>();
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
        <ion-content :fullscreen="true">
            <div class="main-content">
                <slot></slot>
            </div>
        </ion-content>
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
</style>