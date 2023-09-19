<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { ref } from 'vue';
import { playCircle } from 'ionicons/icons';
import HomeLayout from "@/views/components/base/HomeLayout.vue";

const myFirst = ref<string>('I fuck you Hima');

const handleFuck = ()=>{
  myFirst.value = "I fuck Hima";
}
</script>
<template>
   <HomeLayout>
       <div id="container">
           <div class="app-title"><h1>Mob Spec</h1></div>
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
        }
        & a {
            text-decoration: none;
        }
    }
}
</style>
