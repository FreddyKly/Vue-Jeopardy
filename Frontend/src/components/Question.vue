<template>
    <div class="text-black text-h3">
      hey
    </div>
  </template>
  
  <script lang="ts">
  import {
    defineComponent
  } from 'vue';
  import { useRoute } from 'vue-router';
  import { api } from 'src/boot/axios';
  
  export default defineComponent({
    name: 'QuestionGrid',
    async setup() {
      const route = useRoute()
      const gameJson = JSON.stringify({ gameID: `${route.params.GameID}` });
      const resGame = await api.post('/api/game', gameJson, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return {  };
    },
  });
  </script>