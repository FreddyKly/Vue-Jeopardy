<template>
    <q-page class="flex justify-center items-center">
        <q-btn class="my-font bg-teal-3" v-on:click="newGame()" icon="add" label="New Game" text-color="black"/>
    </q-page>
    
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'QuestionPage',
    setup () {
      const router = useRouter()
      function newGame() {
        console.log('hey')
        router.push('/Grid')
      }
      return { newGame: newGame };
    }
  });
  </script>
  