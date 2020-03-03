import MovieComponent from "./MovieComponent.js";

export default {
    template: `
        <div class="accordion" id="accordionExample">
            <div class="card">
                <div class="card-header" id="headingOne">
                <h1>
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Movies
                    </button>
                </h1>
                </div>

                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body row">
                    <MovieComponent v-for="movie in movieList" :livemovie="movie"></MovieComponent>
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    TV
                    </button>
                </h2>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body row">
                    
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingThree">
                <h2 class="mb-0">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Music
                    </button>
                </h2>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div class="card-body row">
                    
                </div>
                </div>
            </div>
            </div>
    `,

    data: function() {
        return {
            movieList: []
        }
    },

    created: function() {
        // this will fire when the component gets built
        this.fetchAllMovies();
    },

    methods: {
        fetchAllMovies() {
            let url = `./includes/index.php?getMovies=true`;

            fetch(url)
            .then(res => res.json())
            .then(data => (this.movieList = data))
            .catch((err) => {console.error(err)})
        }
    },

    components: {
        MovieComponent: MovieComponent
    }
}