import MovieComponent from "./layout/MovieComponent.js";
import TvComponent from "./layout/TvComponent.js";
import MusicComponent from "./layout/MusicComponent.js";

export default {
    name: "UserHomeComponent",

    props: ['currentuser'],

    template: `
    <section class="conainer-fluid" id="homeSection">
        <h1>Hi {{ currentuser.username }}! Choose a category and decade</h1>
        <div id="decadeSelectSection">
            <div id="decadeSelectHeader">
                <h4>Your all-in-one streaming platform for the decades.</h4>
                <p>Ready to flashback?</p>
            </div>
            <div class="decadeSelect" id="movieDecade">
                <div class="decadeSelectHeader">
                    <img src="images/movies.svg" alt="movie icon">
                    <h2>Movies</h2>
                    <p>Sit back and relax. Enjoy one of the many movies available on Flashback by Roku</p>
                </div>
                <div class="decadeSelectOptions">
                    <div class="row">
                        <ul>
                            <li v-for="item in movieDecades" @click="navToMediaSelect">
                                <img :src="'images/' + item.image" alt="item.alt">
                                <div class="overlay">
                                    <h4>{{ item.name }}</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="decadeSelect" id="tvDecade">
                <div class="decadeSelectHeader">
                    <img src="images/tv.svg" alt="tv icon">
                    <h2>TV</h2>
                    <p>Want something quick to watch? Find a TV show from one of these categories!</p>
                </div>
                <div class="decadeSelectOptions">
                    <div class="row">
                    <ul>
                        <li v-for="item in tvDecades" @click="navToMediaSelect">
                            <img :src="'images/' + item.image" alt="item.alt">
                            <div class="overlay">
                                <h4>{{ item.name }}</h4>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>

            <div class="decadeSelect" id="musicDecade">
                <div class="decadeSelectHeader">
                    <img src="images/music.svg" alt="music icon">
                    <h2>Music</h2>
                    <p>You can find the best tunes on Flashback by Roku. Browse and listen!</p>
                </div>
                <div class="decadeSelectOptions">
                    <div class="row">
                    <ul>
                        <li v-for="item in musicDecades" @click="navToMediaSelect">
                            <img :src="'images/' + item.image" alt="item.alt">
                            <div class="overlay">
                                <h4>{{ item.name }}</h4>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
    `,

    data: function() {
        return {
            movieDecades: [
                { image: "movie50.jpg", name: "50s", alt: "Movies from the 50s" },
                { image: "movie60.jpg", name: "60s", alt: "Movies from the 60s" },
                { image: "movie70.jpg", name: "70s", alt: "Movies from the 70s" },
                { image: "movie80.jpg", name: "80s", alt: "Movies from the 80s" },
                { image: "movie90.jpg", name: "90s", alt: "Movies from the 90s" },
            ],
            tvDecades: [
                { image: "tv50.jpg", name: "50s", alt: "TV shows from the 50s" },
                { image: "tv60.jpg", name: "60s", alt: "TV shows from the 60s" },
                { image: "tv70.jpg", name: "70s", alt: "TV shows from the 70s" },
                { image: "tv80.jpg", name: "80s", alt: "TV shows from the 80s" },
                { image: "tv90.jpg", name: "90s", alt: "TV shows from the 90s" },
            ],
            musicDecades: [
                { image: "music50.jpg", name: "50s", alt: "music from the 50s" },
                { image: "music60.jpg", name: "60s", alt: "music from the 60s" },
                { image: "music70.jpg", name: "70s", alt: "music from the 70s" },
                { image: "music80.jpg", name: "80s", alt: "music from the 80s" },
                { image: "music90.jpg", name: "90s", alt: "music from the 90s" },
            ],
        }
    },

    methods: {
        navToMediaSelect() {
            this.$router.push({ name: "media", params: { currentuser: this.currentuser, decade: this.currentdecade } });
        }
    },

    components: {
        MovieComponent: MovieComponent,
        TvComponent: TvComponent,
        MusicComponent: MusicComponent
    }
}