<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">aigli movies app</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-between" style="padding-left: 2em ; padding-right:2em" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Acceuil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/movies/add">Ajouter un film</a>
        </li>
      </ul>
    </div>
  </nav>

  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

