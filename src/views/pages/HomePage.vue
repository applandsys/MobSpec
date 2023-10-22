<script setup lang="ts">
import HomeLayout from "@/views/components/base/HomeLayout.vue";
import HeroImage from "@/assets/images/homepage_hero.png";
import {IonImg, IonButton, IonRow, IonGrid, IonCol} from "@ionic/vue";
import router from "@/router";
</script>
<template>
   <HomeLayout>
       <div id="container">
           <ion-grid>
               <ion-row>
                   <ion-col>
                       <div class="app-title">
                           <h1>Mob Spec</h1>
                           <div class="sub-headline">Mobile Specification and Review</div>
                       </div>
                   </ion-col>
               </ion-row>
               <ion-row>
                   <ion-col>
                       <div class="hero-image">
                           <ion-img
                                   :src="HeroImage"
                                   alt="Hero"
                           ></ion-img>
                       </div>
                   </ion-col>
               </ion-row>
               <ion-row>
                   <ion-col>
                       <ion-button shape="round" router-link="/brand/" color="tertiary" >All Mobile Brands</ion-button>
                   </ion-col>
               </ion-row>
               <ion-row>
                   <ion-col>
                       <div class="signup-login-text">
                           <div  class="m20 medium-text"  @click="() => router.push('/signin')">
                             Sign in
                           </div>
                           <div>|</div>
                           <div  class="m20 medium-text" @click="() => router.push('/signup')">
                              Sign up
                           </div>
                       </div>
                   </ion-col>
               </ion-row>
               <ion-row>
                   <ion-col>
                         <div class="lower-text">
                             Check before buying
                             your  favorite Cell phone
                         </div>
                   </ion-col>
               </ion-row>
               <ion-row>
                   <ion-col>
                       <div class="guarantee">We do not guarantee that all the pieces of information in this app are 100% correct </div>
                   </ion-col>
               </ion-row>
           </ion-grid>
       </div>
   </HomeLayout>
</template>
<style scoped>
#container {
    display: flex;
    text-align: center;
    justify-content: center;
    height: 100%;
    .app-title{
        & h1{
            font-size: 2rem;
            color: #744253;
            font-family: fantasy;
        }
        & a {
            text-decoration: none;
        }
        margin-bottom: 10px;
    }
    .sub-headline{
        color: #000000;
    }
    .hero-image{
        margin-bottom: 10px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px;
    }


        .lower-text{
            margin-top: 7px;
            align-items: center;
            font-size: 1.8rem;
            text-align: right;
            color: #514D4D;
            font-weight: 700;
        }

}

.guarantee{
    font-size: 10px;
    color: #ed576b;
}

.m20{
    margin: 20px;
}

.signup-login-text{
   display: flex;
    align-items: center;
    justify-content: center;
    color: #545353;
}

.medium-text{
    font-size: 20px;
    font-weight: 600;
}

.medium-text:hover{
    color: #3d9bf8;
    font-weight: 800;
}
</style>
