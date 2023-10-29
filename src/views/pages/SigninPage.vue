<script setup lang="ts">
import PageLayout from "@/views/components/base/PageLayout.vue";
import {IonCol, IonGrid, IonRow, IonButton, IonIcon} from "@ionic/vue";
import InputText from "@/views/components/common/InputText.vue";
import {personCircleOutline, personOutline, mailOutline, lockClosedOutline} from "ionicons/icons";
import {reactive, ref} from "vue";
import {AuthData, LoginData} from "@/types/userinfo";
import CommonForm from "@/views/components/common/Form.vue";
import {useValidateEmail} from "@/composables/emailValidation";
import axios from "axios";
import API_URL from "@/config";
import {useAuth} from "@/store/auth";

const isLoading = ref(false);

const loginForm =  reactive<LoginData>(
    {
        email: '',
        password: ''
    }
);

const error = reactive<LoginData>({
    email:'',
    password:''
});

const resetError = () =>{
    error.email ='';
    error.password ='';
}

const authStore = useAuth();

const submitRequestSend = async (formData: LoginData) =>{
    isLoading.value = true;
    const { data } = await axios.post(`${API_URL}/api/login`,formData);
    const authInfoPayload: AuthData = {
        isLogin: true,
        token: data.token,
        userInfo: {
            name:  data.data.user_data.name,
            email:  data.data.user_data.email,
            id:  data.data.user_data.id
        }
    }
    await authStore.setAuthInfo(authInfoPayload);
    isLoading.value = false;
}

const signInSubmit = () =>{
    resetError();
    if(!useValidateEmail(loginForm.email)){
        error.email = 'Email must need to be valid';
    }
    if(loginForm.password===''){
        error.password = 'Password cant not be null';
    }
    if( error.email ==='' &&  error.password ===''){
        submitRequestSend(loginForm);
    }
}

</script>
<template>
    <PageLayout page-title="Sign in">
        <div id="container">
            <ion-grid>
                <ion-row>
                    <ion-col class="ion-text-center ion-margin-top">
                        <ion-icon :src="personCircleOutline" style="font-size: 100px"></ion-icon>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <h2 class="ion-text-center app-title">Sign in form</h2>
                        <p class="ion-text-center ion-color-dark info-text">Sign in to use extra features like give review, rating, fav list etc.</p>
                    </ion-col>
                </ion-row>
                <CommonForm>
                    <ion-row>
                        <ion-col>
                            <InputText :icon="mailOutline" placeholder="Input Email"  :model-value="loginForm.email" @update:model-value="newValue => loginForm.email = newValue" :is-required="true"/>
                            <span class="error-text ion-text-center">{{error.email}}</span>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <InputText :icon="lockClosedOutline" placeholder="Input Password"  :model-value="loginForm.password" @update:model-value="newValue => loginForm.password = newValue" :is-required="true"/>
                            <span class="error-text ion-text-center">{{error.password}}</span>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col class="ion-text-center">
                            <ion-button class="ion-text-center" shape="round"  color="tertiary" @click="signInSubmit">Sign up</ion-button>
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
</style>
