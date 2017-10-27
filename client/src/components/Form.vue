<template lang="html">
  <form enctype="multipart/form-data" @submit.prevent="insertImage()">
    <div class="form-group">
      <label for="exampleInputFile">File input</label>
      <input type="file" id="exampleInputFile" class="style-file" name="image">
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary tombol-style"> Tampilkan</button>
    </div>
  </form>
</template>

<script>
export default {
  // data () {
  //
  // },
  // methods
}
</script>

<style lang="css">
button.btn.btn-primary.tombol-style {
  box-shadow: 2px 5px 7px 2px #BEBEBE;
  border-radius: 0px;
  padding: 20px;
  font-size: 20px;
}
</style>
