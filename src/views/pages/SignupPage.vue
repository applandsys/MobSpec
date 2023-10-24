<script setup lang="ts">
import PageLayout from "@/views/components/base/PageLayout.vue";
import {IonCol, IonGrid, IonRow, IonButton, IonIcon} from "@ionic/vue";
import InputText from "@/views/components/common/InputText.vue";
import {personCircleOutline, personOutline, mailOutline, lockClosedOutline} from "ionicons/icons";
import {reactive, ref} from "vue";
import {UserData} from "@/types/userinfo";
import CommonForm from "@/views/components/common/Form.vue";

const error = reactive<UserData>({
    username: '',
    email:'',
    password:''
});

const userData =  reactive<UserData>(
    {
        username: '',
        email: '',
        password: ''
    }
);

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const resetError = () =>{
    error.username ='';
    error.email ='';
    error.password ='';
}

const signupSubmit = () =>{
    resetError();
    if(userData.username===''){
        error.username = 'Username cant not be null';
    }
    if(userData.email===''){
        error.email = 'Email cant not be null';
    }
    if(!validateEmail(userData.email)){
        error.email = 'Email must need to be valid';
    }
    if(userData.password===''){
        error.password = 'Password cant not be null';
    }


}

</script>
<template>
    <PageLayout page-title="Sign up">
        <div id="container">
            <ion-grid>
                <ion-row>
                    <ion-col class="ion-text-center ion-margin-top">
                        <ion-icon :src="personCircleOutline" style="font-size: 100px"></ion-icon>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <h2 class="ion-text-center app-title">Sign up form</h2>
                        <p class="ion-text-center ion-color-dark info-text">Sign up to use extra features like give review, rating, fav list etc.</p>
                    </ion-col>
                </ion-row>
                <CommonForm>
                    <ion-row>
                        <ion-col>
                            <InputText :icon="personOutline" placeholder="Input Username"  :model-value="userData.username" @update:model-value="newValue => userData.username = newValue" :is-required="true"/>
                            <span class="error-text ion-text-center">{{error.username}}</span>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <InputText :icon="mailOutline" placeholder="Input Email"  :model-value="userData.email" @update:model-value="newValue => userData.email = newValue" :is-required="true"/>
                            <span class="error-text ion-text-center">{{error.email}}</span>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <InputText :icon="lockClosedOutline" placeholder="Input Password"  :model-value="userData.password" @update:model-value="newValue => userData.password = newValue" :is-required="true"/>
                            <span class="error-text ion-text-center">{{error.password}}</span>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col class="ion-text-center">
                            <ion-button class="ion-text-center" shape="round"  color="tertiary" @click="signupSubmit">Sign up</ion-button>
                        </ion-col>
                    </ion-row>
                </CommonForm>
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

.info-text{
    color: #65035e;
}
</style>
