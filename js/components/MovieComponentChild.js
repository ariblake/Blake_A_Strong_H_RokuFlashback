import Movie from "./Movie.js";

export default {
    name: "MovieComponentChild",

    template: `
    <section class="mediaLibrary">
        <div class="selectionHeader">
            <h1>Movies</h1>
            <p>Sit back and relax. Enjoy one of the many movies available on Flashback by Roku</p>
            <nav class="filterNav">
                <h3>Filter More:</h3>
                <ul>
                </ul>
                <ul>
                    <li><h3>Decade</h3></li>
                </ul>
            </nav>
        </div>
        <div class="row" id="tvLibrary">
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
            let url = `./admin/index.php?media=movies&adult=0`;

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