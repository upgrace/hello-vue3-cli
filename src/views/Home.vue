<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script>
import {Options, Vue} from 'vue-class-component'
// import {mapGetters} from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  }
})
export default class Home extends Vue {}
</script>
