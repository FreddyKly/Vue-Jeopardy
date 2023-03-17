<template>
  <div class="text-black text-h3" id="topic">
    {{ topic }}
  </div>
  <div class="column full-width full-height flex justify-center items-center">
    <q-input borderless type="textarea" v-on:blur="questionChanged()" autogrow v-model.trim="question"
      :input-style="{ fontSize: '45px', width: '400px', lineHeight: '45px', textAlign: 'center' }" />
    <h6>or</h6>
    <q-uploader url="http://localhost:4444/upload" style="max-width: 300px" label="Upload Files" color="teal-4"
      text-color="black" class="bg-teal-2" />
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
    var question = ref<string>()
    const route = useRoute()
    const gameJson = JSON.stringify({ gameID: `${route.params.GameID}` });
    const resGame = await api.post('/api/game', gameJson, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
     
    const column = Math.trunc(Number(route.params.Qid) / 5)
    console.log(resGame.data.categories[column].questions[Number(route.params.Qid)])
    const topic = resGame.data.categories[column].topic
    question.value = resGame.data.categories[column].questions[(Number(route.params.Qid) % 5)].question

    async function questionChanged() {
        const questionJson = JSON.stringify({ 
          gameID: `${route.params.GameID}`,
          questionID: route.params.Qid,
          question: question.value,
          edited: true
        });
        const resTopic = await api.post('/api/game/question', questionJson, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
    return { topic, question, questionChanged };
  },
});
</script>

<style>
/* -3 to compensate the h3 header of the topic and true center the items beneath */
#topic {
  margin-bottom: -3rem
}
</style>