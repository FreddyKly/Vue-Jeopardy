<template>
  {{ categories }}
  <div v-for="category in categories" :key=category.id class="column no-wrap">
    <div class="row my-font flex justify-center text-capitalized text-h4">
      <div style="height: 100px;" class="flex items-center text-center justify-center">
        {{ category[0].gridID }}
        <q-input borderless type="textarea" autogrow v-model="category.topic" :input-style="{ fontSize: '35px', width: '200px', lineHeight: '35px', textAlign:'center'}"/>
      </div>
      
    </div>
    <div v-for="question in category.question" :key="question.id" class="row no-wrap">
        <q-card 
        class="bg-teal-3 q-ma-sm cursor-pointer" 
        v-bind:style="$q.screen.gt.md ? {'width' : '270px'} : {'width' : '200px'}"
        v-on:click="$router.push({path: `/${$route.params.GridID}/${question.id}`, replace: false})">
          <q-card-section>
            <div class="text-black text-center text-h1 my-font text-weight-bold">
              {{ question.points }}
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
  PropType,
  ref
} from 'vue';
import { Category } from './models';
import { useRoute } from 'vue-router';
import { api } from 'src/boot/axios';

export default defineComponent({
  name: 'QuestionGrid',
  async setup() {
    const route = useRoute()
    const gameJson = JSON.stringify({ gameID: `${route.params.GridID}` });
    const res = await api.post('/api/game', gameJson, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    var cat = <Category> {title: res.data.categories}
    const categories = res.data.categories
    console.log(cat)
    return { categories };
  },
});
</script>
