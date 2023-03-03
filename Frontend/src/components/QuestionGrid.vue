<template>
  <div v-for="n in 5" :key="`xs-${n}`" class="column no-wrap">
    <div v-for="n in 7" :key="`xs-${n}`" class="row no-wrap">
        <q-card v-for="question in questions" :key="question.id" class="question bg-teal-3 q-ma-sm">
          <q-card-section>
            <div class="text-black text-center text-h2 text-weight-bold">
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
import { QuestionCard } from './models';

export default defineComponent({
  name: 'QuestionGrid',
  props: {
    title: {
      type: String,
      required: true
    },
    questions: {
      type: Array as PropType<QuestionCard[]>,
      required: true
    }
  },
  setup(props) {
    return {  };
  },
});
</script>

<style lang="sass" scoped>
.question
  width: 150%
  max-width: 200px
</style>
