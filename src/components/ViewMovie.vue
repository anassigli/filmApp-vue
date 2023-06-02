<script>

import {MovieService} from "@/services/MovieService";

export default {
  name: "ViewMovie",
  data:function(){
    return {
      movieId : this.$route.params.movieId,
      loading : false,
      movie : {},
      errorMessage : null

    }
  },
  created: async function() {
    try{
      this.loading = true;
      let response = await MovieService.getMovie(this.movieId);
      this.movie = response.data;
      console.log(this.movie.director.name)
      this.loading = false;
    }
    catch (error){
      this.errorMessage = error;
      this.loading = false
    }
  }
}
</script>

<template>

  <div class="container-fluid">
    <div class="card">
      <div class="card-header">
        Featured
      </div>

      <div class="card-body">
        <h5 class="card-title">À propos du film</h5>
        <p class="card-text">Nom du film : {{movie.title}}</p>
        <p class="card-text">Année de sortie : {{movie.release_year}}</p>
        <p class="card-text">Genre : {{movie.genre}}</p>
        <p class="card-text">Langue : {{movie.language}}</p>
        <h5 class="card-title">À propos du réalisateur</h5>
        <p class="card-text">Nom : {{movie.director ? movie.director.name : ''}}  {{movie.director ? movie.director.lastname : ''}}</p>
        <p class="card-text">date de naissance : {{movie.director ? movie.director.birthdate : ''}}</p>
        <p class="card-text">Nationalité : {{movie.director ? movie.director.nationality : ''}}</p>


        <router-link :to="`/movies/edit/${movieId}`" class="btn btn-warning">Modifier</router-link>
      </div>

    </div>

  </div>
</template>

<style scoped>

</style>