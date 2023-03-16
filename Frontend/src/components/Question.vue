<template>
    <div class="text-black text-h3">
      {{ topic }}
    </div>
    <div>
      
    </div>
    <div class="flex justify-center items-center">
      <q-uploader
        url="http://localhost:4444/upload"
        style="max-width: 300px"
        label="Upload Files"
        color="teal-4"
        text-color="black"
        class="bg-teal-2"
      />
    </div>
  </template>
  
  <script lang="ts">
  import {
    defineComponent
  } from 'vue';
  import { useRoute } from 'vue-router';
  import { api } from 'src/boot/axios';
  
  export default defineComponent({
    name: 'QuestionComponent',
    async setup() {
      const route = useRoute()
      const gameJson = JSON.stringify({ gameID: `${route.params.GameID}` });
      const resGame = await api.post('/api/game', gameJson, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const column = Math.trunc(Number(route.params.Qid) / 5)
      console.log(column)
      const topic = resGame.data.categories[column].topic
      return { topic };
    },
  });
  </script>