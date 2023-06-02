
<script>

import {MovieService} from "@/services/MovieService";

export default {
  name : "MovieEdit",
  components: {},
  data : function(){
    return {
      movieId: this.$route.params.movieId,
      movie : {
        title: "",
        release_year: "",
        language: "",
        posterPictureUrl: "",
        director: {
          name : "",
          lastname: "",
          nationality: "",
          birthdate: ""
        },
        genre: ""
      },
      errorMessage : null

    }
  },
  created:async function() {
    try {
let response = await MovieService.getMovie(this.movieId);
      this.movie = response.data;
    }
    catch (error){
this.errorMessage = error

    }

  },
  methods:{
    updateSubmit : async function () {
      try {
        let response = await MovieService.updateMovie(this.movie, this.movieId);
        if(response){
          return this.$router.push('/')
        }else{
          return this.$router.push(`/movies/edit/${this.movieId}`)
        }
      }
      catch (error) {
        console.log(error)
      }
    }
  }
}
</script>



<template>
  <form @submit.prevent="updateSubmit()">
    <div class="form-group">
      <label for="movieTitle">titre du film</label>
      <input v-model="movie.title" type="text" class="form-control" id="movieTitle" placeholder="titre">
    </div>

    <div class="form-group">
      <label for="movieReleaseYear">année de sortie</label>
      <input v-model="movie.release_year" type="number" class="form-control" id="movieReleaseYear" placeholder="année de sortie">
    </div>


    <select v-model="movie.language" class="form-select" aria-label="language select">
      <option selected>Open this select menu</option>
      <option value="English">English</option>
      <option value="Fançais">Français</option>
      <option value="Espagnol">Espagnol</option>
      <option value="Russe">Russe</option>
      <option value="Other">Other</option>
    </select>


    <div class="form-group">
      <label for="directorlastname">Nom du réalisateur</label>
      <input  v-model="movie.director.lastname" type="text" class="form-control" id="directorlastname" placeholder="Nom du réalisateur">
    </div>

    <div class="form-group">
      <label for="directorFirstName">Prénom du réalisateur</label>
      <input v-model="movie.director.name" type="text" class="form-control" id="directorFirstName" placeholder="Prénom du réalisateur">
    </div>

    <select v-model="movie.director.nationality" class="form-select" aria-label="nationalité du réalisateur">
      <option selected>Open this select menu</option>
      <option value="English">Anglais</option>
      <option value="Fançais">Français</option>
      <option value="Espagnol">Espagnol</option>
      <option value="Russe">Russe</option>
      <option value="Other">Other</option>
    </select>



    <div class="form-group">
      <label for="DirectorBday"></label>
      <input v-model="movie.director.birthdate" type="date" id="DirectorBday" name="DirectorBday"
             min="1800-01-01" max="2018-12-31">
    </div>

    <select v-model="movie.genre" class="form-select" aria-label="genre du film">
      <option selected>Genre du film</option>
      <option value="Thriller">Thriller</option>
      <option value="Action">Action</option>
      <option value="Romance">Romance</option>
      <option value="Comedy">Crime</option>
      <option value="Drama">Drama</option>
      <option value="Science Fiction">Science Fiction</option>
      <option value="Animation">Animation</option>


    </select>

    <button type="submit" class="btn btn-primary">Modifier</button>


  </form>
</template>

<style scoped>

</style>