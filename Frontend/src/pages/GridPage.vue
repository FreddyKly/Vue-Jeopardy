<template>
  <q-layout>
    <q-page class="row items-center justify-center">
    <questions-grid
      title="QuestionGrid"
      :categories="categories"
    ></questions-grid>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-page>
</q-layout>
  
</template>

<script lang="ts">
import { QuestionCard, Category } from 'components/models';
import QuestionsGrid from 'src/components/Grid.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { QuestionsGrid },
  setup () {
    const categories = ref<Category[]>([
      {
        id: 1,
        title: 'Celebrities',
        questions: [
          <QuestionCard>{
          id: 1,
          points: 100,
          question: 'The GOAT of Soccer'
        },
        <QuestionCard>{
          id: 2,
          points: 200,
          question: 'The GOAT of Basketball'
        },
        <QuestionCard>{
          id: 3,
          points: 300,
          question: 'The GOAT of Film'
        },
        <QuestionCard>{
          id: 4,
          points: 400,
          question: 'The GOAT of Soccer'
        },
        <QuestionCard>{
          id: 5,
          points: 500,
          question: 'The GOAT of Soccer'
        }
      ]
      },
      {
        id: 2,
        title: 'Anime',
        questions: [
          <QuestionCard>{
          id: 6,
          points: 100,
          question: 'The GOAT of Titans'
        },
        <QuestionCard>{
          id: 7,
          points: 200,
          question: 'The GOAT of Manipulation'
        },
        <QuestionCard>{
          id: 8,
          points: 300,
          question: 'The GOAT of Volleyball'
        },
        <QuestionCard>{
          id: 9,
          points: 400,
          question: 'The GOAT of Ninjas'
        },
        <QuestionCard>{
          id: 10,
          points: 500,
          question: 'The GOAT of wobbly arms'
        },
      ]
      },
      {
        id: 2,
        title: 'Anime',
        questions: [
          <QuestionCard>{
          id: 11,
          points: 100,
          question: 'The GOAT of Titans'
        },
        <QuestionCard>{
          id: 12,
          points: 200,
          question: 'The GOAT of Manipulation'
        },
        <QuestionCard>{
          id: 13,
          points: 300,
          question: 'The GOAT of Volleyball'
        },
        <QuestionCard>{
          id: 14,
          points: 400,
          question: 'The GOAT of Ninjas'
        },
        <QuestionCard>{
          id: 15,
          points: 500,
          question: 'The GOAT of wobbly arms'
        },
      ]
      },
      {
        id: 2,
        title: 'Anime',
        questions: [
          <QuestionCard>{
          id: 16,
          points: 100,
          question: 'The GOAT of Titans'
        },
        <QuestionCard>{
          id: 17,
          points: 200,
          question: 'The GOAT of Manipulation'
        },
        <QuestionCard>{
          id: 18,
          points: 300,
          question: 'The GOAT of Volleyball'
        },
        <QuestionCard>{
          id: 19,
          points: 400,
          question: 'The GOAT of Ninjas'
        },
        <QuestionCard>{
          id: 20,
          points: 500,
          question: 'The GOAT of wobbly arms'
        },
      ]
      },
      {
        id: 2,
        title: 'Anime',
        questions: [
          <QuestionCard>{
          id: 21,
          points: 100,
          question: 'The GOAT of Titans'
        },
        <QuestionCard>{
          id: 22,
          points: 200,
          question: 'The GOAT of Manipulation'
        },
        <QuestionCard>{
          id: 23,
          points: 300,
          question: 'The GOAT of Volleyball'
        },
        <QuestionCard>{
          id: 24,
          points: 400,
          question: 'The GOAT of Ninjas'
        },
        <QuestionCard>{
          id: 25,
          points: 500,
          question: 'The GOAT of wobbly arms'
        },
      ]
      }
    ]);
    return { categories };
  }
});
</script>
