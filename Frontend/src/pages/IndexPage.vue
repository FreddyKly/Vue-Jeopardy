<template>
    <q-page class="flex justify-center items-center">
        <q-btn class="my-font bg-teal-3" v-on:click="newGame()" icon="add" label="New Game" text-color="black"/>
    </q-page>
    
  </template>
  
  <script lang="ts">
  import { api } from 'src/boot/axios';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'QuestionPage',
    setup () {
      const router = useRouter()
      async function newGame() {
        const userJson = JSON.stringify({ user: 'LinitGaws' });
        const res = await api.post('/api/game', userJson, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(res.data.gameID)
        router.push(`${res.data.gameID}`)
      }
      return { newGame: newGame };
    }
  });
  </script>
  