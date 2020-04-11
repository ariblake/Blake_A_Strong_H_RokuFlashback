import Music from "./Music.js";

export default {
    name: "MusicComponent",

    template: `
    <section>
        <div class="selectionHeader music">
            <h1>Music</h1>
            <p>You can find the best tunes on Flashback by Roku. Browse and listen!</p>
            <nav class="filterNav">
                <div class="row filterOptions">
                    <h3>Filter More:</h3>
                    <a role="button" data-toggle="collapse" href="#decadeNav" aria-expanded="false" aria-controls="decadeNav"><h3>Decade</h3></a>
                </div>
                <div class="collapse row justify-content-center" id="decadeNav">
                    <ul>
                        <li><a href="50" @click.prevent="filterDecade('5')">50s</a></li>
                        <li><a href="60" @click.prevent="filterDecade('6')">60s</a></li>
                        <li><a href="70" @click.prevent="filterDecade('7')">70s</a></li>
                        <li><a href="80" @click.prevent="filterDecade('8')">80s</a></li>
                        <li><a href="90" @click.prevent="filterDecade('9')">90s</a></li>
                        <li><a href="all" @click.prevent="fetchAllMusic">All</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="row mediaLibrary">
            <Music v-for="music in musicList" :livemusic="music"></Music>
        </div>
    </section>
    `,

    data: function() {
        return {
            musicList: [],
        }
    },

    created: function() {
        // this will fire when the component gets built
        this.fetchAllMusic();
    },

    methods: {
        filterDecade(decade) {
            let url = `./admin/index.php?media=music&adult=1&decade=${decade}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.musicList = data;
                })
                .catch((err) => {console.error(err)})
        },

        fetchAllMusic() {
            let url = `./admin/index.php?media=music&adult=1`;

            fetch(url)
            .then(res => res.json())
            .then(data => (this.musicList = data))
            .catch((err) => {console.error(err)})
        },
    },

    components: {
        Music: Music,
    }

}