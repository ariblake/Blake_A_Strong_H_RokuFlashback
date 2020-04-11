import Music from "./Music.js";

export default {
    name: "MusicComponent",

    template: `
    <section class="mediaLibrary">
        <div class="selectionHeader">
            <h1>Music</h1>
            <p>You can find the best tunes on Flashback by Roku. Browse and listen!</p>
        </div>
        <div class="row">
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