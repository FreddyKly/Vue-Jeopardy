<template>
    <div class="text-black text-h3">
        {{ question }}
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
      question: {
        type: String,
        required: true
      }
    },
    setup(props) {
      return {  };
    },
  });
  </script>