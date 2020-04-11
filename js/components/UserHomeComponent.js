import MovieComponent from "./MovieComponent.js";
import TvComponent from "./TvComponent.js";
import MusicComponent from "./MusicComponent.js";
import MovieComponentChild from "./MovieComponentChild.js";
import TvComponentChild from "./TvComponentChild.js";
import MusicComponentChild from "./MusicComponentChild.js";
import DefaultComponent from "./DefaultComponent.js";

export default {
    name: "UserHomeComponent",

    props: ['currentuser'],

    template: `
    <section id="homeSection">
        <h2>Hi {{ currentuser.username }}! Choose a media category</h2>
        <div id="mediaSelectSection">
            <div id="mediaSelectHeader">
                <h4>Your all-in-one streaming platform for the decades.</h4>
                <p>Ready to flashback?</p>
            </div>
            <div v-if="currentuser.adult === '1'">
                <nav class="mediaSelectNav row justify-content-center">
                    <ul class="media-type">
                        <li v-for="media in mediaTypesAdult" @click="switchMedia(media.component)">
                            <span><img :src="'images/' + media.icon" :alt="media.alt"></span>
                            <span><h2>{{ media.name }}</h2></span>
                        </li>
                    </ul>
                </nav>
                <component class="mediaLibrary" :is="this.activeComponent"></component>
            </div>
            <div v-else>
                <nav class="mediaSelectNav" id="mediaSelectNavChild">
                    <ul class="media-type">
                        <li v-for="media in mediaTypesChild" @click="switchMedia(media.component)">
                            <span><img :src="'images/' + media.icon" :alt="media.alt"></span>
                            <span><h2>{{ media.name }}</h2></span>
                        </li>
                    </ul>
                </nav>
                <component :is="this.activeComponent"></component>
            </div>
            
        </div>
    </section>
    `,

    data: function() {
        return {
            activeComponent: DefaultComponent,

            mediaTypesAdult: [
                { name: "Movies", icon: "movies.svg", alt: "movie icon", component: MovieComponent,  },
                { name: "TV", icon: "tv.svg", alt: "tv icon", component: TvComponent },
                { name: "Music", icon: "music.svg", alt: "music icon", component: MusicComponent },
            ],

            mediaTypesChild: [
                { name: "Movies", icon: "movies.svg", alt: "movie icon", component: MovieComponentChild },
                { name: "TV", icon: "tv.svg", alt: "tv icon", component: TvComponentChild },
                { name: "Music", icon: "music.svg", alt: "music icon", component: MusicComponentChild },
            ],
        }
    },

    methods: {
        switchMedia(theComponent) {
            this.activeComponent = theComponent;
        },
    },

    components: {
        MovieComponent: MovieComponent,
        TvComponent: TvComponent,
        MusicComponent: MusicComponent
    }
}