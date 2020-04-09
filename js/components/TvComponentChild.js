import Tv from "./Tv.js";

export default {
    name: "TvComponentChild",

    template: `
    <section class="mediaLibrary">
        <div class="selectionHeader">
            <h1>TV</h1>
            <p>Want something quick to watch? Find a TV show from one of these categories!</p>
            <nav class="filterNav">
                <h3>Filter More:</h3>
                <ul>
                    <li><h3>Genre</h3></li>
                    <li><h3>Decade</h3></li>
                </ul>
            </nav>
        </div>
        <div class="row" id="tvLibrary">
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
            let url = `./admin/index.php?getChildTv=true`;

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