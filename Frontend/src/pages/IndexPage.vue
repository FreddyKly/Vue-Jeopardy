<template>
  <q-page class="row items-center justify-evenly">
    <questions-grid
      title="QuestionGrid"
      :questions="questions"
    ></questions-grid>
  </q-page>
</template>

<script lang="ts">
import { QuestionCard } from 'components/models';
import QuestionsGrid from 'src/components/QuestionGrid.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { QuestionsGrid },
  setup () {
    const questions = ref<QuestionCard[]>([
      {
        id: 1,
        points: 100,
        question: 'Who is the best'
      },
      {
        id: 2,
        points: 200,
        question: 'Who is the best'
      },
      {
        id: 3,
        points: 300,
        question: 'Who is the best'
      },
    ]);
    return { questions };
  }
});
</script>
