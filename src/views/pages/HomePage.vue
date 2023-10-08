<script setup lang="ts">
import HomeLayout from "@/views/components/base/HomeLayout.vue";
import HeroImage from "@/assets/images/homepage_hero.png";
import {IonImg, IonButton} from "@ionic/vue";
</script>
<template>
   <HomeLayout>
       <div id="container">
           <div class="app-title">
               <h1>Mob Spec</h1>
               <div class="sub-headline">Mobile Specification and Review</div>
           </div>
           <div class="hero-image">
               <ion-img
                       :src="HeroImage"
                       alt="Hero"
               ></ion-img>
           </div>
           <div class="lower-third">
               <ion-button shape="round" router-link="/brand/" color="tertiary" >Start Now</ion-button>
              <div class="lower-text">
                  Check before buying
                  your  favorite Cell phone
              </div>
           </div>
       </div>
   </HomeLayout>
</template>
<style scoped>
#container {
    text-align: center;
    margin-top: -81px;
    .app-title{
        & h1{
            font-size: 2rem;
            color: #744253;
            font-family: fantasy;
        }
        & a {
            text-decoration: none;
        }
        margin-bottom: 50px;
    }
    .sub-headline{
        color: #000000;
    }
    .hero-image{
        margin-bottom: 20px;
    }
    .lower-third{
        margin-top: 7px;
        position: absolute;
        align-items: center;
        bottom: 20%;
        right: 5%;
        font-size: 1.8rem;
        text-align: right;
        color: #514D4D;
        font-weight: 700;
        .lower-text{
            margin-top: 20px;
        }
    }
}
</style>
