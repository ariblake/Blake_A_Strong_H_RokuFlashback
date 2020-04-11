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
                <a class="btn" role="button" data-toggle="collapse" href="#decadeNav" aria-expanded="false" aria-controls="decadeNav">Decade</a>
                <!--<a class="btn" role="button" data-toggle="collapse" href="#genreNav" aria-expanded="false" aria-controls="genreNav">Genre</a>-->
                <div class="collapse" id="decadeNav">
                    <ul>
                        <li><a href="50" @click.prevent="filterDecade('5')">50s</a></li>
                        <li><a href="60" @click.prevent="filterDecade('6')">60s</a></li>
                        <li><a href="70" @click.prevent="filterDecade('7')">70s</a></li>
                        <li><a href="80" @click.prevent="filterDecade('8')">80s</a></li>
                        <li><a href="90" @click.prevent="filterDecade('9')">90s</a></li>
                        <li><a href="all" @click.prevent="fetchAllMovies">All</a></li>
                    </ul>
                </div>
                
                <div class="collapse" id="genreNav">
                    <ul>
                        <li><a href="adventure" @click.prevent="filterDecade('adventure')">Adventure</a></li>
                        <li><a href="comedy" @click.prevent="filterDecade('comedy')">Comedy</a></li>
                        <li><a href="drama" @click.prevent="filterDecade('drama')">Drama</a></li>
                        <li><a href="horror" @click.prevent="filterDecade('horror')">Horror</a></li>
                        <li><a href="musical" @click.prevent="filterDecade('musical')">Musical</a></li>
                        <li><a href="sci-fi" @click.prevent="filterDecade('sciencefiction')">Sci-Fi</a></li>
                        <li><a href="animation" @click.prevent="filterDecade('animation')">Animation</a></li>
                        <li><a href="family" @click.prevent="filterDecade('family')">Family</a></li>
                        <li><a href="fantasy" @click.prevent="filterDecade('fantasy')">Fantasy</a></li>
                        <li><a href="romance" @click.prevent="filterDecade('romance')">Romance</a></li>
                        <li><a href="thriller" @click.prevent="filterDecade('thriller')">Thriller</a></li>
                        <li><a href="all" @click.prevent="fetchAllMovies">All</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="row" id="movieLibrary">
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
        filterDecade(decade) {
            let url = `./admin/index.php?media=movies&adult=0&decade=${decade}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.movieList = data;
                })
                .catch((err) => {console.error(err)})
        },

        filterGenre(genre) {
            let url = `./admin/index.php?media=movies&adult=0&genre=${genre}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.movieList = data;
                })
                .catch((err) => {console.error(err)})
        },

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