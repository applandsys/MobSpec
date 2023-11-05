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
    IonLoading,
    IonMenu, IonMenuButton,
    IonItem, IonLabel, IonList
} from "@ionic/vue";

interface Props{
    pageTitle: string;
    isLoading?: boolean
}
const {pageTitle, isLoading} =  defineProps<Props>();
</script>
<template>
    <div>
    <ion-menu content-id="main-content">
        <ion-header>
            <ion-toolbar>
                <ion-title>Navigation</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item>
                    <ion-label>My Wish List</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>My Reviews</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>My Profile</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>Change Password</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>My Queries</ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-menu>
    <ion-page id="main-content">
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button> <ion-back-button></ion-back-button> </ion-button>
                </ion-buttons>
                <ion-title>{{pageTitle}}</ion-title>
                <ion-buttons slot="end">
                    <ion-menu-button></ion-menu-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true" >
            <div class="main-content  xc">
                <slot></slot>
            </div>
        </ion-content>
        <ion-loading :isOpen="isLoading" message="Loading..." spinner="circles"></ion-loading>
    </ion-page>
    </div>
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