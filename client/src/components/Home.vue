<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="text-center">
        <h2 class="barnd-style">Mixellany</h2>
      </div>
      <MaintContent></MaintContent>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import MaintContent from '@/components/MaintContent'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Navbar,
    MaintContent
  }
}
</script>

<style>
h2.barnd-style {
    border-bottom: 9px groove #43AAE5;
    color: black;
    font-size: 50px;
    font-family: 'Lobster', cursive;
}
</style>
