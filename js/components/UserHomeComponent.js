import MovieComponent from "./MovieComponent.js";
import TvComponent from "./TvComponent.js";
import MusicComponent from "./MusicComponent.js";

export default {
    name: "UserHomeComponent",

    props: ['currentuser'],

    template: `
    <section class="container-fluid" id="homeSection">
        <h1>Hello {{ currentuser.username }}! Choose a category</h1>
        <div id="mediaSelectSection">
            <div id="mediaSelectHeader">
                <h4>Your all-in-one streaming platform for the decades.</h4>
                <p>Ready to flashback?</p>
            </div>
            <nav id="mediaSelectNav">
                <ul class="media-type">
                    <li v-for="media in mediaTypes" @click="switchMedia(media.component)">
                        <span><img :src="'images/' + media.icon" :alt="media.alt"></span>
                        <span><h2>{{ media.name }}</h2></span>
                    </li>
                </ul>
            </nav>
            <component :is="this.activeComponent"></component>
        </div>
    </section>
    `,

    data: function() {
        return {
            activeComponent: MovieComponent,
            mediaTypes: [
                { name: "Movies", icon: "movies.svg", alt: "movie icon", component: MovieComponent },
                { name: "TV", icon: "tv.svg", alt: "tv icon", component: TvComponent },
                { name: "Music", icon: "music.svg", alt: "music icon", component: MusicComponent },
            ],
            // movieList: [],
            // tvList: [],
            // musicList: []
        }
    },

    // created: function() {
    //     // this will fire when the component gets built
    //     this.fetchAllMovies();
    //     this.fetchAllTv();
    //     this.fetchAllMusic();
    // },

    methods: {
        switchMedia(theComponent) {
            this.activeComponent = theComponent;
        }
        // fetchAllMovies() {
        //     let url = `./includes/index.php?getMovies=true`;

        //     fetch(url)
        //     .then(res => res.json())
        //     .then(data => (this.movieList = data))
        //     .catch((err) => {console.error(err)})
        // },

        // fetchAllTv() {
        //     let url = `./includes/index.php?getTv=true`;

        //     fetch(url)
        //     .then(res => res.json())
        //     .then(data => (this.tvList = data))
        //     .catch((err) => {console.error(err)})
        // },

        // fetchAllMusic() {
        //     let url = `./includes/index.php?getMusic=true`;

        //     fetch(url)
        //     .then(res => res.json())
        //     .then(data => (this.musicList = data))
        //     .catch((err) => {console.error(err)})
        // }
    },

    components: {
        MovieComponent: MovieComponent,
        TvComponent: TvComponent,
        MusicComponent: MusicComponent
    }
}