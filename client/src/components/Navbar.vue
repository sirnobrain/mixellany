<template lang="html">
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Mixellany</a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
        <li>
          <a href="#">
            <button type="button" name="button" class="btn btn-danger glyphicon glyphicon-remove"> LogOut</button>
          </a>
        </li>
      </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css">
nav.navbar.navbar-default {
    border-radius: 0px;
}
</style>
