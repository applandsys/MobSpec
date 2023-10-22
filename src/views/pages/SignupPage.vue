<script setup lang="ts">
import PageLayout from "@/views/components/base/PageLayout.vue";
import {IonCol, IonGrid, IonRow, IonInput, IonItem, IonList, IonButton} from "@ionic/vue";
import InputText from "@/views/components/common/InputText.vue";
import {personCircleOutline, personOutline, mailOutline, lockClosedOutline} from "ionicons/icons";
import {ref} from "vue";

const userName = ref<string>('');
const userEmail = ref<string>('');
const userPassword = ref<string>('');

</script>
<template>
    <PageLayout page-title="Sign up">
        <div id="container">
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <h2 class="ion-text-center app-title">Sign up form</h2>
                        <p class="ion-text-center ion-color-dark">Sign up to use extra features like give review, rating, fav list etc.</p>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <InputText :icon="personOutline" placeholder="Input Username"  :model-value="userName" @update:model-value="newValue => userName = newValue"/>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <InputText :icon="mailOutline" placeholder="Input Email"  :model-value="userEmail" @update:model-value="newValue => userEmail = newValue"/>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <InputText :icon="lockClosedOutline" placeholder="Input Password"  :model-value="userPassword" @update:model-value="newValue => userPassword = newValue"/>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col class="ion-text-center">
                        <ion-button class="ion-text-center" shape="round"  color="tertiary" >Sign up</ion-button>
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
