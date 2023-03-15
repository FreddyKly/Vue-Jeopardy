<template>
    <q-page class="row my-font bg-teal-3 border">
      <suspense>
        <template #fallback>
          Loading...
        </template>
      
        <Question></Question>
      </suspense>
    </q-page>
  </template>
  
  <script lang="ts">
  import Question from 'src/components/Question.vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'QuestionPage',
    components: {Question},
    setup () {
      return { };
    }
  });
  </script>
  