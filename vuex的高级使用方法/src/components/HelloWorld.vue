<template>
  <div class="hello">
    {{count}}
    <br>
    {{$store.getters.doubleCount}}
        <br>
    <button @click="$store.commit('increment',2)">count++</button>
    <button @click="$store.dispatch('asIncrement')">异步count++</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    count(){
      return this.$store.state.count;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
