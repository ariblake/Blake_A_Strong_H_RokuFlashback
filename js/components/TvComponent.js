import Tv from "./Tv.js";

export default {
    name: "TvComponent",

    template: `
    <section class="mediaLibrary">
        <div class="selectionHeader">
            <h1>TV</h1>
            <p>Want something quick to watch? Find a TV show from one of these categories!</p>
            <nav class="filterNav">
                <div class="row filterOptions">
                    <h3>Filter More:</h3>
                    <a class="btn" role="button" data-toggle="collapse" href="#decadeNav" aria-expanded="false" aria-controls="decadeNav">Decade</a>
                </div>
                <div class="collapse row" id="decadeNav">
                    <ul>
                        <li><a href="50" @click.prevent="filterDecade('5')">50s</a></li>
                        <li><a href="60" @click.prevent="filterDecade('6')">60s</a></li>
                        <li><a href="70" @click.prevent="filterDecade('7')">70s</a></li>
                        <li><a href="80" @click.prevent="filterDecade('8')">80s</a></li>
                        <li><a href="90" @click.prevent="filterDecade('9')">90s</a></li>
                        <li><a href="all" @click.prevent="fetchAllTv">All</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="row">
            <Tv v-for="tv in tvList" :livetv="tv"></Tv>
        </div>
    </section>
    `,

    data: function() {
        return {
            tvList: [],
        }
    },

    created: function() {
        // this will fire when the component gets built
        this.fetchAllTv();
    },

    methods: {
        filterDecade(decade) {
            let url = `./admin/index.php?media=tv&adult=1&decade=${decade}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.tvList = data;
                })
                .catch((err) => {console.error(err)})
        },

        fetchAllTv() {
            let url = `./admin/index.php?media=tv&adult=1`;

            fetch(url)
            .then(res => res.json())
            .then(data => (this.tvList = data))
            .catch((err) => {console.error(err)})
        },
    },

    components: {
        Tv: Tv,
    }

}