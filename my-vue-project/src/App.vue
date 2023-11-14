<template>
    <div id="app">
      <MessageView>Hello theara</MessageView>
      <MessageView>Hello Nan</MessageView>
      <MessageView>Hello From the bottom of the heart</MessageView>
    </div>
</template>

<script>
import MessageView from './components/MessageView.vue'

export default {
  name: 'app',
  components: {MessageView},
  data(){
    return{

    }
  }
}
</script>

<style>

</style>
