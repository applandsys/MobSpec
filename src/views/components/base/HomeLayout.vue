<script lang="ts" setup>
import {IonContent, IonPage} from "@ionic/vue";
</script>
<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="circle-top"></div>
            <div> <slot></slot></div>
        </ion-content>
    </ion-page>
</template>

<style scoped>
ion-content {
    --background: var(--theme-background-color);
}

.circle-top
{
    background: url(/src/assets/images/gray_circle.png);
    height: 198px;
    width: 300px;
    background-position-x: -100px;
    background-position-y: -100px;
    background-repeat: no-repeat;
    position: absolute;

}



</style>