export default {
    props: ['livemovie'],

    template: `
        <div class="col-xs-6 col-lg-3" id="movieInfo">
        <router-link to="/player">
            <img :src="'images/' + livemovie.movies_cover">
            <h2 id="movieInfoTitle">{{ livemovie.movies_title }}</h2>
            <h3>{{ livemovie.movies_year}}</h3>
            <p>{{ livemovie.movies_description }}</p>
            <p>{{ livemovie.movies_runtime}}</p>
            </router-link>
        </div>
    `
}