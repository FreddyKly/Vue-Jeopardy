<template>
  <q-page>
    <div class="column fixed-center">
      <div class="col">
        <div class="row justify-center items-center" style="width: 205px;">
          <q-input dense color="teal-6" label-color="grey-9" label="Username" class="col q-pa-md text-grey"
            v-model.trim="username" :input-style="{ color: 'grey' }" />
        </div>
        <div class="row justify-center" style="width: 205px;">
          <q-btn class="col bg-teal-3 q-ma-md" v-on:click="newGame()" icon="add" label="New Game" text-color="black" />
        </div>
        <div class="row justify-center no-wrap" style="width: 205px;">
          <q-btn class="col my-font bg-teal-3 q-ma-md" v-on:click="joinGame = !joinGame" icon="group_add"
            label="Join Game" text-color="black" />
        </div>
      </div>
      <div class="col" style="width: 205px;">
        <transition appear enter-active-class="animated fadeInDown" leave-active-class="animated fadeOut">
          <div v-if="joinGame" class="row no-wrap">
            <q-input class="col-10 q-mt-md q-ml-md q-mr-sm" color="teal-6" label="Game-ID" label-color="grey-9" dense
              v-model="gameID" style="width: 130px;"></q-input>
            <q-btn class="col-2 q-mt-md" v-on:click="$router.push(`${gameID}`)" color="teal-3" icon="arrow_right" text-color="black" style="height: 30px;" />
          </div>
        </transition>
      </div>
    </div>









  </q-page>
</template>
  
<script lang="ts">
import { api } from 'src/boot/axios';
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'QuestionPage',
  setup() {
    const router = useRouter()
    var username = ref<string>()
    var gameID = ref<string>()
    var joinGame = ref<boolean>(false)
    async function newGame() {
      const userJson = JSON.stringify({ user: username.value });
      const res = await api.post('/api/game/newGame', userJson, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.data.gameID)
      router.push(`${res.data.gameID}`)
    }
    return { newGame: newGame, username, joinGame, gameID };
  }
});
</script>
  