<script setup lang="ts">
import PageLayout from "@/views/components/base/PageLayout.vue";
import {IonCol, IonGrid, IonRow, IonButton, IonIcon, useIonRouter} from "@ionic/vue";
import InputText from "@/views/components/common/InputText.vue";
import {personCircleOutline, personOutline, mailOutline, lockClosedOutline} from "ionicons/icons";
import {reactive, ref} from "vue";
import {AuthData, UserData} from "@/types/userinfo";
import CommonForm from "@/views/components/common/Form.vue";
import axios from "axios";
import API_URL from "@/config";
import {useAuth} from "@/store/auth";
import {useValidateEmail} from "@/composables/emailValidation";

const ionRouter = useIonRouter();

const error = reactive<UserData>({
    name: '',
    email:'',
    password:''
});

const userData =  reactive<UserData>(
    {
        name: '',
        email: '',
        password: ''
    }
);

const isLoading = ref(false);

const authStore = useAuth();

const resetError = () =>{
    error.name ='';
    error.email ='';
    error.password ='';
}

const submitRequestSend = async (formData: UserData) =>{
    isLoading.value = true;
    const { data } = await axios.post(`${API_URL}/api/register`,formData);
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

const signupSubmit = async () =>{
    resetError();
    if(userData.name===''){
        error.name = 'Username cant not be null';
    }
    if(!useValidateEmail(userData.email)){
        error.email = 'Email must need to be valid';
    }
    if(userData.password===''){
        error.password = 'Password cant not be null';
    }

    if( error.name ==='' && error.email ==='' &&  error.password ===''){
        await submitRequestSend(userData);
        ionRouter.push('/brand');
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
                            <InputText :icon="personOutline" placeholder="Input Your Name"  :model-value="userData.name" @update:model-value="newValue => userData.name = newValue" :is-required="true"/>
                            <span class="error-text ion-text-center">{{error.name}}</span>
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


</style>
