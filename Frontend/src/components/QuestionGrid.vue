<template>
  <div v-for="category in categories" :key=category.id class="column no-wrap">
    <div class="row my-font flex justify-center text-capitalized text-h4">
      {{ category.title }}
    </div>
    <div v-for="question in category.questions" :key="question.id" class="row no-wrap">
        <q-card 
        class="question bg-teal-3 q-ma-sm cursor-pointer" 
        v-bind:style="$q.screen.gt.md ? {'width' : '270px'} : {'width' : '200px'}"
        v-on:click="$router.push({path: `/Grid/${question.id}`, replace: false})">
          <q-card-section>
            <div class="text-black text-center text-h1 my-font text-weight-bold">
              {{ question.points }}
            </div>
          </q-card-section>
        </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from 'vue';
import { QuestionCard, Category } from './models';

export default defineComponent({
  name: 'QuestionGrid',
  props: {
    title: {
      type: String,
      required: true
    },
    categories: {
      type: Array as PropType<Category[]>,
      required: true
    }
  },
  setup(props) {
    return {  };
  },
});
</script>

<style lang="sass" scoped>
// .question
//   width: 300px
//   max-width: 300px
// </style>
