import MovieComponent from "./layout/MovieComponent.js";
import TvComponent from "./layout/TvComponent.js";
import MusicComponent from "./layout/MusicComponent.js";

export default {
    template: `
    <section class="conainer-fluid" id="homeSection">
        <h1>Hello! Choose a category and decade</h1>
        <div class="accordion " id="accordionExample">
            <div class="card bg-primary border-dark">
                <div class="card-header" id="accordionHeading">
                <h4 class="card-title">Your all-in-one streaming platform for the decades.</h4>
                <p>Ready to flashback?</p>
                </div>
            </div>
            <div class="card border-dark">
                <div class="card-header btn btn-link" id="headingOne" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <img src="images/movies.svg">
                    <h2 class="card-title">Movies</h2>
                    <p>Sit back and relax. Enjoy one of the many movies available on Flashback by Roku</p>
                </div>

                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body row">
                        <MovieComponent v-for="movie in movieList" :livemovie="movie"></MovieComponent>
                    </div>
                </div>
            </div>
            <div class="card border-dark">
                <div class="card-header btn btn-link collapsed" id="headingTwo" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <img src="images/tv.svg">
                    <h2 class="card-title">TV</h2>
                    <p>Want something quick to watch? Find a TV show from one of these categories!</p>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div class="card-body row">
                        <TvComponent v-for="tv in tvList" :livetv="tv"></TvComponent>
                    </div>
                </div>
            </div>
            <div class="card border-dark">
                <div class="card-header btn btn-link collapsed" id="headingThree" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <img src="images/music.svg">
                    <h2 class="card-title">Music</h2>
                    <p>You can find the best tunes on Flashback by Roku. Browse and listen!</p>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div class="card-body row">
                        <MusicComponent v-for="music in musicList" :livemusic="music"></MusicComponent>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,

    data: function() {
        return {
            movieList: [],
            tvList: [],
            musicList: []
        }
    },

    created: function() {
        // this will fire when the component gets built
        this.fetchAllMovies();
        this.fetchAllTv();
        this.fetchAllMusic();
    },

    methods: {
        fetchAllMovies() {
            let url = `./includes/index.php?getMovies=true`;

            fetch(url)
            .then(res => res.json())
            .then(data => (this.movieList = data))
            .catch((err) => {console.error(err)})
        },

        fetchAllTv() {
            let url = `./includes/index.php?getTv=true`;

            fetch(url)
            .then(res => res.json())
            .then(data => (this.tvList = data))
            .catch((err) => {console.error(err)})
        },

        fetchAllMusic() {
            let url = `./includes/index.php?getMusic=true`;

            fetch(url)
            .then(res => res.json())
            .then(data => (this.musicList = data))
            .catch((err) => {console.error(err)})
        }
    },

    components: {
        MovieComponent: MovieComponent,
        TvComponent: TvComponent,
        MusicComponent: MusicComponent
    }
}