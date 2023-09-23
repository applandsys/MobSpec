<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { ref } from 'vue';
import { playCircle } from 'ionicons/icons';
import HomeLayout from "@/views/components/base/HomeLayout.vue";
import axios from "axios";
import {useBrandStore} from "@/store/brand";

const myFirst = ref<string>('I fuck you Hima');
const testData = ref([]);

const brandStore =  useBrandStore();

const  loadUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            testData.value = response.data; // assigns the data from api call to the users variable
        });
}

loadUsers();

const handleFuck = ()=>{
  myFirst.value = "I fuck Hima";
}

console.log(brandStore.brandList);
brandStore.setBrandList([{name:'Realme',id: 2, image: 'iamge ling'}])
</script>
<template>
   <HomeLayout>
       <div id="container">
           <div class="app-title" style="border: 2px solid red"><h1>Mob Spec </h1></div>
           <div style="color: red" >Store=={{brandStore.brandList}}</div>
       </div>
   </HomeLayout>
</template>
<style scoped>
#container {
  text-align: center;
    .app-title{
        & h1{
            font-size: 2rem;
            color: #744253;
            font-family: fantasy;
            margin: -190px;
        }
        & a {
            text-decoration: none;
        }
    }
}
</style>
