<template>
    <q-page class="row my-font bg-teal-3 border">
      <Question :question="title"></Question>
    </q-page>
  </template>
  
  <script lang="ts">
  import { QuestionCard } from 'components/models';
  import Question from 'src/components/Question.vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'QuestionPage',
    components: {Question},
    setup () {
        const title = 'Best Ninja in Konoha'
      return { title };
    }
  });
  </script>
  