<template>
    <q-page class="row items-center justify-center">
      question
    </q-page>
  </template>
  
  <script lang="ts">
  import { QuestionCard, Category } from 'components/models';
  import QuestionsGrid from 'src/components/QuestionGrid.vue';
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'QuestionPage',
    setup () {
      return {  };
    }
  });
  </script>
  