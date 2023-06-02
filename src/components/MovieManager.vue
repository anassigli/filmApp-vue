<template>

  <div>
    <input type="text" v-model="searchQuery" placeholder="Search...">
  </div>


<div class="container col-12" >
  <div class="card col-12" v-for="movie in filteredMovies" :key="movie">
    <img class="card-img-top" :src="movie.posterPictureUrl" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ movie.title }}</h5>
      <p class="card-text">Réalisateur : {{ movie.director.name }}</p>
      <p class="card-text">Année de sortie : {{movie.release_year}}</p>
      <p class="card-text"> VO: {{movie.language}}</p>
      <router-link :to="`/movies/view/${movie.id}`" class="btn btn-primary">Afficher</router-link>
      <router-link :to="`/movies/edit/${movie.id}`" class="btn btn-warning">Modifier</router-link>
      <a href="#" class="btn btn-danger" @click="deleteMovie(movie.id)">Supprimer</a>
    </div>
  </div>
</div>
</template>

<script>
import {MovieService} from "@/services/MovieService";

export default {
  name : "MovieManager",
  data : function(){
    return{
      loading :false,
      movies :[] ,
      errorMessage : null,
      searchQuery: ""
    }
  },
    created: async function() {
      this.fetchMovies();
      try {
        this.loading = true;
        let response = await MovieService.getAllMovies();
        this.movies = response.data;
      } catch (error) {
        this.errorMessage = error;
      } finally {
        this.loading = false;
      }
    }
  ,
  methods : {
    async fetchMovies() {
      try {
        this.loading = true;
        let response = await MovieService.getAllMovies();
        this.movies = response.data;
      } catch (error) {
        this.errorMessage = error;
      } finally {
        this.loading = false;
      }
    },
    deleteMovie : async function(movieId){
      try {
        let response = await MovieService.deleteMovie(movieId)
        if(response){
          let response = await MovieService.getAllMovies();
          this.movies = response.data;
        }
      }
      catch (error){
      console.log(error)
      }
    }
  }
  ,
  computed: {
    filteredMovies() {
      if (!this.searchQuery) {
        return this.movies;
      }

      const lowerCaseQuery = this.searchQuery.toLowerCase();
      return this.movies.filter(movie =>
          movie.title.toLowerCase().includes(lowerCaseQuery) ||
          movie.release_year.toString().includes(lowerCaseQuery) ||
          movie.director.name.toLowerCase().includes(lowerCaseQuery) ||
          movie.director.lastname.toLowerCase().includes(lowerCaseQuery)
      );
    }
  }
}
</script>

<style scoped>

</style>