<template>
    <q-page class="flex justify-center items-center">
        <q-btn class="my-font bg-teal-3" v-on:click="$router.push('/Grid')" icon="add" label="New Game" text-color="black"/>
    </q-page>
    
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'QuestionPage',
    setup () {
      return {  };
    }
  });
  </script>
  