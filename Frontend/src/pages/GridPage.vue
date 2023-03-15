suspended
<template>
  <q-layout>
    <q-page class="row items-start justify-center">
      <suspense>
        <template #fallback>
          Loading...
        </template>
      
        <questions-grid></questions-grid>
      </suspense>
      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-page>
  </q-layout>
</template>

<script lang="ts">
import QuestionsGrid from 'src/components/Grid.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { QuestionsGrid },
  setup() {
    return {};
  }
});
</script>
