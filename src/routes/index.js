
import {createRouter , createWebHistory} from 'vue-router';
import MovieManager from "@/components/MovieManager.vue";
import AddMovie from "@/components/AddMovie.vue";
import MovieEdit from "@/components/MovieEdit.vue";
import ViewMovie from "@/components/ViewMovie.vue";


const routes = [

    {
        path: '/',
        name: 'MovieManager',
        component: MovieManager
    },
    {
        path: '/movies/add',
        name: 'AddMovie',
        component: AddMovie
    },
    {
        path: '/movies/edit/:movieId',
        name: 'MovieEdit',
        component: MovieEdit
    },

    {
        path: '/movies/view/:movieId',
        name: 'ViewMovie',
        component: ViewMovie
    },

];

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes
})

export default router;