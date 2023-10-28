<script setup lang="ts">
import PageLayout from "@/views/components/base/PageLayout.vue";
import {IonCol, IonGrid, IonRow, IonInput, IonItem, IonList, IonButton} from "@ionic/vue";
import InputText from "@/views/components/common/InputText.vue";
import {personCircleOutline, personOutline, mailOutline, lockClosedOutline} from "ionicons/icons";
import {ref} from "vue";
import router from "@/router";

const userName = ref<string>('');
const userPassword = ref<string>('');

</script>
<template>
    <PageLayout page-title="Sign in">
        <div id="container">
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-col>
                            <h2 class="ion-text-center app-title">Sign in form</h2>
                            <p class="ion-text-center info-text">Sign in to use extra features like give review, rating, fav list etc.</p>
                        </ion-col>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <InputText :icon="personOutline" placeholder="Input  Email"  :model-value="userName" @update:model-value="newValue => userName = newValue"/>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <InputText :icon="lockClosedOutline" placeholder="Input Password"  :model-value="userPassword" @update:model-value="newValue => userPassword = newValue"/>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <div  class="info-text" @click="() => router.push('/forget-pass')">
                            Forget your password?
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col class="ion-text-center">
                        <ion-button class="ion-text-center" shape="round"  color="tertiary" >Sign in</ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </div>
    </PageLayout>
</template>
<style scoped>
#container {

}
h2{
    color: #000;
    font-weight: 700;
}
placeholder{
    color: #000000;
}
</style>
