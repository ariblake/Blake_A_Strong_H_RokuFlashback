import Music from "./Music.js";

export default {
    name: "MusicComponentChild",

    template: `
    <section class="mediaLibrary">
        <div class="selectionHeader">
            <h1>Music</h1>
            <p>You can find the best tunes on Flashback by Roku. Browse and listen!</p>
            <nav class="filterNav">
                <h3>Filter More:</h3>
                <ul>
                    <li><h3>Genre</h3></li>
                    <li><h3>Decade</h3></li>
                </ul>
            </nav>
        </div>
        <div class="row" id="tvLibrary">
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
            let url = `./admin/index.php?media=music&adult=0`;

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