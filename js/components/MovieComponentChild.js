import Movie from "./Movie.js";

export default {
    name: "MovieComponentChild",

    template: `
    <section class="mediaLibrary">
        <div class="selectionHeader">
            <h1>Movies</h1>
            <p>Sit back and relax. Enjoy one of the many movies available on Flashback by Roku</p>
        </div>
        <div class="row">
            <Movie v-for="movie in movieList" :livemovie="movie"></Movie>
        </div>
    </section>
    `,

    data: function() {
        return {
            movieList: [],
        }
    },

    created: function() {
        // this will fire when the component gets built
        this.fetchAllMovies();
    },

    methods: {
        fetchAllMovies() {
            let url = `./admin/index.php?getChildMovies=true`;

            fetch(url)
            .then(res => res.json())
            .then(data => (this.movieList = data))
            .catch((err) => {console.error(err)})
        },
    },

    components: {
        Movie: Movie,
    }

}