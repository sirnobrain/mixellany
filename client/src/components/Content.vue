<template lang="html">
  <div class="row">
    <div class="col-sm-6 col-md-4" v-for="(data, index) in dataMasukan">
      <div class="thumbnail">
        <img v-bind:src="data.imageUrl" alt="wanita-muslimah" class="style-gambar">
        <div class="caption">
          <h3>{{ data.caption }}</h3>
          <p>{{ data.tags }}</p>
          <p><a href="#" class="btn btn-danger glyphicon glyphicon-trash" role="button" @click="removeData(index)"> Delete</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataMasukan: [
        {_id: 1, imageUrl: 'http://carijodoh.lihatdisini.com/wp-content/uploads/2015/05/Cara-Wanita-Sholehah-Mencari-Jodoh.jpg', fileName: 'tets', caption: 'bebas', tags: 'baru'},
        {_id: 2, imageUrl: 'https://3.bp.blogspot.com/-PlrLK7az9Rc/V7Qq3aCDMcI/AAAAAAAACPc/Lz2OG60n_0Mx9ZUUQcMUrsjUNCggZhw-QCLcB/s320/foto%2Bmuslimah.jpg', fileName: 'tets', caption: 'ojo', tags: 'lali'},
        {_id: 3, imageUrl: 'http://2.bp.blogspot.com/-TAPFk1-PY30/UxV1qF4Go0I/AAAAAAAAAUA/mZd32gt8c20/s1600/cari+jodoh+online+gratis.jpg', fileName: 'tets', caption: 'ono', tags: 'wae'},
        {_id: 4, imageUrl: 'http://carijodoh.lihatdisini.com/wp-content/uploads/2015/05/Cara-Wanita-Sholehah-Mencari-Jodoh.jpg', fileName: 'tets', caption: 'pimen', tags: 'sebabe'},
        {_id: 5, imageUrl: 'http://www.caricalon.com/wp-content/uploads/2013/12/RISMA-WANITA-MENCARI-JODOH-DI-PEKANBARU-RIAU-INDONESIA.jpg', fileName: 'tets', caption: 'jooss', tags: 'pokoke'},
        {_id: 6, imageUrl: 'http://3.bp.blogspot.com/-Dk0e2wLA7EI/T7tiaJMQbDI/AAAAAAAAAh0/QFB4neMocPs/s320/cari_jodoh_muslim_gratis.jpg', fileName: 'tets', caption: 'ora ono', tags: 'anyar'}
      ]
    }
  },
  methods: {
    removeData (dataHapus) {
      this.dataMasukan.splice(dataHapus, 1)
    }
  }
}
</script>

<style lang="css">
img.style-gambar {
  width: 100%;
  height: 400px;
}
</style>
