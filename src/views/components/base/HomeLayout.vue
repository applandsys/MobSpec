<script lang="ts" setup>

import {IonContent, IonPage} from "@ionic/vue";
</script>
<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="circle-top"></div>
             <slot></slot>
            <div class="circle-bottom"></div>
        </ion-content>
    </ion-page>
</template>

<style scoped>
ion-content {
    --background: var(--theme-background-color);
}

.circle-top
{

}

.circle-bottom
{

}


</style>