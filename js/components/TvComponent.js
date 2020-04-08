import Tv from "./Tv.js";

export default {
    name: "TvComponent",

    template: `
    <section>
        <div class="selectionHeader">
            <h1>TV</h1>
            <p>Want something quick to watch? Find a TV show from one of these categories!</p>
        </div>
        <div class=" row">
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
        fetchAllTv() {
            let url = `./admin/index.php?getTv=true`;

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