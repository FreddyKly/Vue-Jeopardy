<template>
  <div class="text-black text-h3" id="topic">
    {{ topic }}
    <p class="q-pl-lg text-h6 ">{{ ((Number($route.params.Qid) + 1) % 5) * 100 }}</p>
  </div>
  <div v-if="isEdited" class="col q-ma-lg flex justify-end items-start">
    <q-btn color="teal-5" icon="edit" v-on:click="isEdited = false">
    </q-btn>
  </div>

  <div v-if="!isEdited" class="column full-width full-height flex justify-center items-center">
    <q-input borderless type="textarea" v-on:blur="questionChanged()" autogrow v-model.trim="questionText"
      :input-style="{ fontSize: '45px', width: '400px', lineHeight: '45px', textAlign: 'center' }" />
    <h6 >or</h6>
    <q-uploader url="http://localhost:4444/upload" style="max-width: 300px" label="Upload Files" color="teal-4"
      text-color="black" class="bg-teal-2" />
  </div>
  <div v-if="isEdited" class="column full-width full-height flex justify-center items-center">
    <p :style="{ fontSize: '45px', width: '400px', lineHeight: '45px', textAlign: 'center' }">{{ questionText }}</p>
  </div>

  <q-page-sticky position="bottom-left" :offset="[18, 18]">
    <q-btn fab icon="arrow_back" color="teal-5" v-on:click="$router.push({ path: `/${$route.params.GameID}` })" />
  </q-page-sticky>
</template>
  
<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue';
import { useRoute } from 'vue-router';
import { api } from 'src/boot/axios';

export default defineComponent({
  name: 'QuestionComponent',
  async setup() {
    const route = useRoute()
    var questionText = ref<string>()
    const questionIdx = Number(route.params.Qid) % 5
    const columnIdx = Math.trunc(Number(route.params.Qid) / 5)
    
    const gameJson = JSON.stringify({ gameID: `${route.params.GameID}` });
    const resGame = await api.post('/api/game', gameJson, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    const category = resGame.data.categories[columnIdx]
    const topic = category.topic
    var isEdited = ref<boolean>(category.questions[questionIdx].edited)
    questionText.value = category.questions[questionIdx].question
    console.log(isEdited)

    async function questionChanged() {
        const questionJson = JSON.stringify({ 
          gameID: `${route.params.GameID}`,
          questionID: route.params.Qid,
          question: questionText.value,
          edited: true
        });
        await api.post('/api/game/question', questionJson, {
          headers: {
            'Content-Type': 'application/json'
          }
      })
    }
    return { topic, questionText, isEdited, questionChanged };
  },
});
</script>

<style>
/* -3 to compensate the h3 header of the topic and true center the items beneath */
#topic {
  margin-bottom: -3rem
}
</style>