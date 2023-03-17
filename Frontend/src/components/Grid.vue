<template>
  <div v-for="(category, index) in cat" :key=category.id class="column no-wrap">
    <div class="row my-font flex justify-center text-capitalized text-h4">
      <div style="height: 100px;" class="flex items-center text-center justify-center">
        <q-input borderless type="textarea" v-on:blur="topicChanged()" autogrow v-model.trim="topics[index]" :input-style="{ fontSize: '35px', width: '200px', lineHeight: '35px', textAlign:'center'}"/>
      </div>
    </div>
    <div v-for="question in category.questions" :key="question.gridID" class="row no-wrap">
        <q-card 
        v-bind:class="question.edited ? 'bg-teal-3 q-ma-sm cursor-pointer' : 'bg-grey q-ma-sm cursor-pointer'" 
        v-bind:style="$q.screen.gt.md ? {'width' : '270px'} : {'width' : '200px'}"
        v-on:click="$router.push({path: `/${$route.params.GameID}/${question.gridID}`, replace: false})">
          <q-card-section>
            <div class="text-black text-center text-h1 my-font text-weight-bold">
              {{ (((question.gridID) % 5) + 1) * 100 }}
            </div>
          </q-card-section>
          <q-popup-proxy context-menu>
            <q-btn color="grey" icon="comments_disabled" label="Disable"/>
          </q-popup-proxy>
        </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue';
import { Category } from './models';
import { useRoute } from 'vue-router';
import { api } from 'src/boot/axios';

export default defineComponent({
  name: 'QuestionGrid',
  async setup() {
    const route = useRoute()
    const gameJson = JSON.stringify({ gameID: `${route.params.GameID}` });
    const resGame = await api.post('/api/game', gameJson, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    var cat = ref<Category[]>()
    cat.value = resGame.data.categories
    const helper = resGame.data.categories 
    var topics = ref<string[]>(
      Object.keys(helper).map(
        function(key){
          return helper[key].topic;
        }))
    console.log(topics)


    async function topicChanged(){
      const topicJson = JSON.stringify({ 
        gameID: `${route.params.GameID}`,
        categories: topics.value
      });
      const resTopic = await api.post('/api/game/topic', topicJson, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    }
    // // eslint-disable-next-line vue/no-watch-after-await
    // watchEffect(() => {
    //   topics.value.map(function(){console.log('w')})
    // })
    return { cat, topics, topicChanged };
  },
});
</script>
