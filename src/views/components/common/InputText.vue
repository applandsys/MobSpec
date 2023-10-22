<script setup lang="ts">
import { IonIcon, IonInput }  from "@ionic/vue";
const props =  defineProps(['icon','placeholder','modelValue']);
defineEmits(['update:modelValue']);
</script>
<template>
    <div class="search-box">
        <div style="display: flex; align-items: center">
            <ion-icon :src="props.icon" size="large" style=" margin-left: 10px"></ion-icon>
        </div>
        <div style=" margin-left: 12px">
            <ion-input
                type="text"
                name="email"
                :placeholder="props.placeholder"
                :value="modelValue"
                @ionInput="$emit('update:modelValue', $event.target.value)" >
            </ion-input>
        </div>
    </div>
</template>

<style scoped>
.search-box{
    display: flex;
    flex-direction: row;
    background-color: #b6b0b0;
    color: #000;
    border-radius: 27px;
    &:hover{
        background-color: #D9D9D9;
    }
}
</style>