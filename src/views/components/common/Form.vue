<script lang="ts" setup>
const emit = defineEmits(['formSubmit']);

const submitForm = ($event) =>{
    emit('formSubmit',$event.target.value);
}
</script>

<template>
    <div>
       <form method="POST" @submit.prevent="submitForm($event)">
           <slot></slot>
       </form>
    </div>
</template>

<style lang="scss" scoped>

</style>