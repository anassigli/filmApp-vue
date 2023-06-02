import axios from "axios"

export class MovieService{
    static serverURL = "http://localhost:9000"

    static getAllMovies(){
        //let dataURL = this.serverURL+"/movies";
        let dataURL = `${this.serverURL}/movies`;
        return axios.get(dataURL);
    }

    static getMovie(movieId){
        let dataURL  = `${this.serverURL}/movies/${movieId}`;
        return axios.get(dataURL)
    }


    static createMovie(movie){
        let dataURL  = `${this.serverURL}/movies/`;
        return axios.post(dataURL,movie)
    }


    static updateMovie(movie, movieId){
        let dataURL  = `${this.serverURL}/movies/${movieId}`;
        return axios.put(dataURL,movie)
    }

    static deleteMovie(movieId){
        let dataURL  = `${this.serverURL}/movies/${movieId}`;
        return axios.delete(dataURL)
    }
}

